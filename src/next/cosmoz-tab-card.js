// @license Copyright (C) 2015 Neovici AB - Apache 2 License
import { html, component } from 'haunted';
import '@neovici/cosmoz-collapse';
/**

@demo demo/card.html
@return {TemplateResult}

`<cosmoz-tab-card>` is a container element for a card. It should be used in conjunction with
`cosmoz-tab` and `cosmoz-tabs`

### Styling
The following custom properties and mixins are available for styling:

Custom property                         | Description              | Default
----------------------------------------|--------------------------|----------
`--cosmoz-tab-card-width`               | Card width               | `300px`
`--cosmoz-tab-card-padding`             | Card padding             | `0`
`--cosmoz-tab-card-content-line-height` | Card content line height | `initial`
`--cosmoz-tab-card-content-padding`     | Card content padding     | `initial`
*/
const CosmozTabCardNext = ({ heading }) => html` <style>
		:host {
			display: block;
			position: relative;
			box-sizing: border-box;
			background-color: #fff;
			border-radius: 3px;
			margin: 15px;
			align-self: flex-start;
			padding: var(--cosmoz-tab-card-padding, 0);
			width: var(--cosmoz-tab-card-width, 300px);
			box-shadow: var(
				--cosmoz-shadow-2dp,
				var(--shadow-elevation-2dp_-_box-shadow, 0 2px 4px 0 #e5e5e5)
			);
		}

		#content {
			line-height: var(--cosmoz-tab-card-content-line-height, initial);
			padding: var(--cosmoz-tab-card-content-padding, initial);
		}

		#header {
			display: flex;
			align-items: center;
			background-color: #fff;
			cursor: default;
			-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
		}

		.heading {
			font-family: inherit;
			font-size: 17px;
			font-weight: 400;
			flex: 1;
			margin: 0.67em 0 0;
		}
	</style>

	<div id="header" part="header">
		<h1 class="heading" part="heading">
			${heading}<slot name="after-title"></slot>
		</h1>
		<slot name="card-actions"></slot>
	</div>

	<div id="content" part="content">
		<slot></slot>
	</div>`;

customElements.define(
	'cosmoz-tab-card-next',
	component(CosmozTabCardNext, {
		observedAttributes: ['heading'],
	})
);
