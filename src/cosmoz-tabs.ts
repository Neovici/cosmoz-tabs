// @license Copyright (C) 2015 Neovici AB - Apache 2 License
import { normalize } from '@neovici/cosmoz-tokens/normalize';
import { component, html } from '@pionjs/pion';
import './cosmoz-tab';
import { renderTab } from './render';
import { legacyStyles, type TabsVariant } from './styles';
import { useTabs, type CosmozTabsHost } from './use-tabs';

export type { TabsVariant };

export interface CosmozTabsElement extends CosmozTabsHost {
	variant?: TabsVariant;
	compactWidth?: boolean;
}

/**
 * @element cosmoz-tabs
 * @attr {string} selected - `name` of the selected tab
 * @attr {string} hash-param - hash parameter to bind selection
 * @attr {boolean} no-resize
 * @attr {('brand'|'underline')} variant
 * @attr {boolean} compact-width
 * @csspart tabs - tab bar container
 * @csspart tab - individual tab
 * @csspart content - content container
 */
const Tabs = (host: CosmozTabsElement) => {
	if (!host.getAttribute('variant')) {
		host.setAttribute('variant', 'brand');
	}

	const { tabs, onSlot, ...opts } = useTabs(host);

	return html`
		<div class="tabs" part="tabs" role="tablist">
			<slot name="tabs"></slot>
			${tabs.map(renderTab(opts))}
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
		],
		styleSheets: [normalize, legacyStyles],
	})
);
