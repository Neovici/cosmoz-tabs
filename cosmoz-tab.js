// @license Copyright (C) 2015 Neovici AB - Apache 2 License
/*global Cosmoz, CosmozTabs,Polymer, document, window */

(function () {
	'use strict';

	Polymer({
		is: 'cosmoz-tab',
		properties: {

			opened: {
				type: Boolean,
				readOnly: true,
				notify: true
			},

			hidden: {
				type: Boolean,
				value: false,
				reflectToAttribute: true,
				observer: '_hiddenChanged'
			},

			disabled: {
				type: Boolean,
				value: false,
				reflectToAttribute: true,
				observer: '_disabledChanged'
			},

			heading: {
				type: String,
				observer: '_headingChanged'
			},

			accordion: {
				type: Boolean,
				readOnly: true
			},

			flex: {
				type: Boolean,
				readOnly: true
			},

			icon: {
				type: String,
				value: 'radio-button-unchecked',
				observer: '_iconChanged'
			},

			selectedIcon: {
				type: String,
				value: 'radio-button-checked',
				observer: '_selectedIconchanged'
			},

			iconColor: {
				type: String,
				value: '#15b0d3',
				observer: '_iconColorChanged'
			},

			tabId: {
				type: String
			},

			_tabContentClass: {
				type: String
			},

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

			cards: {
				type: Array,
				readOnly: true,
				value: false
			},

			badge: {
				type: String,
				observer: '_badgeChanged'
			},

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

		attached: function () {
			this.bindParentProperty('accordion');
			this.bindParentProperty('flex');
			this._cardsObserver = Polymer.dom(this.$.tabContent).observeNodes(this._updateCards.bind(this));
		},

		detached: function () {
			if (this._cardsObserver) {
				Polymer.dom(this.$.tabContent).unobserveNodes(this._cardsObserver);
			}
		},

		_fireTabPropertyChanged: function (propertyName) {
			this.fire('cosmoz-tab-property-changed', { tab: this, propertyName: propertyName});
		},

		_disabledChanged: function () {
			this._fireTabPropertyChanged('disabled');
		},

		_hiddenChanged: function () {
			this._fireTabPropertyChanged('hidden');
		},

		_headingChanged: function () {
			this._fireTabPropertyChanged('heading');
		},

		_iconChanged: function () {
			this._fireTabPropertyChanged('icon');
		},

		_selectedIconchanged: function () {
			this._fireTabPropertyChanged('selectedIcon');
		},

		_iconColorChanged: function () {
			this._fireTabPropertyChanged('iconColor');
		},

		_badgeChanged: function () {
			this._fireTabPropertyChanged('badge');
		},

		_computeShowBadge: function (badge) {
			return badge !== undefined && badge !== null && badge !== 0 && badge !== '';
		},

		_onTap: function (event) {
			// Handle opening/closing of the tab in accordion mode
			// Otherwise, cosmoz-tabs will take care of showing/hiding the tab with animations.
			if (this.accordion) {
				console.log(this.tabId + ' tap ' + this.opened);
				this.toggleOpened(!this.opened);
			}
		},

		_updateCards: function () {
			var cards = Polymer.dom(this).queryDistributedElements('cosmoz-tab-card');
			this._setCards(cards);
			this._useCards = cards && cards.length;
		},

		_getIcon: function (opened) {
			if (opened && !this.accordion) {
				return this.selectedIcon;
			} else {
				return this.icon;
			}
		},

		_computeOpenedIcon: function (opened) {
			return opened
				? 'expand-less'
				: 'expand-more';
		},
		_computeIconStyle: function (iconColor) {
			return 'color: ' + iconColor;
		},

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
