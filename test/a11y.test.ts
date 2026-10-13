import { component } from '@pionjs/pion';
import { html } from 'lit-html';
import { describe, expect, it, vi } from 'vitest';
import { userEvent } from 'vitest/browser';
import '../src/next';
import { renderTabs, useTabs, type RenderTab } from '../src/next/use-tabs';

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

const sr = (el: HTMLElement) => el.shadowRoot!;
const mount = () => {
	document.body.innerHTML =
		'<cosmoz-tabs-next-keys-test></cosmoz-tabs-next-keys-test>';
	const demo = document.body.querySelector(
		'cosmoz-tabs-next-keys-test',
	) as HTMLElement;
	const bar = () => sr(demo).querySelector('cosmoz-tabs-next') as HTMLElement;
	const tab = (name: string) =>
		sr(demo).querySelector(`cosmoz-tab-next[name="${name}"]`) as HTMLElement;
	const focused = () => {
		// walk past hosts whose shadow holds the focus (the trigger sits
		// in the bar's shadow; the tabs sit in the demo's)
		let el = sr(demo).activeElement as HTMLElement | null;
		while (el?.shadowRoot?.activeElement) {
			el = el.shadowRoot.activeElement as HTMLElement;
		}
		return el;
	};
	return { demo, bar, tab, focused };
};

/** a synthetic key for targets that cannot take focus (the bar itself) */
const press = (el: HTMLElement, key: string) =>
	el.dispatchEvent(new KeyboardEvent('keydown', { key, bubbles: true }));

describe('the bar\'s walk', () => {
	it('arrows walk among the shown members and pick', async () => {
		const { tab, focused } = mount();
		await vi.waitFor(() =>
			expect(tab('overview').hasAttribute('active')).toBe(true),
		);

		await tab('overview').focus();
		await userEvent.keyboard('{ArrowRight}');
		await vi.waitFor(() =>
			expect(tab('rows').hasAttribute('active')).toBe(true),
		);
		expect(focused()).toBe(tab('rows'));
		expect(tab('rows').getAttribute('tabindex')).toBe('0');
		await vi.waitFor(() =>
			expect(tab('overview').getAttribute('tabindex')).toBe('-1'),
		);

		// the walk skips the hidden and the disabled
		await userEvent.keyboard('{ArrowRight}');
		await vi.waitFor(() =>
			expect(tab('history').hasAttribute('active')).toBe(true),
		);
		expect(focused()).toBe(tab('history'));
		expect(tab('settings').hasAttribute('active')).toBe(false);

		// the band clamps - no wrap
		await userEvent.keyboard('{ArrowRight}');
		expect(focused()).toBe(tab('history'));
		expect(tab('history').hasAttribute('active')).toBe(true);

		await userEvent.keyboard('{ArrowLeft}');
		await vi.waitFor(() =>
			expect(tab('rows').hasAttribute('active')).toBe(true),
		);
		expect(focused()).toBe(tab('rows'));
	});

	it('Home and End walk the band\'s edges', async () => {
		const { tab, focused } = mount();
		await vi.waitFor(() =>
			expect(tab('overview').hasAttribute('active')).toBe(true),
		);

		await tab('rows').focus();
		await userEvent.keyboard('{Home}');
		await vi.waitFor(() =>
			expect(tab('overview').hasAttribute('active')).toBe(true),
		);
		expect(focused()).toBe(tab('overview'));

		await userEvent.keyboard('{End}');
		await vi.waitFor(() =>
			expect(tab('history').hasAttribute('active')).toBe(true),
		);
		expect(focused()).toBe(tab('history'));
		expect(tab('settings').hasAttribute('active')).toBe(false);
	});

	it('keys aimed outside the band are no walk', async () => {
		const { bar, tab } = mount();
		await vi.waitFor(() =>
			expect(tab('overview').hasAttribute('active')).toBe(true),
		);

		// the bar itself is not a member: a synthetic key aimed at it is
		// what a composed keydown from the bar's flank delivers to the
		// bar's host listener (a real one needs the overflowed trigger,
		// covered with the menu)
		press(bar(), 'ArrowRight');
		// the walk would have moved the pick synchronously; nothing did
		expect(tab('rows').hasAttribute('active')).toBe(false);
		expect(tab('overview').hasAttribute('active')).toBe(true);
		expect(tab('rows').getAttribute('tabindex')).toBe('-1');
	});
});
