import { normalize } from '@neovici/cosmoz-tokens/normalize';
import { component, html, useEffect } from '@pionjs/pion';
import { nextTabsStyles, type TabsVariant } from '../styles';

export interface CosmozTabsNextElement extends HTMLElement {
	variant?: TabsVariant;
	compactWidth?: boolean;
}

const reflect = (tab: Element, name: string, value: string | null) => {
	if (value == null) {
		tab.removeAttribute(name);
	} else {
		tab.setAttribute(name, value);
	}
};

/**
 * @element cosmoz-tabs-next
 * @attr {('brand'|'underline')} variant
 * @attr {string} compact-width
 */
const Tabs = (host: CosmozTabsNextElement) => {
	if (!host.getAttribute('variant')) {
		host.setAttribute('variant', 'brand');
	}

	const variant = host.getAttribute('variant');
	const compactWidth =
		host.getAttribute('compact-width') === 'true' ? 'true' : null;

	const apply = () =>
		host.querySelectorAll('cosmoz-tab-next').forEach((tab) => {
			reflect(tab, 'data-variant', variant);
			reflect(tab, 'data-compact-width', compactWidth);
		});

	useEffect(() => {
		host.setAttribute('role', 'tablist');
	}, []);

	// re-applied on every render
	// variant is an observed attribute and on slot changes
	useEffect(apply);

	return html`<slot @slotchange=${apply}></slot>`;
};

customElements.define(
	'cosmoz-tabs-next',
	component(Tabs, {
		observedAttributes: ['variant', 'compact-width'],
		styleSheets: [normalize, nextTabsStyles],
	})
);
