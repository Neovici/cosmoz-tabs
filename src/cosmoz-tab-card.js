// @license Copyright (C) 2015 Neovici AB - Apache 2 License
import { html, component, useState, useEffect } from '@pionjs/pion';
import { when } from 'lit-html/directives/when.js';
import { css } from './utils';
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

const expandMoreIcon = () => html`
	<svg
		class="expand-more-icon"
		viewBox="0 0 24 24"
		preserveAspectRatio="xMidYMid meet"
		focusable="false"
		width="24"
		height="24"
	>
		<path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
	</svg>
`;

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

	return html`${when(
			heading,
			() =>
				html`<div class="header" part="header">
					${when(
						collapsable,
						() => html`
							<div
								@click=${toggleCollapsed}
								class="collapse-icon"
								part="collapse-icon"
							>
								<slot name="collapse-icon">${expandMoreIcon()}</slot>
							</div>
						`,
					)}
					<h1 class="heading" @click=${toggleCollapsed} part="heading">
						${heading}<slot name="after-title"></slot>
					</h1>
					<slot name="card-actions"></slot>
				</div>`,
		)}

		<cosmoz-collapse class="collapse" ?opened=${!collapsed}>
			<div class="content" part="content">
				<slot></slot>
			</div>
		</cosmoz-collapse>`;
};

const style = css`
	:host {
		display: block;
		position: relative;
		box-sizing: border-box;
		background-color: var(--cosmoz-tab-card-bg-color, white);
		border-radius: var(--cosmoz-tab-card-border-radius, 10px);
		border: 1px solid var(--cosmoz-tab-card-border-color, rgb(229, 230, 236));
		margin: var(--cosmoz-tab-card-margin, 10px);
		align-self: flex-start;
		padding: var(--cosmoz-tab-card-padding, 0);
		width: var(--cosmoz-tab-card-width, 300px);
	}

	:host([heading]) h1 {
		display: block;
	}

	h1.heading {
		display: none;
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
		min-height: 40px;
		display: flex;
		align-items: center;
		gap: 10px;
		background-color: var(--cosmoz-tab-card-bg-color, white);
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
	}

	.heading {
		font-family: inherit;
		font-size: 17px;
		font-weight: 500;
		flex: 1;
		color: var(--cosmoz-tab-card-heading-color, rgb(0, 0, 0));
	}

	.collapse-icon {
		order: var(--cosmoz-tab-card-collapse-icon-order);
		transition: transform 250ms linear;
		transform: rotate(0deg);
		margin: 0 0 0 -5px;
	}

	:host([collapsed]) .collapse-icon {
		transform: rotate(-90deg);
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
	}),
);
