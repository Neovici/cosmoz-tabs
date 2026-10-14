import { normalize } from '@neovici/cosmoz-tokens/normalize';
import { component, useLayoutEffect } from '@pionjs/pion';
import { html, nothing } from 'lit-html';
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
	const { active, badge } = host;

	useLayoutEffect(() => {
		// the state attribute follows the selection
		host.setAttribute('aria-selected', active ? 'true' : 'false');
	}, [active]);

	// The pick is the activation, shared by the keys (Enter on keydown,
	// Space on keyup, like a <button>; Space keydown only prevents the
	// page scroll) and the tap. An href row navigates through a
	// detached anchor - a created element, clicked, thrown away: the
	// click's default action runs on every engine and pointer type, the
	// row stays untouched and emits nothing. A plain row bubbles.
	const pick = () => {
		const href = host.getAttribute('href');
		if (!href) {
			host.click();
			return;
		}
		const a = document.createElement('a');
		a.href = href;
		a.click();
	};

	// The element claims tab semantics, so it picks like a native
	// button: Enter on keydown, Space on keyup (as <button> does); Space
	// keydown only prevents the page scroll.
	useLayoutEffect(() => {
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

	// Taps pick like the keys: the row takes the activation itself (the
	// old rendered link's default action proved pointer-type dependent,
	// dead on touch) - a plain click on an href row picks, the pick's
	// navigation is idempotent when a forwarded click re-enters it.
	useLayoutEffect(() => {
		const onTap = (e: MouseEvent) => {
			if (
				e.defaultPrevented ||
				e.button !== 0 ||
				host.hasAttribute('disabled')
			) {
				return;
			}
			if (!host.getAttribute('href')) {
				return; // plain rows: clicks bubble, the app owns them
			}
			pick();
		};
		host.addEventListener('click', onTap);
		return () => host.removeEventListener('click', onTap);
	}, []);

	return html`
		<slot id="iconSlot" name="icon"></slot>
		<slot id="contentSlot"></slot>
		${badge ? html`<span class="badge" part="badge">${badge}</span>` : nothing}
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
