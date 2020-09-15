/* eslint-disable max-lines-per-function */

import { Debouncer } from '@polymer/polymer/lib/utils/debounce';
import { animationFrame } from '@polymer/polymer/lib/utils/async';
import { dashToCamelCase } from '@polymer/polymer/lib/utils/case-map';
import { useShadow } from '@polymer/polymer/lib/utils/settings';

import { IronResizableBehavior } from '@polymer/iron-resizable-behavior/iron-resizable-behavior';
import {
	IronSelectableBehavior
} from '@polymer/iron-selector/iron-selectable';

export const
	/** @polymerBehavior */
	TabbableBehaviorImpl = {
		properties: {
			/**
			 * The event that fires from items when they are selected. Selectable
			 * will listen for this event from items and update the selection state.
			 * Set to empty string to listen to no events.
			 */
			activateEvent: {
				type: String,
				value: null
			},

			/**
			 * The class to set on elements when selected.
			 */
			selectedClass: {
				type: String,
				value: 'cosmoz-selected'
			},

			/**
			 * The attribute to set on elements when selected.
			 */
			selectedAttribute: {
				type: String,
				value: 'is-selected'
			}

		},

		observers: [
			'_forwardProperty("accordion", accordion, items)'
		],

		created() {
			this._onIronSelectHandler = this._onIronSelect.bind(this);
		},

		attached() {
			this.addEventListener('iron-select', this._onIronSelectHandler);
		},

		detached() {
			this.removeEventListener('iron-select', this._onIronSelectHandler);
			if (this._debouncer != null) {
				this._debouncer.cancel();
				this._debouncer = null;
			}
		},

		/**
		 * Forwards a property to all items.
		 *
		 * @param  {String} property The name of the property
		 * @param  {*} value The value of the property
		 * @param  {Array} items The items to forward property to
		 * @returns {void}
		 */
		_forwardProperty(property, value, items) {
			items.forEach(item => item.set?.(property, value));
		},

		/**
		 * Computes the value for item depending on a attribute.
		 *
		 * @param  {HTMLElement} item The item to compute value for
		 * @param  {type} attr The attribute used to compute the value
		 * @returns {String|Number|void} The compute value
		 */
		_valueForItem(item, attr = this.attrForSelected) {
			if (!item) {
				return;
			}

			if (!attr) {
				return this.items.indexOf(item);
			}

			const propValue = item[dashToCamelCase(attr)];
			return propValue !== undefined ? propValue : item.getAttribute(attr);
		},

		/**
		 * Listens to `iron-select` event and fires
		 * `tab-first-select` and `tab-select` on the selected item.
		 *
		 * @param  {Event} e  The event object
		 * @param  {Object} detail The detail object
		 * @param  {HTMLElement} detail.item The item being selected.
		 * @fires 'tab-first-select'
		 * @fires 'tab-select'
		 * @return {void}        description
		 */
		_onIronSelect(e) {
			const item = e.detail.item,
				index = this.items.indexOf(item);

			if (index < 0) {
				return;
			}
			const eventOpts = {
				bubbles: false,
				composed: true,
				detail: {}
			};

			this._debouncer = Debouncer.debounce(this._debouncer,
				animationFrame,
				this.notifyResize.bind(this)
			);

			if (!item.isActive) {
				item.dispatchEvent(new CustomEvent('tab-first-select', eventOpts));
				item.isActive = true;
			}
			item.dispatchEvent(new CustomEvent('tab-select', eventOpts));
		},

		_normalizeValue(value) {
			if (this.attrForSelected) {
				return value;
			}

			if (isNaN(value) || value === null) {
				return value;
			}

			return Number(value);
		},

		/**
			* True if the current element is visible.
			*/
		get _isVisible() {
			return Boolean(this.offsetWidth || this.offsetHeight);
		},

		resizerShouldBeNotified() {
			return true;
		},

		_onDescendantIronResize(event) {
			if (this._notifyingDescendant || !this._isVisible || !this.resizerShouldBeNotified(event.target)) {
				event.stopPropagation();
				return;
			}

			if (useShadow && event.target.domHost === this) {
				return;
			}

			this._fireResize();
		},

		notifyResize() {
			if (!this.isAttached || !this._isVisible) {
				return;
			}
			IronResizableBehavior.notifyResize.call(this);
		}

	},

	/** @polymerBehavior */
	TabbableBehavior = [
		IronResizableBehavior,
		IronSelectableBehavior,
		TabbableBehaviorImpl
	];
