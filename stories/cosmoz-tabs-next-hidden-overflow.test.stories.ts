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

const bar = () => html`
	<div class="box" style="width: 260px; overflow: hidden;">
		<cosmoz-tabs-next variant="underline">
			<cosmoz-tab-next name="overview" active>Overview</cosmoz-tab-next>
			<cosmoz-tab-next name="rows">Invoice rows</cosmoz-tab-next>
			<cosmoz-tab-next name="accounting">Accounting</cosmoz-tab-next>
			<cosmoz-tab-next name="history">History</cosmoz-tab-next>
			<cosmoz-tab-next name="late" hidden>Late</cosmoz-tab-next>
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

		await waitFor(() => expect(names(tabs).length).toBeGreaterThan(0));
		expect(names(tabs)).not.toContain('late');

		await step('it is copied into the menu once it is shown', async () => {
			late.removeAttribute('hidden');
			await waitFor(() => expect(names(tabs)).toContain('late'));
			expect(late.hasAttribute('overflowing')).toBe(true);
		});

		await step('and leaves it again when hidden', async () => {
			late.setAttribute('hidden', '');
			await waitFor(() => expect(names(tabs)).not.toContain('late'));
			expect(late.hasAttribute('overflowing')).toBe(false);
		});
	},
};

export const HidingEveryOverflowingTabHidesTheTrigger: Story = {
	render: bar,
	play: async ({ canvasElement, step }) => {
		const tabs = next(canvasElement);

		await waitFor(() => expect(names(tabs).length).toBeGreaterThan(0));

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
				<cosmoz-tab-next name="overview" active>Overview</cosmoz-tab-next>
				<cosmoz-tab-next name="rows">Invoice rows</cosmoz-tab-next>
				<cosmoz-tab-next name="accounting">Accounting</cosmoz-tab-next>
				<cosmoz-tab-next name="history">History</cosmoz-tab-next>
				<cosmoz-tab-next name="late">Late</cosmoz-tab-next>
			</cosmoz-tabs-next>
		</div>
	`,
	play: async ({ canvasElement, step }) => {
		const tabs = next(canvasElement),
			late = tabs.querySelector('[name="late"]') as HTMLElement;

		await waitFor(() => expect(names(tabs)).toContain('late'));
		const others = names(tabs).filter((name) => name !== 'late');
		expect(others.length).toBeGreaterThan(0);

		await step('nothing else moves, yet the copy goes', async () => {
			late.setAttribute('hidden', '');
			await waitFor(() => expect(names(tabs)).toEqual(others));
			expect(late.hasAttribute('overflowing')).toBe(false);
			expect(more(tabs).hasAttribute('hidden')).toBe(false);
		});

		await step('and comes back when shown again', async () => {
			late.removeAttribute('hidden');
			await waitFor(() => expect(names(tabs)).toEqual([...others, 'late']));
		});
	},
};
