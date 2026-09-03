import { component } from '@pionjs/pion';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';
import { expect, waitFor } from 'storybook/test';

import '../src/cosmoz-tabs';

if (!customElements.get('cosmoz-tabs-slot-wrapper')) {
	customElements.define(
		'cosmoz-tabs-slot-wrapper',
		component(
			() => html`
				<cosmoz-tabs>
					<cosmoz-tab name="tab0" heading="Tab0">0</cosmoz-tab>
					<slot></slot>
				</cosmoz-tabs>
			`
		)
	);
}

const meta: Meta = {
	title: 'Tests/Tabs slot',
};

export default meta;

type Story = StoryObj;

export const CollectsTabsThroughNestedSlot: Story = {
	render: () => html`
		<cosmoz-tabs-slot-wrapper>
			<cosmoz-tab name="tab1" heading="Tab1">1</cosmoz-tab>
			<span name="notatab">x</span>
		</cosmoz-tabs-slot-wrapper>
	`,
	play: async ({ canvasElement, step }) => {
		const wrapper = canvasElement.querySelector('cosmoz-tabs-slot-wrapper')!;
		const tabs = wrapper.shadowRoot!.querySelector(
			'cosmoz-tabs'
		) as HTMLElement & {
			selected?: string;
		};

		await step(
			'the nested-slot tab is collected (non-tabs ignored)',
			async () => {
				await waitFor(() =>
					expect(tabs.shadowRoot!.querySelectorAll('[role=tab]').length).toBe(2)
				);
				const headings = Array.from(
					tabs.shadowRoot!.querySelectorAll('[role=tab] > span')
				).map((el) => el.textContent);
				expect(headings).toEqual(['Tab0', 'Tab1']);
			}
		);

		await step('selecting the slotted tab marks it is-selected', async () => {
			tabs.selected = 'tab1';
			await waitFor(() =>
				expect(
					wrapper
						.querySelector('cosmoz-tab[name=tab1]')
						?.getAttribute('is-selected')
				).toBe('')
			);
		});
	},
};
