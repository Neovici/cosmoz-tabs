import { useLayoutEffect, useState } from '@pionjs/pion';

export interface Overflow {
	visible: Set<HTMLElement>;
	overflowing: Set<HTMLElement>;
	hidden: Set<HTMLElement>;
}

const empty = (): Overflow => ({
	visible: new Set<HTMLElement>(),
	overflowing: new Set<HTMLElement>(),
	hidden: new Set<HTMLElement>(),
});

const sameSet = (a: Set<HTMLElement>, b: Set<HTMLElement>) =>
	a.size === b.size && [...a].every((el) => b.has(el));

const same = (a: Overflow, b: Overflow) =>
	sameSet(a.visible, b.visible) &&
	sameSet(a.overflowing, b.overflowing) &&
	sameSet(a.hidden, b.hidden);

// a parent may have been hidden while its children were observed, which marks them all as `hidden`
// once it becomes visible again the observer only reports the children that intersect the root, so the others stay stuck in `hidden`
const reconcile = ({ overflowing, hidden }: Overflow) =>
	hidden.forEach((el) => {
		if (el.getBoundingClientRect().height === 0) {
			return;
		}
		hidden.delete(el);
		overflowing.add(el);
	});

// how much of an item may be cut off before it counts as overflowing, in px.
const TOLERANCE = 1;

const observe = (
	root: HTMLElement,
	getItems: () => HTMLElement[],
	report: (next: Overflow) => void
) => {
	const state = empty(),
		pending = new Set<HTMLElement>();

	const observer = new IntersectionObserver(
		(entries) => {
			const { visible, overflowing, hidden } = state;
			entries.forEach((entry) => {
				const el = entry.target as HTMLElement;
				pending.delete(el);
				visible.delete(el);
				overflowing.delete(el);
				hidden.delete(el);

				const clipped =
					entry.boundingClientRect.width - entry.intersectionRect.width;

				if (entry.boundingClientRect.height === 0) {
					hidden.add(el);
				} else if (
					clipped <= TOLERANCE &&
					entry.intersectionRect.height !== 0
				) {
					visible.add(el);
				} else {
					overflowing.add(el);
				}
			});

			reconcile(state);

			if (pending.size === 0) {
				report({
					visible: new Set(visible),
					overflowing: new Set(overflowing),
					hidden: new Set(hidden),
				});
			}
		},
		// the observer only re-reports on a threshold crossing, so these have to be
		// dense near 1: an item drifting from slightly clipped to barely clipped
		// stays between two coarse thresholds and keeps a stale classification —
		// hidden in the bar and listed in the menu while it very nearly fits
		{ root, threshold: [0, 0.25, 0.5, 0.75, 0.9, 0.95, 0.99, 1] }
	);

	getItems().forEach((el) => {
		pending.add(el);
		observer.observe(el);
	});

	return () => observer.disconnect();
};

/**
 * Classifies the items inside a clipping container as visible, overflowing or hidden
 *
 * @param getRoot   resolves the clipping container (available from the first layout effect on)
 * @param getItems  resolves the items to observe
 * @param deps      re-observe when these change (item set, variant, …)
 */
export const useOverflow = (
	getRoot: () => HTMLElement | null | undefined,
	getItems: () => HTMLElement[],
	deps: unknown[]
): Overflow => {
	const [state, setState] = useState<Overflow>(empty);

	useLayoutEffect(() => {
		const root = getRoot();
		if (!root) {
			return;
		}

		return observe(root, getItems, (next) =>
			setState((prev) => (same(prev, next) ? prev : next))
		);
	}, deps);

	return state;
};
