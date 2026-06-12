import { normalize } from '@neovici/cosmoz-tokens/normalize';
import { component, useEffect, useLayoutEffect } from '@pionjs/pion';
import { compute } from 'compute-scroll-into-view';
import { html, nothing } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { nextTabStyles } from '../styles';

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
 * @slot tab label
 * @slot icon
 */
const Tab = (host: CosmozTabNextElement) => {
	const { active, badge, href } = host;

	useEffect(() => {
		if (!host.getAttribute('tabindex')) {
			host.setAttribute('tabindex', '-1');
		}
		host.setAttribute('role', 'tab');
	}, []);

	useLayoutEffect(() => {
		host.setAttribute('aria-selected', active ? 'true' : 'false');

		if (!active) {
			return;
		}
		compute(host, {
			block: 'nearest',
			inline: 'center',
			boundary: host.parentElement,
		}).forEach(({ el, top, left }) =>
			el.scroll({ top, left, behavior: 'smooth' }),
		);
	}, [active]);

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
