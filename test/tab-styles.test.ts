import '@neovici/cosmoz-tokens';
import { render } from 'lit-html';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { userEvent } from 'vitest/browser';
import '../src/next';
import { nextFixture } from '../stories/overflow-helpers';

const sr = (el: HTMLElement) => el.shadowRoot!;

/** the token's value as the browser resolves it, in the page's colour scheme */
const resolve = (value: string) => {
	const probe = document.createElement('span');
	probe.style.color = value;
	document.body.append(probe);
	const color = getComputedStyle(probe).color;
	probe.remove();
	return color;
};

/** moves the pointer off every fixture: state is the pointer, not the mount */
const park = async () => {
	const spacer = document.createElement('div');
	spacer.style.cssText = 'width: 100%; height: 32px;';
	document.body.append(spacer);
	await userEvent.hover(spacer);
	document.body.lastElementChild?.remove();
};

const mountBar = async (variant: string, content: string) => {
	const bar = document.createElement('cosmoz-tabs-next');
	bar.setAttribute('variant', variant);
	bar.innerHTML = content;
	document.body.append(bar);
	await vi.waitFor(() =>
		expect(sr(bar).querySelector('slot:not([name])')).toBeTruthy(),
	);
	const tab = (name: string) =>
		bar.querySelector(`cosmoz-tab-next[name="${name}"]`) as HTMLElement;
	return { bar, tab };
};

const threeTabs = `
	<cosmoz-tab-next name="overview" active>Overview</cosmoz-tab-next>
	<cosmoz-tab-next name="rows">Invoice rows</cosmoz-tab-next>
	<cosmoz-tab-next name="history">History</cosmoz-tab-next>
`;

afterEach(() => {
	document.body.replaceChildren();
});

describe('the underline face', () => {
	it('keeps its paint inside the item and snaps its face', async () => {
		const { tab } = await mountBar('underline', threeTabs);
		const host = getComputedStyle(tab('rows'));

		// the item's state change must not invalidate the bar's backdrop
		expect(host.contain).toContain('paint');
		expect(host.transitionDuration).toBe('0s');

		// the underline is its own layer, not the host's shadow
		expect(host.boxShadow).toBe('none');
		await park();
		const mark = getComputedStyle(tab('rows'), '::after');
		expect(mark.content).not.toBe('none');
		expect(mark.height).toBe('2px');
		expect(mark.opacity).toBe('0');
		expect(mark.pointerEvents).toBe('none');
		expect(mark.backgroundColor).toBe(
			resolve('var(--cz-color-border-primary)'),
		);
	});

	it('shows the indicator on a real hover and on the selection', async () => {
		const { tab } = await mountBar('underline', threeTabs);
		const rows = tab('rows');
		expect(getComputedStyle(rows, '::after').opacity).toBe('0');

		await userEvent.hover(rows);
		await vi.waitFor(() =>
			expect(getComputedStyle(rows, '::after').opacity).toBe('1'),
		);
		await park();
		await vi.waitFor(() =>
			expect(getComputedStyle(rows, '::after').opacity).toBe('0'),
		);

		// the selection's face is the stronger ink, with no hover needed
		const active = getComputedStyle(tab('overview'), '::after');
		expect(active.opacity).toBe('1');
		expect(active.backgroundColor).toBe(resolve('var(--cz-color-fg-primary)'));
	});
});

describe('the raised faces', () => {
	it('a segmented item keeps its end states and draws no underline', async () => {
		const { tab } = await mountBar('segmented', threeTabs);
		await park();
		const active = getComputedStyle(tab('overview'));
		const rest = getComputedStyle(tab('rows'));

		expect(rest.transitionDuration).toBe('0s');
		expect(getComputedStyle(tab('overview'), '::after').content).toBe('none');

		// the picked segment still reads raised: fill and shadow at the end
		expect(rest.backgroundColor).toBe('rgba(0, 0, 0, 0)');
		expect(rest.boxShadow).toBe('none');
		expect(active.backgroundColor).not.toBe('rgba(0, 0, 0, 0)');
		expect(active.boxShadow).not.toBe('none');
	});

	it('a menu copy keeps its row fill and draws no underline', async () => {
		document.body.innerHTML =
			'<cosmoz-tab-next menu active>Invoice rows</cosmoz-tab-next>';
		const copy = document.body.firstElementChild as HTMLElement;

		expect(getComputedStyle(copy, '::after').content).toBe('none');
		expect(getComputedStyle(copy).backgroundColor).toBe(
			resolve(
				'var(--cz-color-bg-action-solid, var(--cz-color-bg-brand-solid))',
			),
		);
	});
});

describe('the overflow trigger', () => {
	it('snaps its state: no transition on the button part', async () => {
		const host = document.createElement('div');
		render(nextFixture('240px'), host);
		document.body.append(host);
		const bar = host.querySelector('cosmoz-tabs-next') as HTMLElement;
		await vi.waitFor(() =>
			expect(
				sr(bar).querySelectorAll('.menu > cosmoz-tab-next').length,
			).toBeGreaterThan(0),
		);

		const button = sr(bar).querySelector(
			'cosmoz-button.more-button',
		) as HTMLElement;
		const part = button.shadowRoot!.querySelector(
			'[part~="button"]',
		) as HTMLElement;
		const durations = getComputedStyle(part)
			.transitionDuration.split(',')
			.map((duration) => Number.parseFloat(duration));
		expect(durations.every((duration) => duration === 0)).toBe(true);
	});
});
