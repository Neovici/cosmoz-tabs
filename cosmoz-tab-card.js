// @license Copyright (C) 2015 Neovici AB - Apache 2 License

class CosmozTabCard extends Polymer.mixinBehaviors(Cosmoz.TabbedBehavior, Polymer.Element) {
	static get is() {
		return 'cosmoz-tab-card';
	}

	static get properties() {
		return {
			/**
			 * The z-depth of this element, from 0-5.
			 */
			elevation: {
				type: Number,
				computed: '_computeElevation(accordion)'
			}
		};
	}

	/** Computes `elevation` depending on the `according` property.
	 *
	 * @param  {String} accordion The hex color
	 * @return {Number}           The CSS style
	 */
	_computeElevation(accordion) {
		return accordion ? 0 : 1;
	}
}
customElements.define(CosmozTabCard.is, CosmozTabCard);
