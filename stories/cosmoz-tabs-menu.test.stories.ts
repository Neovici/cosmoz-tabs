import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';
import { expect, waitFor } from 'storybook/test';

import '../src/next';
import { renderTabs } from '../src/next/use-tabs';
import { next, settle, sr, trigger } from './overflow-helpers';

const meta: Meta = {
	title: 'Tests/Overflow menu',
};

export default meta;

type Story = StoryObj;

const bar = () => html`
	<div class="box" style="width: 240px; overflow: hidden;">
		<cosmoz-tabs-next variant="underline">
			<cosmoz-tab-next name="overview" active>Overview</cosmoz-tab-next>
			<cosmoz-tab-next name="rows">Invoice rows</cosmoz-tab-next>
			<cosmoz-tab-next name="accounting">Accounting</cosmoz-tab-next>
			<cosmoz-tab-next name="history">History</cosmoz-tab-next>
			<cosmoz-tab-next name="attachments">Attachments</cosmoz-tab-next>
		</cosmoz-tabs-next>
	</div>
`;

const copies = (el: HTMLElement) => [
	...sr(el).querySelectorAll<HTMLElement>('.menu > cosmoz-tab-next'),
];

const open = async (el: HTMLElement) => {
	trigger(el).click();
	await waitFor(() =>
		expect(sr(el).querySelector('.more')?.hasAttribute('opened')).toBe(true)
	);
};

/**
 * menu copies should update in place.
 * open menus must keep focus during live tab updates.
 */
export const AnOpenMenuKeepsFocusWhenATabChanges: Story = {
	render: bar,
	play: async ({ canvasElement, step }) => {
		const tabs = next(canvasElement);

		await waitFor(() => expect(copies(tabs).length).toBeGreaterThan(0));
		await open(tabs);

		/** the last tab can change without reshuffling overflow. */
		const last = [
			...tabs.querySelectorAll<HTMLElement>('cosmoz-tab-next'),
		].pop() as HTMLElement;
		const row = copies(tabs).at(-1) as HTMLElement;

		await step('focus the last menu row', async () => {
			row.focus();
			expect(sr(tabs).activeElement).toBe(row);
		});

		await step('a badge lands on the copy without replacing it', async () => {
			last.setAttribute('badge', '9');
			await waitFor(() =>
				expect(copies(tabs).at(-1)?.getAttribute('badge')).toBe('9')
			);
			expect(copies(tabs).at(-1)).toBe(row);
			expect(row.isConnected).toBe(true);
		});

		await step('and the row still has focus', async () =>
			expect(sr(tabs).activeElement).toBe(row)
		);

		await step('a relabel also lands in place', async () => {
			last.textContent = 'Files';
			await waitFor(() =>
				expect(copies(tabs).at(-1)?.textContent?.trim()).toBe('Files')
			);
			expect(copies(tabs).at(-1)).toBe(row);
			expect(sr(tabs).activeElement).toBe(row);
		});
	},
};

/**
 * the component owns the default translated label.
 * property overrides must work too.
 */
export const TheMoreLabelIsTranslatedAndOverridable: Story = {
	render: bar,
	play: async ({ canvasElement, step }) => {
		const tabs = next(canvasElement),
			label = () => trigger(tabs).textContent?.trim();

		await waitFor(() => expect(copies(tabs).length).toBeGreaterThan(0));

		await step('defaults to a label without the call site asking', async () => {
			expect(label()).toBe('More');
		});

		await step('the attribute overrides it', async () => {
			tabs.setAttribute('more-label', 'Mer');
			await waitFor(() => expect(label()).toBe('Mer'));
		});

		await step('and so does the property', async () => {
			tabs.removeAttribute('more-label');
			(tabs as HTMLElement & { moreLabel?: string }).moreLabel = 'Fler';
			await settle();
			expect(label()).toBe('Fler');
		});
	},
};

const withDisabled = () => html`
	<div class="box" style="width: 240px; overflow: hidden;">
		<cosmoz-tabs-next variant="underline">
			<cosmoz-tab-next name="overview" active>Overview</cosmoz-tab-next>
			<cosmoz-tab-next name="rows">Invoice rows</cosmoz-tab-next>
			<cosmoz-tab-next name="accounting">Accounting</cosmoz-tab-next>
			<cosmoz-tab-next name="history">History</cosmoz-tab-next>
			<cosmoz-tab-next name="attachments" disabled>Attachments</cosmoz-tab-next>
		</cosmoz-tabs-next>
	</div>
`;

/**
 * disabled rows should not stay in the tab order.
 * they still need aria because they are custom elements.
 */
export const DisabledRowsAreOutOfTheTabOrder: Story = {
	render: withDisabled,
	play: async ({ canvasElement, step }) => {
		const tabs = next(canvasElement);
		await waitFor(() => expect(copies(tabs).length).toBeGreaterThan(0));

		const off = () => copies(tabs).find((c) => c.hasAttribute('disabled'));
		const on = () => copies(tabs).find((c) => !c.hasAttribute('disabled'));

		await step('a disabled copy is skipped and announced', async () => {
			expect(off()?.getAttribute('tabindex')).toBe('-1');
			expect(off()?.getAttribute('aria-disabled')).toBe('true');
		});

		await step('an enabled copy is not announced disabled', async () =>
			expect(on()?.hasAttribute('aria-disabled')).toBe(false)
		);

		/** a tablist gets one tab stop, not one per row. */
		await step('exactly one row is tabbable', async () => {
			const stops = copies(tabs).filter(
				(c) => c.getAttribute('tabindex') === '0'
			);
			expect(stops.length).toBe(1);
			expect(stops[0].hasAttribute('disabled')).toBe(false);
		});

		await step('and disabled follows the tab, not just the copy', async () => {
			const attachments = tabs.querySelector(
				'[name=attachments]'
			) as HTMLElement;
			attachments.removeAttribute('disabled');
			await waitFor(() =>
				expect(
					copies(tabs)
						.find((c) => c.getAttribute('name') === 'attachments')
						?.hasAttribute('aria-disabled')
				).toBe(false)
			);
			/** still exactly one tab stop afterwards. */
			expect(
				copies(tabs).filter((c) => c.getAttribute('tabindex') === '0').length
			).toBe(1);
		});
	},
};

/**
 * forwarded clicks should keep mouse modifiers.
 * consumers must be able to cancel clone navigation.
 */
export const ForwardedClicksKeepTheirMouseSemantics: Story = {
	render: bar,
	play: async ({ canvasElement, step }) => {
		const tabs = next(canvasElement);
		await waitFor(() => expect(copies(tabs).length).toBeGreaterThan(0));

		const row = copies(tabs).at(-1) as HTMLElement;
		const original = tabs.querySelector(
			`[name=${row.getAttribute('name')}]`
		) as HTMLElement;

		let seen: MouseEvent | undefined;
		original.addEventListener('click', (e) => (seen = e as MouseEvent));

		await step('a modified click stays modified', async () => {
			row.dispatchEvent(
				new MouseEvent('click', {
					bubbles: true,
					composed: true,
					ctrlKey: true,
				})
			);
			await settle(4);
			expect(seen?.ctrlKey).toBe(true);
		});

		await step('and leaves the menu open, having selected nothing', async () =>
			expect(sr(tabs).querySelector('.more')?.hasAttribute('opened')).toBe(
				false
			)
		);

		await step('a plain click arrives plain', async () => {
			seen = undefined;
			row.click();
			await waitFor(() => expect(seen).toBeTruthy());
			expect(seen?.ctrlKey).toBe(false);
			expect(seen?.button).toBe(0);
		});

		await step('cancelling the forward cancels the copy too', async () => {
			original.addEventListener('click', (e) => e.preventDefault());
			const own = new MouseEvent('click', {
				bubbles: true,
				composed: true,
				cancelable: true,
			});
			row.dispatchEvent(own);
			await settle(4);
			expect(own.defaultPrevented).toBe(true);
		});
	},
};

/** remove our hidden mark when a tab leaves the bar. */
export const AMarkIsRemovedWhenATabLeavesTheBar: Story = {
	render: bar,
	play: async ({ canvasElement, step }) => {
		const tabs = next(canvasElement);
		await waitFor(() =>
			expect(
				tabs.querySelectorAll('cosmoz-tab-next[overflowing]').length
			).toBeGreaterThan(0)
		);

		const victim = tabs.querySelector(
			'cosmoz-tab-next[overflowing]'
		) as HTMLElement;

		await step('re-slotting it out of the bar clears the mark', async () => {
			victim.setAttribute('slot', 'stats');
			await waitFor(() =>
				expect(victim.hasAttribute('overflowing')).toBe(false)
			);
			expect(getComputedStyle(victim).visibility).not.toBe('hidden');
		});

		await step('removing one from the DOM clears it too', async () => {
			const next2 = tabs.querySelector(
				'cosmoz-tab-next[overflowing]'
			) as HTMLElement;
			next2.remove();
			await waitFor(() =>
				expect(next2.hasAttribute('overflowing')).toBe(false)
			);
		});
	},
};

/**
 * ratio thresholds miss absolute-pixel tolerance changes.
 * resize should reclassify wide near-fitting tabs.
 */
export const AWideTabIsReclassifiedOnResize: Story = {
	render: () => html`
		<div class="box" style="width: 900px; overflow: hidden;">
			<cosmoz-tabs-next variant="underline">
				<cosmoz-tab-next name="a" active style="flex:0 0 400px;width:400px"
					>Wide tab A</cosmoz-tab-next
				>
				<cosmoz-tab-next name="b" style="flex:0 0 400px;width:400px"
					>Wide tab B</cosmoz-tab-next
				>
			</cosmoz-tabs-next>
		</div>
	`,
	play: async ({ canvasElement, step }) => {
		const boxEl = canvasElement.querySelector('.box') as HTMLElement,
			tabs = next(canvasElement),
			b = tabs.querySelector('[name=b]') as HTMLElement,
			items = sr(tabs).querySelector('.items') as HTMLElement,
			clip = () =>
				b.getBoundingClientRect().right - items.getBoundingClientRect().right;

		await settle(30);

		await step('park it just over the tolerance', async () => {
			for (let w = 700; w < 1000; w += 1) {
				boxEl.style.width = `${w}px`;
				await settle(2);
				if (clip() > 1 && clip() <= 2) {
					break;
				}
			}
			await settle(30);
			expect(clip()).toBeGreaterThan(1);
			expect(b.hasAttribute('overflowing')).toBe(true);
		});

		await step('a nudge under the tolerance brings it back', async () => {
			boxEl.style.width = `${parseFloat(boxEl.style.width) + 1.5}px`;
			await waitFor(() => expect(b.hasAttribute('overflowing')).toBe(false));
			expect(clip()).toBeLessThanOrEqual(1);
		});
	},
};

/**
 * empty badge attributes become boolean true in pion.
 * render tabs should omit them instead.
 */
export const AnEmptyBadgeRendersNothing: Story = {
	render: () =>
		html`<div class="box">
			<cosmoz-tabs-next>
				${renderTabs({
					tabs: [
						{ name: 'x', title: 'Tab X', badge: '' },
						{ name: 'y', title: 'Tab Y', badge: '3' },
					],
					active: { name: 'x', title: 'Tab X' },
					onActivate: () => undefined,
				} as never)}
			</cosmoz-tabs-next>
		</div>`,
	play: async ({ canvasElement, step }) => {
		const tabs = next(canvasElement);
		await settle(20);
		const badgeOf = (name: string) =>
			sr(tabs.querySelector(`[name=${name}]`) as HTMLElement).querySelector(
				'.badge'
			);

		await step('an empty badge renders no badge at all', async () =>
			expect(badgeOf('x')).toBe(null)
		);

		await step('a real one still does', async () =>
			expect(badgeOf('y')?.textContent?.trim()).toBe('3')
		);
	},
};
