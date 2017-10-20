// @license Copyright (C) 2015 Neovici AB - Apache 2 License
(function () {
	'use strict';
	Polymer({
		/**
		 * Fired when `hidden`, `disabled`,'heading' or `badge` tab properties change.
		 *
		 * @event tab-property-changed
		 * @param {String} detail.property The property name
		 * @param {String|Number|Object|*} detail.value The property value
		 * @param {HTMLElement} detail.item The item that changed.
		 */

		is: 'cosmoz-tab',
		properties: {
			/**
			 * If true, the item will be hidden.
			 */
			hidden: {
				type: Boolean,
				value: false,
				notify: true,
				reflectToAttribute: true,
			},

			/**
			 *  If true, the item will be disabled.
			 */
			disabled: {
				type: Boolean,
				value: false,
				notify: true,
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

		observers: [
			'_notifyProperty("hidden", hidden)',
			'_notifyProperty("disabled", disabled)',
			'_notifyProperty("heading", heading)',
			'_notifyProperty("badge", badge)'
		],

		/**
		 * Computes `hasCards` depending on `items`.
		 *
		 * @param  {Array} items Array of selectable items
		 * @returns {Boolean} True if items is not empty
		 */
		_computeHasCards: function (items = this.items) {
			return items && items.length > 0;
		},

		/**
		 * Computes opened property of the included `iron-collapse`.
		 *
		 * @param  {Boolean} accordion   The accordion property
		 * @param  {Boolean} hasCards   The hasCards property
		 * @param  {Boolean} isSelected The isSelected property
		 * @returns {Boolean} True if `hasCards` or `isSelected`
		 */
		_computeOpened: function (accordion, hasCards = this.hasCards, isSelected = this.isSelected) {
			return !accordion || hasCards || isSelected;
		},

		/**
		 * Observes changes to a property and fires a bubbling
		 * `tab-property-changed` event.
		 *
		 * @fires tab-property-changed
		 * @param {String} property The name of the changed property
		 * @param {String|Number|Object|*} value The value of the changed property.
		 * @return {void}

		 */
		_notifyProperty: function (property, value) {
			this.fire('tab-property-changed', {
				property: property,
				value: value,
				item: this
			});
		}

	});
}());
