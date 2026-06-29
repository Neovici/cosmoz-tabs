import {
	calculatorIcon,
	clockRewindIcon,
	listIcon,
	messageChatCircleIcon,
	paperclipIcon,
	receiptIcon,
} from '@neovici/cosmoz-icons/untitled';
import { html } from 'lit-html';

import '../src/cosmoz-tabs';
import {
	accounting,
	attachments,
	comments,
	history,
	overview,
	panelStyles,
	rows,
} from './demo-content';

export default {
	title: 'Tabs/cosmoz-tabs',
	component: 'cosmoz-tabs',
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component:
					'Legacy, DOM-driven tabs: you author `<cosmoz-tab>` elements and the ' +
					'container renders the bar and switches the panels. Selection works ' +
					'out of the box (no wiring needed).',
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

export const Default = {
	args: { variant: 'underline' },
	parameters: { controls: { disable: false } },
	render: ({ variant }) => html`
		${panelStyles}
		<cosmoz-tabs variant=${variant} .selected=${'overview'}>
			<cosmoz-tab name="overview" heading="Overview" .icon=${receiptIcon()}>
				${overview()}
			</cosmoz-tab>
			<cosmoz-tab
				name="rows"
				heading="Invoice rows"
				badge="5"
				.icon=${listIcon()}
			>
				${rows()}
			</cosmoz-tab>
			<cosmoz-tab
				name="accounting"
				heading="Accounting"
				.icon=${calculatorIcon()}
			>
				${accounting()}
			</cosmoz-tab>
			<cosmoz-tab name="history" heading="History" .icon=${clockRewindIcon()}>
				${history()}
			</cosmoz-tab>
			<cosmoz-tab
				name="comments"
				heading="Comments"
				badge="2"
				.icon=${messageChatCircleIcon()}
			>
				${comments()}
			</cosmoz-tab>
			<cosmoz-tab
				name="attachments"
				heading="Attachments"
				badge="3"
				.icon=${paperclipIcon()}
			>
				${attachments()}
			</cosmoz-tab>
		</cosmoz-tabs>
	`,
};

export const Variants = {
	parameters: {
		docs: {
			description: {
				story:
					'The two Untitled UI looks side by side: `underline` (default) and ' +
					'`brand` (pill).',
			},
		},
	},
	render: () => html`
		${panelStyles}
		<div class="story-stack">
			<div>
				<div class="story-label">variant="underline"</div>
				<cosmoz-tabs variant="underline" .selected=${'overview'}>
					<cosmoz-tab name="overview" heading="Overview" .icon=${receiptIcon()}>
						${overview()}
					</cosmoz-tab>
					<cosmoz-tab
						name="rows"
						heading="Invoice rows"
						badge="5"
						.icon=${listIcon()}
					>
						${rows()}
					</cosmoz-tab>
					<cosmoz-tab
						name="accounting"
						heading="Accounting"
						.icon=${calculatorIcon()}
					>
						${accounting()}
					</cosmoz-tab>
				</cosmoz-tabs>
			</div>
			<div>
				<div class="story-label">variant="brand"</div>
				<cosmoz-tabs variant="brand" .selected=${'overview'}>
					<cosmoz-tab name="overview" heading="Overview" .icon=${receiptIcon()}>
						${overview()}
					</cosmoz-tab>
					<cosmoz-tab
						name="rows"
						heading="Invoice rows"
						badge="5"
						.icon=${listIcon()}
					>
						${rows()}
					</cosmoz-tab>
					<cosmoz-tab
						name="accounting"
						heading="Accounting"
						.icon=${calculatorIcon()}
					>
						${accounting()}
					</cosmoz-tab>
				</cosmoz-tabs>
			</div>
		</div>
	`,
};

export const WithoutIcons = {
	parameters: {
		docs: {
			description: {
				story:
					'Headings only — icons are optional (set via the `.icon` property).',
			},
		},
	},
	render: () => html`
		${panelStyles}
		<cosmoz-tabs variant="underline" .selected=${'overview'}>
			<cosmoz-tab name="overview" heading="Overview">${overview()}</cosmoz-tab>
			<cosmoz-tab name="rows" heading="Invoice rows" badge="5">
				${rows()}
			</cosmoz-tab>
			<cosmoz-tab name="accounting" heading="Accounting">
				${accounting()}
			</cosmoz-tab>
			<cosmoz-tab name="history" heading="History">${history()}</cosmoz-tab>
		</cosmoz-tabs>
	`,
};

export const DisabledAndHidden = {
	parameters: {
		docs: {
			description: {
				story:
					'A disabled tab is shown but not selectable; a hidden tab is removed ' +
					'from the bar entirely.',
			},
		},
	},
	render: () => html`
		${panelStyles}
		<cosmoz-tabs variant="underline" .selected=${'overview'}>
			<cosmoz-tab name="overview" heading="Overview">${overview()}</cosmoz-tab>
			<cosmoz-tab name="rows" heading="Invoice rows" badge="5">
				${rows()}
			</cosmoz-tab>
			<cosmoz-tab name="accounting" heading="Accounting" disabled>
				${accounting()}
			</cosmoz-tab>
			<cosmoz-tab name="history" heading="History" hidden>
				${history()}
			</cosmoz-tab>
			<cosmoz-tab name="comments" heading="Comments" badge="2">
				${comments()}
			</cosmoz-tab>
		</cosmoz-tabs>
	`,
};

export const HashRouting = {
	parameters: {
		docs: {
			description: {
				story:
					'With `hash-param` the active tab is bound to the URL hash ' +
					'(e.g. `#tab=accounting`), so deep-links and the back button work. ' +
					'Note: inside Storybook the visible address bar belongs to the ' +
					'**manager**, while the component binds to the **preview iframe** URL, ' +
					'so the change is not visible here. Open this story in a new tab / ' +
					'isolation mode to see the real URL change and the back button.',
			},
		},
	},
	render: () => html`
		${panelStyles}
		<cosmoz-tabs variant="underline" hash-param="tab">
			<cosmoz-tab name="overview" heading="Overview">${overview()}</cosmoz-tab>
			<cosmoz-tab name="rows" heading="Invoice rows" badge="5">
				${rows()}
			</cosmoz-tab>
			<cosmoz-tab name="accounting" heading="Accounting">
				${accounting()}
			</cosmoz-tab>
			<cosmoz-tab name="history" heading="History">${history()}</cosmoz-tab>
			<cosmoz-tab name="comments" heading="Comments" badge="2">
				${comments()}
			</cosmoz-tab>
		</cosmoz-tabs>
	`,
};

export const ManyTabs = {
	parameters: {
		docs: {
			description: {
				story:
					'When the bar overflows its container it scrolls horizontally and the ' +
					'selected tab is scrolled into view.',
			},
		},
	},
	render: () => html`
		${panelStyles}
		<div style="max-width: 460px">
			<cosmoz-tabs variant="brand" .selected=${'overview'}>
				<cosmoz-tab name="overview" heading="Overview" .icon=${receiptIcon()}>
					${overview()}
				</cosmoz-tab>
				<cosmoz-tab
					name="rows"
					heading="Invoice rows"
					badge="5"
					.icon=${listIcon()}
				>
					${rows()}
				</cosmoz-tab>
				<cosmoz-tab
					name="accounting"
					heading="Accounting"
					.icon=${calculatorIcon()}
				>
					${accounting()}
				</cosmoz-tab>
				<cosmoz-tab name="history" heading="History" .icon=${clockRewindIcon()}>
					${history()}
				</cosmoz-tab>
				<cosmoz-tab
					name="comments"
					heading="Comments"
					badge="2"
					.icon=${messageChatCircleIcon()}
				>
					${comments()}
				</cosmoz-tab>
				<cosmoz-tab
					name="attachments"
					heading="Attachments"
					badge="3"
					.icon=${paperclipIcon()}
				>
					${attachments()}
				</cosmoz-tab>
				<cosmoz-tab name="ocr" heading="OCR">
					<div class="panel">
						<p>Raw OCR interpretation of the scanned document.</p>
					</div>
				</cosmoz-tab>
				<cosmoz-tab name="matches" heading="Matches">
					<div class="panel">
						<p>Order / delivery lines matched to this invoice.</p>
					</div>
				</cosmoz-tab>
			</cosmoz-tabs>
		</div>
	`,
};

export const WithTabCards = {
	parameters: {
		docs: {
			description: {
				story:
					'A tab panel containing `cosmoz-tab-card` (collapsible cards) — a ' +
					'common cosmoz-frontend pattern. Cards are sized via ' +
					'`--cosmoz-tab-card-width` to fit their content.',
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
			<cosmoz-tab name="history" heading="History">${history()}</cosmoz-tab>
		</cosmoz-tabs>
	`,
};

export const CompactWidth = {
	name: 'Compact width',
	argTypes: {
		variant: {
			control: 'select',
			options: ['brand', 'underline'],
		},
	},
	args: { variant: 'brand' },
	parameters: {
		controls: { disable: false },
		docs: {
			description: {
				story:
					'Tabs spread evenly across the available width by default (the legacy ' +
					'always-spread behavior). Add the `compact-width` attribute to size ' +
					'them to their content (they hug their labels and align to the start).',
			},
		},
	},
	render: ({ variant }) => html`
		${panelStyles}
		<cosmoz-tabs variant=${variant} .selected=${'overview'} compact-width>
			<cosmoz-tab name="overview" heading="Overview">${overview()}</cosmoz-tab>
			<cosmoz-tab name="rows" heading="Invoice rows" badge="5">
				${rows()}
			</cosmoz-tab>
			<cosmoz-tab name="accounting" heading="Accounting">
				${accounting()}
			</cosmoz-tab>
			<cosmoz-tab name="history" heading="History">${history()}</cosmoz-tab>
		</cosmoz-tabs>
	`,
};

export const SelectedColors = {
	parameters: {
		docs: {
			description: {
				story:
					'The selected pill **and** the badge are a solid brand fill — ' +
					'`--cz-color-bg-brand-solid` with `--cz-color-text-on-brand` — so the ' +
					'text stays legible in both light and dark themes. Override ' +
					'`--cz-color-bg-brand-solid` on the `<cosmoz-tabs>` host to recolor ' +
					'them (e.g. to a success/error solid); the on-brand text follows.',
			},
		},
	},
	render: () => html`
		${panelStyles}
		<div class="story-stack">
			<div>
				<div class="story-label">brand (default)</div>
				<cosmoz-tabs variant="brand" .selected=${'overview'}>
					<cosmoz-tab name="overview" heading="Overview">
						${overview()}
					</cosmoz-tab>
					<cosmoz-tab name="rows" heading="Invoice rows" badge="5">
						${rows()}
					</cosmoz-tab>
					<cosmoz-tab name="accounting" heading="Accounting">
						${accounting()}
					</cosmoz-tab>
				</cosmoz-tabs>
			</div>
			<div>
				<div class="story-label">success</div>
				<cosmoz-tabs
					variant="brand"
					.selected=${'overview'}
					style="--cz-color-bg-brand-solid: var(--cz-color-bg-success-solid);"
				>
					<cosmoz-tab name="overview" heading="Overview">
						${overview()}
					</cosmoz-tab>
					<cosmoz-tab name="rows" heading="Invoice rows" badge="5">
						${rows()}
					</cosmoz-tab>
					<cosmoz-tab name="accounting" heading="Accounting">
						${accounting()}
					</cosmoz-tab>
				</cosmoz-tabs>
			</div>
			<div>
				<div class="story-label">error</div>
				<cosmoz-tabs
					variant="brand"
					.selected=${'overview'}
					style="--cz-color-bg-brand-solid: var(--cz-color-bg-error-solid);"
				>
					<cosmoz-tab name="overview" heading="Overview">
						${overview()}
					</cosmoz-tab>
					<cosmoz-tab name="rows" heading="Invoice rows" badge="5">
						${rows()}
					</cosmoz-tab>
					<cosmoz-tab name="accounting" heading="Accounting">
						${accounting()}
					</cosmoz-tab>
				</cosmoz-tabs>
			</div>
		</div>
	`,
};

export const Minimal = {
	parameters: {
		docs: {
			description: {
				story:
					'A subtle neutral pill — point `--cz-color-bg-brand-solid` at ' +
					'`--cz-color-bg-tertiary` and `--cz-color-text-on-brand` at ' +
					'`--cz-color-text-primary`. Unlike a brand *tint*, this neutral pair ' +
					'keeps its contrast in both light and dark themes.',
			},
		},
	},
	render: () => html`
		${panelStyles}
		<cosmoz-tabs
			variant="brand"
			.selected=${'overview'}
			style="--cz-color-bg-brand-solid: var(--cz-color-bg-tertiary); --cz-color-text-on-brand: var(--cz-color-text-primary);"
		>
			<cosmoz-tab name="overview" heading="Overview">${overview()}</cosmoz-tab>
			<cosmoz-tab name="rows" heading="Invoice rows" badge="5">
				${rows()}
			</cosmoz-tab>
			<cosmoz-tab name="accounting" heading="Accounting">
				${accounting()}
			</cosmoz-tab>
		</cosmoz-tabs>
	`,
};

const themedTabs = (label, vars) => html`
	<div>
		<div class="story-label">${label}</div>
		<cosmoz-tabs variant="brand" .selected=${'overview'} style=${vars}>
			<cosmoz-tab name="overview" heading="Overview">${overview()}</cosmoz-tab>
			<cosmoz-tab name="rows" heading="Invoice rows" badge="5">
				${rows()}
			</cosmoz-tab>
			<cosmoz-tab name="accounting" heading="Accounting">
				${accounting()}
			</cosmoz-tab>
		</cosmoz-tabs>
	</div>
`;

export const Theming = {
	parameters: {
		docs: {
			description: {
				story:
					'A bench of selected-pill / badge color configurations for checking ' +
					'light **and** dark themes. Each recolors `--cz-color-bg-brand-solid` ' +
					'(the neutral one also overrides `--cz-color-text-on-brand`); the ' +
					'on-brand text follows automatically. Toggle the theme in the toolbar ' +
					'to verify contrast.',
			},
		},
	},
	render: () => html`
		${panelStyles}
		<div class="story-stack">
			${themedTabs('brand (default)', '')}
			${themedTabs(
				'success',
				'--cz-color-bg-brand-solid: var(--cz-color-bg-success-solid);'
			)}
			${themedTabs(
				'error',
				'--cz-color-bg-brand-solid: var(--cz-color-bg-error-solid);'
			)}
			${themedTabs(
				'warning',
				'--cz-color-bg-brand-solid: var(--cz-color-bg-warning-solid);'
			)}
			${themedTabs(
				'neutral',
				'--cz-color-bg-brand-solid: var(--cz-color-bg-tertiary); --cz-color-text-on-brand: var(--cz-color-text-primary);'
			)}
		</div>
	`,
};
