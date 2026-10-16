import { css } from '@pionjs/pion';

export type TabsVariant = 'brand' | 'underline' | 'segmented';

/**
 * The default size is the unnamed one - omit the attribute to get it. `sm`
 * trims the item's box on both axes so a control that sits beside a heading
 * does not out-weigh it; the type is left alone, so the labels stay as
 * readable as they were.
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
		padding: calc(var(--cz-spacing) * 1);
		border-radius: var(--cz-radius-lg);
		background-color: var(--cz-color-bg-secondary);
		box-shadow: inset 0 0 0 1px var(--cz-color-border-secondary);
	}

	/* The band: the wrapping, clipping row the members land in and the
	   observer reads against. One row's box is exact per size/variant (the
	   item's box is fully token-derived), so the clip is a constant the
	   intersections read against. The wrapping, clipping track is the
	   default slot: brand and segmented item boxes sit a touch shorter:
	   37px; sm trims all variants to 33px */
	slot:not([name]) {
		display: flex;
		flex-wrap: wrap;
		align-items: flex-start;
		gap: var(--_gap);
		overflow: clip;
		max-height: 41px; /* underline */
	}

	/* the group: the tablist around the track's members - the frame's
	   flanks (the headings slot, the overflow trigger, the stats slot)
	   stay outside the group's membership. Frame sizing rides here. */
	.group {
		flex: 1 1 auto;
		min-width: 0;
	}

	:host([variant='brand']) slot:not([name]),
	:host([variant='segmented']) slot:not([name]) {
		max-height: 37px;
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

	/* The track's own ring is what stacks onto the item's padding, so the
	   compact size has to thin that too or the height barely moves. */
	:host([variant='segmented'][size='sm']) {
		padding: calc(var(--cz-spacing) * 0.75);
		border-radius: var(--cz-radius-md);
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
	.more-button {
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

	.more-button:hover {
		color: var(--cz-color-text-secondary);
		box-shadow: inset 0 -2px 0 0 var(--cz-color-border-primary);
	}

	.more[data-active] .more-button {
		color: var(--cz-color-text-primary);
		box-shadow: inset 0 -2px 0 0 var(--cz-color-fg-primary);
	}

	.more-button:hover svg,
	.more[data-active] .more-button svg {
		color: var(--cz-color-fg-secondary);
	}

	.more-button:focus-visible {
		outline: 2px solid var(--cz-color-focus-ring, var(--cz-color-fg-brand));
		outline-offset: -2px;
	}

	:host([variant='brand']) .more-button {
		padding: calc(var(--cz-spacing) * 2) calc(var(--cz-spacing) * 2.5);
		border-radius: var(--cz-radius-md);
	}

	:host([variant='brand']) .more-button:hover,
	:host([variant='brand']) .more[data-active] .more-button {
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

	:host([variant='segmented']) .more-button {
		padding: calc(var(--cz-spacing) * 2) calc(var(--cz-spacing) * 2.5);
		border-radius: var(--cz-radius-sm);
	}

	:host([variant='segmented']) .more-button:hover,
	:host([variant='segmented']) .more[data-active] .more-button {
		color: var(--cz-color-text-secondary);
		background-color: var(--cz-color-bg-primary);
		box-shadow: var(--cz-shadow-sm);
	}

	:host([variant='segmented']) .more-button:hover svg,
	:host([variant='segmented']) .more[data-active] .more-button svg {
		color: var(--cz-color-fg-secondary-hover);
	}

	:host([size='sm']) .more-button {
		padding-block: calc(var(--cz-spacing) * 1.5);
	}

	:host([size='sm']:is([variant='brand'], [variant='segmented'])) .more-button {
		padding-inline: calc(var(--cz-spacing) * 2);
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

	:host([variant='segmented']),
	:host([variant='segmented'][size='sm']) {
		border-radius: var(--cz-radius-full);
		background: var(--cz-color-bg-glass, var(--cz-color-bg-tertiary));
		box-shadow:
			var(--cz-shadow-glass, var(--cz-shadow-xs)),
			inset 0 0 0 1px
				var(--cz-color-border-glass, var(--cz-color-border-primary));
		backdrop-filter: var(--cz-backdrop-filter-glass, none);
	}
	:host([variant='brand']) .more-button,
	:host([variant='segmented']) .more-button {
		border-radius: var(--cz-radius-full);
		padding-inline: calc(var(--cz-spacing) * 3);
	}
	.more-button:hover,
	:host([variant]) .more-button:hover {
		background: var(--cz-color-bg-glass, var(--cz-color-bg-tertiary));
		color: var(--cz-color-text-primary);
		box-shadow: none;
	}
	.more[data-active] .more-button,
	:host([variant]) .more[data-active] .more-button {
		background:
			var(--cz-glass-sheen, none),
			var(--cz-color-bg-glass-hover, var(--cz-color-bg-secondary-hover));
		color: var(--cz-color-text-primary);
		box-shadow:
			var(--cz-shadow-glass, var(--cz-shadow-xs)),
			inset 0 0 0 1px
				var(--cz-color-border-glass, var(--cz-color-border-primary));
	}
	.menu {
		background: var(--cz-color-bg-glass-panel, var(--cz-color-bg-secondary));
		border-color: var(--cz-color-border-glass, var(--cz-color-border-primary));
		border-radius: var(--cz-radius-3xl);
		box-shadow: var(--cz-shadow-glass-panel, var(--cz-shadow-lg));
		backdrop-filter: var(--cz-backdrop-filter-glass, none);
	}
	@media (prefers-reduced-motion: reduce) {
		.more-button,
		.more-button svg {
			transition: none;
		}
	}
`;
