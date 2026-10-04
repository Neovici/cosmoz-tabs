import { normalize } from '@neovici/cosmoz-tokens/normalize';
import { component, useEffect, useLayoutEffect } from '@pionjs/pion';
import { html, nothing } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { selectedState } from './aria';
import { nextTabStyles } from './tab.css';

export interface CosmozTabNextElement extends HTMLElement {
	active?: boolean;
	badge?: string;
	href?: string;
	disabled?: boolean;
}

/**
 * @element cosmoz-tab-next
 * @attr {boolean} active - whether the tab is selected
 * @attr {string} badge - optional badge text
 * @attr {string} href - optional link target
 * @attr {boolean} disabled - disables the tab
 * @attr {('sm')} size - reflected by the container; see cosmoz-tabs-next
 * @attr {('tab'|'radio')} role - tab by default; a radiogroup container
 * reflects radio onto its items, and the selected state is then reported as
 * aria-checked rather than aria-selected
 * @slot tab label
 * @slot icon
 *
 * The element claims tab/radio semantics, so it picks like a native button:
 * Enter on keydown, Space on keyup - wherever it is rendered, in a bar or in
 * the overflow menu.
 */
const Tab = (host: CosmozTabNextElement) => {
	const { active, badge, href } = host;

	useEffect(() => {
		if (!host.getAttribute('tabindex')) {
			host.setAttribute('tabindex', '-1');
		}
		if (!host.getAttribute('role')) {
			host.setAttribute('role', 'tab');
		}
	}, []);

	useLayoutEffect(() => {
		// Read the role live rather than observing it: `role` is reflected by
		// the platform, so it is not ours to take over as a property.
		host.setAttribute(selectedState(host), active ? 'true' : 'false');
	}, [active]);

	// The element claims tab/radio semantics, so it behaves like a button:
	// Enter on keydown, Space on keyup (as native <button> does), Space
	// keydown only prevents the page scroll. A click() bubbles to the
	// consumer's activation wiring, wherever the tab is rendered - in the
	// bar or as a copy in the overflow menu.
	useEffect(() => {
		const onKey = (e: KeyboardEvent) => {
			if (e.target !== host || host.hasAttribute('disabled')) {
				return;
			}
			if (e.key === 'Enter' && !e.repeat) {
				e.preventDefault();
				host.click();
			}
			if (e.key === ' ') {
				e.preventDefault();
			}
		};
		const onKeyUp = (e: KeyboardEvent) => {
			if (e.target !== host || host.hasAttribute('disabled')) {
				return;
			}
			if (e.key === ' ') {
				host.click();
			}
		};
		host.addEventListener('keydown', onKey);
		host.addEventListener('keyup', onKeyUp);
		return () => {
			host.removeEventListener('keydown', onKey);
			host.removeEventListener('keyup', onKeyUp);
		};
	}, []);

	return html`
		<a part="link" href=${ifDefined(href)}>
			<slot id="iconSlot" name="icon"></slot>
			<slot id="contentSlot"></slot>
			${badge
				? html`<span class="badge" part="badge">${badge}</span>`
				: nothing}
		</a>
	`;
};

customElements.define(
	'cosmoz-tab-next',
	component(Tab, {
		observedAttributes: ['active', 'badge', 'href'],
		styleSheets: [normalize, nextTabStyles],
	}),
);
