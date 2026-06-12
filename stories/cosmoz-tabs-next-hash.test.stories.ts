import { link } from '@neovici/cosmoz-router/use-hash-param';
import { component } from '@pionjs/pion';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';
import { expect, waitFor } from 'storybook/test';

import { renderTabs, useTabs } from '../src/next';

const tabs = [
	{ name: 'tab0', title: 'Tab0' },
	{ name: 'tab1', title: 'Tab1' },
	{ name: 'tab2', title: 'Tab2' },
];

const Demo = () => {
	const model = useTabs(tabs, { hashParam: 'ntab' });
	return html`<cosmoz-tabs-next>${renderTabs(model)}</cosmoz-tabs-next>`;
};

if (!customElements.get('cosmoz-tabs-next-hash-test')) {
	customElements.define('cosmoz-tabs-next-hash-test', component(Demo));
}

const meta: Meta = {
	title: 'Tests/Tabs next hash routing',
};

export default meta;

type Story = StoryObj;

const fixture = () =>
	html`<cosmoz-tabs-next-hash-test></cosmoz-tabs-next-hash-test>`;

const getDemo = (root: HTMLElement) =>
	root.querySelector('cosmoz-tabs-next-hash-test') as HTMLElement;

const headers = (demo: HTMLElement) =>
	demo.shadowRoot!.querySelectorAll<HTMLElement>('cosmoz-tab-next');

const activeName = (demo: HTMLElement) =>
	demo
		.shadowRoot!.querySelector('cosmoz-tab-next[active]')
		?.getAttribute('name');

export const SelectionUpdatesHash: Story = {
	render: () => fixture(),
	play: async ({ canvasElement }) => {
		window.location.hash = '';
		const demo = getDemo(canvasElement);
		await waitFor(() => expect(activeName(demo)).toBe('tab0'));

		headers(demo)[1].click();
		await waitFor(() => expect(activeName(demo)).toBe('tab1'));
		expect(window.location.hash).toContain('ntab=tab1');

		headers(demo)[0].click();
		await waitFor(() => expect(activeName(demo)).toBe('tab0'));

		window.location.hash = '';
	},
};

export const HashUpdatesSelection: Story = {
	render: () => fixture(),
	play: async ({ canvasElement }) => {
		window.location.hash = '';
		const demo = getDemo(canvasElement);
		await waitFor(() => expect(activeName(demo)).toBe('tab0'));

		window.location.hash = link('ntab', 'tab2')!;
		await waitFor(() => expect(activeName(demo)).toBe('tab2'));

		window.location.hash = '';
	},
};

export const InvalidHashFallsBack: Story = {
	render: () => fixture(),
	play: async ({ canvasElement }) => {
		window.location.hash = '';
		const demo = getDemo(canvasElement);
		await waitFor(() => expect(activeName(demo)).toBe('tab0'));

		window.location.hash = link('ntab', 'nope')!;
		await waitFor(() => expect(activeName(demo)).toBe('tab0'));

		window.location.hash = '';
	},
};
