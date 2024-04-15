// @license Copyright (C) 2015 Neovici AB - Apache 2 License
import { html, component, useState, useEffect } from '@pionjs/pion';
import '@neovici/cosmoz-collapse';
import { when } from 'lit-html/directives/when.js';
import { css } from './utils';

const collapseIcon = html`<svg
	width="16"
	height="16"
	viewBox="0 0 16 16"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<path d="M5 1L10 8L5 15" stroke="#101010" stroke-width="1.5" />
</svg>`;

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

const CosmozTabCard = (host) => {
	const { heading, collapsable, collapsed: isCollapsed } = host,
		[collapsed, setCollapsed] = useState(Boolean(isCollapsed)),
		toggleCollapsed = () => {
			if (!collapsable) return;
			return setCollapsed((c) => !c);
		};

	useEffect(() => {
		host.toggleAttribute('collapsed', collapsed);
	}, [collapsed]);

	return html`<div class="header" part="header">
			${when(
				collapsable,
				() => html`
					<div
						@click=${toggleCollapsed}
						class="collapse-icon"
						part="collapse-icon"
					>
						<slot name="collapse-icon">${collapseIcon}</slot>
					</div>
				`
			)}
			<h1 class="heading" @click=${toggleCollapsed} part="heading">
				${heading}<slot name="after-title"></slot>
			</h1>
			<slot name="card-actions"></slot>
		</div>

		<cosmoz-collapse class="collapse" ?opened=${!collapsed}>
			<div class="content" part="content">
				<slot></slot>
			</div>
		</cosmoz-collapse> `;
};

const style = css`
	:host {
		display: block;
		position: relative;
		box-sizing: border-box;
		background-color: var(--cosmoz-tab-card-bg-color, white);
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

	.collapse {
		display: flex;
		flex-direction: column;
		flex: auto;
	}

	.content {
		line-height: var(--cosmoz-tab-card-content-line-height, initial);
		padding: var(--cosmoz-tab-card-content-padding, initial);
		flex: auto;
	}

	.header {
		display: flex;
		align-items: center;
		gap: 8px;
		background-color: var(--cosmoz-tab-card-bg-color, white);
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
	}

	.heading {
		font-family: inherit;
		font-size: 17px;
		font-weight: 400;
		flex: 1;
	}

	.collapse-icon {
		order: var(--cosmoz-tab-card-collapse-icon-order);
		transition: transform 250ms linear;
		transform: rotate(90deg);
	}

	:host([collapsed]) .collapse-icon {
		transform: rotate(0deg);
	}

	:host([collapsable]) .collapse-icon,
	:host([collapsable]) .heading {
		cursor: pointer;
		user-select: none;
	}
`;

customElements.define(
	'cosmoz-tab-card',
	component(CosmozTabCard, {
		observedAttributes: ['heading', 'collapsable', 'collapsed'],
		styleSheets: [style],
	})
);
