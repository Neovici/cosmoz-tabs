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
	it(`${variant} scrolls the selected tab into view on selection and resize`, async () => {
		const bar = document.createElement('cosmoz-tabs-next');
		bar.setAttribute('variant', variant);
		bar.setAttribute('scrollable', '');
		bar.style.boxSizing = 'border-box';
		bar.style.width = '320px';
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
		const track = () =>
			bar.shadowRoot?.querySelector<HTMLElement>('slot:not([name])');
		const visible = (tab: HTMLElement) => {
			const band = track()?.getBoundingClientRect();
			const rect = tab.getBoundingClientRect();
			return (
				!!band &&
				rect.width > 0 &&
				rect.left >= band.left - 1 &&
				rect.right <= band.right + 1
			);
		};
		await expect.poll(() => visible(last)).toBe(true);
		expect(track()!.scrollWidth).toBeGreaterThan(track()!.clientWidth);
		expect(bar.shadowRoot!.querySelector<HTMLElement>('.more')!.hidden).toBe(
			true,
		);
		expect(last.hasAttribute('overflowing')).toBe(false);
		last.removeAttribute('active');
		first.setAttribute('active', '');
		await expect.poll(() => visible(first)).toBe(true);
		first.removeAttribute('active');
		last.setAttribute('active', '');
		await expect.poll(() => visible(last)).toBe(true);
		bar.style.width = '240px';
		await expect
			.poll(() => track()!.clientWidth < 240 && visible(last))
			.toBe(true);
		last.focus();
		last.dispatchEvent(
			new KeyboardEvent('keydown', { key: 'Home', bubbles: true }),
		);
		await expect.poll(() => visible(first)).toBe(true);
		expect(document.activeElement).toBe(first);
	});
}
