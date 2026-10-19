import { useLayoutEffect, useMemo, useState } from '@pionjs/pion';
import type { TabElement } from './utils';

type Anchor = HTMLElement & { tab: TabElement };

const same = (a: TabElement[], b: TabElement[]) =>
	a.length === b.length && a.every((tab, i) => tab === b[i]);

/**
 * Reports the bar's tabs that wrap past the first row of the band. The
 * band is a wrapping, clipping row capped at its tallest tab, so a tab
 * on a later row is fully clipped. The marks only hide paint
 * (`visibility: hidden`), so the layout never moves under the observer.
 *
 * Every render re-arms the observation: the fresh initial deliveries
 * re-derive the state from the live geometry.
 */
export const useOverflow = (host: HTMLElement) => {
	const [overflowing, setOverflowing] = useState<TabElement[]>([]),
		state = useMemo<{
			band?: HTMLElement;
			observer?: IntersectionObserver;
			clipped: Map<Element, boolean>;
		}>(() => ({ clipped: new Map() }), []);

	useLayoutEffect(() => {
		const band =
			host.shadowRoot?.querySelector<HTMLElement>('.band') ?? undefined;

		if (state.band !== band) {
			state.observer?.disconnect();
			state.clipped.clear();
			state.band = band;
			state.observer = band
				? new IntersectionObserver(
						(entries) => {
							entries.forEach(
								({ target, boundingClientRect, intersectionRect }) =>
									state.clipped.set(
										target,
										boundingClientRect.height > 0 &&
											intersectionRect.height === 0,
									),
							);
							const anchors = [
								...band.querySelectorAll<Anchor>(':scope > .tab'),
							];
							const next = anchors
								.filter((anchor) => state.clipped.get(anchor))
								.map((anchor) => anchor.tab);
							setOverflowing((prev) => (same(prev, next) ? prev : next));
						},
						{ root: band, threshold: [0, 1] },
					)
				: undefined;
		}

		if (!band || !state.observer) {
			setOverflowing((prev) => (prev.length ? [] : prev));
			return;
		}

		const anchors = [...band.querySelectorAll<Anchor>(':scope > .tab')];

		band.style.maxHeight = '';
		band.style.maxHeight = `${Math.max(0, ...anchors.map((a) => a.offsetHeight))}px`;

		state.clipped.forEach((_, anchor) => {
			if (!anchors.includes(anchor as Anchor)) {
				state.clipped.delete(anchor);
				state.observer?.unobserve(anchor);
			}
		});
		anchors.forEach((anchor) => {
			state.observer?.unobserve(anchor);
			state.observer?.observe(anchor);
		});
	});

	useLayoutEffect(
		() => () => {
			state.observer?.disconnect();
			state.band = undefined;
		},
		[],
	);

	return overflowing;
};
