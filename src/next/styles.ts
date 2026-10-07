import { css } from '@pionjs/pion';

export type TabsVariant = 'brand' | 'underline' | 'segmented';

/**
 * The default size is the unnamed one - omit the attribute to get it. `sm`
 * trims the item's box on both axes so a control that sits beside a heading
 * does not out-weigh it; the type is left alone, so the labels stay as
 * readable as they were.
 */
export type TabsSize = 'sm';

/* The track wraps and clips itself to the first row: tabs that do not
   fit land on a second row in the layout and are painted away by their
   mark, so the observer's geometry is stable under the marks. */
const bar = css`
	display: flex;
	flex-wrap: wrap;
	align-items: flex-start;
	gap: calc(var(--cz-spacing) * 3);
	padding-inline: calc(var(--cz-spacing) * 3);
	font-family: var(--cz-font-body);
	font-size: var(--cz-text-sm);
	line-height: var(--cz-text-sm-line-height);
	font-weight: var(--cz-font-weight-semibold);
	box-shadow: inset 0 -1px 0 0 var(--cz-color-border-secondary);
	min-width: 0;
	overflow: clip;
	/* The band is one row's box, exact per size/variant: the item's box is
	   fully token-derived (fixed line-height, paddings, 16px icon), so
	   the clip is a constant the observer's intersections read against. */
	max-height: 41px; /* underline */
`;

const menu = css`
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
	color: var(--cz-color-text-on-brand);
	background-color: var(--cz-color-bg-brand-solid);
	box-shadow: none;
`;

// Untitled UI's "button border" tabs: a track holding a raised, selected pill.
const segmentedBar = css`
	gap: calc(var(--cz-spacing) * 1);
	padding: calc(var(--cz-spacing) * 1);
	border-radius: var(--cz-radius-lg);
	background-color: var(--cz-color-bg-secondary);
	box-shadow: inset 0 0 0 1px var(--cz-color-border-secondary);
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

/* The track's own ring is what stacks onto the item's padding, so the compact
   size has to thin that too or the height barely moves. */
const smSegmentedBar = css`
	padding: calc(var(--cz-spacing) * 0.75);
	border-radius: var(--cz-radius-md);
`;

const moreItem = css`
	${item}
	flex: 0 0 auto;
	background: none;
	border: 0;
	font: inherit;
	appearance: none;
`;

export const nextTabsStyles = css`
	:host {
		${bar}
		flex: 0 1 auto;
		min-width: 0;
	}

	:host([variant='brand']) {
		${brandBar}
	}

	:host([variant='segmented']) {
		${segmentedBar}
	}

	/* brand and segmented item boxes sit a touch shorter: 37px; sm trims
	   all variants to 33px */
	:host([variant='brand']),
	:host([variant='segmented']) {
		max-height: 37px;
	}

	:host([size='sm']) {
		max-height: 33px;
	}

	/* The track hugs its tabs when they are not spread, staying within
	   the container's width. */
	:host([variant='segmented'][compact-width]) {
		box-sizing: border-box;
		width: max-content;
		max-width: 100%;
	}

	:host(
		:not([compact-width]):not([variant='brand']):not([variant='segmented'])
	) {
		gap: calc(var(--cz-spacing) * 4);
	}

	:host([variant='segmented'][size='sm']) {
		${smSegmentedBar}
	}

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

	:host([variant='brand']) .more-button {
		${brandItem}
	}

	:host([variant='brand']) .more-button:hover,
	:host([variant='brand']) .more[data-active] .more-button {
		${brandActive}
	}

	:host([variant='brand']) .more-button:hover svg,
	:host([variant='brand']) .more[data-active] .more-button svg {
		color: var(--cz-color-text-on-brand);
	}

	:host([variant='segmented']) .more-button {
		${segmentedItem}
	}

	:host([variant='segmented']) .more-button:hover,
	:host([variant='segmented']) .more[data-active] .more-button {
		${segmentedActive}
	}

	:host([variant='segmented']) .more-button:hover svg,
	:host([variant='segmented']) .more[data-active] .more-button svg {
		${segmentedIconActive}
	}

	:host([size='sm']) .more-button {
		${smItem}
	}

	:host([size='sm']:is([variant='brand'], [variant='segmented'])) .more-button {
		${smButtonItem}
	}

	.menu {
		${menu}
	}
`;
