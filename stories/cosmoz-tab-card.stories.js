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
					'styling now derives from `@neovici/cosmoz-tokens`, so it follows ' +
					'light/dark mode. The `--cosmoz-tab-card-*` custom properties still ' +
					'work as overrides.',
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
