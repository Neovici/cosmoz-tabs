import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';
import { expect, waitFor } from 'storybook/test';

import '../src/next';

const meta: Meta = {
	title: 'Tests/Tabs (next)',
};

export default meta;

type Story = StoryObj;

const fixture = (variant = 'brand') => html`
	<cosmoz-tabs-next variant=${variant}>
		<cosmoz-tab-next active>Overview</cosmoz-tab-next>
		<cosmoz-tab-next badge="2">Activity</cosmoz-tab-next>
		<cosmoz-tab-next disabled>Settings</cosmoz-tab-next>
	</cosmoz-tabs-next>
`;

const getContainer = (root: HTMLElement) =>
	root.querySelector('cosmoz-tabs-next') as HTMLElement;

export const RolesAndActive: Story = {
	render: () => fixture(),
	play: async ({ canvasElement, step }) => {
		const container = getContainer(canvasElement);

		await step('container is a tablist', async () => {
			await waitFor(() =>
				expect(container.getAttribute('role')).toBe('tablist'),
			);
		});

		await step('active tab gets role=tab and aria-selected', async () => {
			const active = container.querySelector('cosmoz-tab-next[active]')!;
			await waitFor(() => expect(active.getAttribute('role')).toBe('tab'));
			await waitFor(() =>
				expect(active.getAttribute('aria-selected')).toBe('true'),
			);
		});

		await step('inactive tab has aria-selected=false', async () => {
			const inactive = container.querySelector(
				'cosmoz-tab-next:not([active])',
			)!;
			await waitFor(() =>
				expect(inactive.getAttribute('aria-selected')).toBe('false'),
			);
		});

		await step('badge is rendered in the tab shadow root', async () => {
			const withBadge = container.querySelectorAll('cosmoz-tab-next')[1];
			await waitFor(() =>
				expect(withBadge.shadowRoot!.querySelector('.badge')?.textContent).toBe(
					'2',
				),
			);
		});
	},
};

export const RadiogroupPicksRadioSemantics: Story = {
	render: () => html`
		<cosmoz-tabs-next variant="segmented" compact-width role="radiogroup">
			<cosmoz-tab-next active>Today</cosmoz-tab-next>
			<cosmoz-tab-next>7 days</cosmoz-tab-next>
			<cosmoz-tab-next>30 days</cosmoz-tab-next>
		</cosmoz-tabs-next>
	`,
	play: async ({ canvasElement, step }) => {
		const container = getContainer(canvasElement);

		await step('the container keeps the role it was given', async () => {
			await waitFor(() =>
				expect(container.getAttribute('role')).toBe('radiogroup'),
			);
		});

		await step('each item is a radio, not a tab', async () => {
			await waitFor(() => {
				const items = container.querySelectorAll('cosmoz-tab-next');
				expect(items.length).toBe(3);
				items.forEach((item) =>
					expect(item.getAttribute('role')).toBe('radio'),
				);
			});
		});

		await step('selection is reported as aria-checked only', async () => {
			const active = container.querySelector('cosmoz-tab-next[active]')!;
			const inactive = container.querySelector(
				'cosmoz-tab-next:not([active])',
			)!;
			await waitFor(() => {
				expect(active.getAttribute('aria-checked')).toBe('true');
				expect(inactive.getAttribute('aria-checked')).toBe('false');
			});
			// A radio that also claims aria-selected describes itself twice.
			expect(active.hasAttribute('aria-selected')).toBe(false);
			expect(inactive.hasAttribute('aria-selected')).toBe(false);
		});

		await step('the radio semantics survive a variant change', async () => {
			container.setAttribute('variant', 'underline');
			await waitFor(() => {
				const active = container.querySelector('cosmoz-tab-next[active]')!;
				expect(active.getAttribute('variant')).toBe('underline');
				expect(active.getAttribute('role')).toBe('radio');
				expect(active.getAttribute('aria-checked')).toBe('true');
				expect(active.hasAttribute('aria-selected')).toBe(false);
			});
		});
	},
};

export const ReflectsVariantToChildren: Story = {
	render: () => fixture('brand'),
	play: async ({ canvasElement, step }) => {
		const container = getContainer(canvasElement);

		await step('each child receives variant="brand"', async () => {
			await waitFor(() => {
				const children = container.querySelectorAll('cosmoz-tab-next');
				expect(children.length).toBe(3);
				children.forEach((c) =>
					expect(c.getAttribute('variant')).toBe('brand'),
				);
			});
		});

		await step('changing the container variant updates children', async () => {
			container.setAttribute('variant', 'underline');
			await waitFor(() =>
				container
					.querySelectorAll('cosmoz-tab-next')
					.forEach((c) => expect(c.getAttribute('variant')).toBe('underline')),
			);
		});
	},
};

export const BrandActiveStyling: Story = {
	render: () => fixture('brand'),
	play: async ({ canvasElement }) => {
		const container = getContainer(canvasElement);
		let active!: HTMLElement;
		await waitFor(() => {
			active = container.querySelector(
				'cosmoz-tab-next[active]',
			) as HTMLElement;
			expect(active).not.toBeNull();
		});
		await waitFor(() => expect(active.getAttribute('variant')).toBe('brand'));
		await waitFor(() =>
			expect(getComputedStyle(active).backgroundColor).not.toBe(
				'rgba(0, 0, 0, 0)',
			),
		);
	},
};

export const SegmentedActiveStyling: Story = {
	render: () => fixture('segmented'),
	play: async ({ canvasElement, step }) => {
		const container = getContainer(canvasElement);
		let active!: HTMLElement;

		await step('the variant reaches the children', async () => {
			await waitFor(() => {
				active = container.querySelector(
					'cosmoz-tab-next[active]',
				) as HTMLElement;
				expect(active?.getAttribute('variant')).toBe('segmented');
			});
		});

		await step('the track is filled and the active tab is raised', async () => {
			await waitFor(() => {
				expect(getComputedStyle(container).backgroundColor).not.toBe(
					'rgba(0, 0, 0, 0)',
				);
				expect(getComputedStyle(active).backgroundColor).not.toBe(
					'rgba(0, 0, 0, 0)',
				);
				expect(getComputedStyle(active).boxShadow).not.toBe('none');
			});
		});
	},
};

export const SpreadByDefault: Story = {
	render: () => fixture(),
	play: async ({ canvasElement }) => {
		const container = getContainer(canvasElement);
		const tab = container.querySelector('cosmoz-tab-next') as HTMLElement;
		await waitFor(() => expect(getComputedStyle(tab).flexGrow).toBe('1'));
		expect(tab.hasAttribute('compact-width')).toBe(false);
	},
};

export const CompactWidthSizesToContent: Story = {
	render: () => html`
		<cosmoz-tabs-next variant="brand" compact-width>
			<cosmoz-tab-next active>Overview</cosmoz-tab-next>
			<cosmoz-tab-next>Activity</cosmoz-tab-next>
		</cosmoz-tabs-next>
	`,
	play: async ({ canvasElement, step }) => {
		const container = getContainer(canvasElement);
		const tab = container.querySelector('cosmoz-tab-next') as HTMLElement;

		await step('container reflects compact-width', async () => {
			await waitFor(() => expect(tab.hasAttribute('compact-width')).toBe(true));
		});

		await step('child opts out of spreading (flex: 0 1 auto)', async () => {
			await waitFor(() => expect(getComputedStyle(tab).flexGrow).toBe('0'));
		});
	},
};

export const SizeReachesChildrenAndShrinksTheBox: Story = {
	render: () => html`
		<cosmoz-tabs-next variant="segmented" compact-width>
			<cosmoz-tab-next active>Overview</cosmoz-tab-next>
			<cosmoz-tab-next>Activity</cosmoz-tab-next>
		</cosmoz-tabs-next>
		<cosmoz-tabs-next variant="segmented" compact-width size="sm">
			<cosmoz-tab-next active>Overview</cosmoz-tab-next>
			<cosmoz-tab-next>Activity</cosmoz-tab-next>
		</cosmoz-tabs-next>
	`,
	play: async ({ canvasElement, step }) => {
		const [base, small] = [
			...canvasElement.querySelectorAll('cosmoz-tabs-next'),
		] as HTMLElement[];
		const tabOf = (bar: HTMLElement) =>
			bar.querySelector('cosmoz-tab-next') as HTMLElement;

		await step('the size reaches the children', async () => {
			await waitFor(() => expect(tabOf(small).getAttribute('size')).toBe('sm'));
			expect(tabOf(base).hasAttribute('size')).toBe(false);
		});

		await step('sm is shorter and narrower than the default', async () => {
			await waitFor(() => {
				expect(small.offsetHeight).toBeLessThan(base.offsetHeight);
				expect(small.offsetWidth).toBeLessThan(base.offsetWidth);
			});
		});
	},
};
