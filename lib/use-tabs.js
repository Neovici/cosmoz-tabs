import {
	useState, useEffect, useMemo, useCallback
} from 'haunted';
import { notifyProperty } from '@neovici/cosmoz-utils/lib/hooks/use-notify-property';
import {
	useHashParam, link
} from './use-hash-param';
import {
	choose, collect, getName, isValid
} from './utils';

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
				selectedTab.dispatchEvent(new CustomEvent('tab-first-select', eventOpts));
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

	useTabs = host => {
		const {
				selected, hashParam
			} = host,
			[tabs, setTabs] = useState([]),
			param = useHashParam(hashParam),
			selection = hashParam == null || param == null && selected != null ? selected : param,
			selectedTab = useMemo(() => choose(tabs, selection), [tabs, selection]);

		useTabSelectedEffect(host, selectedTab);

		useEffect(() => {
			const onTabAlter = e => {
				e.stopPropagation();
				const { target: tab } = e;
				if (selectedTab != null && selectedTab._fallbackFor === tab && isValid(tab)) {
					selectedTab._fallbackFor = undefined;
					host.selected = getName(tab);
				}
				setTabs(prev => prev.slice());
			};
			host.addEventListener('cosmoz-tab-alter', onTabAlter);
			return () => host.removeEventListener('cosmoz-tab-alter', onTabAlter);
		}, [selectedTab]);

		const href = useCallback(tab => isValid(tab) ? link(hashParam, getName(tab)) : undefined, [hashParam]);

		return {
			tabs,
			selectedTab,
			onSlot: useCallback(({ target }) => requestAnimationFrame(() => setTabs(collect(target))), []),
			onSelect: useCallback(e => {
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
				// TODO: drop this when we drop iron-location/cosmoz-page-location
				requestAnimationFrame(() => window.dispatchEvent(new CustomEvent('location-changed')));
				requestAnimationFrame(() => window.dispatchEvent(new CustomEvent('hash-changed')));
			}, []),
			href
		};
	};

export { useTabs };
