// @license Copyright (C) 2015 Neovici AB - Apache 2 License
import { html, component } from '@pionjs/pion';
import { useTabs } from './use-tabs';
import { style, renderTab } from './render';
import './cosmoz-tab.js';
import '@polymer/iron-icon';
import '@polymer/iron-icons';
/**

@param {HTMLElement} host The host custom element
@return {TemplateResult}

`<cosmoz-tabs>` is a multi views container element that allow navigation between the views
using tabs.

### Styling

The following custom properties and mixins are available for styling:

Custom property                     | Description                 | Default
------------------------------------|-----------------------------|----------
`--cosmoz-tabs-selection-bar-color` | Color for the selection bar | `#00b4db`

*/
const Tabs = host => {
	const { tabs, onSlot, ...opts } = useTabs(host);

	return html`
		<style>${ style }</style>
		<div class="tabs" part="tabs" role="tablist">
			<slot name="tabs"></slot>
			${ tabs.map(renderTab(opts)) }
			<slot name="stats"></slot>
		</div>

		<div id="content" part="content">
			<slot @slotchange=${ onSlot }></slot>
		</div>
	`;
};

customElements.define('cosmoz-tabs', component(Tabs, {
	observedAttributes: ['selected', 'hash-param', 'no-resize']
}));
