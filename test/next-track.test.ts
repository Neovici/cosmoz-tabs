import { html, render } from 'lit-html';
import { describe, expect, it, vi } from 'vitest';
import '../src/next';

const mount = (style = '') => {
	document.body.innerHTML = '';
	const container = document.createElement('div');
	document.body.append(container);
	render(
		html`<style>
				${style}
			</style>
			<cosmoz-tabs-next variant="underline" label="Invoice checks">
				<cosmoz-tab-next name="accounting" active>Accounting</cosmoz-tab-next>
				<cosmoz-tab-next name="contract">Contract</cosmoz-tab-next>
				<cosmoz-tab-next name="delivery">Delivery</cosmoz-tab-next>
			</cosmoz-tabs-next>`,
		container,
	);
	return container.querySelector('cosmoz-tabs-next') as HTMLElement;
};

describe('next track styling and accessible name', () => {
	it('names the actual tablist and updates its label', async () => {
		const bar = mount();
		const group = () => bar.shadowRoot?.querySelector('[role="tablist"]');
		await vi.waitFor(() =>
			expect(group()?.getAttribute('aria-label')).toBe('Invoice checks'),
		);
		bar.setAttribute('label', 'Checks');
		await vi.waitFor(() =>
			expect(group()?.getAttribute('aria-label')).toBe('Checks'),
		);
	});

	it('lets consumers show wrapped rows through the public track part', async () => {
		const bar = mount(`
			cosmoz-tabs-next { width: 160px; }
			cosmoz-tabs-next::part(track) { max-height: none; gap: 1px; }
			cosmoz-tab-next { flex: 0 0 100px; }
		`);
		const tabs = [...bar.querySelectorAll<HTMLElement>('cosmoz-tab-next')];
		await vi.waitFor(() => {
			const track =
				bar.shadowRoot?.querySelector<HTMLElement>('[part="track"]');
			expect(track).toBeTruthy();
			expect(getComputedStyle(track!).maxHeight).toBe('none');
			expect(tabs[2].offsetTop).toBeGreaterThan(tabs[0].offsetTop);
			expect(tabs.every((tab) => !tab.hasAttribute('overflowing'))).toBe(true);
		});
		tabs[0].focus();
		tabs[0].dispatchEvent(
			new KeyboardEvent('keydown', { key: 'End', bubbles: true }),
		);
		expect(document.activeElement).toBe(tabs[2]);
	});
});
