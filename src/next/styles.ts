import { css } from '@pionjs/pion';
export type TabsVariant = 'brand' | 'underline' | 'segmented';

/**
 * The default size is the unnamed one - omit the attribute to get it. `sm`
 * trims the item's box on both axes so a control that sits beside a heading
 * does not out-weigh it. Small segmented controls also use compact text
 * to align their frame with standard toolbar controls.
 */
export type TabsSize = 'sm';

export const nextTabsStyles = css`
	/* The host is the frame: one nowrap row carrying the track, the overflow
	   trigger and the stats; the identity (font stack, paddings, the
	   underline's bottom rule) lives here. */
	:host {
		display: flex;
		align-items: flex-start;
		gap: var(--_gap);
		padding-inline: calc(var(--cz-spacing) * 3);
		font-family: var(--cz-font-body);
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		font-weight: var(--cz-font-weight-semibold);
		box-shadow: inset 0 -1px 0 0 var(--cz-color-border-secondary);
		flex: 0 1 auto;
		min-width: 0;
		--_gap: calc(var(--cz-spacing) * 4);
	}

	:host([variant='brand']) {
		--_gap: calc(var(--cz-spacing) * 1);
		box-shadow: none;
	}

	/* Untitled UI's "button border" tabs: a track holding a raised, selected pill. */
	:host([variant='segmented']) {
		--_gap: calc(var(--cz-spacing) * 1);
		padding: calc(var(--cz-spacing) * 0.75);
		border-radius: var(--cz-radius-lg);
		background:
			var(--cz-glass-sheen, none),
			var(--cz-color-bg-glass, var(--cz-color-bg-secondary));
		box-shadow:
			inset 0 0 0 1px
				var(--cz-color-border-glass, var(--cz-color-border-secondary)),
			var(--cz-shadow-glass, 0 0 transparent);
	}

	/* The band: the wrapping, clipping row the members land in and the
	   observer reads against. One row's box is exact per size/variant (the
	   item's box is fully token-derived), so the clip is a constant the
	   intersections read against. The wrapping, clipping track is the
	   default slot: brand item boxes sit a touch shorter: 37px, segmented
	   ones 33px (cosmoz-toggle-group's box); sm trims all variants to 33px
	   and segmented to 26px */
	slot:not([name]) {
		gap: var(--_gap);
		max-height: 41px; /* underline */
	}

	/* the group: the tablist around the track's members - the frame's
	   flanks (the headings slot, the overflow trigger, the stats slot)
	   stay outside the group's membership. Frame sizing rides here. */
	.group {
		flex: 1 1 auto;
		min-width: 0;
	}

	:host([variant='brand']) slot:not([name]) {
		max-height: 37px;
	}

	:host([variant='segmented']) slot:not([name]) {
		max-height: 33px;
	}

	:host([size='sm']) slot:not([name]) {
		max-height: 33px;
	}

	/* The track hugs its tabs when they are not spread, staying within
	   the container's width. */
	:host([variant='segmented'][compact-width]) {
		box-sizing: border-box;
		width: max-content;
		max-width: 100%;
	}

	:host([variant='segmented'][size='sm']) {
		font-size: var(--cz-text-xs);
		line-height: var(--cz-text-xs-line-height);
		border-radius: var(--cz-radius-md);
	}

	:host([variant='segmented'][size='sm']) slot:not([name]) {
		max-height: calc(var(--cz-control-height-md) - var(--cz-spacing) * 1.5);
	}

	.more {
		flex: 0 0 auto;
		display: inline-flex;
		align-items: stretch;
	}

	.more[hidden] {
		display: none;
	}

	/* the button borrows the item's face */
	cosmoz-button.more-button::part(button),
	.more-button:not(cosmoz-button) {
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
		flex: 0 0 auto;
		background: none;
		border: 0;
		font: inherit;
		appearance: none;

		height: auto;
	}
	cosmoz-button.more-button {
		position: relative;
		display: inline-flex;
		flex: 0 0 auto;
	}

	.more-button .chevron {
		display: contents;
	}

	.more-button svg {
		width: 16px;
		height: 16px;
		flex-shrink: 0;
		color: var(--cz-color-fg-quaternary);
		transition: transform 0.15s ease;
	}

	.more[opened] .more-button svg {
		transform: rotate(180deg);
	}

	cosmoz-button.more-button::part(button):hover,
	.more-button:hover:not(cosmoz-button) {
		color: var(--cz-color-text-secondary);
		box-shadow: inset 0 -2px 0 0 var(--cz-color-border-primary);
	}

	.more[data-active] cosmoz-button.more-button::part(button),
	.more[data-active] .more-button:not(cosmoz-button) {
		color: var(--cz-color-text-primary);
		box-shadow: inset 0 -2px 0 0 var(--cz-color-fg-primary);
	}

	.more-button:hover svg,
	.more[data-active] .more-button svg {
		color: var(--cz-color-fg-secondary);
	}

	cosmoz-button.more-button::part(button):focus-visible,
	.more-button:focus-visible:not(cosmoz-button) {
		outline: 2px solid var(--cz-color-focus-ring, var(--cz-color-fg-brand));
		outline-offset: -2px;
	}

	:host([variant='brand']) cosmoz-button.more-button::part(button),
	:host([variant='brand']) .more-button:not(cosmoz-button) {
		padding: calc(var(--cz-spacing) * 2) calc(var(--cz-spacing) * 2.5);
		border-radius: var(--cz-radius-md);

		height: auto;
	}

	:host([variant='brand']) cosmoz-button.more-button::part(button):hover,
	:host([variant='brand']) .more-button:hover:not(cosmoz-button),
	:host([variant='brand'])
		.more[data-active]
		cosmoz-button.more-button::part(button),
	:host([variant='brand']) .more[data-active] .more-button:not(cosmoz-button) {
		color: var(--cz-color-text-on-action, var(--cz-color-text-on-brand));
		background-color: var(
			--cz-color-bg-action-solid,
			var(--cz-color-bg-brand-solid)
		);
		box-shadow: none;
	}

	:host([variant='brand']) .more-button:hover svg,
	:host([variant='brand']) .more[data-active] .more-button svg {
		color: var(--cz-color-text-on-action, var(--cz-color-text-on-brand));
	}

	:host([variant='segmented']) cosmoz-button.more-button::part(button),
	:host([variant='segmented']) .more-button:not(cosmoz-button) {
		padding: calc(var(--cz-spacing) * 1.5) calc(var(--cz-spacing) * 2);
		border-radius: var(--cz-radius-sm);

		height: auto;
	}

	:host([variant='segmented']) cosmoz-button.more-button::part(button):hover,
	:host([variant='segmented']) .more-button:hover:not(cosmoz-button),
	:host([variant='segmented'])
		.more[data-active]
		cosmoz-button.more-button::part(button),
	:host([variant='segmented'])
		.more[data-active]
		.more-button:not(cosmoz-button) {
		color: var(--cz-color-text-secondary);
		background-color: var(--cz-color-bg-primary);
		box-shadow: var(--cz-shadow-sm);
	}

	:host([variant='segmented']) .more-button:hover svg,
	:host([variant='segmented']) .more[data-active] .more-button svg {
		color: var(--cz-color-fg-secondary-hover);
	}

	:host([size='sm']) cosmoz-button.more-button::part(button),
	:host([size='sm']) .more-button:not(cosmoz-button) {
		padding-block: calc(var(--cz-spacing) * 1.5);

		height: auto;
	}

	:host([size='sm']:is([variant='brand'], [variant='segmented']))
		cosmoz-button.more-button::part(button),
	:host([size='sm']:is([variant='brand'], [variant='segmented']))
		.more-button:not(cosmoz-button) {
		padding-inline: calc(var(--cz-spacing) * 2);

		height: auto;
	}

	:host([variant='segmented'][size='sm'])
		cosmoz-button.more-button::part(button),
	:host([variant='segmented'][size='sm']) .more-button:not(cosmoz-button) {
		font-size: var(--cz-text-xs);
		line-height: var(--cz-text-xs-line-height);
		padding-block: var(--cz-spacing);
	}

	.menu {
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
	}
`;
