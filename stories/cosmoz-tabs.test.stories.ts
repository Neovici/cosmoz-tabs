import { homeLineIcon } from '@neovici/cosmoz-icons/untitled';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';
import { expect, fn, waitFor } from 'storybook/test';

import '../src/cosmoz-tabs';

const meta: Meta = {
	title: 'Tests/Tabs',
};

export default meta;

type Story = StoryObj;

const fixture = (variant = 'underline') => html`
	<cosmoz-tabs variant=${variant}>
		<cosmoz-tab name="tab0" heading="Tab0" .icon=${homeLineIcon()}
			>1</cosmoz-tab
		>
		<cosmoz-tab name="tab1" heading="Tab1" badge="2">2</cosmoz-tab>
		<cosmoz-tab name="tab2" heading="Tab2" hidden>3</cosmoz-tab>
		<cosmoz-tab name="tab3" heading="Tab3" disabled>4</cosmoz-tab>
	</cosmoz-tabs>
`;

const getTabs = (root: HTMLElement) =>
	root.querySelector('cosmoz-tabs') as HTMLElement & {
		selected?: string;
	};

export const SelectsFirstAndSwitches: Story = {
	render: () => fixture(),
	play: async ({ canvasElement, step }) => {
		const tabs = getTabs(canvasElement);

		await step('first valid tab is selected by default', async () => {
			await waitFor(() =>
				expect(tabs.querySelector('[is-selected]')?.getAttribute('name')).toBe(
					'tab0'
				)
			);
			await waitFor(() => expect(tabs.selected).toBe('tab0'));
		});

		await step('setting selected switches the active tab', async () => {
			tabs.selected = 'tab1';
			await waitFor(() =>
				expect(tabs.querySelector('[is-selected]')?.getAttribute('name')).toBe(
					'tab1'
				)
			);
		});
	},
};

export const RendersBarFromChildren: Story = {
	render: () => fixture(),
	play: async ({ canvasElement, step }) => {
		const tabs = getTabs(canvasElement);

		await step('tablist mirrors the number of tabs', async () => {
			await waitFor(() =>
				expect(tabs.shadowRoot!.querySelectorAll('[role=tab]').length).toBe(
					tabs.querySelectorAll('cosmoz-tab').length
				)
			);
		});

		await step('headings and a badge render in the bar', () => {
			const headings = Array.from(
				tabs.shadowRoot!.querySelectorAll('[role=tab] > span')
			).map((el) => el.textContent);
			expect(headings).toEqual(['Tab0', 'Tab1', 'Tab2', 'Tab3']);
			expect(tabs.shadowRoot!.querySelectorAll('.badge').length).toBe(1);
		});

		await step('a cosmoz-icons svg is rendered for the icon', () => {
			const firstTab = tabs.shadowRoot!.querySelectorAll('[role=tab]')[0];
			expect(firstTab.querySelector('svg')).not.toBeNull();
		});
	},
};

export const HiddenAndDisabled: Story = {
	render: () => fixture(),
	play: async ({ canvasElement, step }) => {
		const tabs = getTabs(canvasElement);
		await waitFor(() =>
			expect(tabs.shadowRoot!.querySelectorAll('[role=tab]').length).toBe(4)
		);
		const barTabs = tabs.shadowRoot!.querySelectorAll('[role=tab]');

		await step('hidden tab is not displayed', () => {
			const hidden = barTabs[2] as HTMLElement;
			expect(hidden.getAttribute('hidden')).toBe('');
			expect(getComputedStyle(hidden).display).toBe('none');
		});

		await step('disabled tab carries the disabled attribute', () => {
			expect(barTabs[3].getAttribute('disabled')).toBe('');
		});
	},
};

export const ClickSelects: Story = {
	render: () => fixture(),
	play: async ({ canvasElement, step }) => {
		const tabs = getTabs(canvasElement);
		await waitFor(() => expect(tabs.selected).toBe('tab0'));

		await step('clicking a tab selects it', async () => {
			(
				tabs.shadowRoot!.querySelectorAll('[role=tab]')[1] as HTMLElement
			).click();
			await waitFor(() => expect(tabs.selected).toBe('tab1'));
		});

		await step('ctrl+click does not select', async () => {
			(
				tabs.shadowRoot!.querySelectorAll('[role=tab]')[0] as HTMLElement
			).dispatchEvent(
				new MouseEvent('click', { ctrlKey: true, bubbles: true })
			);
			await new Promise((r) => requestAnimationFrame(r));
			expect(tabs.selected).toBe('tab1');
		});
	},
};

export const FiresSelectEvents: Story = {
	render: () => fixture(),
	play: async ({ canvasElement, step }) => {
		const tabs = getTabs(canvasElement);
		await waitFor(() => expect(tabs.selected).toBe('tab0'));

		await step('tab-first-select fires once, before tab-select', async () => {
			const tab = tabs.querySelector('[name=tab1]')!;
			const onFirst = fn();
			const onSelect = fn();
			tab.addEventListener('tab-first-select', onFirst);
			tab.addEventListener('tab-select', onSelect);

			tabs.selected = 'tab1';
			await waitFor(() => expect(onSelect).toHaveBeenCalledTimes(1));
			expect(onFirst).toHaveBeenCalledTimes(1);

			onFirst.mockClear?.();
			onSelect.mockClear?.();
			// move away and let it settle, otherwise the two sync sets batch to a no-op
			tabs.selected = 'tab0';
			await waitFor(() => expect(tabs.selected).toBe('tab0'));
			tabs.selected = 'tab1';
			await waitFor(() => expect(onSelect).toHaveBeenCalled());
			// already activated once -> no second first-select
			expect(onFirst).not.toHaveBeenCalled();
		});
	},
};

export const DispatchesResizeOnSelect: Story = {
	render: () => fixture(),
	play: async ({ canvasElement, step }) => {
		const tabs = getTabs(canvasElement);
		await waitFor(() => expect(tabs.selected).toBe('tab0'));

		await step('selecting a tab dispatches a window resize', async () => {
			const onResize = fn();
			window.addEventListener('resize', onResize);
			tabs.selected = 'tab1';
			await waitFor(() => expect(onResize).toHaveBeenCalled());
			window.removeEventListener('resize', onResize);
		});
	},
};

export const NoResizeSuppressesResize: Story = {
	render: () => fixture(),
	play: async ({ canvasElement, step }) => {
		const tabs = getTabs(canvasElement) as HTMLElement & {
			selected?: string;
			noResize?: boolean;
		};
		await waitFor(() => expect(tabs.selected).toBe('tab0'));

		await step('no-resize suppresses the window resize', async () => {
			tabs.noResize = true;
			const onResize = fn();
			window.addEventListener('resize', onResize);
			tabs.selected = 'tab1';
			await waitFor(() =>
				expect(tabs.querySelector('[is-selected]')?.getAttribute('name')).toBe(
					'tab1'
				)
			);
			// let the (suppressed) resize rAF window pass
			await new Promise((r) =>
				requestAnimationFrame(() => requestAnimationFrame(r))
			);
			expect(onResize).not.toHaveBeenCalled();
			window.removeEventListener('resize', onResize);
		});
	},
};

export const VariantBrandActiveStyling: Story = {
	render: () => fixture('brand'),
	play: async ({ canvasElement }) => {
		const tabs = getTabs(canvasElement);
		await waitFor(() =>
			expect(
				tabs.shadowRoot!.querySelector('a[aria-selected=true]')
			).not.toBeNull()
		);
		const active = tabs.shadowRoot!.querySelector('a[aria-selected=true]')!;
		// brand active tab has a (non-transparent) brand-tinted background
		expect(getComputedStyle(active).backgroundColor).not.toBe(
			'rgba(0, 0, 0, 0)'
		);
	},
};

export const VariantUnderlineActiveStyling: Story = {
	render: () => fixture('underline'),
	play: async ({ canvasElement }) => {
		const tabs = getTabs(canvasElement);
		await waitFor(() =>
			expect(
				tabs.shadowRoot!.querySelector('a[aria-selected=true]')
			).not.toBeNull()
		);
		const active = tabs.shadowRoot!.querySelector('a[aria-selected=true]')!;
		const shadow = getComputedStyle(active).boxShadow;
		// underline active tab has an inset bottom border via box-shadow
		expect(shadow).not.toBe('none');
		expect(shadow).toContain('inset');
	},
};

export const RovingTabindex: Story = {
	render: () => fixture(),
	play: async ({ canvasElement, step }) => {
		const tabs = getTabs(canvasElement);
		const sr = tabs.shadowRoot!;
		await waitFor(() =>
			expect(sr.querySelector('a[aria-selected=true]')).not.toBeNull()
		);

		await step('selected tab is focusable (0), the rest are -1', () => {
			expect(
				sr.querySelector('a[aria-selected=true]')!.getAttribute('tabindex')
			).toBe('0');
			sr.querySelectorAll('a[aria-selected=false]').forEach((a) =>
				expect(a.getAttribute('tabindex')).toBe('-1')
			);
		});

		await step('focusable tab follows selection', async () => {
			tabs.selected = 'tab1';
			await waitFor(() =>
				expect(
					sr.querySelector('a[aria-selected=true]')?.getAttribute('tabindex')
				).toBe('0')
			);
			expect(sr.querySelectorAll('a[tabindex="0"]').length).toBe(1);
		});
	},
};

export const SpreadByDefault: Story = {
	render: () => fixture(),
	play: async ({ canvasElement }) => {
		const tabs = getTabs(canvasElement);

		await waitFor(() =>
			expect(tabs.shadowRoot!.querySelector('.tab')).not.toBeNull()
		);

		const tab = tabs.shadowRoot!.querySelector(
			'.tab:not([hidden])'
		) as HTMLElement;
		expect(getComputedStyle(tab).flexGrow).toBe('1');
	},
};

export const CompactWidthSizesToContent: Story = {
	render: () => html`
		<cosmoz-tabs variant="underline" compact-width>
			<cosmoz-tab name="tab0" heading="Tab0">1</cosmoz-tab>
			<cosmoz-tab name="tab1" heading="Tab1">2</cosmoz-tab>
		</cosmoz-tabs>
	`,
	play: async ({ canvasElement }) => {
		const tabs = getTabs(canvasElement);

		await waitFor(() =>
			expect(tabs.shadowRoot!.querySelector('.tab')).not.toBeNull()
		);

		const tab = tabs.shadowRoot!.querySelector(
			'.tab:not([hidden])'
		) as HTMLElement;
		expect(getComputedStyle(tab).flexGrow).toBe('0');
	},
};

export const ConstrainsContentHeight: Story = {
	render: () => html`
		<style>
			cosmoz-tabs.sized::part(content) {
				overflow-y: auto;
			}
		</style>
		<cosmoz-tabs class="sized" style="height: 400px;">
			<cosmoz-tab name="a" heading="A">
				<div style="height: 2000px"></div>
			</cosmoz-tab>
			<cosmoz-tab name="b" heading="B">
				<div style="height: 3000px"></div>
			</cosmoz-tab>
		</cosmoz-tabs>
	`,
	play: async ({ canvasElement, step }) => {
		const tabs = getTabs(canvasElement);
		const content = () =>
			tabs.shadowRoot!.querySelector('#content') as HTMLElement;

		await step(
			'a height-constrained host bounds its content panel to the host height',
			async () => {
				await waitFor(() => expect(tabs.selected).toBe('a'));
				await waitFor(() => {
					const c = content();
					expect(c.clientHeight).toBeGreaterThan(300);
					expect(c.clientHeight).toBeLessThan(420);
				});
			}
		);

		await step(
			'switching tabs dispatches resize and keeps the panel bounded',
			async () => {
				const onResize = fn();
				window.addEventListener('resize', onResize);
				tabs.selected = 'b';
				await waitFor(() =>
					expect(
						tabs.querySelector('[is-selected]')?.getAttribute('name')
					).toBe('b')
				);

				await waitFor(() => expect(onResize).toHaveBeenCalled());
				window.removeEventListener('resize', onResize);
				expect(content().clientHeight).toBeLessThan(420);
			}
		);
	},
};
