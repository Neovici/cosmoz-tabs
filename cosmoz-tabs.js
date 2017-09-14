// @license Copyright (C) 2015 Neovici AB - Apache 2 License

(function () {
	'use strict';

	Polymer({
		is: 'cosmoz-tabs',

		properties: {
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

		observers: [
			'_routeHashParamsChanged(_routeHashParams.*, hashParam)',
			'_selectedItemChanged(selectedItem, hashParam)'
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
			return attrForSelected && (item[Polymer.CaseMap.dashToCamelCase(this.attrForSelected)] || item.getAttribute(attrForSelected)) || index;
		},

		/**
		 * Computes link for a item.
		 *
		 * @param  {HTMLElement} item  The item to compute link for
		 * @param  {Object} hashParam The `hashParam` property
		 * @return {String}  The computed link
		 */
		_computeItemLink: function (item, hashParam = this.hashParam) {
			var params = {};
			params[hashParam] = this._hashParamForItem(item);
			return this.$.location.getRouteUrl({}, params);
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
			return isNaN(value) ? value : value.toString();

		},

		/**
		 * Observes `_routeHashParams` changes
		 * and sets selection based on `hashParam`.
		 *
		 * @param {Object} changes  changes to `_routeHashParams` property
		 * @param {String} hashParam The `hashParam` property
		 * @return {void}
		 */
		_routeHashParamsChanged: function (changes, hashParam) {
			if (! (changes === undefined || hashParam === undefined)){
				var path = ['_routeHashParams', hashParam],
					value = this.get(path),
					selection = this.items.filter(function (item){
						return this._hashParamForItem(item) === value;
					}, this).map(function (item){
						return this.attrForSelected ? this._valueForItem(item) : this.items.indexOf(item);
					}, this)[0];

				if (selection !== undefined) {
					this.select(selection);
				}
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
		_selectedItemChanged: function (item = this.selectedItem, hashParam){
			if (! (item === undefined || hashParam === undefined)){
				var path = ['_routeHashParams', hashParam],
					current = this.get(path),
					value = item ? this._hashParamForItem(item) : null;

				if (current !== value) {
					this.set(path, value);
				}
			}
		}
	});
}());
