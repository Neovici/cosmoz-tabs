import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';
import { expect, waitFor } from 'storybook/test';

import '../src/next';
import { box, next, settle, sr } from './overflow-helpers';

const meta: Meta = {
	title: 'Tests/Tabs overflow (next)',
};

export default meta;

type Story = StoryObj;

export const NonTabChildrenAreNeverTreatedAsTabs: Story = {
	render: () => html`
		<div class="box" style="width: 260px; overflow: hidden;">
			<cosmoz-tabs-next variant="underline">
				<div class="heading">Orders</div>
				<cosmoz-tab-next name="overview" active>Overview</cosmoz-tab-next>
				<cosmoz-tab-next name="rows">Invoice rows</cosmoz-tab-next>
				<cosmoz-tab-next name="accounting">Accounting</cosmoz-tab-next>
				<cosmoz-tab-next name="history">History</cosmoz-tab-next>
				<div class="stats">1-20 of 87</div>
			</cosmoz-tabs-next>
		</div>
	`,
	play: async ({ canvasElement, step }) => {
		const bar = next(canvasElement),
			heading = bar.querySelector('.heading') as HTMLElement,
			stats = bar.querySelector('.stats') as HTMLElement;

		await waitFor(() =>
			expect(
				bar.querySelectorAll('cosmoz-tab-next[overflowing]').length
			).toBeGreaterThan(0)
		);

		await step('they are routed out of the clipping container', async () => {
			expect(heading.getAttribute('slot')).toBe('tabs');
			expect(stats.getAttribute('slot')).toBe('stats');
		});

		await step('they are never marked, clipped or copied', async () => {
			expect(heading.hasAttribute('overflowing')).toBe(false);
			expect(stats.hasAttribute('overflowing')).toBe(false);
			expect(
				sr(bar).querySelectorAll('.menu > :not(cosmoz-tab-next)').length
			).toBe(0);
		});

		await step('they stay visible however narrow the bar gets', async () => {
			box(canvasElement).style.width = '120px';
			await waitFor(() =>
				expect(stats.getBoundingClientRect().width).toBeGreaterThan(0)
			);
			expect(heading.getBoundingClientRect().width).toBeGreaterThan(0);
		});
	},
};

export const AnExplicitSlotIsNeverReassigned: Story = {
	render: () => html`
		<div class="box" style="width: 260px; overflow: hidden;">
			<cosmoz-tabs-next variant="underline">
				<cosmoz-tab-next name="overview" active>Overview</cosmoz-tab-next>
				<cosmoz-tab-next name="rows">Invoice rows</cosmoz-tab-next>
				<cosmoz-tab-next name="accounting">Accounting</cosmoz-tab-next>
				<!-- after the first tab, so auto-assignment would say "stats" -->
				<div class="pinned" slot="tabs">Orders</div>
			</cosmoz-tabs-next>
		</div>
	`,
	play: async ({ canvasElement, step }) => {
		const bar = next(canvasElement),
			pinned = bar.querySelector('.pinned') as HTMLElement;

		await waitFor(() =>
			expect(
				bar.querySelectorAll('cosmoz-tab-next[overflowing]').length
			).toBeGreaterThan(0)
		);

		await step('the consumer keeps the slot they asked for', async () => {
			await settle();
			expect(pinned.getAttribute('slot')).toBe('tabs');
		});

		await step('and keeps it across re-renders', async () => {
			bar.setAttribute('variant', 'brand');
			box(canvasElement).style.width = '200px';
			await settle();
			expect(pinned.getAttribute('slot')).toBe('tabs');
		});
	},
};

export const NextCopiesOverflowingTabsIntoTheMenu: Story = {
	render: () => html`
		<div class="box" style="width: 240px; overflow: hidden;">
			<cosmoz-tabs-next variant="underline">
				<cosmoz-tab-next name="overview" active>Overview</cosmoz-tab-next>
				<cosmoz-tab-next name="rows" badge="5">Invoice rows</cosmoz-tab-next>
				<cosmoz-tab-next name="accounting">Accounting</cosmoz-tab-next>
				<cosmoz-tab-next name="history">History</cosmoz-tab-next>
				<cosmoz-tab-next name="attachments">Attachments</cosmoz-tab-next>
			</cosmoz-tabs-next>
		</div>
	`,
	play: async ({ canvasElement, step }) => {
		const bar = next(canvasElement),
			overflowing = () => bar.querySelectorAll('cosmoz-tab-next[overflowing]'),
			copies = () =>
				sr(bar).querySelectorAll<HTMLElement>('.menu > cosmoz-tab-next');

		await step('every overflowing tab gets a copy in the menu', async () => {
			await waitFor(() => expect(overflowing().length).toBeGreaterThan(0));
			await waitFor(() => expect(copies().length).toBe(overflowing().length));
		});

		await step('a copy keeps the badge and is a vertical tab', async () => {
			const menu = sr(bar).querySelector('.menu') as HTMLElement;
			expect(menu.getAttribute('role')).toBe('tablist');
			expect(menu.getAttribute('aria-orientation')).toBe('vertical');
			[...copies()].forEach((copy) =>
				expect(copy.getAttribute('role')).toBe('tab')
			);
		});

		await step('activating a copy forwards to the original tab', async () => {
			const last = [...bar.querySelectorAll('cosmoz-tab-next')].at(
				-1
			) as HTMLElement;
			let clicks = 0,
				// a consumer delegating on an ancestor must not see the copy's own
				// click on top of the one the original dispatches
				delegated = 0;
			last.addEventListener('click', () => clicks++);
			(bar.parentElement as HTMLElement).addEventListener(
				'click',
				() => delegated++
			);
			([...copies()].at(-1) as HTMLElement).click();
			await waitFor(() => expect(clicks).toBe(1));
			expect(delegated).toBe(1);
		});
	},
};

// the tabs are pinned to a fixed width on purpose: a relabel then produces no
// layout change at all, so the copy can only follow by being observed. Without
// that, changing the text resizes the tab, which reshuffles the overflow set
// and rebuilds the copies by accident — and the assertion proves nothing.
const pinned = 'flex: 0 0 90px; width: 90px; overflow: hidden;';

export const CopiesFollowTheirOriginals: Story = {
	render: () => html`
		<div class="box" style="width: 240px; overflow: hidden;">
			<cosmoz-tabs-next variant="underline">
				<cosmoz-tab-next name="overview" style=${pinned} active
					>Overview</cosmoz-tab-next
				>
				<cosmoz-tab-next name="rows" style=${pinned}
					>Invoice rows</cosmoz-tab-next
				>
				<cosmoz-tab-next name="accounting" style=${pinned}
					>Accounting</cosmoz-tab-next
				>
				<cosmoz-tab-next name="history" style=${pinned}
					>History</cosmoz-tab-next
				>
				<cosmoz-tab-next name="attachments" style=${pinned}
					>Attachments</cosmoz-tab-next
				>
			</cosmoz-tabs-next>
		</div>
	`,
	play: async ({ canvasElement, step }) => {
		const bar = next(canvasElement),
			copies = () =>
				sr(bar).querySelectorAll<HTMLElement>('.menu > cosmoz-tab-next'),
			last = () =>
				[...bar.querySelectorAll<HTMLElement>('cosmoz-tab-next')].at(
					-1
				) as HTMLElement;

		await waitFor(() => expect(copies().length).toBeGreaterThan(0));

		// showing the trigger costs space, so one more tab overflows a beat later.
		// Mutating before that settles would rebuild the copies as a side effect of
		// the reshuffle and the assertions below would prove nothing.
		await step('wait for the overflow set to stop moving', async () => {
			let count = -1;
			await waitFor(async () => {
				const seen = copies().length;
				await settle();
				expect(copies().length).toBe(seen);
				count = seen;
			});
			expect(count).toBeGreaterThan(0);
		});

		// the label lives in the tab's light DOM, so an i18n switch or a live
		// count changes it without any attribute or slot change to notice
		await step('a relabelled tab relabels its copy', async () => {
			last().textContent = 'Files';
			await waitFor(() =>
				expect([...copies()].at(-1)?.textContent?.trim()).toBe('Files')
			);
		});

		await step('a badge added later reaches the copy', async () => {
			last().setAttribute('badge', '7');
			await waitFor(() =>
				expect([...copies()].at(-1)?.getAttribute('badge')).toBe('7')
			);
		});

		await step('selecting a tab marks the right copy', async () => {
			last().setAttribute('active', '');
			await waitFor(() =>
				expect([...copies()].at(-1)?.hasAttribute('active')).toBe(true)
			);
		});
	},
};

export const OverflowsWhenTheBarIsAFlexItem: Story = {
	render: () => html`
		<div
			class="box"
			style="width: 420px; display: flex; align-items: center; gap: 8px;"
		>
			<div style="flex: 0 0 auto">Logo</div>
			<cosmoz-tabs-next variant="underline">
				<cosmoz-tab-next name="overview" active>Overview</cosmoz-tab-next>
				<cosmoz-tab-next name="rows">Invoice rows</cosmoz-tab-next>
				<cosmoz-tab-next name="accounting">Accounting</cosmoz-tab-next>
				<cosmoz-tab-next name="history">History</cosmoz-tab-next>
				<cosmoz-tab-next name="attachments">Attachments</cosmoz-tab-next>
			</cosmoz-tabs-next>
		</div>
	`,
	play: async ({ canvasElement, step }) => {
		const bar = next(canvasElement),
			row = box(canvasElement);

		// a top bar is the common case: a flex row with a logo and the tabs. The
		// host defaulting to `flex: none` / `min-width: auto` would keep it at its
		// content width, so it would spill out of the row and never overflow
		await step('the bar shrinks into the row instead of spilling', async () => {
			await waitFor(() =>
				expect(bar.getBoundingClientRect().right).toBeLessThanOrEqual(
					row.getBoundingClientRect().right + 1
				)
			);
		});

		await step(
			'and hands the tabs that no longer fit to the menu',
			async () => {
				await waitFor(() =>
					expect(
						sr(bar).querySelectorAll('.menu > cosmoz-tab-next').length
					).toBeGreaterThan(0)
				);
				expect(sr(bar).querySelector('.more')?.hasAttribute('hidden')).toBe(
					false
				);
			}
		);
	},
};
