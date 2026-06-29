// @license Copyright (C) 2015 Neovici AB - Apache 2 License
import '@neovici/cosmoz-collapse';
import { normalize } from '@neovici/cosmoz-tokens/normalize';
import { component, css, html, useEffect, useState } from '@pionjs/pion';
import { when } from 'lit-html/directives/when.js';

export interface CosmozTabCardElement extends HTMLElement {
	heading?: string;
	collapsable?: boolean;
	collapsed?: boolean;
}

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

/**
 * @element cosmoz-tab-card
 * @attr {string} heading - card title
 * @attr {boolean} collapsable
 * @attr {boolean} collapsed
 * @csspart header - header row
 * @csspart heading - title
 * @csspart collapse-icon - collapse toggle
 * @csspart content - content container
 */
const CosmozTabCard = (host: CosmozTabCardElement) => {
	const { heading, collapsable, collapsed: isCollapsed } = host,
		[collapsed, setCollapsed] = useState(Boolean(isCollapsed)),
		toggleCollapsed = () => {
			if (!collapsable) {
				return;
			}
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
						`
					)}
					<h1 class="heading" @click=${toggleCollapsed} part="heading">
						${heading}<slot name="after-title"></slot>
					</h1>
					<slot name="card-actions"></slot>
				</div>`
		)}

		<cosmoz-collapse class="collapse" ?opened=${!collapsed}>
			<div class="content" part="content">
				<slot></slot>
			</div>
		</cosmoz-collapse>`;
};

const styles = css`
	:host {
		display: block;
		position: relative;
		box-sizing: border-box;
		align-self: flex-start;
		font-family: var(--cz-font-body, inherit);
		color: var(--cosmoz-tab-card-heading-color, var(--cz-color-text-primary));
		background-color: var(
			--cosmoz-tab-card-bg-color,
			var(--cz-color-bg-primary)
		);
		border: 1px solid
			var(--cosmoz-tab-card-border-color, var(--cz-color-border-secondary));
		border-radius: var(--cosmoz-tab-card-border-radius, var(--cz-radius-xl));
		box-shadow: var(--cosmoz-tab-card-shadow, var(--cz-shadow-xs));
		margin: var(--cosmoz-tab-card-margin, calc(var(--cz-spacing) * 2));
		padding: var(--cosmoz-tab-card-padding, 0);
		width: var(--cosmoz-tab-card-width, 300px);
		overflow: hidden;
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
		min-width: 0;
	}

	.content {
		line-height: var(
			--cosmoz-tab-card-content-line-height,
			var(--cz-text-sm-line-height)
		);
		padding: var(
			--cosmoz-tab-card-content-padding,
			calc(var(--cz-spacing) * 4)
		);
		flex: auto;
		min-width: 0;
		overflow-x: auto;
		overflow-wrap: anywhere;
	}

	.header {
		min-height: 48px;
		display: flex;
		align-items: center;
		gap: calc(var(--cz-spacing) * 2);
		padding: 0 calc(var(--cz-spacing) * 4);
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
	}

	.heading {
		margin: 0;
		font-size: var(--cz-text-lg, 18px);
		line-height: var(--cz-text-lg-line-height, 1.4);
		font-weight: var(--cz-font-weight-semibold, 600);
		flex: 1;
		color: inherit;
	}

	.collapse-icon {
		order: var(--cosmoz-tab-card-collapse-icon-order);
		display: inline-flex;
		color: var(--cz-color-text-tertiary, #667085);
		transition: transform 250ms linear;
		transform: rotate(0deg);
		margin-left: -4px;
	}

	.expand-more-icon {
		fill: currentColor;
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
		styleSheets: [normalize, styles],
	})
);
