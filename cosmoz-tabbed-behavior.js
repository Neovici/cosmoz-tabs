/* eslint-disable max-lines-per-function */

import { IronResizableBehavior } from '@polymer/iron-resizable-behavior/iron-resizable-behavior';

export const

	/** @polymerBehavior */
	TabbedBehaviorImpl = {
		/**
		 * Fired when the element should have the selection state toggled.
		 *
		 * @event cosmoz-tab-toggle
		 */

		/**
		 * Fired when the element is being selected for the first time.
		 *
		 * @event tab-first-select
		 */

		/**
		 * Fired when the element is being selected.
		 *
		 * @event tab-select
		 */

		properties: {
			/**
			 * Item selection state, true if it is selected.
			 */
			isSelected: {
				type: Boolean,
				value: false,
				reflectToAttribute: true,
				notify: true,
			},

			/**
			 * Is true when the item has been selected at least once.
			 */
			isActive: {
				type: Boolean,
				value: false,
				reflectToAttribute: true,
				notify: true
			},


			/**
			 * Item heading text.
			 */
			heading: {
				type: String,
				notify: true
			},

			/**
			 * Icon name of the item.
			 */
			icon: {
				type: String,
				value: 'radio-button-unchecked'
			},

			/**
			 * Icon name of the item when it is selected.
			 */
			selectedIcon: {
				type: String,
				value: 'radio-button-checked'
			},

			/**
			 * Color of the item icon.
			 */
			iconColor: {
				type: String,
				value: '#15b0d3'
			},

			iconStyle: {
				type: String,
				value: undefined
			},

			/**
			 * When not empty the element will contain a `paper-bagde` with the
			 * label set to this property.
			 */
			badge: {
				type: String,
				value: '',
				notify: true
			},

		},


		detached() {
			this.isActive = false;
		},

		/**
		 * Computes the element opened icon name depending on the `opened`
		 * property.
		 *
		 * @param  {boolean} isSelected Whether tab is opened or not.
		 * @returns {string} Opened icon name.
		 */
		_computeOpenedIcon(isSelected) {
			return isSelected ? 'expand-less' : 'expand-more';
		},

		/**
		 * Gets the element icon name.
		 *
		 * @returns {string} Name of the element icon.
		 */
		getIcon() {
			return this.isSelected && !this.accordion ? this.selectedIcon : this.icon;
		},

		/**
		 * Gets the element icon style property and value if icon color is
		 * set, otherwise return nothing.
		 *
		 * @returns {string/void} Style color property and value for the icon.
		 */
		getIconStyle() {
			return [this.iconColor && 'color: ' + this.iconColor, this.iconStyle]
				.filter(value => value != null)
				.join(';');
		}
	},

	/** @polymerBehavior */
	TabbedBehavior = [
		IronResizableBehavior,
		TabbedBehaviorImpl
	];
