import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';
import { expect, waitFor } from 'storybook/test';

import '../src/next';
import { next, nextFixture, sr } from './overflow-helpers';

const meta: Meta = {
	title: 'Tests/Overflow menu trigger',
};

export default meta;

type Story = StoryObj;

const key = (target: HTMLElement, name: string, type = 'keydown') =>
	target.dispatchEvent(
		new KeyboardEvent(type, {
			key: name,
			bubbles: true,
			composed: true,
			cancelable: true,
		}),
	);

const expanded = (el: HTMLElement) =>
	sr(el)
		.querySelector<HTMLButtonElement>('.more-button')
		?.getAttribute('aria-expanded') === 'true';

const opened = (el: HTMLElement) =>
	sr(el).querySelector('.more')?.hasAttribute('opened');

const copies = (el: HTMLElement) => [
	...sr(el).querySelectorAll<HTMLElement>('.menu > cosmoz-tab-next'),
];

/** dismissal hands focus back to the trigger; picking does not. */
export const DismissalHandsFocusBackToTheTrigger: Story = {
	render: () => nextFixture('240px'),
	play: async ({ canvasElement, step }) => {
		const tabs = next(canvasElement);

		await step('Escape-like dismissal restores the trigger', async () => {
			await waitFor(() => expect(copies(tabs).length).toBeGreaterThan(0));
			sr(tabs).querySelector<HTMLButtonElement>('.more-button')?.click();
			await waitFor(() => expect(expanded(tabs)).toBe(true));
			(
				sr(tabs).querySelector('.more') as HTMLElement & {
					opened?: boolean;
					shadowRoot?: ShadowRoot;
				}
			).opened = false;
			await waitFor(() => expect(expanded(tabs)).toBe(false));
			await waitFor(() =>
				expect(sr(tabs).activeElement?.classList.contains('more-button')).toBe(
					true,
				),
			);
		});
	},
};

export const SpacePicksOnKeyUpLikeANativeButton: Story = {
	render: () => nextFixture('240px'),
	play: async ({ canvasElement }) => {
		const tabs = next(canvasElement),
			originals = [...tabs.querySelectorAll<HTMLElement>('cosmoz-tab-next')];

		await waitFor(() => expect(copies(tabs).length).toBeGreaterThan(0));
		sr(tabs).querySelector<HTMLButtonElement>('.more-button')?.click();

		const row = copies(tabs)[1] as HTMLElement,
			seen: string[] = [];
		originals.forEach((tab) =>
			tab.addEventListener('click', () => seen.push(tab.getAttribute('name')!)),
		);

		row.focus();
		expect(sr(tabs).activeElement).toBe(row);
		/** Space keydown only prevents the page scroll; the pick is on keyup */
		key(row, ' ', 'keydown');
		expect(seen).toEqual([]);
		key(row, ' ', 'keyup');
		await waitFor(() => expect(seen).toEqual([row.getAttribute('name')]));
	},
};

export const TheTriggerAnnouncesItsPopup: Story = {
	render: () => nextFixture('240px'),
	play: async ({ canvasElement }) => {
		const tabs = next(canvasElement);
		await waitFor(() => expect(copies(tabs).length).toBeGreaterThan(0));
		const button = sr(tabs).querySelector('.more-button') as HTMLElement;
		expect(button.getAttribute('aria-haspopup')).toBe('true');
		expect(button.getAttribute('aria-expanded')).toBe('false');
		button.click();
		await waitFor(() => expect(expanded(tabs)).toBe(true));
		expect(opened(tabs)).toBe(true);
	},
};

export const AnEmptyLabelFallsBackToTheTranslation: Story = {
	render: () =>
		html`<div class="box" style="width: 240px; overflow: hidden;">
			<cosmoz-tabs-next more-label="">
				<cosmoz-tab-next name="overview" active>Overview</cosmoz-tab-next>
				<cosmoz-tab-next name="rows">Invoice rows</cosmoz-tab-next>
				<cosmoz-tab-next name="accounting">Accounting</cosmoz-tab-next>
				<cosmoz-tab-next name="history">History</cosmoz-tab-next>
			</cosmoz-tabs-next>
		</div>`,
	play: async ({ canvasElement }) => {
		const tabs = next(canvasElement);
		await waitFor(() =>
			expect(sr(tabs).querySelector('.more-button')?.textContent?.trim()).toBe(
				'More',
			),
		);
	},
};
