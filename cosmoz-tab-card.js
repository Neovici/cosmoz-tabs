// @license Copyright (C) 2015 Neovici AB - Apache 2 License
(function () {
	'use strict';

	Polymer({
		is: 'cosmoz-tab-card',
		properties: {
			/**
			 * The z-depth of this element, from 0-5.
			 * Compute to 0 or 1 depending on `accordion` property.
			 */
			elevation: {
				type: Number,
				computed: '_computeElevation(accordion)'
			}
		},

		behaviors: [
			Polymer.IronResizableBehavior,
			Cosmoz.TabBehavior
		],

		/** Computes `elevation` depending on the `according` property.
		 *
		 * @param  {String} accordion The hex color
		 * @return {Number}           The CSS style
		 */
		_computeElevation: function (accordion) {
			return accordion ? 0 : 1;
		},

		/**
		 * `tap` event listener.
		 * Calls `toggleOpened` to toggle the opened state.
		 *
		 * @param  {Event} event The `tap` event
		 * @listens tap
		 * @return {void}
		 */
		_onCardActivate: function () {
			this.toggleOpened(!this.opened);
		},
		_computeOpened: function (accordion, isSelected){
			return accordion || isSelected;
		},
	});
}());
