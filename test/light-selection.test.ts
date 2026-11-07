import '@neovici/cosmoz-tokens';
import { afterEach, describe, expect, it, vi } from 'vitest';
import '../src/next';

afterEach(() => document.body.replaceChildren());

const selectedTab = async () => {
	const bar = document.createElement('cosmoz-tabs-next');
	bar.setAttribute('variant', 'segmented');
	bar.style.cssText =
		'color-scheme: light; --cz-color-bg-primary: rgb(250, 250, 250); --cz-color-text-primary: rgb(30, 30, 30);';
	const tab = document.createElement('cosmoz-tab-next');
	tab.setAttribute('active', '');
	tab.setAttribute('badge', '2');
	tab.textContent = 'Invoices';
	bar.append(tab);
	document.body.append(bar);
	await vi.waitFor(() => expect(tab.getAttribute('variant')).toBe('segmented'));
	return tab;
};

describe('light segmented selection', () => {
	it('uses the selected surface and foreground instead of primary-action colors', async () => {
		const style = getComputedStyle(await selectedTab());
		expect(style.backgroundColor).toBe('rgb(250, 250, 250)');
		expect(style.color).toBe('rgb(30, 30, 30)');
	});

	it('keeps a selected counter readable on the light selected surface', async () => {
		const tab = await selectedTab();
		await vi.waitFor(() =>
			expect(tab.shadowRoot?.querySelector('.badge')).not.toBeNull(),
		);
		const badge = tab.shadowRoot!.querySelector('.badge')!;
		expect(getComputedStyle(badge).color).toBe('rgb(30, 30, 30)');
	});
});
