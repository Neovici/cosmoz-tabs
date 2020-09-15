// @license Copyright (C) 2015 Neovici AB - Apache 2 License
import '@polymer/iron-icon/iron-icon';
import '@polymer/iron-icons/iron-icons';
import '@polymer/paper-icon-button/paper-icon-button';

import { TabbedBehavior } from './cosmoz-tabbed-behavior.js';
import { TabbedTemplateBehavior } from './cosmoz-tabbed-template-behavior.js';
import { mixinBehaviors } from '@polymer/polymer/lib/legacy/class';

import { badgeStyle } from './cosmoz-tabs-styles.js';
import './cosmoz-tab-card.js';

import { PolymerElement } from '@polymer/polymer/polymer-element';
import { html } from '@polymer/polymer/lib/utils/html-tag';

/**
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

@demo demo/tab.html
*/
class CosmozTab extends mixinBehaviors([TabbedBehavior, TabbedTemplateBehavior], PolymerElement) {
	/* eslint-disable-next-line max-lines-per-function */
	static get template() {
		return html`
		<style>
			:host {
				display: flex;
				position: relative;
				flex-direction: column;
				flex: 1 1 auto;
				max-height: 100%;
				@apply --cosmoz-tab;
			}

			:host([disabled]),
			:host([hidden]) {
				display: none !important;
			}

			:host([has-cards]) {
				flex-flow: row wrap;
			}

			${ badgeStyle }
		</style>

		<slot on-slotchange="_onSlotChange"></slot>
`;
	}

	/**
	 * Fired when `hidden`, `disabled`,'heading' or `badge` tab properties change.
	 *
	 * @event tab-property-changed
	 * @param {String} detail.property The property name
	 * @param {String|Number|Object|*} detail.value The property value
	 * @param {HTMLElement} detail.item The item that changed.
	 */

	static get is() {
		return 'cosmoz-tab';
	}
	static get properties() {
		return {
			/**
			 * If true, the item will be hidden.
			 */
			hidden: {
				type: Boolean,
				value: false,
				notify: true,
				reflectToAttribute: true
			},

			/**
			 *	If true, the item will be disabled.
			 */
			disabled: {
				type: Boolean,
				value: false,
				notify: true,
				reflectToAttribute: true
			},
			/**
			 * True if the item contains cards.
			 */
			hasCards: {
				type: Boolean,
				reflectToAttribute: true,
				readOnly: true,
				notify: true,
				value: false
			}

		};
	}

	static get observers() {
		return [
			'_notifyProperty("hidden", hidden)',
			'_notifyProperty("disabled", disabled)',
			'_notifyProperty("heading", heading)',
			'_notifyProperty("badge", badge)',
			'_notifyProperty("iconStyle", iconStyle)'
		];
	}

	constructor() {
		super();
		this._renderHandler = this.render.bind(this);
		this._onSlotChange = this._onSlotChange.bind(this);
	}

	connectedCallback() {
		super.connectedCallback();
		this.addEventListener('tab-first-select', this._renderHandler);
	}

	disconnectedCallback() {
		super.disconnectedCallback();
		this.removeEventListener('tab-first-select', this._renderHandler);
	}

	/**
	 * get invalid - True if the element is `hidden` or `disabled`.
	 * @returns {Boolean} True if invalid
	 */
	get invalid() {
		return this.disabled || this.hidden;
	}

	/**
	 * Observes changes to a property and dispatches a bubbling
	 * `tab-property-changed` event.
	 *
	 * @fires tab-property-changed
	 * @param {String} property The name of the changed property
	 * @param {String|Number|Object|*} value The value of the changed property.
	 * @return {void}

	 */
	_notifyProperty(property, value) {
		this.dispatchEvent(new CustomEvent('tab-property-changed', {
			bubbles: true,
			composed: true,
			detail: {
				property,
				value,
				item: this
			}
		}));
	}

	resizerShouldBeNotified(resizable) {
		return resizable.parentNode !== this.$.header;
	}

	_onSlotChange(e) {
		const hasCards = e.target.assignedElements().some(el => el.matches('cosmoz-tab-card'));
		this._setHasCards(hasCards);
	}

}
customElements.define(CosmozTab.is, CosmozTab);
