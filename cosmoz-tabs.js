// @license Copyright (C) 2015 Neovici AB - Apache 2 License

(function () {
	'use strict';

	Polymer({
		is: 'cosmoz-tabs',

		properties: {

			/**
			 * Indicates wether the tabs should be displayed using an accordion.
			 * You can bind this property to a value that changes based on the
			 * available witdth.
			 */
			accordion: {
				type: Boolean,
				value: false,
				notify: true,
				reflectToAttribute: true
			},

			activateEvent: {
				type: String,
				value: null
			},

			selectable: {
				type: String,
				value: 'cosmoz-tab'
			},
			selectedClass: {
				type: String,
				value: 'cosmoz-selected'
			},
			selectedAttribute: {
				type: String,
				value: 'selected'
			},
			multi: {
				type: String,
				computed: '_computeMulti(accordion)'
			},

			/**
			 * True if the element has class `fit` or `flex`.
			 */
			flex: {
				type: Boolean,
				computed: '_computeFlex(class)'
			},

			/**
			 * The currently selected tab's id.
			 */
			selectedTabId: {
				type: String,
				notify: true,
				observer: '_selectedTabIdChanged'
			},

			/**
			 * The hash parameter to use for selecting a tab.
			 */
			hashParam: {
				type: String,
				observer: '_hashParamChanged'
			},

			/**
			 *  The currently selected tab.
			 */
			_selectedTab: {
				type: Object,
				value: null
			},

			/**
			 * The route has parameters extracted by the `cosmoz-page-location`
			 * element.
			 */
			_routeHashParams: {
				type: Object,
				notify: true
			}
		},

		behaviors: [
			Polymer.IronResizableBehavior,
			Polymer.IronMultiSelectableBehavior
		],

		listeners: {
			'cosmoz-tab-toggle': '_onToggleTab',
		},

		observers: [
			'_routeHashParamsChanged(_routeHashParams.*)',
			'_forwardProperty("accordion", accordion, items)',
			'_forwardProperty("flex", flex, items)'
		],

		_computeMulti: function (accordion){
			return !!accordion;
		},
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
		 * Observes `_routeHashParams` changes
		 * and sets `selectedTabId` based on `hashParam`.
		 *
		 * @return {void}
		 */
		_routeHashParamsChanged: function () {
			var newSelectedTabId;
			if (this._routeHashParams && this.hashParam && this.tabs) {
				newSelectedTabId = this._routeHashParams[this.hashParam];
				if (newSelectedTabId !== this.selectedTabId) {
					this.selectedTabId = newSelectedTabId;
				}
			}
		},
		/**
		 * Observes `hashParam` changes
		 * and sets `selectedTabId` from `_routeHashParams`.
		 *
		 * @return {void}
		 */
		_hashParamChanged: function () {
			if (this._routeHashParams) {
				this.selectedTabId = this._routeHashParams[this.hashParam];
			}
		},

		/**
		 * Returns the url for a tab.
		 *
		 * @param  {HTMLElement} tab The tab to compute link for
		 * @return {String}   The url of the tab
		 */
		_getTabLink: function (tab) {
			return this.getUrlForTabId(tab.tabId);
		},

		/**
		 * Returns the url for a tab by id.
		 *
		 * @param  {String} tabId The tab's id
		 * @return {String} The url
		 */
		getUrlForTabId: function (tabId) {
			if (this.hashParam) {
				var hashParams = {};
				hashParams[this.hashParam] = tabId;
				return this.$.pageLocation.getRouteUrl({}, hashParams);
			}
		},


		/**
		 * Observes `_selectedTabIdChanged` changes
		 * and updates select tab and `_routeHashParams`.
		 *
		 * @return {void}
		 */
		_selectedTabIdChanged: function () {
			if (!this._ignoreSelectedTabIdChange) {
				this._updateSelectedTab();
				if (this._selectedTab && !this._autoSelectDefault && this.hashParam) {
					this.set(['_routeHashParams', this.hashParam], this.selectedTabId);
				}
			}
		},

		_forwardProperty: function (property, value, items) {
			items.forEach(function (item){
				item.set(property, value);
			});
		},

		_onToggleTab: function (e){
			var item = e.target,
				value = this.attrForSelected ? this._valueForItem(item) : this.items.indexOf(item);

			this.select(value);
		},

		_computeTabAttr: function (tab, index, attrForSelected) {
			return attrForSelected && tab[Polymer.CaseMap.dashToCamelCase(this.attrForSelected)] || index;
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


	});
}());
