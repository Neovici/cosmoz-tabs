import { link, useHashParam } from '@neovici/cosmoz-router/use-hash-param';
import { notifyProperty } from '@neovici/cosmoz-utils/hooks/use-notify-property';
import {
	useCallback,
	useEffect,
	useLayoutEffect,
	useMemo,
	useState,
} from '@pionjs/pion';
import { compute } from 'compute-scroll-into-view';
import { choose, collect, getName, isValid, type TabElement } from './utils';

export interface CosmozTabsHost extends HTMLElement {
	selected?: string;
	selectedItem?: HTMLElement;
	hashParam?: string;
	noResize?: boolean;
}

const useTabSelectedEffect = (
	host: CosmozTabsHost,
	selectedTab?: TabElement,
) => {
	useEffect(() => {
		notifyProperty(host, 'selectedItem', selectedTab);
		if (selectedTab == null) {
			return;
		}
		const selected = getName(selectedTab);
		if (selected !== host.selected) {
			requestAnimationFrame(() =>
				notifyProperty(host, 'selected', selected ?? undefined),
			);
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
};

const useAutoScroll = (
	host: CosmozTabsHost,
	selectedTab?: TabElement,
	tabs?: TabElement[],
) => {
	useLayoutEffect(() => {
		const el = host.shadowRoot?.querySelector('a[aria-selected=true]');
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
};

const useTabs = (host: CosmozTabsHost) => {
	const { selected, hashParam } = host,
		[tabs, setTabs] = useState<TabElement[]>([]),
		[param] = useHashParam(hashParam),
		selection =
			hashParam == null || (param == null && selected != null)
				? selected
				: param,
		selectedTab = useMemo(() => choose(tabs, selection), [tabs, selection]);

	useTabSelectedEffect(host, selectedTab);

	useEffect(() => {
		const onTabAlter = (e: Event) => {
			e.stopPropagation();
			const tab = e.target as TabElement;
			if (
				selectedTab != null &&
				selectedTab._fallbackFor === tab &&
				isValid(tab)
			) {
				selectedTab._fallbackFor = undefined;
				host.selected = getName(tab) ?? undefined;
			}
			setTabs((prev) => prev.slice());
		};
		host.addEventListener('cosmoz-tab-alter', onTabAlter);
		return () => host.removeEventListener('cosmoz-tab-alter', onTabAlter);
	}, [selectedTab]);

	useAutoScroll(host, selectedTab, tabs);

	const href = useCallback(
		(tab: TabElement) =>
			isValid(tab) && hashParam != null
				? link(hashParam, getName(tab))
				: undefined,
		[hashParam],
	);

	return {
		tabs,
		selectedTab,
		onSlot: useCallback(
			({ target }: { target: HTMLSlotElement }) =>
				requestAnimationFrame(() => setTabs(collect(target))),
			[],
		),
		onSelect: useCallback(
			(e: MouseEvent) => {
				if (e.button !== 0 || e.metaKey || e.ctrlKey) {
					return;
				}
				const { tab } = e.currentTarget as unknown as { tab: TabElement };
				notifyProperty(host, 'selected', getName(tab) ?? undefined);

				if (hashParam == null) {
					return;
				}

				e.preventDefault();
				window.history.pushState({}, '', href(tab));
				requestAnimationFrame(() =>
					window.dispatchEvent(new CustomEvent('hashchange')),
				);
			},
			[hashParam, href],
		),
		href,
	};
};

export { useTabs };
