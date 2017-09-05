// @license Copyright (C) 2015 Neovici AB - Apache 2 License

(function () {
	'use strict';

	Polymer({
		is: 'cosmoz-tabs',

		properties: {
			/**
			 * True if the element has class `fit` or `flex`.
			*/
			flex: {
				type: Boolean,
				computed: '_computeFlex(class)'
			},

			/**
			 * This is a CSS selector string.  If this is set, only items that match the CSS selector
			 * are selectable.
			 */
			selectable: {
				type: String,
				value: 'cosmoz-tab'
			},

			/**
			 * The hash parameter to use for selecting a tab.
			 */
			hashParam: {
				type: String
			},

			attrForHashParam: {
				type: String,
			},

			/**
			 * The route has parameters extracted by the `cosmoz-page-location`
			 * element.
			 */
			_routeHashParams: {
				type: Object,
				notify: true
			},
			_routeHash: {
				type: String,
				notify: true
			}
		},

		behaviors: [
			Cosmoz.TabsBehavior
		],

		observers: [
			'_routeHashParamsChanged(_routeHashParams.*, hashParam)',
			'_selectedItemChanged(selectedItem, hashParam)'
		],

		/**
		 * Computes the `flex` property.
		 *
		 * @param  {String} classesString Space separated list of element's classes
		 * @return {Boolean} Computed `flex` property
		 */
		_computeFlex: function (classesString) {
			var classes = classesString.split(' ');
			if (classes.indexOf('fit') > -1) {
				this.toggleClass('flex', true);
				return true;
			}
			return classes.indexOf('flex') > -1;
		},

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

		_computeTabAttr: function (tab, index, attrForSelected) {
			return attrForSelected && (tab[Polymer.CaseMap.dashToCamelCase(this.attrForSelected)] || tab.getAttribute(attrForSelected)) || index;
		},

		_computeTabLink: function (tab, hashParam = this.hashParam) {
			// if (hashParam) {
			// 	var params = {};
			// 	params[hashParam] = this.attrForHashParam ? this._valueForItem(tab, this.attrForHashParam) : this.items.indexOf(tab);
			// 	return this.$.location.getRouteUrl({}, params);
			// }
		},

		/**
		 * Observes `_routeHashParams` changes
		 * and sets `selectedTabId` based on `hashParam`.
		 *
		 * @return {void}
		 */
		_routeHashParamsChanged: function (changes, hashParam = this.hashParam) {
			if (hashParam) {
				var path = ['_routeHashParams', hashParam],
					value = this.get(path),
					selection = this.items.filter(function (item, i){
						return  (this.attrForHashParam ? this._valueForItem(item, this.attrForHashParam) : i.toString()) === value;
					}, this).map(function (item){
						return this.attrForSelected ? this._valueForItem(item) : this.items.indexOf(item);
					}, this)[0];
				console.log('route change', value);
				if (selection !== undefined) {
					this.select(selection);
				}

			}
		},

		_selectedItemChanged: function (item = this.selected, hashParam = this.hashParam){
			if (hashParam) {
				var path = ['_routeHashParams', hashParam],
					current = this.get(path),
					value = item
						? this.attrForHashParam ? this._valueForItem(item, this.attrForHashParam) : this.items.indexOf(item)
						: null;

				if (current !== value) {
					console.log('selected changed SET', current, value);
					this.set(path, !isNaN(value) ? value.toString() : value);
				}
			}
		}
	});
}());
