import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';
import { expect, waitFor } from 'storybook/test';

import '../src/next';
import { more, next, sr } from './overflow-helpers';

const meta: Meta = {
	title: 'Tests/Tabs overflow (next, hidden tabs)',
};

export default meta;

type Story = StoryObj;

/**
 * Fixed tab widths (same reasoning as nextFixture): the overflow set and
 * the menu rows the stories assert on are deterministic, so the exact
 * menu lists are asserted directly instead of captured mid-cycle.
 */
const bar = () => html`
	<div class="box" style="width: 260px; overflow: hidden;">
		<cosmoz-tabs-next variant="underline">
			<cosmoz-tab-next
				name="overview"
				active
				style="width: 90px; flex: 0 0 90px"
				>Overview</cosmoz-tab-next
			>
			<cosmoz-tab-next name="rows" style="width: 110px; flex: 0 0 110px"
				>Invoice rows</cosmoz-tab-next
			>
			<cosmoz-tab-next name="accounting" style="width: 100px; flex: 0 0 100px"
				>Accounting</cosmoz-tab-next
			>
			<cosmoz-tab-next name="history" style="width: 80px; flex: 0 0 80px"
				>History</cosmoz-tab-next
			>
			<cosmoz-tab-next name="late" hidden style="width: 110px; flex: 0 0 110px"
				>Late</cosmoz-tab-next
			>
		</cosmoz-tabs-next>
	</div>
`;

const names = (el: HTMLElement) =>
	[...sr(el).querySelectorAll<HTMLElement>('.menu > cosmoz-tab-next')].map(
		(copy) => copy.getAttribute('name'),
	);

export const AnUnhiddenTabPastTheEdgeJoinsTheMenu: Story = {
	render: bar,
	play: async ({ canvasElement, step }) => {
		const tabs = next(canvasElement),
			late = tabs.querySelector('[name="late"]') as HTMLElement;

		await waitFor(() =>
			expect(names(tabs)).toEqual(['rows', 'accounting', 'history']),
		);

		await step('it is copied into the menu once it is shown', async () => {
			late.removeAttribute('hidden');
			await waitFor(() =>
				expect(names(tabs)).toEqual(['rows', 'accounting', 'history', 'late']),
			);
			expect(late.hasAttribute('overflowing')).toBe(true);
		});

		await step('and leaves it again when hidden', async () => {
			late.setAttribute('hidden', '');
			await waitFor(() =>
				expect(names(tabs)).toEqual(['rows', 'accounting', 'history']),
			);
			expect(late.hasAttribute('overflowing')).toBe(false);
		});
	},
};

export const HidingEveryOverflowingTabHidesTheTrigger: Story = {
	render: bar,
	play: async ({ canvasElement, step }) => {
		const tabs = next(canvasElement);

		await waitFor(() =>
			expect(names(tabs)).toEqual(['rows', 'accounting', 'history']),
		);

		await step('the menu empties and the trigger goes away', async () => {
			tabs
				.querySelectorAll('cosmoz-tab-next:not([name="overview"])')
				.forEach((tab) => tab.setAttribute('hidden', ''));
			await waitFor(() => expect(names(tabs)).toEqual([]));
			await waitFor(() => expect(more(tabs).hasAttribute('hidden')).toBe(true));
		});

		await step('no hidden tab keeps its overflow mark', async () => {
			await waitFor(() =>
				expect(tabs.querySelectorAll('[hidden][overflowing]').length).toBe(0),
			);
		});
	},
};

export const HidingATrailingClippedTabDropsItsCopy: Story = {
	render: () => html`
		<div class="box" style="width: 260px; overflow: hidden;">
			<cosmoz-tabs-next variant="underline">
				<cosmoz-tab-next
					name="overview"
					active
					style="width: 90px; flex: 0 0 90px"
					>Overview</cosmoz-tab-next
				>
				<cosmoz-tab-next name="rows" style="width: 110px; flex: 0 0 110px"
					>Invoice rows</cosmoz-tab-next
				>
				<cosmoz-tab-next name="accounting" style="width: 100px; flex: 0 0 100px"
					>Accounting</cosmoz-tab-next
				>
				<cosmoz-tab-next name="history" style="width: 80px; flex: 0 0 80px"
					>History</cosmoz-tab-next
				>
				<cosmoz-tab-next name="late" style="width: 110px; flex: 0 0 110px"
					>Late</cosmoz-tab-next
				>
			</cosmoz-tabs-next>
		</div>
	`,
	play: async ({ canvasElement, step }) => {
		const tabs = next(canvasElement),
			late = tabs.querySelector('[name="late"]') as HTMLElement;

		await waitFor(() =>
			expect(names(tabs)).toEqual(['rows', 'accounting', 'history', 'late']),
		);

		await step('nothing else moves, yet the copy goes', async () => {
			late.setAttribute('hidden', '');
			await waitFor(() =>
				expect(names(tabs)).toEqual(['rows', 'accounting', 'history']),
			);
			expect(late.hasAttribute('overflowing')).toBe(false);
			expect(more(tabs).hasAttribute('hidden')).toBe(false);
		});

		await step('and comes back when shown again', async () => {
			late.removeAttribute('hidden');
			await waitFor(() =>
				expect(names(tabs)).toEqual(['rows', 'accounting', 'history', 'late']),
			);
		});
	},
};
