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
			'_selectedItemChanged(selected, hashParam)',
			'_updateFallbackSelection(attrForSelected, items)',
			'_updateInvalidSelection(selectedItem)'
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
			if (!hashParam) {
				return;
			}

			var params = {},
				param = this._valueForItem(item);

			params[hashParam] = param === 0 ? String(param) : param;
			return this.$.location.getRouteUrl({}, params);
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
				hashValue = this.get(path),
				normalized = this._normalizeValue(hashValue),
				item = this._valueToItem(normalized),
				invalid = item == null || item.disabled || item.hidden;

			if (invalid || this._normalizeValue(this.selected) === normalized) {
				return;
			}

			this.select(normalized);
		},

		/**
		 * Observers 'selectedItem' changes and updates
		 *  location hash depending on 'hashParam'.
		 *
		 * @param  {String|Number} selected   The selected item
		 * @param  {Object} hashParam The hash param
		 * @return {void}
		 */
		_selectedItemChanged: function (selected, hashParam) {
			if (selected === undefined || selected != null && this._valueToItem(selected) == null || !(hashParam && this._routeHashParams)) {
				return;
			}

			var path = ['_routeHashParams', hashParam],
				hashValue = this._normalizeValue(this.get(path), Object),
				value = this._normalizeValue(selected);

			if (hashValue === value) {
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
		_updateFallbackSelection: function (attr, items) {
			var selection = this._selection.get(),
				fallback = this.fallbackSelection,
				expected;

			if (selection && selection.length || !items.length) {
				return;
			}

			expected = attr ? this._valueForItem(items[0]) : '0';

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
		_tabPropertyChanged: function (e) {
			e.stopPropagation();

			if (this.accordion || !(this.items && this.items.length)) {
				return;
			}

			var detail = e.detail,
				item = detail.item,
				property = detail.property,
				value = detail.value,
				index = this.items.indexOf(item);

			if (index < 0 || !property || value === undefined) {
				return;
			}

			this.notifyPath('items.' + index + '.' + property, value);
		_updateInvalidSelection: function (selectedItem = this.selectedItem) {
			if (!selectedItem || !selectedItem.hidden && !selectedItem.disabled || !this.fallbackSelection) {
				return;
			}
			this.select(this.fallbackSelection);
		}
	});
}());
