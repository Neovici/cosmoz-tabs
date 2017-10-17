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
			 * The attribute used for selecting an item by `hashParam`.
			 */
			attrForHashParam: {
				type: String,
			},

			/**
			 * The route hash parameters extracted by the `cosmoz-page-location`
			 * element.
			 */
			_routeHashParams: {
				type: Object,
				notify: true
			},
			/**
			 * The route hash string extracted by the `cosmoz-page-location`
			 * element.
			 */
			_routeHash: {
				type: String,
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
			'_selectedItemChanged(selectedItem, hashParam)',
			'_updateFallbackSelection(attrForSelected, items)'
		],

		/**
		 * Computes icon for a tab.
		 *
		 * @param  {HTMLElement} tab       The tab to compute icon for
		 * @return {String}                The icon to be used
		 */
		_computeIcon: function (tab) {
			return tab.getIcon();
		},

		/**
		 * Computes CSS style for the color of a tab.
		 *
		 * @param  {HTMLElement} tab	The tab to compute icon style for
		 * @return {String}           The CSS style for the color of the tab
		 */
		_computeIconStyle: function (tab) {
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
		_computeItemTabAttribute: function (item, index, attrForSelected) {
			return attrForSelected ? item[Polymer.CaseMap.dashToCamelCase(this.attrForSelected)] || item.getAttribute(attrForSelected) : index;
		},

		/**
		 * Computes link for a item.
		 *
		 * @param  {HTMLElement} item  The item to compute link for
		 * @param  {Object} hashParam The `hashParam` property
		 * @return {String}  The computed link
		 */
		_computeItemLink: function (item, hashParam) {
			if (hashParam) {
				var params = {};
				params[hashParam] = this._hashParamForItem(item);
				return this.$.location.getRouteUrl({}, params);
			}
		},

		/**
		 *  Computes hash parameter value for a item.
		 *
		 * @param  {HTMLElement} item The item to compute value for
		 * @return {String}  The hash parameter value
		 */
		_hashParamForItem(item) {
			if (this.attrForHashParam) {
				return this._valueForItem(item, this.attrForHashParam);
			}
			var value =  this.attrForSelected ? this._valueForItem(item) : this.items.indexOf(item);
			return isNaN(value) ? value : String(value);

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
		_routeHashParamsChanged: function (changes, hashParam, items) {
			if (!(changes && hashParam && items.length)) {
				return;
			}

			var path = ['_routeHashParams', hashParam],
				value = this.get(path),
				selection = this.items.filter(function (item) {
					return this._hashParamForItem(item) === String(value);
				}, this).map(function (item) {
					return this.attrForSelected ? this._valueForItem(item) : this.items.indexOf(item);
				}, this)[0];

			if (selection !== undefined) {
				this.select(selection);
			}
		},

		/**
		 * Observers 'selectedItem' changes and updates
		 *  location hash depending on 'hashParam'.
		 *
		 * @param  {HTMLElement} item      The selected item
		 * @param  {Object} hashParam The hash param
		 * @return {void}
		 */
		_selectedItemChanged: function (item = this.selectedItem, hashParam) {
			if (!(item && hashParam)) {
				return;
			}
			var path = ['_routeHashParams', hashParam],
				current = this.get(path),
				value = item ? this._hashParamForItem(item) : null;

			if (current !== value) {
				this.set(path, value);
			}
		},

		/**
		 * Observe changes to `attrForSelected` and `items`
		 * and update `fallback` to point to the first item.
		 *
		 * @param  {String} attr The attrForSelected property
		 * @param  {Array} items The items property
		 * @returns {void}
		 */
		_updateFallbackSelection: function (attr, items) {
			var selection = this._selection.get(),
				fallback = this.fallbackSelection,
				expected;

			selection = selection && selection.length;

			if (items.length && !selection) {
				expected = attr ? this._valueForItem(items[0]) : '0';
				if (fallback === null || fallback !== expected && fallback !== '') {
					this.fallbackSelection = expected;
				}
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
		_tabPropertyChanged: function (e) {
			e.stopPropagation();

			if (!this.accordion && this.items && this.items.length) {
				var detail = e.detail,
					item = detail.item,
					property = detail.property,
					value = detail.value,
					index = this.items.indexOf(item);

				if (index > -1 && property && value !== undefined) {
					this.notifyPath('items.' + index + '.' + property, value);
				}
			}
		}
	});
}());
