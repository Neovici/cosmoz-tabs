// @license Copyright (C) 2015 Neovici AB - Apache 2 License

import '@webcomponents/shadycss/entrypoints/apply-shim';
import '@polymer/iron-icon/iron-icon';
import '@polymer/iron-icons/iron-icons';
import '@polymer/paper-icon-button/paper-icon-button';
import '@polymer/paper-material/paper-material';

import { PolymerElement } from '@polymer/polymer/polymer-element';
import { html } from '@polymer/polymer/lib/utils/html-tag';

import { TabbedBehavior } from './cosmoz-tabbed-behavior.js';
import { mixinBehaviors } from '@polymer/polymer/lib/legacy/class';

/**
`<cosmoz-tab-card>` is a container element for a card. It should be used in conjunction with
`cosmoz-tab` and `cosmoz-tabs`

### Styling
The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--cosmoz-tab-card-width` | Card width | `300px`
`--cosmoz-tab-card` | Mixin applied to the card | `{}`
`--cosmoz-tab-card-accordion` | Mixin applied to the card in accordion mode | `{}`
`--cosmoz-tab-card-content` | Mixin applied to the card content | `{}`
`--cosmoz-tab-card-content-accordion` | Mixin applied to the card content in accordion mode | `{}`
`--cosmoz-tab-card-header` | Mixin applied to the card header | `{}`
`--cosmoz-tab-card-header-accordion` | Mixin applied to the card header in accordion mode | `{}`

@demo demo/card.html
*/
class CosmozTabCard extends mixinBehaviors(TabbedBehavior, PolymerElement) {
	/* eslint-disable-next-line max-lines-per-function*/
	static get template() {
		return html`
		<style>

			:host {
				display: block;
			}

			:host(:not([accordion])) {
				width: var(--cosmoz-tab-card-width, 300px);
				border-radius: 3px;
				margin: 15px;
			}

			:host(:not([accordion])) .heading {
				margin: 0.67em 0 0;
			}

			:host([accordion]) {
				width: 100%;
			}

			#card {
				background-color: #fff;
				@apply --cosmoz-tab-card;
			}

			:host([accordion]) #card {
				background-color: #fafafa;
				@apply --cosmoz-tab-card-accordion;
			}

			#content {
				@apply --cosmoz-tab-card-content;
			}

			:host([accordion]) #content {
				transition-duration: var(--cosmoz-tab-transition-duration, 300ms);
				overflow: hidden;
				transform: translate3d(0,0,0);
				backface-visibility: hidden;
			}

			:host([accordion]:not([is-selected]):not([animating])) #content {
				display: none;
				@apply --cosmoz-tab-card-content-accordion;
			}

			#header {
				background-color: #fff;
				cursor: default;
				-webkit-tap-highlight-color: rgba(0,0,0,0);
				@apply --layout-horizontal;
				@apply --layout-center;
				@apply --cosmoz-tab-card-header;
			}

			:host([accordion]) #header {
				border-bottom: 1px solid #e2e2e2;
				cursor: pointer;
				@apply --cosmoz-tab-card-header-accordion;
			}

			:host([accordion][is-selected]) #header {
				background-color: #efefef;
			}

			.icon {
				height: 13px;
				width: 13px;
				margin: 0 9px;
			}

			.button {
				--iron-icon-width: 24px;
				--iron-icon-height: 24px;
			}

			.heading {
				font-family: sans-serif;
				@apply --paper-font-common-base;
				font-size: 17px;
				font-weight: 400;
				@apply --layout-flex;
			}

			#card {
				display: block;
				position: relative;
			}

		</style>

		<paper-material id="card" elevation="[[ elevation ]]">
			<div id="header" on-tap="_onToggleTap">
				<iron-icon class="icon" icon="[[ getIcon(isSelected, accordion, icon, selectedIcon) ]]"
					style$="[[ getIconStyle(iconColor) ]]" hidden$="[[ !accordion ]]"></iron-icon>
				<h1 class="heading">[[ heading ]]</h1>
				<slot name="card-actions"></slot>
				<paper-icon-button class="button" hidden$="[[ !accordion ]]" icon$="{{ _computeOpenedIcon(isSelected) }}"></paper-icon-button>
			</div>

			<div id="content">
				<slot></slot>
			</div>
		</paper-material>
`;
	}

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
	 * @param	 {String} accordion The hex color
	 * @return {Number}						The CSS style
	 */
	_computeElevation(accordion) {
		return accordion ? 0 : 1;
	}
}
customElements.define(CosmozTabCard.is, CosmozTabCard);
