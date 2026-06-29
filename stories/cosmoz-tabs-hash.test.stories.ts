import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';
import { expect, waitFor } from 'storybook/test';

import '../src/cosmoz-tabs';

const meta: Meta = {
	title: 'Tests/Tabs hash routing',
};

export default meta;

type Story = StoryObj;

const fixture = () => html`
	<cosmoz-tabs hash-param="tab">
		<cosmoz-tab name="tab0" heading="Tab0">0</cosmoz-tab>
		<cosmoz-tab name="tab1" heading="Tab1">1</cosmoz-tab>
		<cosmoz-tab name="tab2" heading="Tab2">2</cosmoz-tab>
	</cosmoz-tabs>
`;

const getTabs = (root: HTMLElement) =>
	root.querySelector('cosmoz-tabs') as HTMLElement & { selected?: string };

const selectedName = (tabs: HTMLElement) =>
	tabs.querySelector('[is-selected]')?.getAttribute('name');

const barTab = (tabs: HTMLElement, i: number) =>
	tabs.shadowRoot!.querySelectorAll<HTMLAnchorElement>('[role=tab]')[i];

export const TabsHaveLinks: Story = {
	render: () => fixture(),
	play: async ({ canvasElement }) => {
		const tabs = getTabs(canvasElement);
		await waitFor(() =>
			expect(tabs.shadowRoot!.querySelectorAll('[role=tab]').length).toBe(3)
		);
		['tab0', 'tab1', 'tab2'].forEach((name, i) =>
			expect(barTab(tabs, i).getAttribute('href')).toContain(`tab=${name}`)
		);
	},
};

export const HashUpdatesSelection: Story = {
	render: () => fixture(),
	play: async ({ canvasElement }) => {
		window.location.hash = '';
		const tabs = getTabs(canvasElement);
		await waitFor(() => expect(selectedName(tabs)).toBe('tab0'));

		window.location.hash = barTab(tabs, 1).getAttribute('href')!;
		await waitFor(() => expect(selectedName(tabs)).toBe('tab1'));

		window.location.hash = barTab(tabs, 2).getAttribute('href')!;
		await waitFor(() => expect(selectedName(tabs)).toBe('tab2'));

		window.location.hash = '';
	},
};

export const SelectionUpdatesHash: Story = {
	render: () => fixture(),
	play: async ({ canvasElement }) => {
		window.location.hash = '';
		const tabs = getTabs(canvasElement);
		await waitFor(() => expect(selectedName(tabs)).toBe('tab0'));

		barTab(tabs, 1).click();
		await waitFor(() => expect(selectedName(tabs)).toBe('tab1'));
		expect(window.location.hash).toContain('tab=tab1');

		barTab(tabs, 0).click();
		await waitFor(() => expect(selectedName(tabs)).toBe('tab0'));
		expect(window.location.hash).toContain('tab=tab0');

		window.location.hash = '';
	},
};

export const InvalidHashFallsBack: Story = {
	render: () => fixture(),
	play: async ({ canvasElement }) => {
		window.location.hash = '';
		const tabs = getTabs(canvasElement);
		await waitFor(() => expect(selectedName(tabs)).toBe('tab0'));

		// a hash pointing at a non-existent tab -> first valid tab stays selected
		window.location.hash = barTab(tabs, 0)
			.getAttribute('href')!
			.replace('tab0', 'nope');
		await waitFor(() => expect(selectedName(tabs)).toBe('tab0'));

		window.location.hash = '';
	},
};
