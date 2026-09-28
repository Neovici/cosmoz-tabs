import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';
import { expect, waitFor } from 'storybook/test';

import '../src/next';
import { next, settle, sr } from './overflow-helpers';

const meta: Meta = {
	title: 'Tests/Tabs overflow (next, radiogroup)',
};

export default meta;

type Story = StoryObj;

const radiogroup = () => html`
	<div class="box" style="width: 220px; overflow: hidden;">
		<cosmoz-tabs-next variant="segmented" compact-width role="radiogroup">
			<cosmoz-tab-next name="today">Today</cosmoz-tab-next>
			<cosmoz-tab-next name="week">7 days</cosmoz-tab-next>
			<cosmoz-tab-next name="month">30 days</cosmoz-tab-next>
			<cosmoz-tab-next name="quarter">90 days</cosmoz-tab-next>
			<cosmoz-tab-next name="year" active>12 months</cosmoz-tab-next>
		</cosmoz-tabs-next>
	</div>
`;

export const OverflowingRadiosStayRadios: Story = {
	render: radiogroup,
	play: async ({ canvasElement, step }) => {
		const bar = next(canvasElement),
			menu = () => sr(bar).querySelector('.menu') as HTMLElement,
			copies = () =>
				sr(bar).querySelectorAll<HTMLElement>('.menu > cosmoz-tab-next');

		await waitFor(() => expect(copies().length).toBeGreaterThan(0));

		await step('the menu is the same group as the bar', async () => {
			expect(sr(bar).querySelector('.items')?.getAttribute('role')).toBe(
				'radiogroup',
			);
			expect(menu().getAttribute('role')).toBe('radiogroup');
		});

		await step('the copies are radios reporting aria-checked', async () => {
			copies().forEach((copy) => {
				expect(copy.getAttribute('role')).toBe('radio');
				expect(copy.hasAttribute('aria-selected')).toBe(false);
				expect(copy.getAttribute('aria-checked')).toBe(
					copy.hasAttribute('active') ? 'true' : 'false',
				);
			});
			// the last one is active and, at this width, in the menu
			expect(
				menu().querySelector('[name="year"]')?.getAttribute('aria-checked'),
			).toBe('true');
		});

		await step('the arrow keys walk the radios', async () => {
			(sr(bar).querySelector('.more-button') as HTMLElement).click();
			const [first, second] = copies();
			await waitFor(() => {
				first.focus();
				expect(sr(bar).activeElement).toBe(first);
			});
			first.dispatchEvent(
				new KeyboardEvent('keydown', {
					key: 'ArrowDown',
					bubbles: true,
					composed: true,
				}),
			);
			expect(sr(bar).activeElement).toBe(second);
		});

		await step('copies do not carry the bar-only size', async () => {
			bar.setAttribute('size', 'sm');
			await settle();
			copies().forEach((copy) => expect(copy.hasAttribute('size')).toBe(false));
		});
	},
};

export const ASettledBarStopsWriting: Story = {
	render: radiogroup,
	play: async ({ canvasElement, step }) => {
		const bar = next(canvasElement);

		await waitFor(() =>
			expect(
				sr(bar).querySelectorAll('.menu > cosmoz-tab-next').length,
			).toBeGreaterThan(0),
		);
		await settle(8);

		await step('no attribute churn once nothing changes', async () => {
			let writes = 0;
			const observer = new MutationObserver((records) => {
				writes += records.length;
			});
			bar
				.querySelectorAll('cosmoz-tab-next')
				.forEach((tab) => observer.observe(tab, { attributes: true }));
			// re-render without changing anything the tabs depend on
			bar.setAttribute('more-label', 'More');
			await settle(8);
			observer.disconnect();
			expect(writes).toBe(0);
		});
	},
};

const itemsRole = (bar: HTMLElement) =>
	sr(bar).querySelector('.items')?.getAttribute('role');

export const RoleChangesLandOnTheirOwn: Story = {
	render: () => html`
		<cosmoz-tabs-next variant="segmented" compact-width>
			<cosmoz-tab-next name="today" active>Today</cosmoz-tab-next>
			<cosmoz-tab-next name="week">7 days</cosmoz-tab-next>
		</cosmoz-tabs-next>
	`,
	play: async ({ canvasElement, step }) => {
		const bar = next(canvasElement),
			first = () => bar.querySelector('cosmoz-tab-next') as HTMLElement;

		await waitFor(() => expect(itemsRole(bar)).toBe('tablist'));

		await step('setting a role later needs no other re-render', async () => {
			bar.setAttribute('role', 'radiogroup');
			await waitFor(() => expect(itemsRole(bar)).toBe('radiogroup'));
			await waitFor(() => expect(first().getAttribute('role')).toBe('radio'));
			expect(bar.getAttribute('role')).toBe('none');
		});

		await step('removing it falls back to a tablist', async () => {
			bar.removeAttribute('role');
			await waitFor(() => expect(itemsRole(bar)).toBe('tablist'));
			await waitFor(() => expect(first().getAttribute('role')).toBe('tab'));
			expect(first().getAttribute('aria-selected')).toBe('true');
			expect(first().hasAttribute('aria-checked')).toBe(false);
			expect(bar.getAttribute('role')).toBe('none');
		});

		await step('and it can be set again', async () => {
			bar.setAttribute('role', 'radiogroup');
			await waitFor(() => expect(itemsRole(bar)).toBe('radiogroup'));
		});
	},
};
