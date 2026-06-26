import { css } from '@pionjs/pion';

export type TabsVariant = 'brand' | 'underline';

const bar = css`
	display: flex;
	align-items: stretch;
	gap: calc(var(--cz-spacing) * 3);
	font-family: var(--cz-font-body);
	font-size: var(--cz-text-sm);
	line-height: var(--cz-text-sm-line-height);
	font-weight: var(--cz-font-weight-semibold);
	box-shadow: inset 0 -1px 0 0 var(--cz-color-border-secondary);
	overflow-x: auto;
	scrollbar-width: none;
	-webkit-overflow-scrolling: auto;
`;

const item = css`
	position: relative;
	display: inline-flex;
	box-sizing: border-box;
	align-items: center;
	justify-content: center;
	gap: calc(var(--cz-spacing) * 1);
	padding: 0 calc(var(--cz-spacing) * 0.5) calc(var(--cz-spacing) * 2.5);
	color: var(--cz-color-text-quaternary);
	text-decoration: none;
	white-space: nowrap;
	cursor: pointer;
	transition: color 0.1s linear, background-color 0.1s linear,
		box-shadow 0.1s linear;
	outline: 0;
`;

const itemFocus = css`
	outline: 2px solid var(--cz-color-fg-brand);
	outline-offset: -2px;
`;

const itemDisabled = css`
	opacity: 0.5;
	cursor: not-allowed;
	pointer-events: none;
`;

const activeUnderline = css`
	color: var(--cz-color-text-brand);
	box-shadow: inset 0 -2px 0 0 var(--cz-color-fg-brand);
`;

const icon = css`
	width: 16px;
	height: 16px;
	flex-shrink: 0;
	color: var(--cz-color-fg-quaternary);
`;

const iconActive = css`
	color: var(--cz-color-fg-brand-secondary);
`;

const brandBar = css`
	gap: calc(var(--cz-spacing) * 1);
	box-shadow: none;
`;

const brandItem = css`
	padding: calc(var(--cz-spacing) * 2) calc(var(--cz-spacing) * 2.5);
	border-radius: var(--cz-radius-md);
`;

const brandActive = css`
	color: var(--cz-color-text-brand);
	background-color: var(--cz-color-bg-brand);
	box-shadow: none;
`;

const spreadItem = css`
	flex: 1 1 0;
`;

const badge = css`
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
	background-color: var(--cz-color-bg-brand);
	color: var(--cz-color-text-brand);
	text-align: center;
`;

export const legacyStyles = css`
	:host {
		position: relative;
		display: flex;
		flex-direction: column;
		font-family: var(--cz-font-body);
	}

	:host([hidden]) {
		display: none;
	}

	.tabs {
		${bar}
		flex: none;
	}

	.tabs::-webkit-scrollbar {
		display: none;
	}

	.tab {
		${item}
		${spreadItem}
	}

	.tab svg {
		${icon}
	}

	.tab:hover,
	.tab[aria-selected="true"] {
		${activeUnderline}
	}

	.tab:hover svg,
	.tab[aria-selected="true"] svg {
		${iconActive}
	}

	.tab:focus-visible {
		${itemFocus}
	}

	.tab[disabled] {
		${itemDisabled}
	}

	.tab[hidden] {
		display: none !important;
	}

	.badge {
		${badge}
	}

	#content {
		display: flex;
		flex-direction: column;
		flex: auto;
	}

	#content ::slotted(:not(slot):not([is-selected])) {
		display: none !important;
	}

	:host([variant="brand"]) .tabs {
		${brandBar}
	}

	:host([variant="brand"]) .tab {
		${brandItem}
	}

	:host([variant="brand"]) .tab:hover,
	:host([variant="brand"]) .tab[aria-selected="true"] {
		${brandActive}
	}

	:host([compact-width="true"]) .tab {
		flex: 0 1 auto;
	}

	:host(:not([compact-width="true"]):not([variant="brand"])) .tabs {
		gap: calc(var(--cz-spacing) * 4);
	}
`;

export const nextTabsStyles = css`
	:host {
		${bar}
		flex: none;
	}

	:host::-webkit-scrollbar {
		display: none;
	}

	:host([variant="brand"]) {
		${brandBar}
	}

	:host(:not([compact-width="true"]):not([variant="brand"])) {
		gap: calc(var(--cz-spacing) * 4);
	}
`;

export const nextTabStyles = css`
	:host {
		${item}
		${spreadItem}
	}

	:host(:hover),
	:host([active]) {
		${activeUnderline}
	}

	:host(:focus-visible) {
		${itemFocus}
	}

	:host([disabled]) {
		${itemDisabled}
	}

	:host([hidden]) {
		display: none !important;
	}

	a {
		display: contents;
		color: inherit;
		text-decoration: none;
	}

	#iconSlot::slotted(*) {
		flex-shrink: 0;
	}

	#iconSlot::slotted(svg) {
		${icon}
	}

	:host(:hover) #iconSlot::slotted(svg),
	:host([active]) #iconSlot::slotted(svg) {
		${iconActive}
	}

	#contentSlot::slotted(*) {
		flex: auto;
	}

	.badge {
		${badge}
	}

	:host([data-variant="brand"]) {
		${brandItem}
	}

	:host([data-variant="brand"]:hover),
	:host([data-variant="brand"][active]) {
		${brandActive}
	}

	:host([data-compact-width="true"]) {
		flex: 0 1 auto;
	}
`;
