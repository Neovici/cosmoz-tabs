// @license Copyright (C) 2015 Neovici AB - Apache 2 License
import '@polymer/iron-icon/iron-icon';
import '@polymer/iron-icons/iron-icons';
import '@polymer/paper-icon-button/paper-icon-button';

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
				position: relative;
				box-sizing: border-box;
				background-color: #fff;
				@apply --cosmoz-tab-card;
			}

			:host(:not([accordion])) {
				width: var(--cosmoz-tab-card-width, 300px);
				border-radius: 3px;
				margin: 15px;
				align-self: flex-start;
				box-shadow: var(--cosmoz-shadow-2dp, var(--shadow-elevation-2dp_-_box-shadow, 0 2px 4px 0 #e5e5e5));
			}

			:host(:not([accordion])) .heading {
				margin: 0.67em 0 0;
			}

			:host([accordion]) {
				width: 100%;
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
				display: flex;
				align-items: center;
				background-color: #fff;
				cursor: default;
				-webkit-tap-highlight-color: rgba(0,0,0,0);
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

			:host(:not([accordion])) .icon,
			:host(:not([accordion])) .button {
				display: none;
			}

			.heading {
				font-family: sans-serif;
				@apply --paper-font-common-base;
				font-size: 17px;
				font-weight: 400;
				flex: 1;
			}
		</style>

		<div id="header" on-tap="_onToggleTap" part="header">
			<iron-icon class="icon" icon="[[ getIcon(isSelected, accordion, icon, selectedIcon) ]]"
				style$="[[ getIconStyle(iconColor) ]]"></iron-icon>
			<h1 class="heading">[[ heading ]]<slot name="after-title"></slot></h1>
			<slot name="card-actions"></slot>
			<paper-icon-button class="button" icon$="{{ _computeOpenedIcon(isSelected) }}"></paper-icon-button>
		</div>

		<div id="content" part="content">
			<slot></slot>
		</div>
`;
	}

	static get is() {
		return 'cosmoz-tab-card';
	}
}
customElements.define(CosmozTabCard.is, CosmozTabCard);
