/* Styles of the `cosmoz-tab-next` item itself; the bar's are in ./styles */
import { css } from '@pionjs/pion';

const item = css`
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
	transition:
		color 0.1s linear,
		background-color 0.1s linear,
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

const brandItem = css`
	padding: calc(var(--cz-spacing) * 2) calc(var(--cz-spacing) * 2.5);
	border-radius: var(--cz-radius-md);
`;

const brandActive = css`
	color: var(--cz-color-text-on-brand);
	background-color: var(--cz-color-bg-brand-solid);
	box-shadow: none;
`;

const segmentedItem = css`
	padding: calc(var(--cz-spacing) * 2) calc(var(--cz-spacing) * 2.5);
	border-radius: var(--cz-radius-sm);
`;

const segmentedActive = css`
	color: var(--cz-color-text-secondary);
	background-color: var(--cz-color-bg-primary);
	box-shadow: var(--cz-shadow-sm);
`;

const segmentedIconActive = css`
	color: var(--cz-color-fg-secondary-hover);
`;

const smItem = css`
	padding-block: calc(var(--cz-spacing) * 1.5);
`;

const smButtonItem = css`
	padding-inline: calc(var(--cz-spacing) * 2);
`;

const spreadItem = css`
	flex: 1 1 0;
`;

// Untitled UI badge, size sm: a "pill color" counter that steps up a surface while
// the tab is hot, and their "modern" square-ish one for the button-style tabs.
const badge = css`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	box-sizing: border-box;
	font-size: var(--cz-text-xs);
	font-weight: var(--cz-font-weight-medium);
	line-height: var(--cz-text-xs-line-height);
	padding: 2px calc(var(--cz-spacing) * 2);
	max-width: 80px;
	overflow: hidden;
	text-overflow: ellipsis;
	text-align: center;
	border-radius: var(--cz-radius-full);
	background-color: var(--cz-color-bg-secondary);
	color: var(--cz-color-text-secondary);
	box-shadow: inset 0 0 0 1px var(--cz-color-border-secondary);
`;

const badgeHot = css`
	background-color: var(--cz-color-bg-tertiary);
	color: var(--cz-color-text-primary);
	box-shadow: inset 0 0 0 1px var(--cz-color-border-primary);
`;

const badgeModern = css`
	padding: 2px calc(var(--cz-spacing) * 1.5);
	border-radius: var(--cz-radius-sm);
	background-color: var(--cz-color-bg-primary);
	color: var(--cz-color-text-secondary);
	box-shadow:
		inset 0 0 0 1px var(--cz-color-border-primary),
		var(--cz-shadow-xs);
`;

/* Menu rows are the same element with a `menu` attribute, so these ride on
   the item styles with menu-appropriate tweaks. */
const menuItem = css`
	${item}
	flex: 0 0 auto;
	justify-content: flex-start;
	gap: calc(var(--cz-spacing) * 2);
	padding: calc(var(--cz-spacing) * 2) calc(var(--cz-spacing) * 2.5);
	border-radius: var(--cz-radius-sm);
	box-shadow: none;
`;

const menuItemHover = css`
	color: var(--cz-color-text-secondary);
	background-color: var(--cz-color-bg-primary-hover);
	box-shadow: none;
`;

const menuItemActive = brandActive;

const overflowing = css`
	visibility: hidden;
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

	:host([overflowing]) {
		${overflowing}
	}

	:host([menu]) {
		${menuItem}
	}

	:host([menu]:hover) {
		${menuItemHover}
	}

	:host([menu][active]) {
		${menuItemActive}
	}

	:host([menu][active]) #iconSlot::slotted(svg) {
		color: var(--cz-color-text-on-brand);
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

	:host(:not([variant='segmented']):hover) .badge,
	:host(:not([variant='segmented'])[active]) .badge {
		${badgeHot}
	}

	:host([variant='segmented']) .badge {
		${badgeModern}
	}

	:host([variant='brand']) {
		${brandItem}
	}

	:host([variant='brand']:hover),
	:host([variant='brand'][active]) {
		${brandActive}
	}

	:host([variant='brand']:hover) #iconSlot::slotted(svg),
	:host([variant='brand'][active]) #iconSlot::slotted(svg) {
		color: var(--cz-color-text-on-brand);
	}

	:host([variant='segmented']) {
		${segmentedItem}
	}

	:host([variant='segmented']:hover),
	:host([variant='segmented'][active]) {
		${segmentedActive}
	}

	:host([variant='segmented']:hover) #iconSlot::slotted(svg),
	:host([variant='segmented'][active]) #iconSlot::slotted(svg) {
		${segmentedIconActive}
	}

	:host([compact-width]) {
		flex: 0 1 auto;
	}

	/* Last, so the size wins over whichever variant set the box above. */
	:host([size='sm']) {
		${smItem}
	}

	:host([size='sm']:is([variant='brand'], [variant='segmented'])) {
		${smButtonItem}
	}
`;
