// @license Copyright (C) 2015 Neovici AB - Apache 2 License
/*global CosmozTabs, Polymer, document, window */

(function () {
	'use strict';

	Polymer({
		is: 'cosmoz-tab-card',
		properties: {
			accordion: {
				type: Boolean,
				readOnly: true,
				observer: '_accordionChanged'
			},
			elevation: {
				type: Number,
				computed: '_computeElevation(accordion)'
			},
			heading: {
				type: String
			},
			iconColor: {
				type: String,
				value: '#15b0d3'
			},
			icon: {
				type: String,
				value: 'radio-button-unchecked'
			},
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

		attached: function () {
			this.bindParentProperty('accordion');
		},

		toggleOpened: function (opened) {
			if (this.accordion) {
				this._toggleOpenedImpl(opened);
			}
		},

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

		_computeElevation: function (accordion) {
			return accordion ? 0 : 1;
		},
		_computeIconStyle: function (iconColor) {
			return 'color: ' + iconColor;
		},
		_computeOpenedIcon: function (opened) {
			return opened
				? 'expand-less'
				: 'expand-more';
		},

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

		_onCardActivate: function (event) {
			this.toggleOpened(!this.opened);
		},

		_openedChanged: function (newValue, oldValue) {
			if (newValue) {
				this._notifyPageResize();
			}
		},

		_notifyPageResize: function () {
			var collapse = this.$.collapse;

			this.resizerShouldNotify = function (element) {
				return element === collapse;
			};

			this.notifyResize();
		}
	});
}());
