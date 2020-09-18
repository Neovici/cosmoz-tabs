// @license Copyright (C) 2015 Neovici AB - Apache 2 License
import './cosmoz-tab-card.js';
import {
	html,
	component
} from 'haunted';
import { useTab } from './lib/use-tab';

/**

@param {HTMLElement} host The host custom element
@demo demo/tab.html
@return {TemplateResult}

`<cosmoz-tab>` is the container for a tab. It should be used in conjunction with
`cosmoz-tabs`.

### Styling
The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--cosmoz-tab` | Mixin applied to the tab | `{}`
`--cosmoz-tab-header` | Mixin applied to the tab header | `{}`
`--cosmoz-tab-header-selected` | Mixin applied to the header when the tab is selected | `{}`
`--cosmoz-tab-header-accordion` | Mixin applied to the header when the tab is in accordion mode | `{}`
`--cosmoz-tab-header-accordion-selected` | Mixin applied to the header when the tab is selected in accordion mode | `{}`
*/
const CosmozTab = host => {
	const { onSlot } = useTab(host);
	return html`
		<style>
			:host {
				display: flex;
				position: relative;
				flex-direction: column;
				flex: 1 1 auto;
				max-height: 100%;
			}

			:host([disabled]),
			:host([hidden]) {
				display: none !important;
			}

			:host([has-cards]) {
				flex-flow: row wrap;
			}
		</style>

		<slot @slotchange=${ onSlot }></slot>
`;
};

customElements.define('cosmoz-tab', class extends component(CosmozTab, {
	observedAttributes: [
		'hidden',
		'disabled',
		'heading',
		'badge',
		'icon',
		'icon-style',
		'selected-icon',
		'is-selected'
	]
}) {
	// TODO: drop this when haunted better handles native properties
	set hidden(val) {
		super.hidden = val;
		this._scheduler.update();
	}
	get hidden() {
		return super.hidden;
	}
});
