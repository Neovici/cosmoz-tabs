import '@neovici/cosmoz-tokens';
import { afterEach, expect, it } from 'vitest';
import '../src/next';

afterEach(() => {
	document.body.replaceChildren();
});

for (const variant of ['segmented', 'brand', 'underline']) {
	for (const size of ['', 'sm']) {
		it(`${variant} ${size} keeps all tabs inside one visible target band`, async () => {
			const bar = document.createElement('cosmoz-tabs-next');
			bar.setAttribute('variant', variant);
			bar.setAttribute('size', size);
			bar.style.width = '380px';
			for (const title of ['Rows', 'Delivery note', 'Summary']) {
				const tab = document.createElement('cosmoz-tab-next');
				tab.textContent = title;
				bar.append(tab);
			}
			document.body.append(bar);
			await expect
				.poll(() => bar.shadowRoot?.querySelector('slot:not([name])'))
				.toBeTruthy();
			await new Promise<void>((resolve) =>
				requestAnimationFrame(() => requestAnimationFrame(() => resolve())),
			);
			const band = bar
				.shadowRoot!.querySelector('slot:not([name])')!
				.getBoundingClientRect();
			const touch = matchMedia('(pointer: coarse)').matches;
			for (const tab of bar.children) {
				const rect = tab.getBoundingClientRect();
				expect(rect.height).toBeGreaterThanOrEqual(touch ? 44 : 24);
				expect(rect.bottom).toBeLessThanOrEqual(band.bottom + 1);
				if (!touch) expect(rect.height).toBeLessThan(44);
			}
		});
	}
}
