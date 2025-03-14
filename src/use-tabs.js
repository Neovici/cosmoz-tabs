import {
	useState,
	useEffect,
	useLayoutEffect,
	useMemo,
	useCallback,
} from '@pionjs/pion';
import { notifyProperty } from '@neovici/cosmoz-utils/hooks/use-notify-property';
import { useHashParam, link } from '@neovici/cosmoz-router/use-hash-param';
import { choose, collect, getName, isValid } from './utils';
import { compute } from 'compute-scroll-into-view';

const useTabSelectedEffect = (host, selectedTab) => {
		useEffect(() => {
			notifyProperty(host, 'selectedItem', selectedTab);
			if (selectedTab == null) {
				return;
			}
			const selected = getName(selectedTab);
			if (selected !== host.selected) {
				requestAnimationFrame(() => notifyProperty(host, 'selected', selected));
			}
			selectedTab.toggleAttribute('is-selected', true);
			const eventOpts = { composed: true };
			if (!selectedTab._active) {
				selectedTab.dispatchEvent(
					new CustomEvent('tab-first-select', eventOpts),
				);
				selectedTab._active = true;
			}
			selectedTab.dispatchEvent(new CustomEvent('tab-select', eventOpts));
			if (!host.noResize) {
				requestAnimationFrame(() => window.dispatchEvent(new Event('resize')));
			}
			return () => {
				selectedTab.toggleAttribute('is-selected', false);
				selectedTab._fallbackFor = undefined;
			};
		}, [selectedTab]);
	},
	useAutoScroll = (host, selectedTab, tabs) => {
		useLayoutEffect(() => {
			const el = host.shadowRoot.querySelector('a[aria-selected]');
			if (!el) {
				return;
			}
			const rid = requestAnimationFrame(() =>
				compute(el, {
					block: 'nearest',
					inline: 'center',
					boundary: el.parentElement,
					scrollMode: 'if-needed',
				}).forEach(({ el, top, left }) =>
					el.scroll({ top, left, behavior: 'smooth' }),
				),
			);
			return () => cancelAnimationFrame(rid);
		}, [selectedTab, tabs]);
	},
	useTabs = (host) => {
		const { selected, hashParam } = host,
			[tabs, setTabs] = useState([]),
			[param] = useHashParam(hashParam),
			selection =
				hashParam == null || (param == null && selected != null)
					? selected
					: param,
			selectedTab = useMemo(() => choose(tabs, selection), [tabs, selection]);

		useTabSelectedEffect(host, selectedTab);

		useEffect(() => {
			const onTabAlter = (e) => {
				e.stopPropagation();
				const { target: tab } = e;
				if (
					selectedTab != null &&
					selectedTab._fallbackFor === tab &&
					isValid(tab)
				) {
					selectedTab._fallbackFor = undefined;
					host.selected = getName(tab);
				}
				setTabs((prev) => prev.slice());
			};
			host.addEventListener('cosmoz-tab-alter', onTabAlter);
			return () => host.removeEventListener('cosmoz-tab-alter', onTabAlter);
		}, [selectedTab]);

		useAutoScroll(host, selectedTab, tabs);

		const href = useCallback(
			(tab) => (isValid(tab) ? link(hashParam, getName(tab)) : undefined),
			[hashParam],
		);

		return {
			tabs,
			selectedTab,
			onSlot: useCallback(
				({ target }) => requestAnimationFrame(() => setTabs(collect(target))),
				[],
			),
			onSelect: useCallback((e) => {
				if (e.button !== 0 || e.metaKey || e.ctrlKey) {
					return;
				}
				const { tab } = e.currentTarget;
				notifyProperty(host, 'selected', getName(tab));

				if (hashParam == null) {
					return;
				}

				e.preventDefault();
				window.history.pushState({}, '', href(tab));
				requestAnimationFrame(() =>
					window.dispatchEvent(new CustomEvent('hashchange')),
				);
			}, []),
			href,
		};
	};

export { useTabs };
