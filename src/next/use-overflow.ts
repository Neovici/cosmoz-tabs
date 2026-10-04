import { useLayoutEffect, useState } from '@pionjs/pion';

/**
 * Classifies the track's tabs against the clip band: a tab whose box lands
 * past the first row is marked (`overflowing`, styled `visibility: hidden`
 * in `tab.css.ts`) and offered in the overflow menu.
 *
 * The band's height is a css constant per size/variant (the item box is
 * fully token-derived), so the classification is a pure read:
 * `intersectionRect.height === 0` against the clip root. The marks hide
 * paint only, so the layout never moves under the observer and a tab that
 * flows back into the band is reported as it happens.
 *
 * Deliveries are deltas - only the tabs whose intersection changed are in
 * an entry batch - so the per-target state accumulates in a map and the
 * marks flush from it, never rebuilt from one batch.
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

		// a hidden row-2 tab is already non-intersecting, so re-slotting
		// it out of the track changes nothing the observer sees; the
		// slot's own assignment change is what reports the departure

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

		return () => {
			observer.disconnect();
			slot?.removeEventListener('slotchange', onSlotChange);
		};
	}, deps);

	return overflowing;
};
