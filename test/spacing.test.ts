import { html, render } from 'lit-html';
import { afterEach, describe, expect, it, vi } from 'vitest';
import '../src/index';
import '../src/next';

afterEach(() => {
	document.body.innerHTML = '';
});

describe('inherited tab bar spacing', () => {
	for (const family of ['legacy', 'next']) {
		it(`${family} inherits spacing and allows a toolbar to opt out`, async () => {
			const host = document.createElement('div');
			document.body.append(host);
			render(
				family === 'next'
					? html`<cosmoz-tabs-next
							><cosmoz-tab-next active
								>Overview</cosmoz-tab-next
							></cosmoz-tabs-next
						>`
					: html`<cosmoz-tabs
							><cosmoz-tab heading="Overview">Details</cosmoz-tab></cosmoz-tabs
						>`,
				host,
			);
			const element = host.firstElementChild as HTMLElement;
			let bar: HTMLElement;
			await vi.waitFor(() => {
				bar =
					family === 'next'
						? element
						: element.shadowRoot!.querySelector<HTMLElement>('.tabs')!;
				expect(bar).toBeTruthy();
			});
			expect(getComputedStyle(bar!).marginTop).toBe('0px');
			host.style.setProperty('--cosmoz-tabs-margin-block', '8px');
			expect(getComputedStyle(bar!).marginTop).toBe('8px');
			expect(getComputedStyle(bar!).marginBottom).toBe('8px');
			element.style.setProperty('--cosmoz-tabs-margin-block', '0px');
			expect(getComputedStyle(bar!).marginTop).toBe('0px');
			expect(getComputedStyle(bar!).marginBottom).toBe('0px');
		});
	}
});
