import '@neovici/cosmoz-tokens';
import { afterEach, describe, expect, it, vi } from 'vitest';
import '../src/cosmoz-tabs';

const names = ['overview', 'rows', 'accounting', 'history', 'attachments'];

/** Fixed tab widths: the overflow set does not depend on font loading. */
const mount = (width: string, attrs = 'variant="underline"') => {
	document.body.innerHTML = `
		<style>cosmoz-tabs::part(tab) { flex: 0 0 100px; width: 100px; }</style>
		<div class="box" style="width: ${width}">
			<cosmoz-tabs ${attrs}>
				${names
					.map(
						(name) =>
							`<cosmoz-tab name="${name}" heading="${name}">${name}</cosmoz-tab>`,
					)
					.join('')}
			</cosmoz-tabs>
		</div>`;
	const box = document.querySelector<HTMLElement>('.box')!,
		host = document.querySelector('cosmoz-tabs') as HTMLElement & {
			selected?: string;
		},
		sr = host.shadowRoot!,
		more = () => sr.querySelector<HTMLElement>('.more')!,
		bar = () => [...sr.querySelectorAll<HTMLElement>('.band > .tab')],
		overflowing = () =>
			bar()
				.filter((tab) => tab.hasAttribute('overflowing'))
				.map((tab) => tab.textContent!.trim()),
		rows = () => [...sr.querySelectorAll<HTMLElement>('.menu > .menu-tab')],
		row = (name: string) => rows().find((r) => r.textContent!.trim() === name)!;
	return { box, host, sr, more, bar, overflowing, rows, row };
};

const settle = () => new Promise((r) => setTimeout(r, 100));

afterEach(() => {
	document.body.innerHTML = '';
});

describe('legacy cosmoz-tabs overflow', () => {
	it('shows no menu when all tabs fit', async () => {
		const { bar, more, overflowing, rows } = mount('1000px');
		await vi.waitFor(() => expect(bar()).toHaveLength(5));
		await settle();
		expect(overflowing()).toEqual([]);
		expect(rows()).toHaveLength(0);
		expect(more().hidden).toBe(true);
		expect(getComputedStyle(more()).display).toBe('none');
	});

	it('moves the tabs that do not fit into the menu', async () => {
		const { bar, more, overflowing, rows, sr } = mount('400px');
		await vi.waitFor(() => expect(overflowing().length).toBeGreaterThan(0));
		await settle();

		expect(more().hidden).toBe(false);
		expect(rows().map((r) => r.textContent!.trim())).toEqual(overflowing());
		// the overflowed tabs are the tail of the bar
		expect(overflowing()).toEqual(names.slice(5 - overflowing().length));

		const band = sr
			.querySelector<HTMLElement>('.band')!
			.getBoundingClientRect();
		bar().forEach((tab) => {
			const hidden = tab.hasAttribute('overflowing');
			expect(getComputedStyle(tab).visibility).toBe(
				hidden ? 'hidden' : 'visible',
			);
			if (!hidden) {
				const rect = tab.getBoundingClientRect();
				expect(rect.top).toBeGreaterThanOrEqual(band.top);
				expect(rect.bottom).toBeLessThanOrEqual(band.bottom);
			}
		});
		// the bar keeps one row
		expect(band.height).toBe(bar()[0].offsetHeight);
		expect(
			rows().every((r) => r.getAttribute('role') === 'tab' && r.tabIndex === 0),
		).toBe(true);
	});

	it('selects a tab picked from the menu and closes the menu', async () => {
		const { host, more, overflowing, row, sr } = mount('400px');
		await vi.waitFor(() => expect(overflowing().length).toBeGreaterThan(0));
		const name = overflowing().at(-1)!;

		sr.querySelector<HTMLElement>('.more-button')!.click();
		await vi.waitFor(() => expect(more().hasAttribute('opened')).toBe(true));

		row(name).click();
		await vi.waitFor(() => expect(host.selected).toBe(name));
		await vi.waitFor(() =>
			expect(
				host.querySelector(`[name=${name}]`)!.hasAttribute('is-selected'),
			).toBe(true),
		);
		await vi.waitFor(() => expect(more().hasAttribute('opened')).toBe(false));
		expect(row(name).getAttribute('aria-selected')).toBe('true');
	});

	it('selects a menu row on Enter and Space', async () => {
		const { host, overflowing, row } = mount('400px');
		await vi.waitFor(() => expect(overflowing().length).toBeGreaterThan(1));
		const [first, last] = [overflowing()[0], overflowing().at(-1)!];
		const press = (el: HTMLElement, key: string) =>
			el.dispatchEvent(new KeyboardEvent('keydown', { key, bubbles: true }));

		press(row(last), 'Enter');
		await vi.waitFor(() => expect(host.selected).toBe(last));
		press(row(first), ' ');
		await vi.waitFor(() => expect(host.selected).toBe(first));
	});

	it('marks the trigger active while the selected tab is overflowed', async () => {
		const { host, more, overflowing } = mount('400px');
		await vi.waitFor(() => expect(overflowing().length).toBeGreaterThan(0));
		expect(more().hasAttribute('data-active')).toBe(false);

		host.setAttribute('selected', overflowing().at(-1)!);
		await vi.waitFor(() =>
			expect(more().hasAttribute('data-active')).toBe(true),
		);

		host.setAttribute('selected', 'overview');
		await vi.waitFor(() =>
			expect(more().hasAttribute('data-active')).toBe(false),
		);
	});

	it('re-evaluates the overflow on resize', async () => {
		const { box, more, overflowing, rows } = mount('1000px');
		await vi.waitFor(() => expect(rows()).toHaveLength(0));
		await settle();

		box.style.width = '400px';
		await vi.waitFor(() => expect(overflowing().length).toBeGreaterThan(0));
		await vi.waitFor(() => expect(rows()).toHaveLength(overflowing().length));

		box.style.width = '1000px';
		await vi.waitFor(() => expect(overflowing()).toEqual([]));
		await vi.waitFor(() => expect(more().hidden).toBe(true));
	});

	it('menu rows link like the bar under hash-param', async () => {
		const { host, overflowing, row } = mount(
			'400px',
			'variant="underline" hash-param="tab"',
		);
		await vi.waitFor(() => expect(overflowing().length).toBeGreaterThan(0));
		const name = overflowing().at(-1)!;
		expect(row(name).getAttribute('href')).toContain(`tab=${name}`);

		row(name).click();
		await vi.waitFor(() => expect(location.hash).toContain(`tab=${name}`));
		await vi.waitFor(() =>
			expect(
				host.querySelector(`[name=${name}]`)!.hasAttribute('is-selected'),
			).toBe(true),
		);
		history.replaceState({}, '', location.pathname + location.search);
	});

	it.each([
		'variant="brand"',
		'variant="segmented"',
		'variant="underline" size="sm"',
		'variant="underline" compact-width',
	])('overflows in %s', async (attrs) => {
		const { bar, overflowing, rows, sr } = mount('400px', attrs);
		await vi.waitFor(() => expect(overflowing().length).toBeGreaterThan(0));
		await vi.waitFor(() => expect(rows()).toHaveLength(overflowing().length));
		const band = sr.querySelector<HTMLElement>('.band')!;
		expect(band.getBoundingClientRect().height).toBe(bar()[0].offsetHeight);
	});
});
