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
		 *
		 * @event cosmoz-tab-opened
		 */

		is: 'cosmoz-tab',
		properties: {

			/**
			 * True if the tab is opened.
			 */
			selected: {
				type: Boolean,
				reflectToAttribute: true,
				notify: true,
				value: false
			},

			/**
			 * Indicates wether the parent `cosmoz-tabs` should be displayed using an accordion.
			 * Bound to same  property on parent `cosmoz-tabs`.
			 */
			accordion: {
				type: Boolean,
				reflectToAttribute: true,
				value: false,
				notify: true
			},
			/**
			 * If true, the tab will be hidden
			 */
			hidden: {
				type: Boolean,
				value: false,
				reflectToAttribute: true,
			},

			/**
			 *  If true, the tab will be disabled
			 */
			disabled: {
				type: Boolean,
				value: false,
				reflectToAttribute: true,
			},

			/**
			 * The tab's heading text.
			 */
			heading: {
				type: String,
			},

			/**
			 * True if the parent `cosmoz-tabs` has class `fit` or `flex`.
			 * Bound to same  property on parent `cosmoz-tabs`.
			 */
			flex: {
				type: Boolean,
				// readOnly: true
			},

			/**
			 * The icon of the tab.
			 */
			icon: {
				type: String,
				value: 'radio-button-unchecked',
			},

			/**
			 * The icon of the tab when it is selected.
			 */
			selectedIcon: {
				type: String,
				value: 'radio-button-checked',
			},

			/**
			 *  The color of the tab's icon.
			 */
			iconColor: {
				type: String,
				value: '#15b0d3',
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
				value: ''
			}
		},

		observers: [
			'_setup(accordion, _useCards, flex)'
		],

		behaviors: [
			Polymer.IronResizableBehavior,
		],

		/**
		 * Element attached lifecycle callback that binds parent properties
		 * and creates `_cardsObserver` DOM mutation observer that calls `_updateCards` on change.
		 * @return {void}
		 */
		attached: function () {
			// this.bindParentProperty('accordion');
			// this.bindParentProperty('flex');
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
		 * `tap` event listener.
		 * Handles opening/closing of the tab in accordion mode.
		 *
		 * @param  {Event} event The `tap` event
		 * @listens tap
		 * @return {void}
		 */
		_onTap: function () {
			this.fire('cosmoz-tab-toggle');
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

		/** Computes CSS style depending on color.
		 *
		 * @param  {String} iconColor The hex color
		 * @return {String}           The CSS style
		 */
		_computeIconStyle: function (iconColor) {
			return 'color: ' + iconColor;
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

		getIcon: function () {
			return this.selected && !this.accordion ? this.selectedIcon : this.icon;
		},

		getIconStyle: function (){
			if (this.iconColor) {
				return 'color: ' + this.iconColor;
			}
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

			this.toggleClass('cosmoz-tab-use-cards', useCards);
			this.toggleClass('flex', useFlex);
		},

		_computeOpened: function (_useCards, selected){
			return _useCards || selected;
		}
	});
}());
