import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';
import { expect, waitFor } from 'storybook/test';
import { userEvent as driverUserEvent } from 'vitest/browser';

import '../src/next';
import { more, next, nextFixture, sr, trigger } from './overflow-helpers';

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
		// the open makes the rows focusable - the popover must be open
		await waitFor(() => expect(more(tabs).hasAttribute('opened')).toBe(true));

		const row = copies(tabs)[1] as HTMLElement,
			seen: string[] = [];
		originals.forEach((tab) =>
			tab.addEventListener('click', () => seen.push(tab.getAttribute('name')!)),
		);

		row.focus();
		expect(sr(tabs).activeElement).toBe(row);
		/** Space keydown only prevents the page scroll; the pick is on keyup */
		key(row, ' ', 'keydown');
		await new Promise((r) => requestAnimationFrame(r));
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

/** the trigger sits in the bar's first row: a real click has to reach it.
    the regression that motivated this pin: the trigger wrapped below the
    host's own clip band exactly when the menu was needed - invisible and
    unhittable for users, invisible to programmatic clicks too. */
export const TheTriggerIsReachableByARealClick: Story = {
	render: () => nextFixture('240px'),
	play: async ({ canvasElement, step }) => {
		const tabs = next(canvasElement);

		await waitFor(() => expect(copies(tabs).length).toBeGreaterThan(0));

		await step('the trigger is painted inside the clip band', async () => {
			const band = sr(tabs).querySelector(
				'slot:not([name])',
			) as HTMLSlotElement;
			const b = band.getBoundingClientRect();
			const button = trigger(tabs);
			const t = button.getBoundingClientRect();
			expect(document.defaultView?.getComputedStyle(button).visibility).toBe(
				'visible',
			);
			expect(t.top).toBeGreaterThanOrEqual(b.top - 0.5);
			expect(t.bottom).toBeLessThanOrEqual(b.bottom + 0.5);
			expect(t.height).toBeGreaterThan(0);
		});

		await step('a real click opens the menu', async () => {
			await driverUserEvent.click(trigger(tabs));
			await waitFor(() => expect(expanded(tabs)).toBe(true));
			expect(opened(tabs)).toBe(true);
		});

		await step('a real Escape dismisses and restores the focus', async () => {
			await driverUserEvent.keyboard('{Escape}');
			await waitFor(() => expect(expanded(tabs)).toBe(false));
			await waitFor(() =>
				expect(sr(tabs).activeElement?.classList.contains('more-button')).toBe(
					true,
				),
			);
		});
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
