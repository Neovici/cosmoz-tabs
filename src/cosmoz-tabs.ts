// @license Copyright (C) 2015 Neovici AB - Apache 2 License
import { normalize } from '@neovici/cosmoz-tokens/normalize';
import { component, html } from '@pionjs/pion';
import type { TemplateResult } from 'lit-html';
import './cosmoz-tab';
import { closeMenu, plain, renderOverflowMenu } from './next/overflow-menu';
import { overflowMenuStyles } from './next/styles';
import { renderMenuTab, renderTab } from './render';
import { legacyStyles, type TabsSize, type TabsVariant } from './styles';
import { useOverflow } from './use-overflow';
import { useTabs, type CosmozTabsHost } from './use-tabs';

export type { TabsSize, TabsVariant };

export interface CosmozTabsElement extends CosmozTabsHost {
	variant?: TabsVariant;
	size?: TabsSize;
	compactWidth?: boolean;
	moreLabel?: string;
}

/**
 * @element cosmoz-tabs
 * @attr {string} selected - `name` of the selected tab
 * @attr {string} hash-param - hash parameter to bind selection
 * @attr {boolean} no-resize
 * @attr {('brand'|'underline'|'segmented')} variant
 * @attr {('sm')} size - omit for the default size; sm trims the item's box on
 * both axes, and thins the segmented track's ring to match
 * @attr {boolean} compact-width
 * @attr {string} more-label - label of the overflow menu trigger, defaults to a translated `More`
 * @csspart tabs - tab bar container
 * @csspart tab - individual tab
 * @csspart more - overflow menu
 * @csspart more-button - overflow menu trigger
 * @csspart menu - overflow menu popover
 * @csspart menu-tab - a tab row in the overflow menu
 * @csspart content - content container
 *
 * Tabs that do not fit the bar's row move to the overflow menu. A custom
 * `header` renders the tabs itself and gets no overflow menu.
 */
export const Tabs = (
	host: CosmozTabsElement,
	header?: (tabs: TemplateResult) => TemplateResult,
) => {
	if (!host.getAttribute('variant')) {
		host.setAttribute('variant', 'brand');
	}

	const { tabs, onSlot, ...opts } = useTabs(host),
		overflowing = useOverflow(host);

	return html`
		${header
			? header(html`${tabs.map(renderTab(opts))}`)
			: html`<div class="tabs" part="tabs">
					<slot name="tabs"></slot>
					<div class="band" role="tablist">
						${tabs.map(renderTab({ ...opts, overflowing }))}
					</div>
					${renderOverflowMenu({
						items: overflowing.map(renderMenuTab(opts)),
						overflows: overflowing.length > 0,
						active:
							opts.selectedTab != null &&
							overflowing.includes(opts.selectedTab),
						label: host.moreLabel,
						onItemClick: (e) => {
							if (plain(e) && (e.target as Element).closest('.menu-tab')) {
								closeMenu(e.target);
							}
						},
					})}
					<slot name="stats"></slot>
				</div>`}

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
		styleSheets: [normalize, legacyStyles, overflowMenuStyles],
	}),
);
