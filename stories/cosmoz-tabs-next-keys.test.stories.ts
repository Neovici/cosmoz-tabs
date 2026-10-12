import { component } from '@pionjs/pion';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';
import { expect, waitFor } from 'storybook/test';

import '../src/next';
import { renderTabs, useTabs, type RenderTab } from '../src/next/use-tabs';
import { settle } from './overflow-helpers';

const meta: Meta = {
	title: 'Tests/Tabs keys (next)',
};

export default meta;

type Story = StoryObj;

const model: RenderTab[] = [
	{ name: 'overview', title: 'Overview' },
	{ name: 'rows', title: 'Invoice rows' },
	{ name: 'plain', title: 'Hidden one', hidden: true },
	{ name: 'settings', title: 'Settings', disabled: true },
	{ name: 'history', title: 'History' },
];

const KeysDemo = () => {
	const tabs = useTabs(model);
	return html`<cosmoz-tabs-next>${renderTabs(tabs)}</cosmoz-tabs-next>`;
};

if (!customElements.get('cosmoz-tabs-next-keys-test')) {
	customElements.define('cosmoz-tabs-next-keys-test', component(KeysDemo));
}

const press = (el: HTMLElement, key: string) =>
	el.dispatchEvent(new KeyboardEvent('keydown', { key, bubbles: true }));

const keysFixture = () => html`
	<cosmoz-tabs-next-keys-test></cosmoz-tabs-next-keys-test>
`;

export const TheArrowsRoveAndPick: Story = {
	render: keysFixture,
	play: async ({ canvasElement, step }) => {
		const demo = canvasElement.querySelector(
				'cosmoz-tabs-next-keys-test',
			) as HTMLElement,
			bar = demo.shadowRoot.querySelector('cosmoz-tabs-next') as HTMLElement,
			tab = (name: string) =>
				bar.querySelector(`cosmoz-tab-next[name="${name}"]`) as HTMLElement,
			focused = () => demo.shadowRoot.activeElement as HTMLElement;

		await waitFor(() =>
			expect(tab('overview').hasAttribute('active')).toBe(true),
		);

		await step(
			'arrow-right picks the next shown member, stop and all',
			async () => {
				tab('overview').focus();
				press(tab('overview'), 'ArrowRight');
				await waitFor(() =>
					expect(tab('rows').hasAttribute('active')).toBe(true),
				);
				expect(focused()).toBe(tab('rows'));
				expect(tab('rows').getAttribute('tabindex')).toBe('0');
				expect(tab('overview').getAttribute('tabindex')).toBe('-1');
			},
		);

		await step('the walk skips the hidden and the disabled', async () => {
			press(tab('rows'), 'ArrowRight');
			await waitFor(() =>
				expect(tab('history').hasAttribute('active')).toBe(true),
			);
			expect(focused()).toBe(tab('history'));
			expect(tab('settings').hasAttribute('active')).toBe(false);
		});

		await step('the band clamps - no wrap', async () => {
			press(tab('history'), 'ArrowRight');
			// the walk moves focus synchronously: home still has it
			expect(focused()).toBe(tab('history'));
			expect(tab('history').hasAttribute('active')).toBe(true);
			press(tab('history'), 'ArrowLeft');
			await waitFor(() =>
				expect(tab('rows').hasAttribute('active')).toBe(true),
			);
			expect(focused()).toBe(tab('rows'));
		});
	},
};

export const HomeAndEndWalkTheBand: Story = {
	render: keysFixture,
	play: async ({ canvasElement, step }) => {
		const demo = canvasElement.querySelector(
				'cosmoz-tabs-next-keys-test',
			) as HTMLElement,
			bar = demo.shadowRoot.querySelector('cosmoz-tabs-next') as HTMLElement,
			tab = (name: string) =>
				bar.querySelector(`cosmoz-tab-next[name="${name}"]`) as HTMLElement;

		await waitFor(() =>
			expect(tab('overview').hasAttribute('active')).toBe(true),
		);

		await step('Home is the band\'s first shown member', async () => {
			tab('rows').focus();
			press(tab('rows'), 'Home');
			await waitFor(() =>
				expect(tab('overview').hasAttribute('active')).toBe(true),
			);
		});

		await step('End is its last shown member', async () => {
			press(tab('overview'), 'End');
			await waitFor(() =>
				expect(tab('history').hasAttribute('active')).toBe(true),
			);
			expect(tab('settings').hasAttribute('active')).toBe(false);
		});
	},
};

export const KeysOutsideTheBarDoNotRove: Story = {
	render: keysFixture,
	play: async ({ canvasElement, step }) => {
		const demo = canvasElement.querySelector(
				'cosmoz-tabs-next-keys-test',
			) as HTMLElement,
			bar = demo.shadowRoot.querySelector('cosmoz-tabs-next') as HTMLElement,
			tab = (name: string) =>
				bar.querySelector(`cosmoz-tab-next[name="${name}"]`) as HTMLElement;

		await waitFor(() =>
			expect(tab('overview').hasAttribute('active')).toBe(true),
		);

		await step('a key from outside the bar\'s members is no walk', async () => {
			press(demo, 'ArrowRight');
			press(bar, 'ArrowRight');
			// the walk would have moved focus synchronously
			expect(demo.shadowRoot.activeElement).toBeNull();
			await settle();
			expect(tab('rows').hasAttribute('active')).toBe(false);
			expect(tab('overview').hasAttribute('active')).toBe(true);
		});
	},
};
