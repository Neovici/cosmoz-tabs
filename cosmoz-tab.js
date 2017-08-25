// @license Copyright (C) 2015 Neovici AB - Apache 2 License
/*global CosmozTabs */

(function () {
	'use strict';
	Polymer({
		/**
		 * Fired when `disabled`, `hidden`, `heading`, `icon`, `selectedIcon`, `iconColor`, `badge`
		 * properties are changed.
		 *
		 * @event cosmoz-tab-property-changed
		 * @param  {Object} detail The event detail object
		 * @param  {HTMLElement} detail.tab The current cosmoz-tab instance
		 * @param  {String} detail.propertyName The name of changed the property
		 */


		/**
		 * Fired when the element is opened.
		 * @event cosmoz-tab-opened
		 */

		is: 'cosmoz-tab',
		properties: {

			/**
			 * True if the tab is opened.
			 */
			opened: {
				type: Boolean,
				readOnly: true,
				notify: true
			},

			/**
			 * If true, the tab will be hidden
			 */
			hidden: {
				type: Boolean,
				value: false,
				reflectToAttribute: true,
				observer: '_hiddenChanged'
			},

			/**
			 *  If true, the tab will be disabled
			 */
			disabled: {
				type: Boolean,
				value: false,
				reflectToAttribute: true,
				observer: '_disabledChanged'
			},

			/**
			 * The tab's heading text.
			 */
			heading: {
				type: String,
				observer: '_headingChanged'
			},

			/**
			 * Indicates wether the parent `cosmoz-tabs` should be displayed using an accordion.
			 * Bound to same  property on parent `cosmoz-tabs`.
			 */
			accordion: {
				type: Boolean,
				readOnly: true
			},

			/**
			 * True if the parent `cosmoz-tabs` has class `fit` or `flex`.
			 * Bound to same  property on parent `cosmoz-tabs`.
			 */
			flex: {
				type: Boolean,
				readOnly: true
			},
			/**
			 * The icon of the tab.
			 */
			icon: {
				type: String,
				value: 'radio-button-unchecked',
				observer: '_iconChanged'
			},

			/**
			 * The icon of the tab when it is selected.
			 */
			selectedIcon: {
				type: String,
				value: 'radio-button-checked',
				observer: '_selectedIconchanged'
			},

			/**
			 *  The color of the tab's icon.
			 */
			iconColor: {
				type: String,
				value: '#15b0d3',
				observer: '_iconColorChanged'
			},

			/**
			 *  The id of tab.
			 */
			tabId: {
				type: String
			},

			/**
			 *  The class used for the tab's content element.
			 */
			_tabContentClass: {
				type: String
			},

			/**
			 * True if tab contains `cosmoz-tab-card` elements.
			 */
			_useCards: {
				type: Boolean
			},

			/**
			 * Equivalent to (accordion && !useCards)
			 * Used in the template to conditionaly render an iron-collapse.
			 */
			_useCollapse: {
				type: Boolean
			},

			/**
			 * The array of `cosmoz-tab-card` that this element contains.
			 */
			cards: {
				type: Array,
				readOnly: true,
				value: false
			},

			/**
			 * When not empty the element will contain a `paper-bagde` with the label set to this property.
			 */
			badge: {
				type: String,
				observer: '_badgeChanged'
			},

			/**
			 * True when `badge` propery is set.
			 */
			_showBadge: {
				type: Boolean,
				value: false,
				computed: '_computeShowBadge(badge)'
			}
		},

		observers: [
			'_setup(accordion, _useCards, flex)'
		],

		behaviors: [
			Polymer.IronResizableBehavior,
			CosmozTabs.BindParentChildBehavior
		],

		/**
		 * Element attached lifecycle callback that binds parent properties
		 * and creates `_cardsObserver` DOM mutation observer that calls `_updateCards` on change.
		 * @return {void}
		 */
		attached: function () {
			this.bindParentProperty('accordion');
			this.bindParentProperty('flex');
			this._cardsObserver = Polymer.dom(this.$.tabContent).observeNodes(this._updateCards.bind(this));
		},

		/**
		 * Element detached lifecycle callback
		 * that removes `_cardsObserver` DOM mutation observer.
		 * @return {void}
		 */
		detached: function () {
			if (this._cardsObserver) {
				Polymer.dom(this.$.tabContent).unobserveNodes(this._cardsObserver);
			}
		},

		/**
		 * Fires `cosmoz-tab-property-change` event
		 * @param  {String} propertyName The property that changed
		 * @fires cosmoz-tab-property-change
		 * @return {void}
		 */
		_fireTabPropertyChanged: function (propertyName) {
			this.fire('cosmoz-tab-property-changed', { tab: this, propertyName: propertyName});
		},

		/**
		 * Observes `disabled` property changes and calls `_fireTabPropertyChanged`
		 *
		 * @return {void}
		 */
		_disabledChanged: function () {
			this._fireTabPropertyChanged('disabled');
		},

		/**
		 * Observes `hidden` property changes and calls `_fireTabPropertyChanged`
		 *
		 * @return {void}
		 */
		_hiddenChanged: function () {
			this._fireTabPropertyChanged('hidden');
		},

		/**
		 * Observes `heading` property changes and calls `_fireTabPropertyChanged`
		 *
		 * @return {void}
		 */
		_headingChanged: function () {
			this._fireTabPropertyChanged('heading');
		},

		/**
		 * Observes `icon` property changes and calls `_fireTabPropertyChanged`
		 *
		 * @return {void}
		 */
		_iconChanged: function () {
			this._fireTabPropertyChanged('icon');
		},

		/**
		 * Observes `selectedIcon` property changes and calls `_fireTabPropertyChanged`
		 *
		 * @return {void}
		 */
		_selectedIconchanged: function () {
			this._fireTabPropertyChanged('selectedIcon');
		},

		/**
		 * Observes `iconColor` property changes and calls `_fireTabPropertyChanged`
		 *
		 * @return {void}
		 */
		_iconColorChanged: function () {
			this._fireTabPropertyChanged('iconColor');
		},

		/**
		 * Observes `badge` property changes and calls `_fireTabPropertyChanged`
		 *
		 * @return {void}
		 */
		_badgeChanged: function () {
			this._fireTabPropertyChanged('badge');
		},

		/**
		 * Computes `_showBadge` property if `badge` propery is set to non-empty value.
		 *
		 * @param  {String} badge The badge propery
		 * @return {Boolean} True if badge should be shown
		 */
		_computeShowBadge: function (badge) {
			return badge !== undefined && badge !== null && badge !== 0 && badge !== '';
		},

		/**
		 * `tap` event listener.
		 * Handles opening/closing of the tab in accordion mode.
		 *
		 * @param  {Event} event The `tap` event
		 * @listens tap
		 * @return {void}
		 */
		_onTap: function (event) {
			// Handle opening/closing of the tab in accordion mode
			// Otherwise, cosmoz-tabs will take care of showing/hiding the tab with animations.
			if (this.accordion) {
				console.log(this.tabId + ' tap ' + this.opened);
				this.toggleOpened(!this.opened);
			}
		},

		/**
		 * Finds all `cosmoz-tab-card` elements and updates cards.
		 *
		 * @return {void}
		 */
		_updateCards: function () {
			var cards = Polymer.dom(this).queryDistributedElements('cosmoz-tab-card');
			this._setCards(cards);
			this._useCards = cards && cards.length;
		},

		/**
		 * Computes the element's icon depending on the `opened` property
		 *
		 * @param  {Boolean} opened True if tab is opened
		 * @return {void}
		 */
		_getIcon: function (opened) {
			if (opened && !this.accordion) {
				return this.selectedIcon;
			}
			return this.icon;

		},

		/**
		 * Computes the element's opened icon depending on the `opened` property
		 *
		 * @param  {Boolean} opened True if tab is opened
		 * @return {void}
		 */
		_computeOpenedIcon: function (opened) {
			return opened
				? 'expand-less'
				: 'expand-more';
		},

		/** Computes CSS style depending on color.
		 *
		 * @param  {String} iconColor The hex color
		 * @return {String}           The CSS style
		 */
		_computeIconStyle: function (iconColor) {
			return 'color: ' + iconColor;
		},

		/**
		 * Observes `accordion`, `useCards` and `flex` properties
		 * and sets up the element.
		 *
		 * @param  {Boolean} accordion The `accordion` property
		 * @param  {Boolean} useCards  The `useCards` property
		 * @param  {Boolean} flex      The `flex` property
		 * @return {void}
		 */
		_setup: function (accordion, useCards, flex) {
			var tabContentClass = 'relative cosmoz-tab-content',
				useFlex = flex && !accordion;

			if (useCards) {
				tabContentClass += '-cards-' + (accordion ? 'accordion' : 'no-accordion');
			} else if (useFlex) {
				tabContentClass += ' vertical layout flex';
			}

			this._tabContentClass = tabContentClass;

			this.toggleClass('cosmoz-tab-accordion', accordion);
			this.toggleClass('cosmoz-tab-use-cards', useCards);
			this.toggleClass('flex', useFlex);

			this._useCollapse = accordion && !useCards;

		},

		/**
		 * Toggles the opened state of the element.
		 * Calls`toggleOpened` on all cards that it contains.
		 *
		 * @param  {Boolean} opened True if element should be opened
		 * @fires cosmoz-tab-opened
		 * @return {void}
		 */
		toggleOpened: function (opened) {

			this.toggleClass('cosmoz-tab-opened', opened);

			this._setOpened(opened);

			if (opened) {
				this.fire('cosmoz-tab-opened');
			}

			if (!this.accordion) {
				return;
			}

			if (!this._useCards) {
				// Just in case there are some resizable elements in this tab
				this.debounce('notifyResize', this.notifyResize, 30);
				return;
			}

			if (opened) {
				this.cards[0].toggleOpened(true);
			} else {
				this.cards.forEach(function (card) {
					card.toggleOpened(false);
				});
			}
		}
	});
}());
