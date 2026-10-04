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
			expect(bar.getAttribute('role')).toBe('radiogroup');
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

		await step('Enter picks a radio like any button', async () => {
			const seen: string[] = [];
			bar
				.querySelectorAll('cosmoz-tab-next')
				.forEach((tab) =>
					tab.addEventListener('click', () =>
						seen.push(tab.getAttribute('name')!),
					),
				);
			(sr(bar).querySelector('.more-button') as HTMLElement).click();
			const [first] = copies();
			await waitFor(() => {
				first.focus();
				expect(sr(bar).activeElement).toBe(first);
			});
			first.dispatchEvent(
				new KeyboardEvent('keydown', {
					key: 'Enter',
					bubbles: true,
					composed: true,
					cancelable: true,
				}),
			);
			// the original, not the copy, received the pick
			expect(seen).toEqual([first.getAttribute('name')]);
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
		// let the mark cycle finish (it settles a frame per width change);
		// the settle above must cover its trailing rAF
		await settle(8);

		await step('no attribute churn once nothing changes', async () => {
			let writes = 0;
			const observer = new MutationObserver((records) => {
				writes += records.length;
			});
			bar
				.querySelectorAll('cosmoz-tab-next')
				.forEach((tab) => observer.observe(tab, { attributes: true }));
			// the mark cycle settles late under a cold storybook iframe;
			// wait for a quiet stretch before arming the comparison
			writes = 0;
			const quiet = async () => {
				for (;;) {
					const before = writes;
					await settle(10);
					if (writes === before) {
						return;
					}
				}
			};
			await quiet();
			writes = 0;
			// re-render without changing anything the tabs depend on
			bar.setAttribute('more-label', 'More');
			await settle(16);
			observer.disconnect();
			expect(writes).toBe(0);
		});
	},
};

const itemsRole = (bar: HTMLElement) => bar.getAttribute('role');

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

		await step('setting a role later re-renders', async () => {
			bar.setAttribute('role', 'radiogroup');
			// an observed attribute re-render picks authored changes up;
			// nudge another one to force the pass (role itself is a
			// platform-reflected property and does not schedule renders)
			bar.setAttribute('more-label', 'More');
			await waitFor(() => expect(itemsRole(bar)).toBe('radiogroup'));
			await waitFor(() => expect(first().getAttribute('role')).toBe('radio'));
		});

		await step('removing it falls back to a tablist', async () => {
			bar.removeAttribute('role');
			bar.setAttribute('more-label', 'Mer');
			await waitFor(() => expect(itemsRole(bar)).toBe('tablist'));
			await waitFor(() => expect(first().getAttribute('role')).toBe('tab'));
			expect(first().getAttribute('aria-selected')).toBe('true');
			expect(first().hasAttribute('aria-checked')).toBe(false);
		});

		await step('and it can be set again', async () => {
			bar.setAttribute('role', 'radiogroup');
			await waitFor(() => expect(itemsRole(bar)).toBe('radiogroup'));
		});
	},
};
