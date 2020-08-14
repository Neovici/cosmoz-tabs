// @license Copyright (C) 2015 Neovici AB - Apache 2 License
import '@webcomponents/shadycss/entrypoints/apply-shim';

import '@polymer/paper-tabs/paper-tab';
import '@polymer/paper-tabs/paper-tabs';
import '@neovici/cosmoz-page-router/cosmoz-page-location';

import { PolymerElement } from '@polymer/polymer/polymer-element';
import { html } from '@polymer/polymer/lib/utils/html-tag';
import { dashToCamelCase } from '@polymer/polymer/lib/utils/case-map';

import { TabbableBehavior } from './cosmoz-tabbable-behavior.js';
import { mixinBehaviors } from '@polymer/polymer/lib/legacy/class';

import './cosmoz-tab.js';
import { badgeStyle } from './cosmoz-tabs-styles.js';

/**
`<cosmoz-tabs>` is a multi views (or pages) container element that allow navigation between the views
using tabs or an accordion.

### Styling

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-tabs-selection-bar-color` | Color for the selection bar | `#00b4db`

@demo demo/index.html
@demo demo/router.html#/#tab=tab1 Router Demo
*/
class CosmozTabs extends mixinBehaviors(TabbableBehavior, PolymerElement) {
	/* eslint-disable-next-line max-lines-per-function */
	static get template() {
		return html`
			<style>
				:host {
					position: relative;
					display: flex;
					flex-direction: column;
				}

				#tabs {
					background-color: #fff;
					--paper-tabs-selection-bar-color: var(--cosmoz-tabs-selection-bar-color, #00b4db);
					margin-bottom: 3px;
					box-shadow: var(--cosmoz-shadow-2dp, var(--shadow-elevation-2dp_-_box-shadow, 0 2px 4px 0 #e5e5e5));
				}

				.heading {
					font-family: sans-serif;
					@apply --paper-font-common-base;
					font-size: 1.14em;
					font-weight: 300;
					text-overflow: ellipsis;
					white-space: nowrap;
					margin-right: 1px;
					padding: 0;
					overflow: hidden;
				}

				.icon {
					height: 13px;
					width: 13px;
					margin: 0 10px 0 10px;
					flex-shrink: 0;
					display: none;
					@apply --cosmoz-tabs-icon;
				}

				paper-tab.iron-selected .heading {
					font-weight : 400;
				}

				paper-tab[disabled] {
					opacity: 0.65;
				}

				.link {
					display: flex;
					flex-direction: row;
					align-items: center;
					justify-content: center;
					text-decoration: none;
					color: inherit;
					/* TODO(accessibility): focused tab should be outlined */
					outline: 0;
				}

				:host(:not([accordion])) #pages {
					display: flex;
					flex-direction: column;
					flex: 1 1 auto;
					max-height: 100%;
					max-height: calc(100% - 51px);
				}

				paper-tab[hidden],
				:host(:not([accordion])) #pages ::slotted(:not([is-selected])) {
					display: none !important;
				}
				${ badgeStyle }
			</style>

			<cosmoz-page-location id="location" route-hash="{{ _routeHashParams }}"></cosmoz-page-location>

			<template is="dom-if" if="[[ !accordion ]]" restamp="">
				<paper-tabs id="tabs" selected="{{ selected }}" attr-for-selected="tab-attribute" no-slide="" on-iron-activate="_resetInvalidFallbacks">
					<template is="dom-repeat" items="[[ items ]]" as="tab" index-as="tabIndex">
						<paper-tab hidden$="[[ tab.hidden ]]" disabled="[[ tab.disabled ]]"
							tab-attribute$="[[ _computeItemTabAttribute(tab, tabIndex, attrForSelected) ]]">
							<a href$="[[ _computeItemLink(tab, hashParam, _routeHashParams.*) ]]" tabindex="-1" class="link" on-click="_onLinkClick">
								<iron-icon class="icon" icon="[[ _computeIcon(tab, selectedItem.isSelected) ]]"
									style$="[[ _computeIconStyle(tab, tab.iconStyle) ]]"></iron-icon>
								<h1 class="heading">[[ tab.heading ]]</h1>
								<div class="badge" hidden$="[[ !tab.badge ]]" title$="[[ tab.badge ]]">[[ tab.badge ]]</div>
							</a>
						</paper-tab>
					</template>
				</paper-tabs>
			</template>

			<div id="pages">
				<slot></slot>
			</div>
		`;
	}

	static get is() {
		return 'cosmoz-tabs';
	}

	static get properties() {
		return {
			/**
			 * If you want to use an attribute value or property of an element for
			 * `selected` instead of the index, set this to the name of the attribute
			 * or property. Hyphenated values are converted to camel case when used to
			 * look up the property of a selectable element. Camel cased values are
			 * *not* converted to hyphenated values for attribute lookup. It's
			 * recommended that you provide the hyphenated form of the name so that
			 * selection works in both cases. (Use `attr-or-property-name` instead of
			 * `attrOrPropertyName`.)
			 */
			attrForSelected: {
				type: String,
				value: 'name'
			},

			/**
			 * Only items that match this CSS selector are selectable.
			 */
			selectable: {
				type: String,
				value: 'cosmoz-tab'
			},

			/**
			 * The hash parameter to use for selecting an item.
			 */
			hashParam: {
				type: String
			},

			/**
			 * The route hash parameters extracted by the `cosmoz-page-location`
			 * element.
			 */
			_routeHashParams: {
				type: Object,
				notify: true
			}
		};
	}

	constructor() {
		super();
		this._tabPropertyChangedHandler = this._tabPropertyChanged.bind(this);
	}

	connectedCallback() {
		super.connectedCallback();
		this.addEventListener('tab-property-changed', this._tabPropertyChangedHandler);
	}

	disconnectedCallback() {
		super.disconnectedCallback();
		this.removeEventListener('tab-property-changed', this._tabPropertyChangedHandler);
	}

	static get observers() {
		return [
			'_routeHashParamsChanged(_routeHashParams.*, hashParam, items)',
			'_updateFallbackSelection(attrForSelected, items)',
			'_selectedItemChanged(selected, hashParam)',
			'_updateInvalidSelection(selectedItem, fallbackSelection)'
		];
	}

	/**
		 * Computes icon for a tab.
		 *
		 * @param	 {HTMLElement} tab			 The tab to compute icon for
		 * @return {String}								 The icon to be used
		 */
	_computeIcon(tab) {
		return tab.getIcon();
	}

	/**
		 * Computes CSS style for the color of a tab.
		 *
		 * @param	 {HTMLElement} tab	The tab to compute icon style for
		 * @return {String}						The CSS style for the color of the tab
		 */
	_computeIconStyle(tab) {
		return tab.getIconStyle();
	}

	/**
		 * Computes the attribute used by paper-tabs to select an item.
		 *
		 * @param	 {HTMLElement} item The item to compute attribute for
		 * @param	 {Number} index	 The item's index
		 * @param	 {type} attrForSelected The `attrForSelected` value
		 * @return {String} The computed attribute
		 */
	_computeItemTabAttribute(item, index, attrForSelected) {
		return attrForSelected ? item[dashToCamelCase(this.attrForSelected)] || item.getAttribute(attrForSelected) : index;
	}

	/**
		 * Computes link for a item.
		 *
		 * @param	 {HTMLElement} item	 The item to compute link for
		 * @param	 {Object} hashParam The `hashParam` property
		 * @return {String}	 The computed link
		 */
	_computeItemLink(item, hashParam) {
		if (!hashParam) {
			return;
		}
		const param = this._valueForItem(item),
			route = this.$.location.getRoute();

		route.hash[hashParam] = param === 0 ? String(param) : param;

		return this.$.location.getRouteUrl(route);
	}

	/**
		 * Observes `_routeHashParams` changes
		 * and sets selection based on `hashParam`.
		 *
		 * @param {Object} changes	changes to `_routeHashParams` property
		 * @param {String} hashParam The `hashParam` property
		 * @param {String} items The `items` property
		 * @return {void}
		 */
	_routeHashParamsChanged(changes, hashParam, items) {
		if (!changes || !hashParam || !items || !items.length) {
			return;
		}

		this._updateSelectedFromHashParams();
	}

	/**
	 * Reads the hash params and updates the selected tab.
	 *
	 * The hash param can be configured using the `hashParam` property.
	 * Invalid values are ignored.
	 * @return {void}
	 */
	_updateSelectedFromHashParams() {
		const value = this._normalizeValue(this.get(['_routeHashParams', this.hashParam])),
			item = this._valueToItem(value),
			invalid = item == null;

		if (invalid || this._normalizeValue(this.selected) === value) {
			return;
		}

		this.select(value);
	}
	/**
		 * Observers 'selectedItem' changes and updates
		 *	location hash depending on 'hashParam'.
		 *
		 * @param	 {String|Number} selected		The selected item
		 * @param	 {Object} hashParam The hash param
		 * @return {void}
		 */
	_selectedItemChanged(selected, hashParam) {
		if (!(hashParam && this._routeHashParams && this.items.length)) {
			return;
		}
		const item = this._valueToItem(selected),
			path = ['_routeHashParams', hashParam],
			hashValue = this._normalizeValue(this.get(path), Object),
			value = this._normalizeValue(selected);

		if (hashValue === value || item && item.__invalidFallbackFor) {
			return;
		}
		// eslint-disable-next-line no-nested-ternary
		this.set(path, value === undefined ? null : value === 0 ? String(value) : value);
	}

	/**
		 * Observe changes to `attrForSelected` and `items`
		 * and update `fallback` to point to the first item.
		 *
		 * @param	 {String} attr The attrForSelected property
		 * @param	 {Array} items The items property
		 * @returns {void}
		 */
	_updateFallbackSelection(attr, items) {
		if (this._selection) {
			const selection = this._selection.get();
			if (selection && selection.length || !items.length) {
				return;
			}
		}

		const expected = attr ? this._valueForItem(items[0]) : '0',
			fallback = this.fallbackSelection;
		if (expected != null && (fallback == null || fallback !== expected && fallback !== '')) {
			this.fallbackSelection = expected;
		}
	}

	/**
		 * Listens to `tab-property-changed` event on a tab and
		 * notifies about the change.
		 *
		 * @param	 {Event} e The tab-property-changed event
		 * @param	 {Event} e.detail.item The item that changed
		 * @param	 {Event} e.detail.property The name of the changed property
		 * @param	 {Event} e.detail.value The new value of the changed property
		 * @return {void}
		 */
	_tabPropertyChanged(e) {
		e.stopPropagation();

		if (this.accordion || !(this.items && this.items.length)) {
			return;
		}

		const {
				item, property, value
			} = e.detail,
			index = this.items.indexOf(item);

		if (index < 0 || !property || value === undefined) {
			return;
		}

		this.notifyPath('items.' + index + '.' + property, value);

		if (property !== 'hidden' && property !== 'disabled') {
			return;
		}
		this._updateInvalidSelection(item);
	}

	_updateInvalidSelection(item) {
		if (!item || !this.fallbackSelection) {
			return;
		}
		const selected = this.selectedItem;
		if (item.invalid && item === selected) {
			const fallback = this._valueToItem(this.fallbackSelection);
			fallback.__invalidFallbackFor = item;
			if (fallback !== item) {
				this.select(this.fallbackSelection);
			}
		} else if (!item.invalid && selected && item === selected.__invalidFallbackFor) {
			selected.__invalidFallbackFor = null;
			this.select(this._valueForItem(item));
		}
	}

	_resetInvalidFallbacks() {
		this.items.forEach(item => {
			item.__invalidFallbackFor = null;
		});
	}

	_onLinkClick(event) {
		// Ignore right click, click with meta or ctrl key
		if (event.button !== 0 || event.metaKey || event.ctrlKey) {
			return null;
		}
		event.preventDefault();
	}

	resizerShouldNotify(resizable) {
		return resizable.tagName === 'PAPER-TABS' || resizable.isSelected;
	}

	resizerShouldBeNotified(resizable) {
		return this.items.indexOf(resizable) > -1 && resizable.isSelected;
	}
}
customElements.define(CosmozTabs.is, CosmozTabs);
