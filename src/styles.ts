import { css } from '@pionjs/pion';
import {
	activeUnderline,
	badge,
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
	spreadItem,
} from './style-parts';

export type TabsVariant = 'brand' | 'underline';

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

	.menu-item[aria-selected="true"] {
		${menuItemActive}
	}

	.menu-item[aria-selected="true"] svg {
		color: var(--cz-color-text-on-brand);
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

	:host([variant="brand"]) .tab:hover svg,
	:host([variant="brand"]) .tab[aria-selected="true"] svg {
		color: var(--cz-color-text-on-brand);
	}

	:host([compact-width]) .tab {
		flex: 0 1 auto;
	}

	:host(:not([compact-width]):not([variant="brand"])) .tabs {
		gap: calc(var(--cz-spacing) * 4);
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

	:host([variant="brand"]) {
		${brandBar}
	}

	:host(:not([compact-width]):not([variant="brand"])) {
		gap: calc(var(--cz-spacing) * 4);
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

	:host([variant="brand"]) {
		${brandItem}
	}

	:host([variant="brand"]:hover),
	:host([variant="brand"][active]) {
		${brandActive}
	}

	:host([variant="brand"]:hover) #iconSlot::slotted(svg),
	:host([variant="brand"][active]) #iconSlot::slotted(svg) {
		color: var(--cz-color-text-on-brand);
	}

	:host([compact-width]) {
		flex: 0 1 auto;
	}
`;
