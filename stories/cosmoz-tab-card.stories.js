import { html } from 'lit-html';

import '../src/cosmoz-tab-card';
import { accounting, attachments, overview, panelStyles } from './demo-content';

export default {
	title: 'Tabs/cosmoz-tab-card',
	component: 'cosmoz-tab-card',
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component:
					'A collapsible card, typically placed inside a `<cosmoz-tab>`. Its ' +
					'styling derives from `@neovici/cosmoz-tokens`, so it follows ' +
					'light/dark mode. Surface (`bg`, `border`, `radius`, `shadow`, ' +
					'`padding`, `margin`, `width`) and heading (`color`, `font-size`, ' +
					'`font-weight`, `line-height`) are all overridable via ' +
					'`--cosmoz-tab-card-*` custom properties — see the ' +
					'"Heading typography" story below.',
			},
		},
	},
};

export const Default = {
	parameters: {
		docs: {
			description: {
				story:
					'A static card, a collapsible card, and one that starts collapsed.',
			},
		},
	},
	render: () => html`
		${panelStyles}
		<div
			style="display:flex; flex-wrap:wrap; align-items:flex-start; --cosmoz-tab-card-width: 480px;"
		>
			<cosmoz-tab-card heading="Invoice details">
				${overview()}
			</cosmoz-tab-card>
			<cosmoz-tab-card heading="Accounting" collapsable>
				${accounting()}
			</cosmoz-tab-card>
			<cosmoz-tab-card heading="Attachments" collapsable collapsed>
				${attachments()}
			</cosmoz-tab-card>
		</div>
	`,
};

export const InsideTabs = {
	parameters: {
		docs: {
			description: {
				story:
					'The common pattern: cards tiled inside a tab panel (the tab gets a ' +
					'`has-cards` layout automatically).',
			},
		},
	},
	render: () => html`
		${panelStyles}
		<cosmoz-tabs variant="underline" .selected=${'overview'}>
			<cosmoz-tab
				name="overview"
				heading="Overview"
				style="--cosmoz-tab-card-width: 480px;"
			>
				<cosmoz-tab-card heading="Invoice details">
					${overview()}
				</cosmoz-tab-card>
				<cosmoz-tab-card heading="Accounting" collapsable>
					${accounting()}
				</cosmoz-tab-card>
				<cosmoz-tab-card heading="Attachments" collapsable collapsed>
					${attachments()}
				</cosmoz-tab-card>
			</cosmoz-tab>
		</cosmoz-tabs>
	`,
};

export const WithoutHeading = {
	parameters: {
		docs: {
			description: {
				story:
					'Without a `heading` the card is just a bordered content surface.',
			},
		},
	},
	render: () => html`
		${panelStyles}
		<cosmoz-tab-card style="--cosmoz-tab-card-width: 420px;">
			${overview()}
		</cosmoz-tab-card>
	`,
};

export const HeadingTypography = {
	parameters: {
		docs: {
			description: {
				story:
					'The heading typography (`font-size`, `font-weight`, `line-height`) ' +
					'and `.header` row height are overridable via ' +
					'`--cosmoz-tab-card-heading-*` and `--cosmoz-tab-card-header-min-height` ' +
					'— on top of the existing `--cosmoz-tab-card-heading-color`. Defaults ' +
					'are unchanged, so this is opt-in. A common case is a compact section ' +
					'header (`--cz-text-sm` / `--cz-font-weight-medium`), shown here next ' +
					'to the default `--cz-text-lg` / semibold heading.',
			},
		},
	},
	render: () => html`
		${panelStyles}
		<div class="story-stack">
			<div>
				<div class="story-label">default heading</div>
				<cosmoz-tab-card
					heading="Invoice details"
					style="--cosmoz-tab-card-width: 480px;"
				>
					${overview()}
				</cosmoz-tab-card>
			</div>
			<div>
				<div class="story-label">compact section heading (overridden)</div>
				<cosmoz-tab-card
					heading="Invoice details"
					style="
						--cosmoz-tab-card-width: 480px;
						--cosmoz-tab-card-heading-font-size: var(--cz-text-sm);
						--cosmoz-tab-card-heading-font-weight: var(--cz-font-weight-medium);
						--cosmoz-tab-card-heading-line-height: var(--cz-text-sm-line-height);
						--cosmoz-tab-card-header-min-height: 32px;
					"
				>
					${overview()}
				</cosmoz-tab-card>
			</div>
		</div>
	`,
};
