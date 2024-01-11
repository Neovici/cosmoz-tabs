import { component, useEffect, useLayoutEffect } from '@pionjs/pion';
import { html, nothing } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import computeScroll from 'compute-scroll-into-view';

import style from './cosmoz-tab.css';

const Tab = (host) => {
	const { active, badge, href } = host;

	useEffect(() => {
		if (!host.getAttribute('tabindex')) {
			host.setAttribute('tabindex', '-1');
		}
		host.setAttribute('role', 'tab');
	}, []);

	useLayoutEffect(() => {
		const el = host;
		el.toggleAttribute('aria-selected', !!active);

		if (!active) {
			return;
		}
		computeScroll(el, {
			block: 'nearest',
			inline: 'center',
			boundary: el.parentElement,
		}).forEach(({ el, top, left }) =>
			el.scroll({ top, left, behavior: 'smooth' })
		);
	}, [active]);

	return html`
		<style>
			${style}
		</style>
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
	})
);
