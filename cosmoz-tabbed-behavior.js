/* eslint-disable max-lines-per-function */

import { IronResizableBehavior } from '@polymer/iron-resizable-behavior/iron-resizable-behavior';

/** @polymerBehavior */
export const TabbedBehaviorImpl = {
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
			observer: '_animatedSelectedChanged'
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
		 * Accordion mode element state, true if it is in accordion mode.
		 * Should be forwarded by a `Cosmoz.TabbableBehavior` ancestor
		 * element.
		 */
		accordion: {
			type: Boolean,
			value: false,
			notify: true,
			reflectToAttribute: true
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

		animating: {
			type: Boolean,
			reflectToAttribute: true,
			value: false
		}
	},

	created() {
		this._onSelectedTransitionEnd = this._onSelectedTransitionEnd.bind(this);
	},

	detached() {
		this.isActive = false;
	},

	get animated() {
		return this.accordion;
	},

	_animatedSelectedChanged(isSelected) {
		if (!this.animated) {
			return;
		}
		const el = this.$.content,
			style = el.style;

		style.transitionDuration = 0;
		this.animating = true;

		const height = el.getBoundingClientRect()['height'],
			from = isSelected ? '0px' : height + 'px',
			to = !isSelected ? '0px' : height + 'px';

		style.maxHeight = from;

		window.requestAnimationFrame(() => {
			this._transitionTimeout = setTimeout(() => this._onSelectedTransitionEnd(), 1000);
			el.addEventListener('transitioncancel', this._onSelectedTransitionEnd);
			el.addEventListener('transitionend', this._onSelectedTransitionEnd);

			style.transitionDuration = '';
			style.maxHeight = to;
		});
	},

	/**
	 * Listener for `transitionend` event.
	 *
	 * @returns {void}
	 */
	_onSelectedTransitionEnd() {
		const el = this.$.content;
		this.animating = false;
		el.removeEventListener('transitioncancel', this._onSelectedTransitionEnd);
		el.removeEventListener('transitionend', this._onSelectedTransitionEnd);
		el.style.maxHeight = '';
		if (this._transitionTimeout) {
			window.clearTimeout(this._transitionTimeout);
			this._transitionTimeout = null;
		}
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
	},

	/**
	 * Triggers a `cosmoz-tab-toggle` event.
	 *
	 * @returns {void}
	 * @fires cosmoz-tab-toggle
	 */
	_onToggleTap() {
		this.dispatchEvent(new CustomEvent('cosmoz-tab-toggle', {
			bubbles: true,
			composed: true
		}));
	}
};

/** @polymerBehavior */
export const TabbedBehavior = [
	IronResizableBehavior,
	TabbedBehaviorImpl
];
