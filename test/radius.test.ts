import '@neovici/cosmoz-tokens';
import { afterEach, expect, it, vi } from 'vitest';
import '../src/next';

afterEach(() => document.body.replaceChildren());

for (const size of ['', 'sm']) {
	it(`derives ${size || 'default'} segment corners from scoped frame and inset roles`, async () => {
		const scope = document.createElement('div');
		scope.style.cssText =
			'--cz-radius-group:24px;--cz-spacing-segment-inset:4px';
		scope.innerHTML = `<cosmoz-tabs-next variant="segmented" size="${size}"><cosmoz-tab-next active>List</cosmoz-tab-next></cosmoz-tabs-next>`;
		document.body.append(scope);
		const bar = scope.querySelector('cosmoz-tabs-next')!;
		const tab = scope.querySelector('cosmoz-tab-next')!;
		await vi.waitFor(() =>
			expect(tab.getAttribute('variant')).toBe('segmented'),
		);
		expect(getComputedStyle(bar).borderRadius).toBe('24px');
		expect(getComputedStyle(tab).borderRadius).toBe('20px');
		scope.style.setProperty('--cz-radius-group', '2px');
		expect(getComputedStyle(tab).borderRadius).toBe('0px');
		scope.style.setProperty('--cz-radius-segment', '7px');
		expect(getComputedStyle(tab).borderRadius).toBe('7px');
	});
}
