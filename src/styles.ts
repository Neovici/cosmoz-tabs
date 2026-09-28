import { css } from '@pionjs/pion';
import {
	activeUnderline,
	badge,
	badgeHot,
	badgeModern,
	bar,
	brandActive,
	brandBar,
	brandItem,
	icon,
	iconActive,
	item,
	itemDisabled,
	itemFocus,
	items,
	menuItem,
	menuItemActive,
	menuItemHover,
	overflowMenu,
	overflowing,
	segmentedActive,
	segmentedBar,
	segmentedIconActive,
	segmentedItem,
	smButtonItem,
	smItem,
	smSegmentedBar,
	spreadItem,
} from './style-parts';

export type TabsVariant = 'brand' | 'underline' | 'segmented';

/**
 * The default size is the unnamed one - omit the attribute to get it. `sm`
 * trims the item's box on both axes so a control that sits beside a heading
 * does not out-weigh it; the type is left alone, so the labels stay as
 * readable as they were.
 */
export type TabsSize = 'sm';

export const legacyStyles = css`
	:host {
		position: relative;
		display: flex;
		flex-direction: column;
		font-family: var(--cz-font-body);
		gap: calc(var(--cz-spacing) * 3);
		min-width: 0;
	}

	:host([hidden]) {
		display: none;
	}

	.tabs {
		${bar}
		flex: none;
	}

	.items {
		${items}
	}

	.tab {
		${item}
		${spreadItem}
	}

	.tab[overflowing] {
		${overflowing}
	}

	.tab svg {
		${icon}
	}

	.tab:hover,
	.tab[aria-selected='true'] {
		${activeUnderline}
	}

	.tab:hover svg,
	.tab[aria-selected='true'] svg {
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

	:host(:not([variant='segmented'])) .tab:hover .badge,
	:host(:not([variant='segmented'])) .tab[aria-selected='true'] .badge {
		${badgeHot}
	}

	:host([variant='segmented']) .tab .badge {
		${badgeModern}
	}

	${overflowMenu}

	.menu-item {
		${menuItem}
	}

	.menu-item svg {
		${icon}
	}

	.menu-item:hover {
		${menuItemHover}
	}

	.menu-item[aria-selected='true'] {
		${menuItemActive}
	}

	.menu-item[aria-selected='true'] svg {
		color: var(--cz-color-text-on-brand);
	}

	.menu-item:hover .badge,
	.menu-item[aria-selected='true'] .badge {
		${badgeHot}
	}

	.menu-item:focus-visible {
		${itemFocus}
	}

	.menu-item[disabled] {
		${itemDisabled}
	}

	#content {
		display: flex;
		flex-direction: column;
		flex: auto;
	}

	#content ::slotted(:not(slot):not([is-selected])) {
		display: none !important;
	}

	:host([variant='brand']) .tabs {
		${brandBar}
	}

	:host([variant='brand']) .tab {
		${brandItem}
	}

	:host([variant='brand']) .tab:hover,
	:host([variant='brand']) .tab[aria-selected='true'] {
		${brandActive}
	}

	:host([variant='brand']) .tab:hover svg,
	:host([variant='brand']) .tab[aria-selected='true'] svg {
		color: var(--cz-color-text-on-brand);
	}

	:host([variant='segmented']) .tabs {
		${segmentedBar}
	}

	:host([variant='segmented'][compact-width]) .tabs {
		box-sizing: border-box;
		width: max-content;
		max-width: 100%;
	}

	:host([variant='segmented']) .tab {
		${segmentedItem}
	}

	:host([variant='segmented']) .tab:hover,
	:host([variant='segmented']) .tab[aria-selected='true'] {
		${segmentedActive}
	}

	:host([variant='segmented']) .tab:hover svg,
	:host([variant='segmented']) .tab[aria-selected='true'] svg {
		${segmentedIconActive}
	}

	:host([compact-width]) .tab {
		flex: 0 1 auto;
	}

	:host(:not([compact-width]):not([variant='brand']):not([variant='segmented']))
		.tabs {
		gap: calc(var(--cz-spacing) * 4);
	}

	/* Last, so the size wins over whichever variant set the box above. */
	:host([size='sm']) .tab {
		${smItem}
	}

	:host([size='sm']:is([variant='brand'], [variant='segmented'])) .tab {
		${smButtonItem}
	}

	:host([variant='segmented'][size='sm']) .tabs {
		${smSegmentedBar}
	}
`;

export const nextTabsStyles = css`
	:host {
		${bar}
		flex: 0 1 auto;
		min-width: 0;
	}

	.items {
		${items}
	}

	:host([variant='brand']) {
		${brandBar}
	}

	:host([variant='segmented']) {
		${segmentedBar}
	}

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

	${overflowMenu}
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
