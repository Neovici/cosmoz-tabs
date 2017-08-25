// @license Copyright (C) 2015 Neovici AB - Apache 2 License
/*global CosmozTabs */

(function () {
	'use strict';

	Polymer({
		is: 'cosmoz-tab-card',

		/**
		 * Fired when the element is opened.
		 *
		 * @event cosmoz-tab-card-opened
		 * @param  {Object} detail The event detail object
		 * @param  {HTMLElement} detail.card The current `cosmoz-tab-card` instance
		 */

		/**
		 * Fired when the element is closed.
		 *
		 * @event cosmoz-tab-card-closed
		 * @param  {Object} detail The event detail object
		 * @param  {HTMLElement} detail.card The current `cosmoz-tab-card` instance
		 */
		properties: {
			/**
			 * Indicates wether the parent `cosmoz-tab` should be displayed using an accordion.
			 * Bound to same  property on parent `cosmoz-tab`.
			 */
			accordion: {
				type: Boolean,
				readOnly: true,
				observer: '_accordionChanged'
			},

			/**
			 * The z-depth of this element, from 0-5.
			 * Compute to 0 or 1 depending on `accordion` property.
			 */
			elevation: {
				type: Number,
				computed: '_computeElevation(accordion)'
			},

			/**
			 * The heading text of the element.
			 */
			heading: {
				type: String
			},

			/**
			 * The icon of the element.
			 */
			icon: {
				type: String,
				value: 'radio-button-unchecked'
			},
			/**
			 *  The color of the elements's icon.
			 */
			iconColor: {
				type: String,
				value: '#15b0d3'
			},

			/**
			 * True if the element is opened.
			 */
			opened: {
				type: Boolean,
				readOnly: true,
				observer: '_openedChanged'
			}
		},

		behaviors: [
			Polymer.IronResizableBehavior,
			CosmozTabs.BindParentChildBehavior
		],

		/**
		 * Element attached lifecycle callback that binds parent property `accordion`
		 *
		 * @return {void}
		 */
		attached: function () {
			this.bindParentProperty('accordion');
		},

		/**
		 * Toggles the opened state of the element if `accordion` property is true.
		 *
		 * @param  {Boolean} opened True if element should be opened
		 * @return {void}
		 */
		toggleOpened: function (opened) {
			if (this.accordion) {
				this._toggleOpenedImpl(opened);
			}
		},

		/**
		 * Observes `accordion` property changes
		 * and updates children.
		 *
		 * @param  {Boolean} accordion The current value
		 * @param  {Boolean} oldValue  The old value
		 * @return {void}
		 */
		_accordionChanged: function (accordion) {

			this.toggleClass('cosmoz-tab-card-accordion', accordion);

			// Do not animate iron-collapse while switching mode
			// This is because when switching to accordion mode
			// we collapse/expand to quickly the selected tab,
			// preventing iron-collapse to reset correctly it's size to 'auto'.
			this.$.collapse.noAnimation = true;
			this._toggleOpenedImpl(!accordion);
			this.$.collapse.noAnimation = false;
		},

		/** Computes `elevation` depending on the `according` property.
		 *
		 * @param  {String} accordion The hex color
		 * @return {Number}           The CSS style
		 */
		_computeElevation: function (accordion) {
			return accordion ? 0 : 1;
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

		/**
		 * Toggles the opened state of the element in accordion mode.
		 *
		 * @param  {Boolean} opened True if element should be opened
		 * @fires cosmoz-tab-card-opened
		 * @fires cosmoz-tab-card-closed
		 * @return {void}
		 */
		_toggleOpenedImpl: function (opened) {
			var
				children,
				card = this,
				eventType;

			// The card is always opened when not in accordion mode
			this._setOpened(opened);
			this.toggleClass('cosmoz-tab-card-opened', opened);
			this.$.collapse.opened = opened;
			eventType = opened
				? 'cosmoz-tab-card-opened'
				: 'cosmoz-tab-card-closed';

			children = Polymer.dom(this).queryDistributedElements('*');
			children.forEach(function (child) {
				card.fire(eventType, {
					card: card
				}, {
					bubbles: false,
					node: child
				});
			});

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

		/**
		 * Observes `opened` property and calls `_notifyPageResize`.
		 *
		 * @param  {Boolean} newValue The new `opened` value
		 * @param  {Boolean} oldValue The old `opened` value
		 * @return {void}
		 */
		_openedChanged: function (newValue) {
			if (newValue) {
				this._notifyPageResize();
			}
		},

		/**
		 * Notifies about a element resize using `Polymer.IronResizableBehavior`.
		 *
		 * @return {void}
		 */
		_notifyPageResize: function () {
			var collapse = this.$.collapse;

			this.resizerShouldNotify = function (element) {
				return element === collapse;
			};

			this.notifyResize();
		}
	});
}());
