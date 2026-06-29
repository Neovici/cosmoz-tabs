import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';
import { expect, waitFor } from 'storybook/test';

import '../src/cosmoz-tabs';

const meta: Meta = {
	title: 'Tests/Tab card',
};

export default meta;

type Story = StoryObj;

export const HeadingAndCollapse: Story = {
	render: () => html`
		<cosmoz-tabs .selected=${'tab1'}>
			<cosmoz-tab heading="Cards" name="tab1">
				<cosmoz-tab-card heading="Card one">card one</cosmoz-tab-card>
				<cosmoz-tab-card heading="Card two" collapsable
					>card two</cosmoz-tab-card
				>
			</cosmoz-tab>
		</cosmoz-tabs>
	`,
	play: async ({ canvasElement, step }) => {
		const tabs = canvasElement.querySelector('cosmoz-tabs')!;

		await step('cards render their headings', async () => {
			await waitFor(() => {
				const cards = tabs.querySelectorAll('cosmoz-tab-card');
				expect(cards.length).toBe(2);
				cards.forEach((card) => {
					const heading = card.shadowRoot!.querySelector('.heading');
					expect(heading?.textContent?.trim()).toBe(
						card.getAttribute('heading'),
					);
				});
			});
		});

		await step('collapsable card toggles the collapsed attribute', async () => {
			const card = tabs.querySelectorAll('cosmoz-tab-card')[1] as HTMLElement;
			expect(card.hasAttribute('collapsed')).toBe(false);
			(card.shadowRoot!.querySelector('.collapse-icon') as HTMLElement).click();
			await waitFor(() => expect(card.hasAttribute('collapsed')).toBe(true));
		});
	},
};
