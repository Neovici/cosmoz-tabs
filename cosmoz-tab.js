// @license Copyright (C) 2015 Neovici AB - Apache 2 License
(function () {
	'use strict';
	Polymer({

		/**
		 * Fired when the element is opened.
		 *
		 * @event cosmoz-tab-opened
		 */

		is: 'cosmoz-tab',
		properties: {
			/**
			 * If true, the tab will be hidden.
			 */
			hidden: {
				type: Boolean,
				value: false,
				reflectToAttribute: true,
			},

			/**
			 * This is a CSS selector string.  If this is set, only items that match the CSS selector
			 * are selectable.
			 */
			selectable: {
				type: String,
				value: 'cosmoz-tab-card'
			},

			/**
			 *  If true, the tab will be disabled.
			 */
			disabled: {
				type: Boolean,
				value: false,
				reflectToAttribute: true,
			},

			/**
			 * True if the tab contains cards.
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
			Cosmoz.TabsBehavior,
			Cosmoz.TabBehavior
		],

		/**
		 * Computes `hasCards` depending on `items`
		 *
		 * @param  {Array} items Array of selectable items
		 * @returns {Boolean} True if items is not empty
		 */
		_computeHasCards: function (items = this.items){
			return items && items.length > 0;
		},

		/**
		 * Computes opened property of the included ``iron-collapse
		 *
		 * @param  {Boolean} hasCards   The hasCards property
		 * @param  {Boolean} isSelected The isSelected property
		 * @returns {Boolean} True if `hasCards` or `isSelected`
		 */
		_computeOpened: function (hasCards = this.hasCards, isSelected = this.isSelected){
			return hasCards || isSelected;
		}


	});
}());
