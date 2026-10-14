import { normalize } from '@neovici/cosmoz-tokens/normalize';
import { component, useLayoutEffect, useRef } from '@pionjs/pion';
import { html, nothing } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { ref } from 'lit-html/directives/ref.js';
import { nextTabStyles } from './tab.css';

export interface CosmozTabNextElement extends HTMLElement {
	active?: boolean;
	badge?: string;
	href?: string;
	disabled?: boolean;
}

/**
 * The item is the widget: its identity defaults (a tab, roved by the
 * container) settle at connect, as the container's and the slideout's
 * host defaults do.
 */
export class TabNextBase extends HTMLElement {
	connectedCallback() {
		if (!this.hasAttribute('role')) {
			this.setAttribute('role', 'tab');
		}
		if (!this.hasAttribute('tabindex')) {
			this.setAttribute('tabindex', '-1');
		}
	}
}

/**
 * @element cosmoz-tab-next
 * @attr {boolean} active - whether the tab is selected
 * @attr {string} badge - optional badge text
 * @attr {string} href - optional link target
 * @attr {boolean} disabled - disables the tab
 * @attr {('sm')} size - reflected by the container; see cosmoz-tabs-next
 * @attr {string} role - tab; written by the container
 * @slot tab label
 * @slot icon
 */
const Tab = (host: CosmozTabNextElement) => {
	const { active, badge, href } = host,
		anchor = useRef<HTMLAnchorElement>();

	useLayoutEffect(() => {
		// the state attribute follows the selection
		host.setAttribute('aria-selected', active ? 'true' : 'false');
	}, [active]);

	// The element claims tab semantics, so it picks like a native
	// button: Enter on keydown, Space on keyup (as <button> does); Space
	// keydown only prevents the page scroll. The pick is the rendered
	// link's click: href tabs navigate, the plain ones just bubble.
	useLayoutEffect(() => {
		const pick = () => (anchor.current ?? host).click();
		const onKey = (e: KeyboardEvent) => {
			if (e.target !== host || host.hasAttribute('disabled')) {
				return;
			}
			if (e.key === 'Enter' && !e.repeat) {
				e.preventDefault();
				pick();
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
				pick();
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
		<a ${ref(anchor)} part="link" href=${ifDefined(href)}>
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
		baseElement: TabNextBase,
		observedAttributes: ['active', 'badge', 'href'],
		styleSheets: [normalize, nextTabStyles],
	}),
);
