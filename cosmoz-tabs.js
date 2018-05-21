// @license Copyright (C) 2015 Neovici AB - Apache 2 License

(function () {
	'use strict';

	Polymer({
		is: 'cosmoz-tabs',

		properties: {
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
		},

		behaviors: [
			Cosmoz.TabbableBehavior
		],

		listeners: {
			'tab-property-changed': '_tabPropertyChanged'
		},

		observers: [
			'_routeHashParamsChanged(_routeHashParams.*, hashParam, items)',
			'_updateFallbackSelection(attrForSelected, items)',
			'_selectedItemChanged(selected, hashParam)',
			'_updateInvalidSelection(selectedItem, fallbackSelection)'
		],

		/**
		 * Computes icon for a tab.
		 *
		 * @param  {HTMLElement} tab       The tab to compute icon for
		 * @return {String}                The icon to be used
		 */
		_computeIcon(tab) {
			return tab.getIcon();
		},

		/**
		 * Computes CSS style for the color of a tab.
		 *
		 * @param  {HTMLElement} tab	The tab to compute icon style for
		 * @return {String}           The CSS style for the color of the tab
		 */
		_computeIconStyle(tab) {
			return tab.getIconStyle();
		},

		/**
		 * Computes the attribute used by paper-tabs to select an item.
		 *
		 * @param  {HTMLElement} item The item to compute attribute for
		 * @param  {Number} index  The item's index
		 * @param  {type} attrForSelected The `attrForSelected` value
		 * @return {String} The computed attribute
		 */
		_computeItemTabAttribute(item, index, attrForSelected) {
			return attrForSelected ? item[Polymer.CaseMap.dashToCamelCase(this.attrForSelected)] || item.getAttribute(attrForSelected) : index;
		},

		/**
		 * Computes link for a item.
		 *
		 * @param  {HTMLElement} item  The item to compute link for
		 * @param  {Object} hashParam The `hashParam` property
		 * @return {String}  The computed link
		 */
		_computeItemLink(item, hashParam) {
			if (!hashParam) {
				return;
			}
			let param = this._valueForItem(item),
				route = this.$.location.getRoute();

			route.hash[hashParam] = param === 0 ? String(param) : param;

			return this.$.location.getRouteUrl(route);
		},

		/**
		 * Observes `_routeHashParams` changes
		 * and sets selection based on `hashParam`.
		 *
		 * @param {Object} changes  changes to `_routeHashParams` property
		 * @param {String} hashParam The `hashParam` property
		 * @param {String} items The `items` property
		 * @return {void}
		 */
		_routeHashParamsChanged(changes, hashParam, items) {
			if (!(changes && hashParam && items.length) || this._hashReady) {
				return;
			}
			this._hashReady = true;
			const value = this._normalizeValue(this.get(['_routeHashParams', hashParam])),
				item = this._valueToItem(value),
				invalid = item == null;

			if (invalid || this._normalizeValue(this.selected) === value) {
				return;
			}

			this.select(value);
		},

		/**
		 * Observers 'selectedItem' changes and updates
		 *  location hash depending on 'hashParam'.
		 *
		 * @param  {String|Number} selected   The selected item
		 * @param  {Object} hashParam The hash param
		 * @return {void}
		 */
		_selectedItemChanged(selected, hashParam) {
			if (!(hashParam && this._routeHashParams && this.items.length) || !this._hashReady) {
				return;
			}
			const item = this._valueToItem(selected),
				path = ['_routeHashParams', hashParam],
				hashValue = this._normalizeValue(this.get(path), Object),
				value = this._normalizeValue(selected);

			if (hashValue === value || item && item.__invalidFallbackFor) {
				return;
			}
			this.set(path, value === undefined ? null : value === 0 ? String(value) : value);
		},

		/**
		 * Observe changes to `attrForSelected` and `items`
		 * and update `fallback` to point to the first item.
		 *
		 * @param  {String} attr The attrForSelected property
		 * @param  {Array} items The items property
		 * @returns {void}
		 */
		_updateFallbackSelection(attr, items) {
			const selection = this._selection.get();
			if (selection && selection.length || !items.length) {
				return;
			}

			const expected = attr ? this._valueForItem(items[0]) : '0',
				fallback = this.fallbackSelection;
			if (fallback == null || fallback !== expected && fallback !== '') {
				this.fallbackSelection = expected;
			}
		},

		/**
		 * Listens to `tab-property-changed` event on a tab and
		 * notifies about the change.
		 *
		 * @param  {Event} e The tab-property-changed event
		 * @param  {Event} e.detail.item The item that changed
		 * @param  {Event} e.detail.property The name of the changed property
		 * @param  {Event} e.detail.value The new value of the changed property
		 * @return {void}
		 */
		_tabPropertyChanged(e) {
			e.stopPropagation();

			if (this.accordion || !(this.items && this.items.length)) {
				return;
			}

			const {item, property, value} = e.detail,
				index = this.items.indexOf(item);

			if (index < 0 || !property || value === undefined) {
				return;
			}

			this.notifyPath('items.' + index + '.' + property, value);

			if (property !== 'hidden' && property !== 'disabled') {
				return;
			}
			this._updateInvalidSelection(item);
		},

		_updateInvalidSelection(item) {
			if (!item || !this.fallbackSelection) {
				return;
			}
			const selected = this.selectedItem;
			if (item.invalid && item === selected) {
				const fallback = this._valueToItem(this.fallbackSelection);
				fallback.__invalidFallbackFor = item;
				this.select(this.fallbackSelection);
			} else if (!item.invalid && selected && item === selected.__invalidFallbackFor) {
				selected.__invalidFallbackFor = null;
				this.select(this._valueForItem(item));
			}
		},

		_resetInvalidFallbacks() {
			this.items.forEach(item => item.__invalidFallbackFor = null);
		},

		_onLinkClick(event) {
			// Ignore right click, click with meta or ctrl key
			if (event.button !== 0 || event.metaKey || event.ctrlKey) {
				return null;
			}
			event.preventDefault();
		},

		resizerShouldNotify(resizable) {
			return resizable.is === 'paper-tabs' || resizable.isSelected;
		},

		resizerShouldBeNotified(resizable) {
			return this.items.indexOf(resizable) > -1 && resizable.isSelected;
		}
	});
}());
