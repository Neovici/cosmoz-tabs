import { useLayoutEffect, useState } from '@pionjs/pion';

/**
 * Which tabs does the bar not have room for? The track clips to its
 * first row: tabs that land on a later row are marked (`overflowing` -
 * styled `visibility: hidden` in `tab.css.ts`) and offered in the
 * overflow menu.
 *
 * The band's height is a css constant per size/variant (the item box is
 * fully token-derived), so the classification is a pure read:
 * `intersectionRect.height === 0` against the clip root - no rect reads
 * in JS, no reflow, no unmark cycle: the marks hide paint only, the
 * geometry never moves under them, and a tab that flows back into the
 * band is reported as it happens.
 *
 * Deliveries are deltas - only the tabs whose intersection changed are
 * in an entry batch - so the per-target state accumulates in a map and
 * the marked set is read from it, never rebuilt from one batch.
 */
export const useOverflow = (
	track: { current?: HTMLElement | null },
	tabs: () => HTMLElement[],
	deps: unknown[],
): Set<HTMLElement> => {
	const [overflowing, setOverflowing] = useState<Set<HTMLElement>>(
		() => new Set(),
	);

	useLayoutEffect(() => {
		const root = track.current;
		const current = tabs();
		if (!root || current.length === 0) {
			return;
		}

		const clipped = new Map<HTMLElement, boolean>();

		const flush = () => {
			const next = new Set(current.filter((tab) => clipped.get(tab) === true));
			current.forEach((tab) => {
				const on = next.has(tab);
				if (on === tab.hasAttribute('overflowing')) {
					return;
				}
				if (on) {
					tab.setAttribute('overflowing', '');
				} else {
					tab.removeAttribute('overflowing');
				}
			});
			setOverflowing((prev) => {
				if (prev.size === next.size && [...next].every((el) => prev.has(el))) {
					return prev;
				}
				return next;
			});
		};

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					const tab = entry.target as HTMLElement;
					clipped.set(
						tab,
						entry.boundingClientRect.height > 0 &&
							entry.intersectionRect.height === 0,
					);
				});
				flush();
			},
			{ root, threshold: [0, 1] },
		);

		// a tab re-slotted out of the track may not change intersection
		// (a hidden row-2 tab was already non-intersecting) - the slot's
		// own assignment change is what reports the departure; its mark
		// goes with it
		const slot = root.querySelector('slot');
		const onSlotChange = () => {
			const assigned = new Set(slot?.assignedElements({ flatten: true }));
			clipped.forEach((_, tab) => {
				if (!assigned.has(tab)) {
					clipped.set(tab, false);
				}
			});
			flush();
		};
		slot?.addEventListener('slotchange', onSlotChange);

		current.forEach((tab) => {
			clipped.set(tab, false);
			observer.observe(tab);
		});
		// tabs added later (slot changes) join the next effect run

		return () => {
			observer.disconnect();
			slot?.removeEventListener('slotchange', onSlotChange);
		};
	}, deps);

	return overflowing;
};
