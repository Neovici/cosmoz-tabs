/* Styles of the `cosmoz-tab-next` item itself; the bar's are in ./styles */
import { css } from '@pionjs/pion';

export const nextTabStyles = css`
	:host {
		position: relative;
		display: inline-flex;
		box-sizing: border-box;
		align-items: center;
		justify-content: center;
		gap: calc(var(--cz-spacing) * 1);
		padding: calc(var(--cz-spacing) * 2.5) calc(var(--cz-spacing) * 0.5);
		color: var(--_color);
		text-decoration: none;
		white-space: nowrap;
		cursor: pointer;
		flex: 1 1 0;
		transition:
			color 0.1s linear,
			background-color 0.1s linear,
			box-shadow 0.1s linear;
		outline: 0;

		/* The item's face: hover and active read these; the variants set
		   their own (for brand and segmented, hover and active share one
		   face, so both stay in sync by construction). */
		--_color: var(--cz-color-text-quaternary);
		--_icon-color: var(--cz-color-fg-quaternary);
		--_hover-color: var(--cz-color-text-brand);
		--_hover-background: transparent;
		--_hover-shadow: inset 0 -2px 0 0 var(--cz-color-fg-brand);
		--_hover-icon-color: var(--cz-color-fg-brand-secondary);
		--_active-color: var(--cz-color-text-brand);
		--_active-background: transparent;
		--_active-shadow: inset 0 -2px 0 0 var(--cz-color-fg-brand);
		--_active-icon-color: var(--cz-color-fg-brand-secondary);
	}

	:host(:hover) {
		color: var(--_hover-color);
		background-color: var(--_hover-background);
		box-shadow: var(--_hover-shadow);
	}

	:host(:hover) #iconSlot::slotted(svg) {
		color: var(--_hover-icon-color);
	}

	:host([active]) {
		color: var(--_active-color);
		background-color: var(--_active-background);
		box-shadow: var(--_active-shadow);
	}

	:host([active]) #iconSlot::slotted(svg) {
		color: var(--_active-icon-color);
	}

	:host(:focus-visible) {
		outline: 2px solid var(--cz-color-fg-brand);
		outline-offset: -2px;
	}

	:host([disabled]) {
		opacity: 0.5;
		cursor: not-allowed;
		pointer-events: none;
	}

	:host([hidden]) {
		display: none !important;
	}

	:host([overflowing]) {
		visibility: hidden;
	}

	/* The menu copy: the same element with the menu row's box and face. */
	:host([menu]) {
		flex: 0 0 auto;
		justify-content: flex-start;
		gap: calc(var(--cz-spacing) * 2);
		padding: calc(var(--cz-spacing) * 2) calc(var(--cz-spacing) * 2.5);
		border-radius: var(--cz-radius-sm);
		box-shadow: none;
		--_color: var(--cz-color-text-quaternary);
		--_hover-color: var(--cz-color-text-secondary);
		--_hover-background: var(--cz-color-bg-primary-hover);
		--_hover-shadow: none;
		--_hover-icon-color: var(--cz-color-fg-quaternary);
		--_active-color: var(--cz-color-text-on-brand);
		--_active-background: var(--cz-color-bg-brand-solid);
		--_active-shadow: none;
		--_active-icon-color: var(--cz-color-text-on-brand);
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
		width: 16px;
		height: 16px;
		flex-shrink: 0;
		color: var(--_icon-color);
	}

	#contentSlot::slotted(*) {
		flex: auto;
	}

	/* Untitled UI badge, size sm: a counter pill that steps up a surface
	   while the tab is hot, and the segmented variant's square-ish one. */
	.badge {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		box-sizing: border-box;
		font-size: var(--cz-text-xs);
		font-weight: var(--cz-font-weight-medium);
		line-height: var(--cz-text-xs-line-height);
		padding: 2px var(--_badge-padding-inline);
		max-width: 80px;
		overflow: hidden;
		text-overflow: ellipsis;
		text-align: center;
		border-radius: var(--_badge-radius);
		background-color: var(--_badge-background);
		color: var(--_badge-color);
		box-shadow: var(--_badge-shadow);

		--_badge-padding-inline: calc(var(--cz-spacing) * 2);
		--_badge-radius: var(--cz-radius-full);
		--_badge-background: var(--cz-color-bg-secondary);
		--_badge-color: var(--cz-color-text-secondary);
		--_badge-shadow: inset 0 0 0 1px var(--cz-color-border-secondary);
	}

	:host(:not([variant='segmented']):hover) .badge,
	:host(:not([variant='segmented'])[active]) .badge {
		--_badge-background: var(--cz-color-bg-tertiary);
		--_badge-color: var(--cz-color-text-primary);
		--_badge-shadow: inset 0 0 0 1px var(--cz-color-border-primary);
	}

	:host([variant='segmented']) .badge {
		--_badge-padding-inline: calc(var(--cz-spacing) * 1.5);
		--_badge-radius: var(--cz-radius-sm);
		--_badge-background: var(--cz-color-bg-primary);
		--_badge-color: var(--cz-color-text-secondary);
		--_badge-shadow:
			inset 0 0 0 1px var(--cz-color-border-primary), var(--cz-shadow-xs);
	}

	:host([variant='brand']) {
		padding: calc(var(--cz-spacing) * 2) calc(var(--cz-spacing) * 2.5);
		border-radius: var(--cz-radius-md);
		--_hover-color: var(--cz-color-text-on-brand);
		--_hover-background: var(--cz-color-bg-brand-solid);
		--_hover-shadow: none;
		--_hover-icon-color: var(--cz-color-text-on-brand);
		--_active-color: var(--cz-color-text-on-brand);
		--_active-background: var(--cz-color-bg-brand-solid);
		--_active-shadow: none;
		--_active-icon-color: var(--cz-color-text-on-brand);
	}

	:host([variant='segmented']) {
		padding: calc(var(--cz-spacing) * 2) calc(var(--cz-spacing) * 2.5);
		border-radius: var(--cz-radius-sm);
		--_hover-color: var(--cz-color-text-secondary);
		--_hover-background: var(--cz-color-bg-primary);
		--_hover-shadow: var(--cz-shadow-sm);
		--_hover-icon-color: var(--cz-color-fg-secondary-hover);
		--_active-color: var(--cz-color-text-secondary);
		--_active-background: var(--cz-color-bg-primary);
		--_active-shadow: var(--cz-shadow-sm);
		--_active-icon-color: var(--cz-color-fg-secondary-hover);
	}

	:host([compact-width]) {
		flex: 0 1 auto;
	}

	/* Last, so the size wins over whichever variant set the box above. */
	:host([size='sm']) {
		padding-block: calc(var(--cz-spacing) * 1.5);
	}

	:host([size='sm']:is([variant='brand'], [variant='segmented'])) {
		padding-inline: calc(var(--cz-spacing) * 2);
	}
`;
