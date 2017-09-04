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
			 * If true, the tab will be hidden
			 */
			hidden: {
				type: Boolean,
				value: false,
				reflectToAttribute: true,
			},

			selectable: {
				type: String,
				value: 'cosmoz-tab-card'
			},

			/**
			 *  If true, the tab will be disabled
			 */
			disabled: {
				type: Boolean,
				value: false,
				reflectToAttribute: true,
			},

			hasCards: {
				type: Boolean,
				reflectToAttribute: true,
				value: false,
				computed: '_computeHasCards(items)'
			}
		},

		behaviors: [
			Cosmoz.TabsBehavior,
			Cosmoz.TabBehavior
		],

		_computeHasCards: function (items){
			return items && items.length > 0;
		},
		_computeOpened: function (hasCards, isSelected){
			return hasCards || isSelected;
		}


	});
}());
