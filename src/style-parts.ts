import { css } from '@pionjs/pion';

export const bar = css`
	display: flex;
	align-items: stretch;
	gap: calc(var(--cz-spacing) * 3);
	padding-inline: calc(var(--cz-spacing) * 3);
	font-family: var(--cz-font-body);
	font-size: var(--cz-text-sm);
	line-height: var(--cz-text-sm-line-height);
	font-weight: var(--cz-font-weight-semibold);
	box-shadow: inset 0 -1px 0 0 var(--cz-color-border-secondary);
	overflow: clip;
`;

// clip the tab strip without making it scrollable.
// focus should not shift the geometry we measure.
export const items = css`
	display: flex;
	align-items: stretch;
	gap: inherit;
	flex: 1 1 auto;
	min-width: 0;
	overflow: clip;
`;

export const overflowing = css`
	visibility: hidden;
`;

export const item = css`
	position: relative;
	display: inline-flex;
	box-sizing: border-box;
	align-items: center;
	justify-content: center;
	gap: calc(var(--cz-spacing) * 1);
	padding: calc(var(--cz-spacing) * 2.5) calc(var(--cz-spacing) * 0.5);
	color: var(--cz-color-text-quaternary);
	text-decoration: none;
	white-space: nowrap;
	cursor: pointer;
	transition: color 0.1s linear, background-color 0.1s linear,
		box-shadow 0.1s linear;
	outline: 0;
`;

export const itemFocus = css`
	outline: 2px solid var(--cz-color-fg-brand);
	outline-offset: -2px;
`;

export const itemDisabled = css`
	opacity: 0.5;
	cursor: not-allowed;
	pointer-events: none;
`;

export const activeUnderline = css`
	color: var(--cz-color-text-brand);
	box-shadow: inset 0 -2px 0 0 var(--cz-color-fg-brand);
`;

export const icon = css`
	width: 16px;
	height: 16px;
	flex-shrink: 0;
	color: var(--cz-color-fg-quaternary);
`;

export const iconActive = css`
	color: var(--cz-color-fg-brand-secondary);
`;

export const brandBar = css`
	gap: calc(var(--cz-spacing) * 1);
	box-shadow: none;
`;

export const brandItem = css`
	padding: calc(var(--cz-spacing) * 2) calc(var(--cz-spacing) * 2.5);
	border-radius: var(--cz-radius-md);
`;

export const brandActive = css`
	color: var(--cz-color-text-on-brand);
	background-color: var(--cz-color-bg-brand-solid);
	box-shadow: none;
`;

export const spreadItem = css`
	flex: 1 1 0;
`;

export const badge = css`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	box-sizing: border-box;
	font-size: var(--cz-text-xs);
	font-weight: var(--cz-font-weight-medium);
	line-height: var(--cz-text-xs-line-height);
	border-radius: var(--cz-radius-full);
	padding: 0 calc(var(--cz-spacing) * 2);
	min-width: calc(var(--cz-spacing) * 5);
	max-width: 80px;
	overflow: hidden;
	text-overflow: ellipsis;
	background-color: var(--cz-color-bg-brand-solid);
	color: var(--cz-color-text-on-brand);
	text-align: center;
`;

export const moreItem = css`
	${item}
	flex: 0 0 auto;
	background: none;
	border: 0;
	font: inherit;
	appearance: none;
`;

export const menu = css`
	display: flex;
	flex-direction: column;
	box-sizing: border-box;
	gap: calc(var(--cz-spacing) * 0.5);
	min-width: 180px;
	max-height: 60vh;
	overflow-y: auto;
	padding: calc(var(--cz-spacing) * 1.5);
	background-color: var(--cz-color-bg-primary);
	border: 1px solid var(--cz-color-border-secondary);
	border-radius: var(--cz-radius-md);
	box-shadow: var(--cz-shadow-lg);
	font-family: var(--cz-font-body);
	font-size: var(--cz-text-sm);
	line-height: var(--cz-text-sm-line-height);
	font-weight: var(--cz-font-weight-semibold);
`;

export const menuItem = css`
	${item}
	flex: 0 0 auto;
	justify-content: flex-start;
	gap: calc(var(--cz-spacing) * 2);
	padding: calc(var(--cz-spacing) * 2) calc(var(--cz-spacing) * 2.5);
	border-radius: var(--cz-radius-sm);
	box-shadow: none;
`;

export const menuItemHover = css`
	color: var(--cz-color-text-secondary);
	background-color: var(--cz-color-bg-primary-hover);
	box-shadow: none;
`;

export const menuItemActive = brandActive;

export const overflowMenu = css`
	.more {
		flex: 0 0 auto;
		display: inline-flex;
		align-items: stretch;
	}

	.more[hidden] {
		display: none;
	}

	.more-button {
		${moreItem}
	}

	.more-button .chevron {
		display: contents;
	}

	.more-button svg {
		${icon}
		transition: transform 0.15s ease;
	}

	.more[opened] .more-button svg {
		transform: rotate(180deg);
	}

	.more-button:hover,
	.more[data-active] .more-button {
		${activeUnderline}
	}

	.more-button:hover svg,
	.more[data-active] .more-button svg {
		${iconActive}
	}

	.more-button:focus-visible {
		${itemFocus}
	}

	:host([variant="brand"]) .more-button {
		${brandItem}
	}

	:host([variant="brand"]) .more-button:hover,
	:host([variant="brand"]) .more[data-active] .more-button {
		${brandActive}
	}

	:host([variant="brand"]) .more-button:hover svg,
	:host([variant="brand"]) .more[data-active] .more-button svg {
		color: var(--cz-color-text-on-brand);
	}

	.menu {
		${menu}
	}
`;
