// @license Copyright (C) 2015 Neovici AB - Apache 2 License
import { normalize } from '@neovici/cosmoz-tokens/normalize';
import { component, html, useCallback, useMemo, useRef } from '@pionjs/pion';
import { ref } from 'lit-html/directives/ref.js';
import './cosmoz-tab';
import {
	DEFAULT_MORE_LABEL,
	renderOverflowMenu,
	useCloseWhenEmpty,
} from './overflow-menu';
import { renderMenuItem, renderTab } from './render';
import { legacyStyles, type TabsVariant } from './styles';
import { useOverflow } from './use-overflow';
import { useTabs, type CosmozTabsHost } from './use-tabs';
import type { TabElement } from './utils';

export type { TabsVariant };

export interface CosmozTabsElement extends CosmozTabsHost {
	variant?: TabsVariant;
	compactWidth?: boolean;
	moreLabel?: string;
}

/**
 * @element cosmoz-tabs
 * @attr {string} selected - `name` of the selected tab
 * @attr {string} hash-param - hash parameter to bind selection
 * @attr {boolean} no-resize
 * @attr {('brand'|'underline')} variant
 * @attr {boolean} compact-width
 * @attr {string} more-label - label of the overflow menu trigger, defaults to `More`
 * @csspart tabs - tab bar container
 * @csspart items - clipping container holding the tabs
 * @csspart tab - individual tab
 * @csspart more - overflow menu
 * @csspart more-button - overflow menu trigger
 * @csspart menu - overflow menu popover
 * @csspart menu-item - a tab rendered inside the overflow menu
 * @csspart content - content container
 */
const Tabs = (host: CosmozTabsElement) => {
	if (!host.getAttribute('variant')) {
		host.setAttribute('variant', 'brand');
	}

	const { tabs, onSlot, ...opts } = useTabs(host),
		{ selectedTab } = opts,
		items = useRef<HTMLElement>(),
		setItems = useCallback((el?: Element) => {
			items.current = el as HTMLElement | undefined;
		}, []);

	const { overflowing } = useOverflow(
		() => items.current,
		() => [...(items.current?.querySelectorAll<HTMLElement>('.tab') ?? [])],
		[tabs]
	);

	// the tab data behind each overflowing anchor, in tab order
	const overflowed = useMemo(() => {
		const set = new Set(
			[...overflowing].map((el) => (el as { tab?: TabElement }).tab)
		);
		return tabs.filter((tab) => set.has(tab));
	}, [overflowing, tabs]);

	const overflowedSet = useMemo(() => new Set(overflowed), [overflowed]);

	useCloseWhenEmpty(host, overflowed.length > 0);

	return html`
		<div class="tabs" part="tabs">
			<slot name="tabs"></slot>
			<div class="items" part="items" role="tablist" ${ref(setItems)}>
				${tabs.map(renderTab({ ...opts, overflowing: overflowedSet }))}
			</div>
			${renderOverflowMenu({
				items: overflowed.map(renderMenuItem(opts)),
				overflows: overflowed.length > 0,
				active: selectedTab != null && overflowedSet.has(selectedTab),
				label: host.getAttribute('more-label') ?? DEFAULT_MORE_LABEL,
			})}
			<slot name="stats"></slot>
		</div>

		<div id="content" part="content">
			<slot @slotchange=${onSlot}></slot>
		</div>
	`;
};

customElements.define(
	'cosmoz-tabs',
	component(Tabs, {
		observedAttributes: [
			'selected',
			'hash-param',
			'no-resize',
			'variant',
			'compact-width',
			'more-label',
		],
		styleSheets: [normalize, legacyStyles],
	})
);
