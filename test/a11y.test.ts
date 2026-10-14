import { component } from '@pionjs/pion';
import { html, render } from 'lit-html';
import { describe, expect, it, vi } from 'vitest';
import { userEvent } from 'vitest/browser';
import '../src/next';
import { renderTabs, useTabs, type RenderTab } from '../src/next/use-tabs';
import { nextFixture, settle } from '../stories/overflow-helpers';

const walkModel: RenderTab[] = [
	{ name: 'overview', title: 'Overview' },
	{ name: 'rows', title: 'Invoice rows' },
	{ name: 'plain', title: 'Hidden one', hidden: true },
	{ name: 'settings', title: 'Settings', disabled: true },
	{ name: 'history', title: 'History' },
];

const KeysDemo = () => {
	const tabs = useTabs(walkModel);
	return html`<cosmoz-tabs-next>${renderTabs(tabs)}</cosmoz-tabs-next>`;
};

if (!customElements.get('cosmoz-tabs-next-keys-test')) {
	customElements.define('cosmoz-tabs-next-keys-test', component(KeysDemo));
}

const sr = (el: HTMLElement) => el.shadowRoot!;

/** the demo's shadow hosts the bar and the light members */
const view = (demo: HTMLElement) => {
	const bar = () => sr(demo).querySelector('cosmoz-tabs-next') as HTMLElement;
	const tab = (name: string) =>
		sr(demo).querySelector(`cosmoz-tab-next[name="${name}"]`) as HTMLElement;
	const focused = () => {
		let el = sr(demo).activeElement as HTMLElement | null;
		while (el?.shadowRoot?.activeElement) {
			el = el.shadowRoot.activeElement as HTMLElement;
		}
		return el;
	};
	return { bar, tab, focused };
};

const mountKeys = () => {
	document.body.innerHTML =
		'<cosmoz-tabs-next-keys-test></cosmoz-tabs-next-keys-test>';
	return view(document.body.querySelector('cosmoz-tabs-next-keys-test')!);
};

/** a real DOM mount: the tabs are light children, focus stays flat */
const mountStatic = (template: ReturnType<typeof nextFixture>) => {
	document.body.innerHTML = '';
	const host = document.createElement('div');
	render(template, host);
	document.body.append(host);
	const bar = host.querySelector('cosmoz-tabs-next') as HTMLElement;
	const tab = (name: string) =>
		bar.querySelector(`cosmoz-tab-next[name="${name}"]`) as HTMLElement;
	return { bar, tab };
};

/** focus inside the bar's shadow tree, walked to the innermost holder */
const barFocused = (bar: HTMLElement): HTMLElement | null => {
	let el = sr(bar).activeElement as HTMLElement | null;
	while (el?.shadowRoot?.activeElement) {
		el = el.shadowRoot.activeElement as HTMLElement;
	}
	return el;
};

/** a synthetic key for targets that cannot take focus (the bar itself) */
const press = (el: HTMLElement, key: string) =>
	el.dispatchEvent(new KeyboardEvent('keydown', { key, bubbles: true }));

describe('the bar\'s walk', () => {
	it('walks the focus and picks only on Enter', async () => {
		const { tab, focused } = mountKeys();
		await vi.waitFor(() =>
			expect(tab('overview').hasAttribute('active')).toBe(true),
		);

		// the walk moves the focus, not the selection
		await tab('overview').focus();
		await userEvent.keyboard('{ArrowRight}');
		await vi.waitFor(() => expect(focused()).toBe(tab('rows')));
		expect(tab('rows').hasAttribute('active')).toBe(false);
		expect(tab('rows').getAttribute('tabindex')).toBe('-1');
		expect(tab('overview').getAttribute('tabindex')).toBe('0');

		// the walk skips the hidden and the disabled
		await userEvent.keyboard('{ArrowRight}');
		await vi.waitFor(() => expect(focused()).toBe(tab('history')));
		expect(tab('history').hasAttribute('active')).toBe(false);
		expect(tab('settings').hasAttribute('active')).toBe(false);

		// the band clamps - no wrap
		await userEvent.keyboard('{ArrowRight}');
		expect(focused()).toBe(tab('history'));

		await userEvent.keyboard('{ArrowLeft}');
		await vi.waitFor(() => expect(focused()).toBe(tab('rows')));

		// Home and End walk the band's edges
		await userEvent.keyboard('{Home}');
		await vi.waitFor(() => expect(focused()).toBe(tab('overview')));
		expect(tab('rows').hasAttribute('active')).toBe(false);
		expect(tab('settings').hasAttribute('active')).toBe(false);

		await userEvent.keyboard('{End}');
		await vi.waitFor(() => expect(focused()).toBe(tab('history')));
		expect(tab('history').hasAttribute('active')).toBe(false);

		// the picks are explicit: the focused tab's pick moves the selection
		tab('rows').focus();
		await userEvent.keyboard('{Enter}');
		await vi.waitFor(() =>
			expect(tab('rows').hasAttribute('active')).toBe(true),
		);
		expect(tab('rows').getAttribute('tabindex')).toBe('0');
		expect(focused()).toBe(tab('rows'));
	});

	it('a link tab navigates when its keyboard pick lands', async () => {
		const { tab } = mountStatic(
			nextFixture(
				'420px',
				html`<cosmoz-tab-next name="links" href="#!/somewhere-thing"
					>Links</cosmoz-tab-next
				>`,
			),
		);
		const links = tab('links') as HTMLElement;
		expect(links.getAttribute('href')).toBe('#!/somewhere-thing');

		// the pick is the link's click; the browser's default follows it
		await settle(2);
		await links.focus();
		await userEvent.keyboard('{Enter}');
		await vi.waitFor(() => expect(location.hash).toBe('#!/somewhere-thing'));
	});
	it('keys aimed outside the band are no walk', async () => {
		const { bar, tab } = mountKeys();
		await vi.waitFor(() =>
			expect(tab('overview').hasAttribute('active')).toBe(true),
		);

		// a synthetic key targeted at the bar itself mirrors what a
		// composed keydown from the bar's flank delivers to the bar's
		// host listener (the real trigger case is covered with the menu)
		press(bar(), 'ArrowRight');
		// the pick follows the focus; the untouched walk kept both
		expect(tab('rows').hasAttribute('active')).toBe(false);
		expect(tab('overview').hasAttribute('active')).toBe(true);
		expect(tab('rows').getAttribute('tabindex')).toBe('-1');
	});
});

describe('the bar\'s stop', () => {
	it('the stop follows a light-dom selection swap', async () => {
		const { bar, tab } = mountKeys();
		await vi.waitFor(() =>
			expect(tab('overview').hasAttribute('active')).toBe(true),
		);
		expect(tab('overview').getAttribute('tabindex')).toBe('0');

		tab('overview').removeAttribute('active');
		tab('rows').setAttribute('active', '');
		await vi.waitFor(() => {
			expect(tab('rows').getAttribute('tabindex')).toBe('0');
			expect(tab('overview').getAttribute('tabindex')).toBe('-1');
		});
		expect(bar().querySelectorAll('cosmoz-tab-next[tabindex="0"]').length).toBe(
			1,
		);
	});

	it('an overflowed selection keeps the stop in the band', async () => {
		const { bar, tab } = mountStatic(nextFixture('240px'));
		await vi.waitFor(() =>
			expect(tab('overview').hasAttribute('active')).toBe(true),
		);

		// the selection hides: an overflowed tab picks
		tab('history').setAttribute('active', '');
		tab('overview').removeAttribute('active');
		await vi.waitFor(() => {
			expect(tab('history').getAttribute('tabindex')).toBe('-1');
			expect(tab('rows').getAttribute('tabindex')).toBe('0');
		});
		// the shown member before the selection keeps the stop
		expect(bar.querySelectorAll('cosmoz-tab-next[tabindex="0"]').length).toBe(
			1,
		);
	});

	it('a menu pick keeps a reachable stop the walk starts from', async () => {
		const { bar, tab } = mountStatic(nextFixture('240px'));
		// the consumer's pick: the forwarded click selects the original
		bar.querySelectorAll('cosmoz-tab-next').forEach((member) =>
			member.addEventListener('click', () => {
				bar
					.querySelectorAll('cosmoz-tab-next')
					.forEach((other) => other.removeAttribute('active'));
				member.setAttribute('active', '');
			}),
		);
		const copies = () =>
			[...sr(bar).querySelectorAll('.menu > cosmoz-tab-next')] as HTMLElement[];
		const trigger = () => sr(bar).querySelector('.more-button') as HTMLElement;

		await vi.waitFor(() => expect(copies().length).toBeGreaterThan(0));

		// a real pick: open the menu, click the deepest row
		const last = copies().at(-1) as HTMLElement;
		const name = last.getAttribute('name') as string;
		await userEvent.click(trigger());
		await vi.waitFor(() =>
			expect(sr(bar).querySelector('.more')!.hasAttribute('opened')).toBe(true),
		);
		await userEvent.click(last);

		// the pick hides in the menu; the shown member before it keeps
		// the bar's stop
		await vi.waitFor(() => {
			expect(tab(name).hasAttribute('active')).toBe(true);
			expect(tab(name).getAttribute('tabindex')).toBe('-1');
		});
		const stop = bar.querySelector(
			'cosmoz-tab-next[tabindex="0"]',
		) as HTMLElement;
		expect(stop.hasAttribute('overflowing')).toBe(false);
		const members = [...bar.querySelectorAll('cosmoz-tab-next')];
		expect(members.indexOf(stop)).toBeLessThan(members.indexOf(tab(name)));

		// the stop is the walk's home base; a walk from it moves the
		// focus and picks nothing - the selection is the menu pick's
		await stop.focus();
		await userEvent.keyboard('{Home}');
		await vi.waitFor(() =>
			expect(document.activeElement).toBe(tab('overview')),
		);
		expect(tab('attachments').hasAttribute('active')).toBe(true);
	});

	it('a real key on the trigger walks nothing', async () => {
		const { bar, tab } = mountStatic(nextFixture('240px'));
		await vi.waitFor(() =>
			expect(
				sr(bar).querySelectorAll('.menu > cosmoz-tab-next').length,
			).toBeGreaterThan(0),
		);

		// the trigger exists when the bar overflows: focus it, send a
		// real arrow - the composed keydown retargets to the bar, which
		// is not a member
		const trigger = sr(bar).querySelector('.more-button') as HTMLElement;
		await trigger.focus();
		await userEvent.keyboard('{ArrowRight}');
		expect(barFocused(bar)).toBe(trigger);
		expect(tab('rows').hasAttribute('active')).toBe(false);
		expect(tab('overview').hasAttribute('active')).toBe(true);
	});
});

describe('the track is the tablist', () => {
	it('the group wraps the members alone; the flanks stay out', async () => {
		document.body.innerHTML = `<div class="box" style="width: 240px; overflow: hidden;">
			<cosmoz-tabs-next variant="underline">
				<div slot="tabs">Orders</div>
				<cosmoz-tab-next name="overview" active>Overview</cosmoz-tab-next>
				<cosmoz-tab-next name="rows">Invoice rows</cosmoz-tab-next>
				<cosmoz-tab-next name="accounting">Accounting</cosmoz-tab-next>
				<cosmoz-tab-next name="history" disabled>History</cosmoz-tab-next>
				<div slot="stats">1-20 of 87</div>
			</cosmoz-tabs-next>
		</div>`;
		const bar = document.body.querySelector('cosmoz-tabs-next') as HTMLElement;

		let group: HTMLElement | undefined;
		await vi.waitFor(() => {
			group = sr(bar).querySelector('[role="tablist"]') as HTMLElement;
			expect(group).not.toBeNull();
		});
		expect(bar.getAttribute('role')).toBeNull();

		// the members ride the group's default slot: assignment, not
		// containment - they are light children of the frame
		const track = group!.querySelector('slot:not([name])') as HTMLSlotElement;
		const members = track.assignedElements() as HTMLElement[];
		expect(members.map((m) => m.getAttribute('name'))).toEqual([
			'overview',
			'rows',
			'accounting',
			'history',
		]);
		members.forEach((m) => expect(m.getAttribute('role')).toBe('tab'));

		// the frame's flanks sit outside the group
		const flanks = [
			sr(bar).querySelector('.more'),
			sr(bar).querySelector('slot[name="tabs"]'),
			sr(bar).querySelector('slot[name="stats"]'),
		];
		flanks.forEach((flank) => expect(group!.contains(flank!)).toBe(false));
	});
});
