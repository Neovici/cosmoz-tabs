// @license Copyright (C) 2015 Neovici AB - Apache 2 License


import '@webcomponents/shadycss/entrypoints/apply-shim';
import '@polymer/iron-flex-layout/iron-flex-layout';
import '@polymer/iron-flex-layout/iron-flex-layout-classes';
import '@polymer/iron-icon/iron-icon';
import '@polymer/iron-icons/iron-icons';
import '@polymer/paper-icon-button/paper-icon-button';

import { TabbableBehavior } from './cosmoz-tabbable-behavior.js';
import { TabbedBehavior } from './cosmoz-tabbed-behavior.js';
import { TabbedTemplateBehavior } from './cosmoz-tabbed-template-behavior.js';
import { mixinBehaviors } from '@polymer/polymer/lib/legacy/class';

import './cosmoz-tab-card.js';
import './cosmoz-tabs-styles.js';

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
class CosmozTab extends mixinBehaviors([TabbedBehavior, TabbableBehavior, TabbedTemplateBehavior], PolymerElement) {
	/* eslint-disable-next-line max-lines-per-function */
	static get template() {
		return html`
		<style include="iron-flex iron-positioning cosmoz-tabs-styles">

			:host {
				display: block;
				@apply --cosmoz-tab;
			}

			:host(:not([accordion])),
			:host(:not([accordion])) #content {
				@apply --layout-vertical;
				@apply --layout-flex-auto;
				max-height: 100%;
			}

			:host(:not([accordion])[disabled]),
			:host([hidden]) {
				display: none !important;
			}

			:host([accordion][disabled]) #header {
				opacity: 0.65;
				pointer-events: none;
			}
			/* do not display tab header when in accordion mode and using cards */
			:host(:not([accordion])) > #header,
			:host([accordion][has-cards]) > #header {
				display: none;
			}

			:host > #header {
				cursor: pointer;
				@apply --layout-horizontal;
				@apply --layout-center;
				@apply --cosmoz-tab-header;
				position: relative;
			}

			:host([is-selected]) > #header {
				@apply --cosmoz-tab-header-selected;
			}

			:host([accordion]) > #header {
				border-bottom: 1px solid #e2e2e2;
				@apply --cosmoz-tab-header-accordion;
			}

			:host([is-selected][accordion]) > #header {
				@apply --cosmoz-tab-header-accordion-selected;
			}

			.heading {
				font-family: sans-serif;
				@apply --paper-font-common-base;
				font-size: 17px;
				font-weight: 300;
				text-overflow: ellipsis;
				white-space: nowrap;
				margin-right: 1px;
				padding: 0;
				overflow: hidden;
				@apply --layout-inline-flex;
			}

			:host([accordion]) .heading {
				font-weight: 400;
			}

			:host(:not([accordion])[is-selected]) .heading {
				font-weight: 500;
			}

			.icon {
				height: 13px;
				width: 13px;
				margin: 0 10px 0 20px;
				flex-shrink: 0;
			}

			:host([accordion]) .icon {
				margin: 0 9px;
			}

			#content {
				position: relative;
			}

			:host(:not([accordion])) #content {
				will-change: transform;
			}

			:host([has-cards]:not([accordion])) #content {
				@apply --layout-horizontal;
				@apply --layout-wrap;
			}

			:host(:not([has-cards])[accordion]) #content {
				transition-duration: var(--cosmoz-tab-transition-duration, 300ms);
				overflow: hidden;
				transform: translate3d(0,0,0);
				backface-visibility: hidden;
			}

			:host(:not([has-cards])[accordion]:not([is-selected]):not([animating])) #content {
				display: none;
			}

			paper-icon-button {
				margin-left: auto;
			}
		</style>

		<!--
			header will displayed only in accordion mode.
			Otherwise, the tab header is rendered by cosmoz-tabs using paper-tabs
			-->
		<div id="header" on-tap="_onToggleTap">
			<iron-icon class="icon" icon="[[ getIcon(isSelected, accordion, icon, selectedIcon) ]]" style$="[[ getIconStyle(iconColor) ]]"></iron-icon>
			<h1 class="heading">[[ heading ]]</h1>
			<div class="badge" hidden$="[[ !badge ]]" title$="[[ badge ]]">[[ badge ]]</div>
			<paper-icon-button icon="[[ _computeOpenedIcon(isSelected) ]]"></paper-icon-button>
		</div>

		<div id="content">
			<slot></slot>
		</div>
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
			 * Only items that match this CSS selector are selectable.
			 */
			selectable: {
				type: String,
				value: 'cosmoz-tab-card'
			},

			/**
			 * True if the item contains cards.
			 */
			hasCards: {
				type: Boolean,
				reflectToAttribute: true,
				readOnly: true,
				notify: true,
				value: false,
				computed: '_computeHasCards(items)'
			}
		};
	}

	static get observers() {
		return [
			'_notifyProperty("hidden", hidden)',
			'_notifyProperty("disabled", disabled)',
			'_notifyProperty("heading", heading)',
			'_notifyProperty("badge", badge)',
			'_notifyProperty("iconStyle", iconStyle)',
			'_onAccordionChangedRender(accordion)'
		];
	}

	constructor() {
		super();
		this._onResizeHandler = this._onResize.bind(this);
		this._renderHandler = this.render.bind(this);
	}

	connectedCallback() {
		super.connectedCallback();
		this.addEventListener('iron-resize', this._onResizeHandler);
		this.addEventListener('tab-first-select', this._renderHandler);
	}

	disconnectedCallback() {
		super.disconnectedCallback();
		this.removeEventListener('iron-resize', this._onResizeHandler);
		this.removeEventListener('tab-first-select', this._renderHandler);
	}
	/**
	 * get invalid - True if the element is `hidden` or `disabled`.
	 * @returns {Boolean}	 True if invalid
	 */
	get invalid() {
		return this.disabled || this.hidden;
	}

	get animated() {
		return this.accordion && !this.hasCards;
	}

	_onResize() {
		// HACK(pasleq): Can't explain why, but under Chrome 62, we've experienced disappearing content
		// the tab content is scolled. This hack seems to fix this issue.
		const scrollTop = this.$.content.scrollTop;
		this.$.content.scrollTop = 0;
		this.$.content.scrollTop = scrollTop;
	}

	/**
	 * Computes `hasCards` depending on `items`.
	 *
	 * @param	 {Array} items Array of selectable items
	 * @returns {Boolean} True if items is not empty
	 */
	_computeHasCards(items = this.items) {
		return items && items.length > 0;
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

	_onAccordionChangedRender(accordion) {
		if (accordion) {
			this.render();
		}
	}
}
customElements.define(CosmozTab.is, CosmozTab);
