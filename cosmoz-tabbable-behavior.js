/* eslint-disable max-lines-per-function */

import { Debouncer } from '@polymer/polymer/lib/utils/debounce';
import { animationFrame } from '@polymer/polymer/lib/utils/async';
import { dashToCamelCase } from '@polymer/polymer/lib/utils/case-map';
import { useShadow } from '@polymer/polymer/lib/utils/settings';

import { IronResizableBehavior } from '@polymer/iron-resizable-behavior/iron-resizable-behavior';
import {
	IronMultiSelectableBehaviorImpl, IronMultiSelectableBehavior
} from '@polymer/iron-selector/iron-multi-selectable';

export const
	/** @polymerBehavior */
	TabbableBehaviorImpl = {
		properties: {

			/**
			 * Toggles the accordion mode for the element.
			 * If true the element allows multiple selections.
			 *
			 */
			accordion: {
				type: Boolean,
				value: false,
				notify: true,
				reflectToAttribute: true
			},

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
			},

			/**
			 * If true, multiple selections are allowed.
			 */
			multi: {
				type: String,
				computed: '_computeMulti(accordion)'
			}
		},

		observers: [
			'_forwardProperty("accordion", accordion, items)'
		],

		created() {
			this._onToggleTabHandler = this._onToggleTab.bind(this);
			this._onIronSelectHandler = this._onIronSelect.bind(this);
			this._onTabActivateHandler = this._onTabActivate.bind(this);
		},

		attached() {
			this.addEventListener('cosmoz-tab-toggle', this._onToggleTabHandler);
			this.addEventListener('iron-select', this._onIronSelectHandler);
			this.addEventListener('tab-activate', this._onTabActivateHandler);
		},

		detached() {
			this.removeEventListener('cosmoz-tab-toggle', this._onToggleTabHandler);
			this.removeEventListener('iron-select', this._onIronSelectHandler);
			this.removeEventListener('tab-activate', this._onTabActivateHandler);
			if (this._debouncer != null) {
				this._debouncer.cancel();
				this._debouncer = null;
			}
		},

		/**
		 * Computes the `multi` property depending on
		 * `accordion` value
		 *
		 * @param  {Boolean} accordion The `accordion` property
		 * @returns {Boolean} True if accordion is true
		 */
		_computeMulti(accordion) {
			return !!accordion;
		},


		/**
		 * Handles the `cosmoz-tab-toggle` fired from an item
		 * and toggles selection on that item.
		 *
		 * @param  {Event} e The `cosmoz-tab-toggle` event
		 * @returns {void}
		 */
		_onToggleTab(e) {
			const item = e.target,
				index = this.items.indexOf(item);

			if (index > -1) {
				const value = this._indexToValue(index),
					options = {
						bubbles: true,
						composed: true,
						cancelable: true,
						detail: {
							selected: value,
							item
						}
					};
				if (this.dispatchEvent(new CustomEvent('tab-activate', options))) {
					this.select(value);
				}
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

		_toggleSelected(value) {
			IronMultiSelectableBehaviorImpl._toggleSelected.call(this, this._normalizeValue(value));
		},

		_onTabActivate(e) {
			if (this.multi && this.fallbackSelection !== null && this.selectedItems.length === 1 && this.selectedItems[0] === e.detail.item) {
				e.preventDefault();
			}
		},

		multiChanged(multi, old) {
			this._selection.multi = multi;
			if (multi === true && old === false && this.selected != null) {
				this.set('selectedValues', [this._normalizeValue(this.selected)]);
			} else if (multi === false && old === true && this.selectedValues[0] !== undefined) {
				this._selectMulti([this.selectedValues[0]]);
				this.selected = this.selectedValues[0];
			}
			this._updateSelected();
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
		IronMultiSelectableBehavior,
		TabbableBehaviorImpl
	];
