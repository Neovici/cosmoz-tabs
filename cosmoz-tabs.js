// @license Copyright (C) 2015 Neovici AB - Apache 2 License
/*global Cosmoz, CosmozTabs, Polymer, window */

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

			flex: {
				type: Boolean,
				computed: '_computeFlex(class)'
			},

			/**
			 */
			tabs: {
				type: Array,
				notify: true,
				readOnly: true
			},

			selectedTabId: {
				type: String,
				notify: true,
				observer: '_selectedTabIdChanged'
			},

			hashParam: {
				type: String,
				observer: '_hashParamChanged'
			},

			autoSelectDefaultDelay: {
				type: Number,
				value: 20
			},

			_selectedTab: {
				type: Object,
				value: null
			},

			_routeHashParams: {
				type: Object,
				notify: true
			}
		},

		observers: [
			'_routeHashParamsChanged(_routeHashParams.*)'
		],

		behaviors: [
			CosmozTabs.BindParentHostBehavior
		],

		_computeFlex: function (classesString) {
			var classes = classesString.split(' ');
			if (classes.indexOf('fit') > -1) {
				this.toggleClass('flex', true);
				return true;
			}
			return classes.indexOf('flex') > -1;
		},

		_routeHashParamsChanged: function () {
			var newSelectedTabId;
			if (this._routeHashParams && this.hashParam && this.tabs) {
				newSelectedTabId = this._routeHashParams[this.hashParam];
				if (newSelectedTabId !== this.selectedTabId) {
					this.selectedTabId = newSelectedTabId;
				}
			}
		},

		_hashParamChanged: function () {
			if (this._routeHashParams) {
				this.selectedTabId = this._routeHashParams[this.hashParam];
			}
		},

		_getOverflowClass: function (flex) {
			return flex ? 'flex-scroll' : '';
		},

		_getTabLink: function (tab) {
			return this.getUrlForTabId(tab.tabId);
		},

		getUrlForTabId: function (tabId) {
			if (this.hashParam) {
				var hashParams = {};
				hashParams[this.hashParam] = tabId;
				return this.$.pageLocation.getRouteUrl({}, hashParams);
			}
		},

		created: function () {
			this._delayedUpdateSelectedTab = this._updateSelectedTab.bind(this, true);
		},

		attached: function () {
			this._tabsObserver = Polymer.dom(this).observeNodes(function (mutation) {
				this._updateTabs();
			}.bind(this));
		},

		detached: function () {
			if (this._tabsObserver) {
				Polymer.dom(this).unobserveNodes(this._tabsObserver);
			}

			this.cancelDebouncer('closeAllButSelected');

			this.selectedTabId = null;
			this._setTabs(null);
			this._selectedTab = null;
		},

		/**
		 *
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

		_tabsChanged: function (e) {
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

		_selectedTabIdChanged: function () {
			if (!this._ignoreSelectedTabIdChange) {
				this._updateSelectedTab();
				if (this._selectedTab && !this._autoSelectDefault && this.hashParam) {
					this.set(['_routeHashParams', this.hashParam], this.selectedTabId);
				}
			}
		},

		_scheduleUpdateSelectedTab: function (delay) {
			this.debounce('_scheduleUpdateSelectedTab', this._delayedUpdateSelectedTab, delay);
		},

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

		_openTab: function (tab, old) {
			if (old) {
				old.toggleOpened(false);
			}

			tab.toggleOpened(true);
		},

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

		_getIcon: function (tab, selectedTabId, accordion) {
			if (tab.tabId === selectedTabId && !accordion) {
				return tab.selectedIcon;
			}
			return tab.icon;
		},

		_computeTabIconStyle: function (iconColor) {
			return 'color: ' + iconColor;
		},

		_accordionChanged: function (accordion, oldValue) {
			this.notifyBoundChildren('accordion');

			if (this.tabs && this.tabs.length) {
				// Close all but the selected tab
				// async, so that the dom-if elements depending on accordion can be re-evaluted
				this.debounce('closeAllButSelected', this._closeAllButSelected, 30);
			}
		},

		_closeAllButSelected: function () {
			this.tabs.forEach(function (tab) {
				tab.toggleOpened(tab.tabId === this.selectedTabId);
			}, this);
		}
	});
}());
