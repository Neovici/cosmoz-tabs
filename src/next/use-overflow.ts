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

const reconcile = ({ overflowing, hidden }: Overflow) =>
	hidden.forEach((el) => {
		if (el.getBoundingClientRect().height === 0) {
			return;
		}
		hidden.delete(el);
		overflowing.add(el);
	});

const TOLERANCE = 1;

const observe = (
	root: HTMLElement,
	select: (root: HTMLElement) => HTMLElement[],
	report: (next: Overflow) => void,
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
		{ root, threshold: [0, 0.25, 0.5, 0.75, 0.9, 0.95, 0.99, 1] },
	);

	const start = () => {
		observer.disconnect();
		pending.clear();

		const items = select(root);
		items.forEach((el) => {
			pending.add(el);
			observer.observe(el);
		});

		if (items.length === 0) {
			report(empty());
		}
	};

	let frame = 0;
	const resized = new ResizeObserver(() => {
		cancelAnimationFrame(frame);
		frame = requestAnimationFrame(start);
	});
	resized.observe(root);

	start();

	return () => {
		cancelAnimationFrame(frame);
		resized.disconnect();
		observer.disconnect();
	};
};

/**
 * Classifies the items inside a clipping container as visible, overflowing or hidden
 *
 * @param root    ref to the clipping container (filled in by the first layout effect)
 * @param select  picks the items to observe out of that container; keep it at module level
 * @param deps    re-observe when these change (item set, variant, …)
 */
export const useOverflow = (
	root: { current?: HTMLElement | null },
	select: (root: HTMLElement) => HTMLElement[],
	deps: unknown[],
): Overflow => {
	const [state, setState] = useState<Overflow>(empty);

	useLayoutEffect(() => {
		const el = root.current;
		if (!el) {
			return;
		}

		return observe(el, select, (next) =>
			setState((prev) => (same(prev, next) ? prev : next)),
		);
	}, deps);

	return state;
};
