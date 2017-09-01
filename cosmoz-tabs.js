// @license Copyright (C) 2015 Neovici AB - Apache 2 License

/*global CosmozTabs */
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
				observer: '_accordionChanged',
				reflectToAttribute: true
			},

			/**
			 * True if the element has class `fit` or `flex`.
			 */
			flex: {
				type: Boolean,
				computed: '_computeFlex(class)'
			},

			/**
			 * The list of tabs from which a selection can be made.
			 */
			tabs: {
				type: Array,
				notify: true,
				readOnly: true
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
			 * The delay (in milliseconds) between when the element is attached
			 * and when the first tab is automatically selected.
			 */
			autoSelectDefaultDelay: {
				type: Number,
				value: 20
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
			},

			selectable: {
				type: String,
				value: 'cosmoz-tab'
			},
			activateEvent: {
				type: String,
				value: null
			},
			selectedClass: {
				type: String,
				value: 'cosmoz-selected'
			},
			fallbackSelection: {
				type: String,
				value: 0
			}
		},

		observers: [
			'_routeHashParamsChanged(_routeHashParams.*)',
			'_forwardProperty("accordion", accordion, items)',
			'_forwardProperty("flex", flex, items)'
		],

		behaviors: [
			Polymer.IronResizableBehavior,
			Polymer.IronMultiSelectableBehavior
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
		 * Computes overflow class
		 *
		 * @param  {Boolean} flex True if element is flex
		 * @return {String}   The overflow class
		 */
		_getOverflowClass: function (flex) {
			return flex ? 'flex-scroll' : '';
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
		 * Resets selected tab.
		 *
		 * @return {void}
		 */
		resetTabs: function () {
			this.tabs.forEach(function (tab) {
				tab.toggleOpened(false);
			}, this);

			this._selectedTab = null;
			this._prevSelectedTabId = null;

			if (this._routeHashParams && this.hashParam) {
				var newSelectedTabId = this._routeHashParams[this.hashParam];
				if (newSelectedTabId !== this.selectedTabId) {
					this.selectedTabId = newSelectedTabId;
				}
			}

			this._updateSelectedTab();
		},

		/**
		 * Observes dom-change events from `paper-tabs`
		 * and updates it's `selectedItem` property to the currently selected tab.
		 *
		 * @param  {Event} e `dom-change` event
		 * @return {void}
		 */
		_tabsChanged: function () {
			var paperTabs = this.$$('#paperTabs'),
				selected;
			if (paperTabs && !paperTabs.selectedItem && this._selectedTab) {
				this._ignoreSelectedTabIdChange = true;
				selected = this.selectedTabId;
				this.selectedTabId = null;
				this.selectedTabId = selected;
				this._ignoreSelectedTabIdChange = false;
				//paperTabs.fire('iron-items-changed', null, { bubbles: false });
			}
		},

		/**
		 * Updates and resets tabs from dom. Adds listener for
		 * `cosmoz-tab-property-changed`.
		 * @return {void}
		 */
		_updateTabs: function () {
			var tabs = Polymer.dom(this).queryDistributedElements('cosmoz-tab');

			tabs.forEach(function (tab) {
				if (!tab.tabId) {
					console.error('Required tab-id attribute is missing on cosmoz-tab element.', tab);
				}
			}, this);

			this._setTabs(tabs);

			this.resetTabs();

			if (!this._tabPropertyChangedListener) {
				this.listen(this, 'cosmoz-tab-property-changed', '_onCosmozTabPropertyChanged');
				this._tabPropertyChangedListener = true;
			}
		},

		/**
		 * Handles `cosmoz-tab-property-changed`
		 * and updates the `event.detail.tab`'s property.
		 *
		 * @param  {type} event description
		 * @param  {Object} event.detail The event detail object
		 * @param  {HTMLElement} event.detail.tab The tab to update
		 * @param  {String} event.detail.propertyName The name of the property
		 * @listens cosmoz-tab-property-changed
		 * @return {void}
		 */
		_onCosmozTabPropertyChanged: function (event) {
			// This can occur when a child tab is changing after this tabs has been detached
			if (this.tabs ===  null) {
				return;
			}

			var
				tab = event.detail.tab,
				propertyName = event.detail.propertyName,
				tabIndex = this.tabs.indexOf(tab);

			this.set(['tabs', tabIndex, propertyName], tab.get(propertyName));

			if (propertyName === 'hidden' && !this.accordion) {
				this.$$('#paperTabs').notifyResize();
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

		/**
		 * Schedules a debouncer for updating the selected tab.
		 *
		 * @param  {Number} delay The delay of the debouncer
		 * @return {void}
		 */
		_scheduleUpdateSelectedTab: function (delay) {
			this.debounce('_scheduleUpdateSelectedTab', this._delayedUpdateSelectedTab, delay);
		},

		/**
		 * Updates the selected tab.
		 *
		 * @param  {Boolean} delayed True if this is a delayed/debounced call
		 * @return {void}
		 */
		_updateSelectedTab: function (delayed) {
			var selectedTab,
				defaultTabId,
				prevSelectedTabId,
				prevSelectedTab;

			if (!this.tabs || !this.tabs.length) {
				this._selectedTab = null;
				return;
			}

			if (!this.selectedTabId) {
				if (!delayed) {
					this._scheduleUpdateSelectedTab(this.autoSelectDefaultDelay);
				} else {
					defaultTabId = this.tabs[0].tabId;
					this.selectedTabId = defaultTabId;
				}
				return;
			}

			selectedTab = this._getTabById(this.selectedTabId);

			this._selectedTab = selectedTab;

			if (!selectedTab) {
				if (!delayed) {
					this._scheduleUpdateSelectedTab(this.autoSelectDefaultDelay);
				} else {
					// tab specified by selected-tab-id does not exists,
					// select default tab (first)
					defaultTabId = this.tabs[0].tabId;
					this._autoSelectDefault = true;
					this.selectedTabId = defaultTabId;
					this._autoSelectDefault = false;
				}
			} else {
				this.cancelDebouncer('_scheduleUpdateSelectedTab');

				prevSelectedTabId = this._prevSelectedTabId;
				this._prevSelectedTabId = this.selectedTabId;

				if (prevSelectedTabId !== this.selectedTabId) {
					prevSelectedTab = this._getTabById(prevSelectedTabId);
					this._openTab(selectedTab, prevSelectedTab);
				}
			}
		},

		/**
		 * Opens the passed tab and closes the old one.
		 *
		 * @param  {HTMLElement} tab The tab to open
		 * @param  {HTMLElement|void|null} old The tab to close
		 * @return {void}
		 */
		_openTab: function (tab, old) {
			if (old) {
				old.toggleOpened(false);
			}

			tab.toggleOpened(true);
		},

		/**
		 * Returns a tab by it's id.
		 *
		 * @param  {String} tabId The tab's id
		 * @return {HTMLElement|void|null}  The tab by id if found
		 */
		_getTabById: function (tabId) {
			var returnTab;
			this.tabs.some(function (tab) {
				if (tab.tabId === tabId && !tab.hidden && !tab.disabled) {
					returnTab = tab;
					return true;
				}
			});
			return returnTab;
		},

		/**
		 * Computes icon for a tab.
		 *
		 * @param  {HTMLElement} tab       The tab to compute icon for
		 * @param  {String} selectedTabId  The currently selected tab's id
		 * @param  {Boolean} accordion     The accordion property of the element
		 * @return {String}                The icon to be used
		 */
		_getIcon: function (tab, selectedTabId, accordion) {
			if (tab.tabId === selectedTabId && !accordion) {
				return tab.selectedIcon;
			}
			return tab.icon;
		},

		/**
		 * Computes CSS style for the color of a tab.
		 *
		 * @param  {String} iconColor The hex color
		 * @return {String}           The CSS style for the color of the tab
		 */
		_computeTabIconStyle: function (iconColor) {
			return 'color: ' + iconColor;
		},

		/**
		 * Observes `accordion` property changes
		 * and updates children.
		 *
		 * @param  {Boolean} accordion The current value
		 * @param  {Boolean} oldValue  The old value
		 * @return {void}
		 */
		_accordionChanged: function () {
			this.notifyBoundChildren('accordion');

			if (this.tabs && this.tabs.length) {
				// Close all but the selected tab
				// async, so that the dom-if elements depending on accordion can be re-evaluted
				this.debounce('closeAllButSelected', this._closeAllButSelected, 30);
			}
		},

		/**
		 * Closes all unselected tabs.
		 *
		 * @return {void}
		 */
		_closeAllButSelected: function () {
			this.tabs.forEach(function (tab) {
				tab.toggleOpened(tab.tabId === this.selectedTabId);
			}, this);
		},

		_forwardProperty: function (property, value, items) {
			items.forEach(function (item){
				item.set(property, value);
			});
		}
	});
}());
