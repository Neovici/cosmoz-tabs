// @license Copyright (C) 2015 Neovici AB - Apache 2 License
import { normalize } from '@neovici/cosmoz-tokens/normalize';
import { component, css, html } from '@pionjs/pion';
import './cosmoz-tab-card';
import { useTab } from './use-tab';
import type { TabElement } from './utils';

export interface CosmozTabElement extends TabElement {
	heading?: string;
	badge?: string;
	icon?: unknown;
	disabled?: boolean;
	isSelected?: boolean;
}

const styles = css`
	:host {
		display: flex;
		position: relative;
		flex-direction: column;
		flex: 1 1 auto;
		padding: calc(var(--cz-spacing) * 3);
		max-height: 100%;
	}

	:host([disabled]),
	:host([hidden]) {
		display: none !important;
	}

	:host([has-cards]) {
		flex-flow: row wrap;
	}
`;

/**
 * @element cosmoz-tab
 * @attr {string} heading - The tab label shown in the tab bar
 * @attr {string} badge - Optional badge text shown next to the heading
 * @attr {boolean} disabled - Disables the tab
 * @attr {boolean} hidden - Hides the tab
 * @prop {unknown} icon - A lit-html icon template (e.g. from `@neovici/cosmoz-icons`)
 * @slot - The tab content
 */
const CosmozTab = (host: CosmozTabElement) => {
	const { onSlot } = useTab(host);
	return html`<slot @slotchange=${onSlot}></slot>`;
};

customElements.define(
	'cosmoz-tab',
	class extends component(CosmozTab, {
		observedAttributes: [
			'hidden',
			'disabled',
			'heading',
			'badge',
			'is-selected',
		],
		styleSheets: [normalize, styles],
	}) {
		set hidden(val: boolean) {
			super.hidden = val;
			(
				this as unknown as { _scheduler: { update(): void } }
			)._scheduler.update();
		}
		get hidden(): boolean {
			return super.hidden;
		}
	}
);
