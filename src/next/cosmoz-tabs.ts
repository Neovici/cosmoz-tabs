import { normalize } from '@neovici/cosmoz-tokens/normalize';
import { component, html, useEffect } from '@pionjs/pion';
import { nextTabsStyles, type TabsVariant } from '../styles';
import { otherState, selectedState } from './aria';

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
 * @attr {('brand'|'underline'|'segmented')} variant
 * @attr {boolean} compact-width
 * @attr {('tablist'|'radiogroup')} role - tablist by default. A segmented
 * control that picks a value rather than a view is a radiogroup: set it here
 * and each item becomes a radio, reporting aria-checked instead of
 * aria-selected. Tabs owe their reader a tabpanel; radios do not. Set it as
 * authored markup - `role` is reflected by the platform, so it is not
 * observed here, and a later change lands on the container's next render.
 */
const Tabs = (host: CosmozTabsNextElement) => {
	if (!host.getAttribute('variant')) {
		host.setAttribute('variant', 'brand');
	}
	if (!host.getAttribute('role')) {
		host.setAttribute('role', 'tablist');
	}

	const variant = host.getAttribute('variant');
	const compactWidth = host.hasAttribute('compact-width') ? '' : null;
	const itemRole = host.getAttribute('role') === 'radiogroup' ? 'radio' : 'tab';

	const apply = () =>
		host.querySelectorAll('cosmoz-tab-next').forEach((tab) => {
			reflect(tab, 'variant', variant);
			reflect(tab, 'compact-width', compactWidth);
			reflect(tab, 'role', itemRole);
			// The item writes its own state on every active change, but a role
			// change happens out here, so the stale wording is dropped and the
			// new one restated in the same pass.
			reflect(tab, otherState(tab), null);
			reflect(
				tab,
				selectedState(tab),
				tab.hasAttribute('active') ? 'true' : 'false',
			);
		});

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
