import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';
import { expect, waitFor } from 'storybook/test';

import '../src/cosmoz-tabs';
import '../src/next';
import {
	fixture,
	legacy,
	next,
	nextFixture,
	rows,
	sr,
	trigger,
} from './overflow-helpers';

const meta: Meta = {
	title: 'Tests/Overflow menu trigger',
};

export default meta;

type Story = StoryObj;

const key = (target: HTMLElement, name: string) =>
	target.dispatchEvent(
		new KeyboardEvent('keydown', {
			key: name,
			bubbles: true,
			composed: true,
			cancelable: true,
		}),
	);

const expanded = (el: HTMLElement) =>
	trigger(el).getAttribute('aria-expanded') === 'true';

const opened = (el: HTMLElement) =>
	sr(el).querySelector('.more')?.hasAttribute('opened');

const copies = (el: HTMLElement) => [
	...sr(el).querySelectorAll<HTMLElement>('.menu > cosmoz-tab-next'),
];

const families = [
	{ name: 'legacy', get: legacy, items: (el: HTMLElement) => [...rows(el)] },
	{ name: 'next', get: next, items: copies },
] as const;

const both = () => html`${fixture('260px')}${nextFixture('240px')}`;

export const KeyboardPickHandsFocusBackToTheTrigger: Story = {
	render: both,
	play: async ({ canvasElement, step }) => {
		for (const { name, get, items } of families) {
			const tabs = get(canvasElement) as HTMLElement;
			await waitFor(() => expect(items(tabs).length).toBeGreaterThan(0));

			await step(`${name}: Enter on a focused row`, async () => {
				trigger(tabs).click();
				await waitFor(() => expect(expanded(tabs)).toBe(true));
				const row = items(tabs).at(-1) as HTMLElement;
				row.focus();
				expect(sr(tabs).activeElement).toBe(row);
				key(row, 'Enter');
				await waitFor(() => expect(expanded(tabs)).toBe(false));
				await waitFor(() => expect(sr(tabs).activeElement).toBe(trigger(tabs)));
			});
		}
	},
};

export const ArrowKeysOnTheTriggerOpenTheMenu: Story = {
	render: both,
	play: async ({ canvasElement, step }) => {
		for (const { name, get, items } of families) {
			const tabs = get(canvasElement) as HTMLElement;
			await waitFor(() => expect(items(tabs).length).toBeGreaterThan(0));

			await step(`${name}: the trigger announces its popup`, () => {
				const button = trigger(tabs);
				expect(button.getAttribute('aria-haspopup')).toBe('true');
				const controls = button.getAttribute('aria-controls')!;
				expect(sr(tabs).getElementById(controls)).toBe(
					sr(tabs).querySelector('.menu'),
				);
			});

			await step(`${name}: ArrowDown opens on the first row`, async () => {
				trigger(tabs).focus();
				key(trigger(tabs), 'ArrowDown');
				await waitFor(() => expect(opened(tabs)).toBe(true));
				await waitFor(() =>
					expect(sr(tabs).activeElement).toBe(items(tabs)[0]),
				);
				(
					sr(tabs).querySelector('.more') as HTMLElement & {
						opened: boolean;
					}
				).opened = false;
				await waitFor(() => expect(opened(tabs)).toBe(false));
			});

			await step(`${name}: ArrowUp opens on the last row`, async () => {
				trigger(tabs).focus();
				key(trigger(tabs), 'ArrowUp');
				await waitFor(() => expect(opened(tabs)).toBe(true));
				await waitFor(() =>
					expect(sr(tabs).activeElement).toBe(items(tabs).at(-1)),
				);
				(
					sr(tabs).querySelector('.more') as HTMLElement & {
						opened: boolean;
					}
				).opened = false;
				await waitFor(() => expect(opened(tabs)).toBe(false));
			});
		}
	},
};

export const ModifiedClicksLeaveTheLegacyMenuOpen: Story = {
	render: () => fixture('260px'),
	play: async ({ canvasElement, step }) => {
		const tabs = legacy(canvasElement);
		await waitFor(() => expect(rows(tabs).length).toBeGreaterThan(0));
		trigger(tabs).click();
		await waitFor(() => expect(opened(tabs)).toBe(true));

		await step('a ctrl-click neither selects nor closes', async () => {
			const before = (tabs as HTMLElement & { selected?: string }).selected;
			rows(tabs)[0].dispatchEvent(
				new MouseEvent('click', {
					ctrlKey: true,
					bubbles: true,
					cancelable: true,
				}),
			);
			await new Promise(requestAnimationFrame);
			expect(opened(tabs)).toBe(true);
			expect((tabs as HTMLElement & { selected?: string }).selected).toBe(
				before,
			);
		});
	},
};

export const AnEmptyLabelFallsBackToTheTranslation: Story = {
	render: () => html`
		<div class="box" style="width: 240px; overflow: hidden;">
			<cosmoz-tabs more-label="">
				<cosmoz-tab name="overview" heading="Overview"></cosmoz-tab>
				<cosmoz-tab name="rows" heading="Invoice rows"></cosmoz-tab>
				<cosmoz-tab name="accounting" heading="Accounting"></cosmoz-tab>
				<cosmoz-tab name="history" heading="History"></cosmoz-tab>
			</cosmoz-tabs>
		</div>
		<div class="box" style="width: 240px; overflow: hidden;">
			<cosmoz-tabs-next more-label="">
				<cosmoz-tab-next name="overview" active>Overview</cosmoz-tab-next>
				<cosmoz-tab-next name="rows">Invoice rows</cosmoz-tab-next>
				<cosmoz-tab-next name="accounting">Accounting</cosmoz-tab-next>
				<cosmoz-tab-next name="history">History</cosmoz-tab-next>
			</cosmoz-tabs-next>
		</div>
	`,
	play: async ({ canvasElement }) => {
		for (const { get } of families) {
			const tabs = get(canvasElement) as HTMLElement;
			await waitFor(() =>
				expect(trigger(tabs).textContent?.trim()).toBe('More'),
			);
		}
	},
};
