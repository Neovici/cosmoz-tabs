import { component } from '@pionjs/pion';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';
import { expect, waitFor } from 'storybook/test';
import { Tabs, type CosmozTabsElement } from '../src/cosmoz-tabs';
import { legacyStyles } from '../src/styles';

customElements.define(
	'custom-header-tabs',
	component(
		(host: CosmozTabsElement) =>
			Tabs(
				host,
				(tabs) => html`
					<header>
						<slot name="heading"></slot>
						<nav role="tablist">${tabs}</nav>
					</header>
				`,
			),
		{
			observedAttributes: ['selected', 'hash-param'],
			styleSheets: [legacyStyles],
		},
	),
);

export default { title: 'Tests/Tabs custom header' } satisfies Meta;
export const PreservesSelection: StoryObj = {
	render: () =>
		html`<custom-header-tabs>
			<span slot="heading">Orders</span>
			<cosmoz-tab name="list" heading="List">List contents</cosmoz-tab>
			<cosmoz-tab name="details" heading="Details">Details contents</cosmoz-tab>
		</custom-header-tabs>`,
	play: async ({ canvasElement }) => {
		const host = canvasElement.querySelector('custom-header-tabs')!;
		await waitFor(() =>
			expect(
				host.shadowRoot!.querySelectorAll('header [role=tab]'),
			).toHaveLength(2),
		);
		expect(host.shadowRoot!.querySelector('.tabs')).toBeNull();
		host.shadowRoot!.querySelectorAll<HTMLElement>('[role=tab]')[1].click();
		await waitFor(() =>
			expect(host.querySelector('[name=details]')).toHaveAttribute(
				'is-selected',
			),
		);
	},
};
