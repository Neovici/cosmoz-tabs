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

for (const variant of ['segmented', 'underline']) {
	it(`${variant} replaces an overflowing row with the selected-tab dropdown`, async () => {
		const bar = document.createElement('cosmoz-tabs-next');
		bar.setAttribute('variant', variant);
		bar.setAttribute('collapse-on-overflow', '');
		bar.style.cssText = 'width:320px;box-sizing:border-box';
		for (const name of [
			'To do',
			'In orbit',
			'Backlog',
			'Automation',
			'Matching',
		]) {
			const tab = document.createElement('cosmoz-tab-next');
			tab.textContent = name;
			bar.append(tab);
		}
		const first = bar.firstElementChild as HTMLElement;
		const last = bar.lastElementChild as HTMLElement;
		last.setAttribute('active', '');
		document.body.append(bar);
		const trigger = () =>
			bar.shadowRoot?.querySelector<HTMLElement>('.more-button');
		await expect.poll(() => trigger()?.textContent?.trim()).toBe('Matching');
		expect(
			Array.from(bar.children).every(
				(tab) => !tab.checkVisibility({ visibilityProperty: true }),
			),
		).toBe(true);
		expect(
			Array.from(
				bar.shadowRoot!.querySelectorAll('.menu cosmoz-tab-next'),
				(tab) => tab.textContent?.trim(),
			),
		).toEqual(['To do', 'In orbit', 'Backlog', 'Automation', 'Matching']);
		last.removeAttribute('active');
		first.setAttribute('active', '');
		await expect.poll(() => trigger()?.textContent?.trim()).toBe('To do');
		bar.style.width = '1000px';
		await expect
			.poll(() =>
				Array.from(bar.children).every((tab) =>
					tab.checkVisibility({ visibilityProperty: true }),
				),
			)
			.toBe(true);
		expect(bar.shadowRoot!.querySelector<HTMLElement>('.more')!.hidden).toBe(
			true,
		);
		last.focus();
		bar.style.width = '240px';
		await expect
			.poll(
				() =>
					!bar.shadowRoot!.querySelector<HTMLElement>('.more')!.hidden &&
					trigger()?.textContent?.trim() === 'To do',
			)
			.toBe(true);
		expect(bar.shadowRoot!.activeElement).toBe(trigger());
		const longName =
			'Very long invoice approval and verification destination for a narrow panel';
		first.textContent = longName;
		await expect.poll(() => trigger()?.textContent?.trim()).toBe(longName);
		expect(bar.scrollWidth).toBeLessThanOrEqual(240);
		expect(trigger()!.getBoundingClientRect().right).toBeLessThanOrEqual(
			bar.getBoundingClientRect().right + 1,
		);
	});
}
