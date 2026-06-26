import {
	calculatorIcon,
	listIcon,
	receiptIcon,
} from '@neovici/cosmoz-icons/untitled';
import { component, useState } from '@pionjs/pion';
import { html, nothing } from 'lit-html';

import { renderActivated, renderTabs, useTabs } from '../src/next';
import {
	accounting,
	history,
	invoiceTabs,
	overview,
	panelStyles,
	rows,
} from './demo-content';

export default {
	title: 'Tabs/cosmoz-tabs-next',
	component: 'cosmoz-tabs-next',
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component:
					'Next, data-driven tabs. A `cosmoz-tab-next` is **only the clickable ' +
					'header** — it does not switch panels by itself. Selection is owned by ' +
					'the consumer: either wire `active` + a click handler yourself (the raw ' +
					'element API, used by most demos below), or use the ' +
					'`useTabs`/`renderTabs`/`renderActivated` hook API (see *Data driven*).',
			},
		},
		controls: { disable: true },
	},
	argTypes: {
		variant: {
			control: 'select',
			options: ['underline', 'brand'],
			description: 'Untitled UI tab style',
			table: { defaultValue: { summary: 'underline' } },
		},
	},
};

const panels = { overview, rows, accounting, history };

const DefaultDemo = (host) => {
	const variant = host.getAttribute('variant') || 'underline',
		[active, setActive] = useState('overview'),
		select = (e) => setActive(e.currentTarget.dataset.name);

	return html`
		${panelStyles}
		<cosmoz-tabs-next variant=${variant}>
			<cosmoz-tab-next
				data-name="overview"
				?active=${active === 'overview'}
				@click=${select}
			>
				Overview
			</cosmoz-tab-next>
			<cosmoz-tab-next
				data-name="rows"
				badge="5"
				?active=${active === 'rows'}
				@click=${select}
			>
				Invoice rows
			</cosmoz-tab-next>
			<cosmoz-tab-next
				data-name="accounting"
				?active=${active === 'accounting'}
				@click=${select}
			>
				Accounting
			</cosmoz-tab-next>
			<cosmoz-tab-next
				data-name="history"
				?active=${active === 'history'}
				@click=${select}
			>
				History
			</cosmoz-tab-next>
		</cosmoz-tabs-next>
		<div style="padding-top: 20px">${panels[active]()}</div>
	`;
};

if (!customElements.get('cosmoz-tabs-next-default-demo')) {
	customElements.define(
		'cosmoz-tabs-next-default-demo',
		component(DefaultDemo, { observedAttributes: ['variant'] })
	);
}

export const Default = {
	args: { variant: 'underline' },
	parameters: {
		controls: { disable: false },
		docs: {
			source: {
				code: `const [active, setActive] = useState('overview');
const select = (e) => setActive(e.currentTarget.dataset.name);

<cosmoz-tabs-next variant="underline">
  <cosmoz-tab-next data-name="overview"
    ?active=\${active === 'overview'} @click=\${select}>Overview</cosmoz-tab-next>
  <cosmoz-tab-next data-name="rows" badge="5"
    ?active=\${active === 'rows'} @click=\${select}>Invoice rows</cosmoz-tab-next>
  <!-- … -->
</cosmoz-tabs-next>
<div>\${panels[active]()}</div>`,
			},
		},
	},
	render: ({ variant }) =>
		html`<cosmoz-tabs-next-default-demo
			variant=${variant}
		></cosmoz-tabs-next-default-demo>`,
};

const VariantsBar = (host) => {
	const variant = host.getAttribute('variant') || 'underline',
		[active, setActive] = useState('overview'),
		select = (e) => setActive(e.currentTarget.dataset.name);

	return html`
		${panelStyles}
		<cosmoz-tabs-next variant=${variant}>
			<cosmoz-tab-next
				data-name="overview"
				?active=${active === 'overview'}
				@click=${select}
			>
				Overview
			</cosmoz-tab-next>
			<cosmoz-tab-next
				data-name="rows"
				badge="5"
				?active=${active === 'rows'}
				@click=${select}
			>
				Invoice rows
			</cosmoz-tab-next>
			<cosmoz-tab-next
				data-name="accounting"
				?active=${active === 'accounting'}
				@click=${select}
			>
				Accounting
			</cosmoz-tab-next>
		</cosmoz-tabs-next>
		<div style="padding-top: 20px">${panels[active]()}</div>
	`;
};

if (!customElements.get('cosmoz-tabs-next-variants-bar')) {
	customElements.define(
		'cosmoz-tabs-next-variants-bar',
		component(VariantsBar, { observedAttributes: ['variant'] })
	);
}

export const Variants = {
	parameters: {
		docs: {
			source: {
				code: `const [active, setActive] = useState('overview');
const select = (e) => setActive(e.currentTarget.dataset.name);

  <cosmoz-tab-next data-name="overview"
    ?active=\${active === 'overview'} @click=\${select}>Overview</cosmoz-tab-next>
</cosmoz-tabs-next>
<div>\${panels[active]()}</div>`,
			},
			description: {
				story:
					'The two Untitled UI looks: `underline` (default) and `brand` (pill). ' +
					'Each bar is independently interactive.',
			},
		},
	},
	render: () => html`
		<div class="story-stack">
			<div>
				<div class="story-label">variant="underline"</div>
				<cosmoz-tabs-next-variants-bar
					variant="underline"
				></cosmoz-tabs-next-variants-bar>
			</div>
			<div>
				<div class="story-label">variant="brand"</div>
				<cosmoz-tabs-next-variants-bar
					variant="brand"
				></cosmoz-tabs-next-variants-bar>
			</div>
		</div>
	`,
};

const WithIconsDemo = () => {
	const [active, setActive] = useState('overview'),
		select = (e) => setActive(e.currentTarget.dataset.name);

	return html`
		${panelStyles}
		<cosmoz-tabs-next variant="brand">
			<cosmoz-tab-next
				data-name="overview"
				?active=${active === 'overview'}
				@click=${select}
			>
				${receiptIcon({ slot: 'icon' })} Overview
			</cosmoz-tab-next>
			<cosmoz-tab-next
				data-name="rows"
				badge="5"
				?active=${active === 'rows'}
				@click=${select}
			>
				${listIcon({ slot: 'icon' })} Invoice rows
			</cosmoz-tab-next>
			<cosmoz-tab-next
				data-name="accounting"
				?active=${active === 'accounting'}
				@click=${select}
			>
				${calculatorIcon({ slot: 'icon' })} Accounting
			</cosmoz-tab-next>
		</cosmoz-tabs-next>
		<div style="padding-top: 20px">${panels[active]()}</div>
	`;
};

if (!customElements.get('cosmoz-tabs-next-icons-demo')) {
	customElements.define(
		'cosmoz-tabs-next-icons-demo',
		component(WithIconsDemo)
	);
}

export const WithIcons = {
	parameters: {
		docs: {
			source: {
				code: `<cosmoz-tabs-next variant="brand">
  <cosmoz-tab-next data-name="overview"
    ?active=\${active === 'overview'} @click=\${select}>
    \${receiptIcon({ slot: 'icon' })} Overview
  </cosmoz-tab-next>
</cosmoz-tabs-next>`,
			},
			description: {
				story:
					'Leading icons via the `icon` slot — slot an icon template carrying ' +
					'`slot="icon"` into each `<cosmoz-tab-next>`.',
			},
		},
	},
	render: () =>
		html`<cosmoz-tabs-next-icons-demo></cosmoz-tabs-next-icons-demo>`,
};

const DisabledHiddenDemo = () => {
	const [active, setActive] = useState('overview'),
		select = (e) => {
			const el = e.currentTarget;
			if (!el.hasAttribute('disabled')) {
				setActive(el.dataset.name);
			}
		};

	return html`
		${panelStyles}
		<cosmoz-tabs-next variant="underline">
			<cosmoz-tab-next
				data-name="overview"
				?active=${active === 'overview'}
				@click=${select}
			>
				Overview
			</cosmoz-tab-next>
			<cosmoz-tab-next
				data-name="rows"
				badge="5"
				?active=${active === 'rows'}
				@click=${select}
			>
				Invoice rows
			</cosmoz-tab-next>
			<cosmoz-tab-next data-name="accounting" disabled @click=${select}>
				Accounting
			</cosmoz-tab-next>
			<cosmoz-tab-next data-name="history" hidden @click=${select}>
				History
			</cosmoz-tab-next>
		</cosmoz-tabs-next>
		<div style="padding-top: 20px">${panels[active]()}</div>
	`;
};

if (!customElements.get('cosmoz-tabs-next-states-demo')) {
	customElements.define(
		'cosmoz-tabs-next-states-demo',
		component(DisabledHiddenDemo)
	);
}

export const DisabledAndHidden = {
	parameters: {
		docs: {
			source: {
				code: `const select = (e) => {
  const el = e.currentTarget;
  if (!el.hasAttribute('disabled')) setActive(el.dataset.name);
};

<cosmoz-tabs-next variant="underline">
  <cosmoz-tab-next data-name="overview"
    ?active=\${active === 'overview'} @click=\${select}>Overview</cosmoz-tab-next>
  <cosmoz-tab-next data-name="accounting" disabled @click=\${select}>Accounting</cosmoz-tab-next>
  <cosmoz-tab-next data-name="history" hidden @click=\${select}>History</cosmoz-tab-next>
</cosmoz-tabs-next>`,
			},
			description: {
				story:
					'A `disabled` tab cannot be activated (the click handler guards it); a ' +
					'`hidden` tab is removed from the bar.',
			},
		},
	},
	render: () =>
		html`<cosmoz-tabs-next-states-demo></cosmoz-tabs-next-states-demo>`,
};

const CompactWidthDemo = () => {
	const [active, setActive] = useState('overview'),
		select = (e) => setActive(e.currentTarget.dataset.name);

	return html`
		${panelStyles}
		<cosmoz-tabs-next compact-width="true">
			<cosmoz-tab-next
				data-name="overview"
				?active=${active === 'overview'}
				@click=${select}
			>
				Overview
			</cosmoz-tab-next>
			<cosmoz-tab-next
				data-name="rows"
				badge="5"
				?active=${active === 'rows'}
				@click=${select}
			>
				Invoice rows
			</cosmoz-tab-next>
			<cosmoz-tab-next
				data-name="accounting"
				?active=${active === 'accounting'}
				@click=${select}
			>
				Accounting
			</cosmoz-tab-next>
			<cosmoz-tab-next
				data-name="history"
				?active=${active === 'history'}
				@click=${select}
			>
				History
			</cosmoz-tab-next>
		</cosmoz-tabs-next>
		<div style="padding-top: 20px">${panels[active]()}</div>
	`;
};

if (!customElements.get('cosmoz-tabs-next-compactwidth-demo')) {
	customElements.define(
		'cosmoz-tabs-next-compactwidth-demo',
		component(CompactWidthDemo)
	);
}

export const CompactWidth = {
	name: 'Compact width',
	parameters: {
		docs: {
			source: {
				code: `
<cosmoz-tabs-next variant="underline" compact-width="true">
  <cosmoz-tab-next data-name="overview"
    ?active=\${active === 'overview'} @click=\${select}>Overview</cosmoz-tab-next>
</cosmoz-tabs-next>`,
			},
			description: {
				story:
					'Tabs spread evenly across the available width by default. Set ' +
					'`compact-width="true"` to size them to their content (they hug their ' +
					'labels and align to the start).',
			},
		},
	},
	render: () =>
		html`<cosmoz-tabs-next-compactwidth-demo></cosmoz-tabs-next-compactwidth-demo>`,
};

const DataDrivenDemo = () => {
	const model = useTabs(invoiceTabs);

	return html`
		${panelStyles}
		<cosmoz-tabs-next variant="brand">
			${renderTabs({ ...model, variant: 'brand' })}
		</cosmoz-tabs-next>
		${renderActivated(model, (tab) =>
			tab.isActive
				? html`<div style="padding-top: 20px">${tab.render()}</div>`
				: nothing
		)}
	`;
};

if (!customElements.get('cosmoz-tabs-next-data-demo')) {
	customElements.define(
		'cosmoz-tabs-next-data-demo',
		component(DataDrivenDemo)
	);
}

export const DataDriven = {
	parameters: {
		docs: {
			source: {
				code: `const model = useTabs(invoiceTabs);

<cosmoz-tabs-next variant="brand">
  \${renderTabs({ ...model, variant: 'brand' })}
</cosmoz-tabs-next>
\${renderActivated(model, (tab) =>
  tab.isActive ? tab.render() : nothing)}`,
			},
			description: {
				story:
					'Driven entirely from a data array with `useTabs(tabs)` -> ' +
					'`renderTabs(model)` for the bar and `renderActivated(model, …)` for ' +
					'the panels (which keeps already-visited panels mounted). Pass ' +
					'`{ hashParam }` to `useTabs` to bind selection to the URL ' +
					'(see *Hash routing*).',
			},
		},
	},
	render: () => html`<cosmoz-tabs-next-data-demo></cosmoz-tabs-next-data-demo>`,
};

const HashDemo = () => {
	const model = useTabs(invoiceTabs, { hashParam: 'ntab' });

	return html`
		${panelStyles}
		<cosmoz-tabs-next variant="brand">
			${renderTabs({ ...model, variant: 'brand' })}
		</cosmoz-tabs-next>
		${renderActivated(model, (tab) =>
			tab.isActive
				? html`<div style="padding-top: 20px">${tab.render()}</div>`
				: nothing
		)}
	`;
};

if (!customElements.get('cosmoz-tabs-next-hash-demo')) {
	customElements.define('cosmoz-tabs-next-hash-demo', component(HashDemo));
}

export const HashRouting = {
	parameters: {
		docs: {
			source: {
				code: `const model = useTabs(invoiceTabs, { hashParam: 'ntab' });

<cosmoz-tabs-next variant="brand">
  \${renderTabs({ ...model, variant: 'brand' })}
</cosmoz-tabs-next>
\${renderActivated(model, (tab) =>
  tab.isActive ? tab.render() : nothing)}`,
			},
			description: {
				story:
					'Bind selection to the URL by passing `{ hashParam }` to `useTabs` ' +
					'(here `useTabs(tabs, { hashParam: "ntab" })`) — deep-links and the ' +
					'back button work, just like the legacy family. Note: inside Storybook ' +
					'the visible address bar belongs to the **manager**, while the component ' +
					'binds to the **preview iframe** URL, so the change is not visible here. ' +
					'Open this story in a new tab / isolation mode to see the real URL ' +
					'change and the back button.',
			},
		},
	},
	render: () => html`<cosmoz-tabs-next-hash-demo></cosmoz-tabs-next-hash-demo>`,
};

const ColorsBar = (host) => {
	const vars = host.getAttribute('vars') || '',
		[active, setActive] = useState('overview'),
		select = (e) => setActive(e.currentTarget.dataset.name);

	return html`
		${panelStyles}
		<cosmoz-tabs-next variant="brand" style=${vars}>
			<cosmoz-tab-next
				data-name="overview"
				?active=${active === 'overview'}
				@click=${select}
			>
				Overview
			</cosmoz-tab-next>
			<cosmoz-tab-next
				data-name="rows"
				badge="5"
				?active=${active === 'rows'}
				@click=${select}
			>
				Invoice rows
			</cosmoz-tab-next>
			<cosmoz-tab-next
				data-name="accounting"
				?active=${active === 'accounting'}
				@click=${select}
			>
				Accounting
			</cosmoz-tab-next>
		</cosmoz-tabs-next>
		<div style="padding-top: 20px">${panels[active]()}</div>
	`;
};

if (!customElements.get('cosmoz-tabs-next-colors-bar')) {
	customElements.define(
		'cosmoz-tabs-next-colors-bar',
		component(ColorsBar, { observedAttributes: ['vars'] })
	);
}

export const SelectedColors = {
	parameters: {
		docs: {
			source: {
				code: `
<cosmoz-tabs-next
  variant="brand"
  style="--cz-color-bg-brand: var(--cz-color-bg-secondary);
         --cz-color-text-brand: var(--cz-color-text-secondary);"
>
  <cosmoz-tab-next data-name="overview"
    ?active=\${active === 'overview'} @click=\${select}>Overview</cosmoz-tab-next>
</cosmoz-tabs-next>`,
			},
			description: {
				story:
					'The selected pill **and** the badge both read `--cz-color-bg-brand` / ' +
					'`--cz-color-text-brand`. Override just those two tokens on the ' +
					'`<cosmoz-tabs-next>` host to recolor them — no `--cosmoz-tabs-*` knobs ' +
					'needed. They share the same tokens, so the pill and badge always ' +
					'stay in sync (you cannot color them independently without new vars).',
			},
		},
	},
	render: () => html`
		<div class="story-stack">
			<div>
				<div class="story-label">brand (default)</div>
				<cosmoz-tabs-next-colors-bar></cosmoz-tabs-next-colors-bar>
			</div>
			<div>
				<div class="story-label">brand solid</div>
				<cosmoz-tabs-next-colors-bar
					vars="--cz-color-bg-brand: var(--cz-color-bg-brand-solid); --cz-color-text-brand: var(--cz-color-text-on-brand);"
				></cosmoz-tabs-next-colors-bar>
			</div>
			<div>
				<div class="story-label">gray</div>
				<cosmoz-tabs-next-colors-bar
					vars="--cz-color-bg-brand: var(--cz-color-bg-secondary); --cz-color-text-brand: var(--cz-color-text-secondary);"
				></cosmoz-tabs-next-colors-bar>
			</div>
		</div>
	`,
};

const MinimalDemo = () => {
	const [active, setActive] = useState('overview'),
		select = (e) => setActive(e.currentTarget.dataset.name);

	return html`
		${panelStyles}
		<cosmoz-tabs-next
			variant="brand"
			style="--cz-color-bg-brand: var(--cz-color-bg-secondary); --cz-color-text-brand: var(--cz-color-text-secondary);"
		>
			<cosmoz-tab-next
				data-name="overview"
				?active=${active === 'overview'}
				@click=${select}
			>
				Overview
			</cosmoz-tab-next>
			<cosmoz-tab-next
				data-name="rows"
				badge="5"
				?active=${active === 'rows'}
				@click=${select}
			>
				Invoice rows
			</cosmoz-tab-next>
			<cosmoz-tab-next
				data-name="accounting"
				?active=${active === 'accounting'}
				@click=${select}
			>
				Accounting
			</cosmoz-tab-next>
		</cosmoz-tabs-next>
		<div style="padding-top: 20px">${panels[active]()}</div>
	`;
};

if (!customElements.get('cosmoz-tabs-next-minimal-demo')) {
	customElements.define(
		'cosmoz-tabs-next-minimal-demo',
		component(MinimalDemo)
	);
}

export const Minimal = {
	parameters: {
		docs: {
			source: {
				code: `<cosmoz-tabs-next
  variant="brand"
  style="--cz-color-bg-brand: var(--cz-color-bg-secondary);
         --cz-color-text-brand: var(--cz-color-text-secondary);"
>
  <cosmoz-tab-next data-name="overview"
    ?active=\${active === 'overview'} @click=\${select}>Overview</cosmoz-tab-next>
</cosmoz-tabs-next>`,
			},
			description: {
				story:
					'Untitled UI’s *button minimal* look — the `brand` pill recolored to a ' +
					'subtle neutral by pointing `--cz-color-bg-brand` at ' +
					'`--cz-color-bg-secondary` (and `--cz-color-text-brand` at ' +
					'`--cz-color-text-secondary`). Achievable with the existing tokens, no ' +
					'new variant. (Untitled’s *button border* / segmented look is **not** ' +
					'reachable via tokens alone — it needs a bordered container + selected ' +
					'shadow, i.e. a dedicated variant.)',
			},
		},
	},
	render: () =>
		html`<cosmoz-tabs-next-minimal-demo></cosmoz-tabs-next-minimal-demo>`,
};
