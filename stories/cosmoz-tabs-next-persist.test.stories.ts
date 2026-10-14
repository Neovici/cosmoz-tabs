import { link } from '@neovici/cosmoz-router/use-hash-param';
import { component } from '@pionjs/pion';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';
import { expect, waitFor } from 'storybook/test';

import { renderTabs, useTabs } from '../src/next';

const KEY = 'cosmoz-tabs-persist-test';

const tabs = [
	{ name: 'tab0', title: 'Tab0', fallback: true },
	{ name: 'tab1', title: 'Tab1' },
	{ name: 'tab2', title: 'Tab2', persist: false },
];

const Demo = () => {
	const model = useTabs(tabs, { hashParam: 'ptab', persist: KEY });
	return html`<cosmoz-tabs-next>${renderTabs(model)}</cosmoz-tabs-next>`;
};

if (!customElements.get('cosmoz-tabs-next-persist-test')) {
	customElements.define('cosmoz-tabs-next-persist-test', component(Demo));
}

const meta: Meta = {
	title: 'Tests/Tabs next persist',
};

export default meta;

type Story = StoryObj;

const fixture = ({ stored, hash = '' }: { stored?: string; hash?: string }) => {
	if (stored) localStorage.setItem(KEY, stored);
	else localStorage.removeItem(KEY);
	window.location.hash = hash;
	return html`<cosmoz-tabs-next-persist-test></cosmoz-tabs-next-persist-test>`;
};

const getDemo = (root: HTMLElement) =>
	root.querySelector('cosmoz-tabs-next-persist-test') as HTMLElement;

const header = (demo: HTMLElement, name: string) =>
	demo.shadowRoot!.querySelector<HTMLElement>(
		`cosmoz-tab-next[name="${name}"]`,
	)!;

const activeName = (demo: HTMLElement) =>
	demo
		.shadowRoot!.querySelector('cosmoz-tab-next[active]')
		?.getAttribute('name');

const cleanup = () => {
	localStorage.removeItem(KEY);
	window.location.hash = '';
};

export const ClickIsRemembered: Story = {
	render: () => fixture({}),
	play: async ({ canvasElement }) => {
		const demo = getDemo(canvasElement);
		await waitFor(() => expect(activeName(demo)).toBe('tab0'));

		header(demo, 'tab1').click();
		await waitFor(() => expect(activeName(demo)).toBe('tab1'));
		expect(localStorage.getItem(KEY)).toBe('tab1');
		cleanup();
	},
};

export const StoredTabOpens: Story = {
	render: () => fixture({ stored: 'tab1' }),
	play: async ({ canvasElement }) => {
		const demo = getDemo(canvasElement);
		await waitFor(() => expect(activeName(demo)).toBe('tab1'));
		cleanup();
	},
};

export const OptedOutTabIsNotRemembered: Story = {
	render: () => fixture({}),
	play: async ({ canvasElement }) => {
		const demo = getDemo(canvasElement);
		header(demo, 'tab1').click();
		await waitFor(() => expect(activeName(demo)).toBe('tab1'));

		header(demo, 'tab2').click();
		await waitFor(() => expect(activeName(demo)).toBe('tab2'));
		expect(localStorage.getItem(KEY)).toBe('tab1');
		cleanup();
	},
};

export const HashWinsOverStored: Story = {
	render: () => fixture({ stored: 'tab1', hash: link('ptab', 'tab2')! }),
	play: async ({ canvasElement }) => {
		const demo = getDemo(canvasElement);
		await waitFor(() => expect(activeName(demo)).toBe('tab2'));
		cleanup();
	},
};
