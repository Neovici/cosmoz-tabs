// @license Copyright (C) 2015 Neovici AB - Apache 2 License

class CosmozTab extends Polymer.mixinBehaviors([Cosmoz.TabbedBehavior, Cosmoz.TabbableBehavior, Cosmoz.TabbedTemplateBehavior], Polymer.Element) {
	/**
	 * Fired when `hidden`, `disabled`,'heading' or `badge` tab properties change.
	 *
	 * @event tab-property-changed
	 * @param {String} detail.property The property name
	 * @param {String|Number|Object|*} detail.value The property value
	 * @param {HTMLElement} detail.item The item that changed.
	 */

	static get is() {
		return 'cosmoz-tab';
	}
	static get properties() {
		return {
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
		};
	}

	static get observers() {
		return [
			'_notifyProperty("hidden", hidden)',
			'_notifyProperty("disabled", disabled)',
			'_notifyProperty("heading", heading)',
			'_notifyProperty("badge", badge)',
			'_onAccordionChangedRender(accordion)'
		];
	}

	constructor() {
		super();
		this._onResize = this._onResize.bind(this);
		this.render = this.render.bind(this);
	}

	connectedCallback() {
		super.connectedCallback();
		this.addEventListener('iron-resize', this._onResize);
		this.addEventListener('tab-first-select', this.render);
	}

	disconnectedCallback() {
		super.disconnectedCallback();
		this.removeEventListener('iron-resize', this._onResize);
		this.removeEventListener('tab-first-select', this.render);
	}
	/**
	 * get invalid - True if the element is `hidden` or `disabled`.
	 * @returns {Boolean}  True if invalid
	 */
	get invalid() {
		return this.disabled || this.hidden;
	}

	get animated() {
		return this.accordion && !this.hasCards;
	}

	_onResize() {
		// HACK(pasleq): Can't explain why, but under Chrome 62, we've experienced disappearing content
		// the tab content is scolled. This hack seems to fix this issue.
		var scrollTop = this.$.content.scrollTop;
		this.$.content.scrollTop = 0;
		this.$.content.scrollTop = scrollTop;
	}

	/**
	 * Computes `hasCards` depending on `items`.
	 *
	 * @param  {Array} items Array of selectable items
	 * @returns {Boolean} True if items is not empty
	 */
	_computeHasCards(items = this.items) {
		return items && items.length > 0;
	}

	/**
	 * Observes changes to a property and dispatches a bubbling
	 * `tab-property-changed` event.
	 *
	 * @fires tab-property-changed
	 * @param {String} property The name of the changed property
	 * @param {String|Number|Object|*} value The value of the changed property.
	 * @return {void}

	 */
	_notifyProperty(property, value) {
		this.dispatchEvent(new CustomEvent('tab-property-changed', {
			bubbles: true,
			composed: true,
			detail: {
				property,
				value,
				item: this
			}
		}));
	}

	resizerShouldBeNotified(resizable) {
		return resizable.parentNode !== this.$.header;
	}

	_onAccordionChangedRender(accordion) {
		if (accordion) {
			this.render();
		}
	}
}
customElements.define(CosmozTab.is, CosmozTab);