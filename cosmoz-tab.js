// @license Copyright (C) 2015 Neovici AB - Apache 2 License
(function () {
	'use strict';
	Polymer({

		is: 'cosmoz-tab',
		properties: {
			/**
			 * If true, the item will be hidden.
			 */
			hidden: {
				type: Boolean,
				value: false,
				reflectToAttribute: true,
			},

			/**
			 * Only items that match this CSS selector are selectable.
			 */
			selectable: {
				type: String,
				value: 'cosmoz-tab-card'
			},

			/**
			 *  If true, the item will be disabled.
			 */
			disabled: {
				type: Boolean,
				value: false,
				reflectToAttribute: true,
			},

			/**
			 * True if the item contains cards.
			 */
			hasCards: {
				type: Boolean,
				reflectToAttribute: true,
				readOnly: true,
				notify: true,
				value: false,
				computed: '_computeHasCards(items)'
			}
		},

		behaviors: [
			Cosmoz.TabbableBehavior,
			Cosmoz.TabbedBehavior
		],

		/**
		 * Computes `hasCards` depending on `items`.
		 *
		 * @param  {Array} items Array of selectable items
		 * @returns {Boolean} True if items is not empty
		 */
		_computeHasCards: function (items = this.items){
			return items && items.length > 0;
		},

		/**
		 * Computes opened property of the included `iron-collapse`.
		 *
		 * @param  {Boolean} hasCards   The hasCards property
		 * @param  {Boolean} isSelected The isSelected property
		 * @returns {Boolean} True if `hasCards` or `isSelected`
		 */
		_computeOpened: function (accordion, hasCards = this.hasCards, isSelected = this.isSelected){
			return !accordion || hasCards || isSelected;
		}

	});
}());
