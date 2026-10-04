import { useLayoutEffect, useState } from '@pionjs/pion';

/**
 * Which tabs does the bar not have room for? The track wraps: a tab
 * that does not fit lands below the first row — the layout is the
 * answer. The cycle is measure (marks off, so everything takes part in
 * the wrap), classify by row, mark (the marked leave the layout). A
 * width change reruns it; the mark's own height collapse is ignored via
 * the width guard.
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

		const mark = (next: Set<HTMLElement>) => {
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

		const apply = () => {
			// measure with the marks OFF: clear them, reflow synchronously,
			// then read the wrap
			current.forEach((tab) => {
				if (tab.hasAttribute('overflowing')) {
					tab.removeAttribute('overflowing');
				}
			});
			// forced reflow: the unmark above is visible to this read
			const top0 = current[0].getBoundingClientRect().top;
			const next = new Set(
				current.filter(
					(tab) =>
						!tab.hidden &&
						Math.abs(tab.getBoundingClientRect().top - top0) > 0.5,
				),
			);
			mark(next);
		};

		let lastWidth = root.getBoundingClientRect().width;
		const observer = new ResizeObserver(() => {
			const w = root.getBoundingClientRect().width;
			if (w === lastWidth) {
				return; // the mark cycle's own height collapse
			}
			lastWidth = w;
			apply();
		});
		observer.observe(root);
		apply();

		return () => {
			observer.disconnect();
			current.forEach((tab) => tab.removeAttribute('overflowing'));
		};
	}, deps);

	return overflowing;
};
