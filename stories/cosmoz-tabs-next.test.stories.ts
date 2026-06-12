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
				expect(container.getAttribute('role')).toBe('tablist')
			);
		});

		await step('active tab gets role=tab and aria-selected', async () => {
			const active = container.querySelector('cosmoz-tab-next[active]')!;
			await waitFor(() => expect(active.getAttribute('role')).toBe('tab'));
			await waitFor(() =>
				expect(active.getAttribute('aria-selected')).toBe('true')
			);
		});

		await step('inactive tab has aria-selected=false', async () => {
			const inactive = container.querySelector(
				'cosmoz-tab-next:not([active])'
			)!;
			await waitFor(() =>
				expect(inactive.getAttribute('aria-selected')).toBe('false')
			);
		});

		await step('badge is rendered in the tab shadow root', async () => {
			const withBadge = container.querySelectorAll('cosmoz-tab-next')[1];
			await waitFor(() =>
				expect(withBadge.shadowRoot!.querySelector('.badge')?.textContent).toBe(
					'2'
				)
			);
		});
	},
};

export const ReflectsVariantToChildren: Story = {
	render: () => fixture('brand'),
	play: async ({ canvasElement, step }) => {
		const container = getContainer(canvasElement);

		await step('each child receives data-variant="brand"', async () => {
			await waitFor(() => {
				const children = container.querySelectorAll('cosmoz-tab-next');
				expect(children.length).toBe(3);
				children.forEach((c) =>
					expect(c.getAttribute('data-variant')).toBe('brand')
				);
			});
		});

		await step('changing the container variant updates children', async () => {
			container.setAttribute('variant', 'underline');
			await waitFor(() =>
				container
					.querySelectorAll('cosmoz-tab-next')
					.forEach((c) =>
						expect(c.getAttribute('data-variant')).toBe('underline')
					)
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
				'cosmoz-tab-next[active]'
			) as HTMLElement;
			expect(active).not.toBeNull();
		});
		await waitFor(() =>
			expect(active.getAttribute('data-variant')).toBe('brand')
		);
		await waitFor(() =>
			expect(getComputedStyle(active).backgroundColor).not.toBe(
				'rgba(0, 0, 0, 0)'
			)
		);
	},
};

export const SpreadByDefault: Story = {
	render: () => fixture(),
	play: async ({ canvasElement }) => {
		const container = getContainer(canvasElement);
		const tab = container.querySelector('cosmoz-tab-next') as HTMLElement;
		await waitFor(() => expect(getComputedStyle(tab).flexGrow).toBe('1'));
		expect(tab.getAttribute('data-full-width')).toBeNull();
	},
};

export const FullWidthFalseSizesToContent: Story = {
	render: () => html`
		<cosmoz-tabs-next variant="brand" full-width="false">
			<cosmoz-tab-next active>Overview</cosmoz-tab-next>
			<cosmoz-tab-next>Activity</cosmoz-tab-next>
		</cosmoz-tabs-next>
	`,
	play: async ({ canvasElement, step }) => {
		const container = getContainer(canvasElement);
		const tab = container.querySelector('cosmoz-tab-next') as HTMLElement;

		await step('container reflects data-full-width="false"', async () => {
			await waitFor(() =>
				expect(tab.getAttribute('data-full-width')).toBe('false')
			);
		});

		await step('child opts out of spreading (flex: 0 1 auto)', async () => {
			await waitFor(() => expect(getComputedStyle(tab).flexGrow).toBe('0'));
		});
	},
};
