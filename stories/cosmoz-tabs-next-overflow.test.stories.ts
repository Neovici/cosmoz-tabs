import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';
import { expect, waitFor } from 'storybook/test';

import '../src/next';
import { box, next, retained, settle, sr } from './overflow-helpers';

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
			/** each copy mirrors its original badge state. */
			[...copies()].forEach((copy) => {
				const original = bar.querySelector(
					`cosmoz-tab-next[name="${copy.getAttribute('name')}"]`
				);
				expect(copy.getAttribute('badge')).toBe(
					original?.getAttribute('badge') ?? null
				);
			});
		});

		await step('activating a copy forwards to the original tab', async () => {
			const last = [...bar.querySelectorAll('cosmoz-tab-next')].at(
				-1
			) as HTMLElement;
			let clicks = 0,
				/** delegated consumers should see only the forwarded click. */
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

/**
 * fixed widths keep relabels from reshuffling overflow.
 * then copy updates can only come from observation.
 */
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

		/** wait out the trigger-induced overflow reshuffle. */
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

		/** light-dom labels can change without attribute updates. */
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

/**
 * removed tabs must not be retained by overflow state.
 * keeping the bar mounted exposes those leaks.
 */
export const RemovedTabsAreNotRetained: Story = {
	render: () => html`
		<div class="box" style="width: 240px; overflow: hidden;">
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
			copies = () =>
				sr(bar).querySelectorAll<HTMLElement>('.menu > cosmoz-tab-next');

		await waitFor(() => expect(copies().length).toBeGreaterThan(0));

		/** keep only weak refs from here. */
		let refs: WeakRef<HTMLElement>[] = [];
		let cloneRefs: WeakRef<HTMLElement>[] = [];

		await step('drop every tab but the first, bar stays mounted', async () => {
			const victims = [
				...bar.querySelectorAll<HTMLElement>('cosmoz-tab-next'),
			].slice(1);
			refs = victims.map((tab) => new WeakRef(tab));
			cloneRefs = [...copies()].map((clone) => new WeakRef(clone));
			victims.forEach((tab) => tab.remove());
			expect(refs.length).toBeGreaterThan(0);
			expect(cloneRefs.length).toBeGreaterThan(0);
			await settle(20);
		});

		await step('the removed tabs are collectable', async () =>
			expect(await retained(refs)).toBe(0)
		);

		await step('and so are the menu copies of them', async () =>
			expect(await retained(cloneRefs)).toBe(0)
		);
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

		/**
		 * top bars need the tab host to shrink.
		 * otherwise it spills instead of overflowing.
		 */
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
