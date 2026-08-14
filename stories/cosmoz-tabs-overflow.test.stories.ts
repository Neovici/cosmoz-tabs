import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';
import { expect, waitFor } from 'storybook/test';

import '../src/cosmoz-tabs';
import {
	box,
	clipped,
	fixture,
	legacy,
	more,
	reachable,
	rows,
	settle,
	sr,
	trigger,
} from './overflow-helpers';

const meta: Meta = {
	title: 'Tests/Tabs overflow',
};

export default meta;

type Story = StoryObj;

export const CollectsOverflowingTabs: Story = {
	render: () => fixture('260px'),
	play: async ({ canvasElement, step }) => {
		const tabs = legacy(canvasElement);

		await step('tabs that do not fit are clipped and menued', async () => {
			await waitFor(() => expect(clipped(tabs).length).toBeGreaterThan(0));
			await waitFor(() => expect(rows(tabs).length).toBe(clipped(tabs).length));
		});

		await step('the menu rows are the clipped tabs, in tab order', async () => {
			const clippedNames = [...clipped(tabs)].map((el) =>
				el.textContent?.trim()
			);
			const rowNames = [...rows(tabs)].map((el) => el.textContent?.trim());
			expect(rowNames).toEqual(clippedNames);
		});

		await step('the trigger is shown', async () => {
			expect(more(tabs).hasAttribute('hidden')).toBe(false);
		});
	},
};

export const NoMenuWhenEverythingFits: Story = {
	render: () => fixture('900px'),
	play: async ({ canvasElement, step }) => {
		const tabs = legacy(canvasElement);

		await step('no tab is clipped', async () => {
			await waitFor(() =>
				expect(sr(tabs).querySelectorAll('.items > .tab').length).toBe(5)
			);
			await waitFor(() => expect(clipped(tabs).length).toBe(0));
		});

		await step('the trigger is hidden', async () => {
			await waitFor(() => expect(more(tabs).hasAttribute('hidden')).toBe(true));
			expect(getComputedStyle(more(tabs)).display).toBe('none');
		});
	},
};

export const ResizeMovesTabsInAndOutOfTheMenu: Story = {
	render: () => fixture('900px'),
	play: async ({ canvasElement, step }) => {
		const tabs = legacy(canvasElement);

		await waitFor(() => expect(clipped(tabs).length).toBe(0));

		await step('narrowing pushes tabs into the menu', async () => {
			box(canvasElement).style.width = '240px';
			await waitFor(() => expect(rows(tabs).length).toBeGreaterThan(0));
		});

		await step('widening brings them back', async () => {
			box(canvasElement).style.width = '900px';
			await waitFor(() => expect(rows(tabs).length).toBe(0));
			expect(clipped(tabs).length).toBe(0);
		});
	},
};

export const MenuRowSelectsTab: Story = {
	render: () => fixture('260px'),
	play: async ({ canvasElement, step }) => {
		const tabs = legacy(canvasElement) as HTMLElement & { selected?: string };

		await waitFor(() => expect(rows(tabs).length).toBeGreaterThan(0));

		await step('activating the last menu row selects that tab', async () => {
			const row = [...rows(tabs)].at(-1) as HTMLElement;
			row.click();
			await waitFor(() => expect(tabs.selected).toBe('attachments'));
			await waitFor(() =>
				expect(
					canvasElement
						.querySelector('cosmoz-tab[name="attachments"]')
						?.hasAttribute('is-selected')
				).toBe(true)
			);
		});

		await step('the trigger marks that the selection is in there', async () => {
			await waitFor(() =>
				expect(more(tabs).hasAttribute('data-active')).toBe(true)
			);
		});
	},
};

export const HiddenTabsAreNotInTheMenu: Story = {
	render: () =>
		fixture(
			'260px',
			html`<cosmoz-tab name="secret" heading="Secret" hidden></cosmoz-tab>`
		),
	play: async ({ canvasElement, step }) => {
		const tabs = legacy(canvasElement);

		await step('a hidden tab is neither clipped nor menued', async () => {
			await waitFor(() => expect(rows(tabs).length).toBeGreaterThan(0));
			const names = [...rows(tabs), ...clipped(tabs)].map((el) =>
				el.textContent?.trim()
			);
			expect(names).not.toContain('Secret');
		});
	},
};

export const EveryTabIsReachableAfterBeingRevealed: Story = {
	render: () => html`
		<div class="host" style="display: none;">
			<div class="box" style="width: 240px; overflow: hidden;">
				<cosmoz-tabs variant="underline">
					<cosmoz-tab name="overview" heading="Overview"></cosmoz-tab>
					<cosmoz-tab name="rows" heading="Invoice rows"></cosmoz-tab>
					<cosmoz-tab name="accounting" heading="Accounting"></cosmoz-tab>
					<cosmoz-tab name="history" heading="History"></cosmoz-tab>
					<cosmoz-tab name="attachments" heading="Attachments"></cosmoz-tab>
				</cosmoz-tabs>
			</div>
		</div>
	`,
	play: async ({ canvasElement, step }) => {
		const host = canvasElement.querySelector('.host') as HTMLElement,
			tabs = legacy(canvasElement);

		await step(
			'mounted inside a hidden container, nothing overflows',
			async () => {
				await waitFor(() =>
					expect(sr(tabs).querySelectorAll('.items > .tab').length).toBe(5)
				);
				// the observer has to actually report the all-zero-height state before
				// the reveal, or this story silently stops covering the case it exists
				// for. Frames rather than a fixed delay: it is a render we wait on.
				await settle();
				expect(rows(tabs).length).toBe(0);
			}
		);

		// a cosmoz-tabs inside an inactive panel of an outer cosmoz-tabs is the
		// everyday version of this: the observer reports every tab as zero-height
		// while hidden, and on reveal only reports the ones that intersect
		await step('once revealed, no tab is stranded', async () => {
			host.style.display = '';
			await waitFor(() => expect(rows(tabs).length).toBeGreaterThan(0));
			await waitFor(() => expect(reachable(tabs)).toBe(5));
		});
	},
};

export const MenuClosesWhenNothingOverflowsAnyMore: Story = {
	render: () => fixture('260px'),
	play: async ({ canvasElement, step }) => {
		const tabs = legacy(canvasElement),
			dropdown = () =>
				sr(tabs).querySelector('.more') as HTMLElement & { opened?: boolean };

		await waitFor(() => expect(rows(tabs).length).toBeGreaterThan(0));

		await step('open the menu', async () => {
			trigger(tabs).click();
			await waitFor(() => expect(dropdown().opened).toBe(true));
		});

		// leaving it open would strand an empty popover, and narrowing again would
		// pop it back up without the user asking
		await step('widening past the overflow closes it', async () => {
			box(canvasElement).style.width = '900px';
			await waitFor(() => expect(rows(tabs).length).toBe(0));
			await waitFor(() => expect(dropdown().opened).toBeFalsy());
		});

		await step('narrowing back does not reopen it', async () => {
			box(canvasElement).style.width = '260px';
			await waitFor(() => expect(rows(tabs).length).toBeGreaterThan(0));
			expect(dropdown().opened).toBeFalsy();
		});
	},
};

export const MenuRowsActivateFromTheKeyboard: Story = {
	render: () => fixture('260px'),
	play: async ({ canvasElement, step }) => {
		const tabs = legacy(canvasElement) as HTMLElement & { selected?: string };

		await waitFor(() => expect(rows(tabs).length).toBeGreaterThan(0));
		trigger(tabs).click();

		await step('Enter on a focused row selects that tab', async () => {
			const row = [...rows(tabs)].at(-1) as HTMLElement;
			row.focus();
			row.dispatchEvent(
				new KeyboardEvent('keydown', {
					key: 'Enter',
					bubbles: true,
					composed: true,
				})
			);
			await waitFor(() => expect(tabs.selected).toBe('attachments'));
		});
	},
};

export const FocusReturnsToTheTriggerOnClose: Story = {
	render: () => fixture('260px'),
	play: async ({ canvasElement, step }) => {
		const tabs = legacy(canvasElement),
			button = () => trigger(tabs);

		await waitFor(() => expect(rows(tabs).length).toBeGreaterThan(0));

		await step('activating a row hands focus back to the trigger', async () => {
			button().click();
			await waitFor(() =>
				expect(button().getAttribute('aria-expanded')).toBe('true')
			);
			([...rows(tabs)].at(-1) as HTMLElement).click();
			await waitFor(() => expect(sr(tabs).activeElement).toBe(button()));
			expect(button().getAttribute('aria-expanded')).toBe('false');
		});
	},
};

export const ArrowKeysWrapThroughTheMenu: Story = {
	render: () => fixture('260px'),
	play: async ({ canvasElement, step }) => {
		const tabs = legacy(canvasElement);

		await waitFor(() => expect(rows(tabs).length).toBeGreaterThan(0));
		trigger(tabs).click();

		const items = () => [...rows(tabs)] as HTMLElement[],
			menu = sr(tabs).querySelector('.menu') as HTMLElement,
			focused = () => items().indexOf(sr(tabs).activeElement as HTMLElement),
			press = (key: string, from: HTMLElement) =>
				from.dispatchEvent(
					new KeyboardEvent('keydown', {
						key,
						bubbles: true,
						composed: true,
					})
				);

		const last = items().length - 1;

		// dispatching on the menu itself is the "nothing focused yet" case
		await step(
			'up from nothing lands on the last row, not the one before it',
			() => {
				press('ArrowUp', menu);
				expect(focused()).toBe(last);
			}
		);

		await step('down wraps from the last row to the first', () => {
			press('ArrowDown', items()[last]);
			expect(focused()).toBe(0);
		});

		await step('up wraps from the first row to the last', () => {
			press('ArrowUp', items()[0]);
			expect(focused()).toBe(last);
		});
	},
};
