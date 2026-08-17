import { normalize } from '@neovici/cosmoz-tokens/normalize';
import {
	component,
	html,
	useCallback,
	useEffect,
	useLayoutEffect,
	useMemo,
	useRef,
	useState,
} from '@pionjs/pion';
import { ref } from 'lit-html/directives/ref.js';
import {
	closeMenu,
	renderOverflowMenu,
	useCloseWhenEmpty,
} from '../overflow-menu';
import { nextTabsStyles, type TabsVariant } from '../styles';
import { useOverflow } from '../use-overflow';

export interface CosmozTabsNextElement extends HTMLElement {
	variant?: TabsVariant;
	compactWidth?: boolean;
	moreLabel?: string;
}

const TAB = 'cosmoz-tab-next';

const reflect = (tab: Element, name: string, value: string | null) => {
	if (value == null) {
		tab.removeAttribute(name);
	} else {
		tab.setAttribute(name, value);
	}
};

// remember only the slots we assigned.
// consumer slots stay untouched.
const assigned = new WeakMap<Element, string>();

const arrange = (host: HTMLElement) => {
	let seenTab = false;
	[...host.children].forEach((el) => {
		if (el.matches(TAB)) {
			seenTab = true;
			return;
		}
		// wrapper slots are pipes, not bar content.
		// leave projected tabs in the measured flow.
		if (el.localName === 'slot') {
			seenTab = true;
			return;
		}
		const slot = el.getAttribute('slot');
		if (slot != null && assigned.get(el) !== slot) {
			return;
		}
		const want = seenTab ? 'stats' : 'tabs';
		if (slot !== want) {
			el.setAttribute('slot', want);
		}
		assigned.set(el, want);
	});
};

// keep menu copies in step with their tabs.
const sync = (tab: Element, clone: Element) => {
	(
		['active', 'disabled', 'hidden', 'href', 'name', 'badge', 'title'] as const
	).forEach((name) => reflect(clone, name, tab.getAttribute(name)));

	// disabled custom elements still need tab and aria sync.
	// do it here so later changes are picked up.
	// everything starts untabbable - rove() hands out the single tab stop
	// badge is attribute-only on purpose: a property set later emits no mutation,
	// so a copy taken from it would silently go stale
	reflect(clone, 'aria-disabled', tab.hasAttribute('disabled') ? 'true' : null);
	clone.setAttribute('tabindex', '-1');
};

// a tablist has one tab stop and the arrows move from there
// the active row if it is in the menu, otherwise the first one that works
const rove = (copies: readonly Copy[]) => {
	const enabled = copies.filter(([, c]) => !c.hasAttribute('disabled'));
	(enabled.find(([tab]) => tab.hasAttribute('active')) ??
		enabled[0])?.[1].setAttribute('tabindex', '0');
};

// copy the tab for the menu.
// keep the original in place so measurement stays stable.
// drop bar-only styling from the copy.
const copy = (tab: HTMLElement) => {
	const clone = tab.cloneNode(true) as HTMLElement;
	['variant', 'compact-width', 'overflowing', 'style'].forEach((name) =>
		clone.removeAttribute(name)
	);
	clone.setAttribute('menu', '');
	return clone;
};

// update copies in place.
// replacing them would steal focus from an open menu.
const refresh = (tab: HTMLElement, clone: HTMLElement) => {
	if (clone.innerHTML !== tab.innerHTML) {
		clone.replaceChildren(
			...[...tab.childNodes].map((node) => node.cloneNode(true))
		);
	}
	sync(tab, clone);
};

type Copy = readonly [HTMLElement, HTMLElement];

// replay the same click on the original.
// `tab.click()` would lose modifiers.
const like = (e: MouseEvent) =>
	new MouseEvent('click', {
		bubbles: true,
		composed: true,
		cancelable: true,
		button: e.button,
		buttons: e.buttons,
		detail: e.detail,
		altKey: e.altKey,
		ctrlKey: e.ctrlKey,
		metaKey: e.metaKey,
		shiftKey: e.shiftKey,
	});

const plain = (e: MouseEvent) =>
	e.button === 0 && !e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey;

// menu copies forward activation to their original tab.
const forward = (copies: readonly Copy[]) => (e: MouseEvent) => {
	const path = e.composedPath(),
		pair = copies.find(([, clone]) => path.includes(clone));

	if (!pair) {
		return;
	}

	const [tab, clone] = pair;
	// hide the copy click from delegated consumers.
	e.stopPropagation();

	// cancel copy navigation when the forwarded click is canceled.
	if (!tab.dispatchEvent(like(e))) {
		e.preventDefault();
	}

	// modified clicks do not select, so leave the menu alone.
	if (plain(e)) {
		closeMenu(clone);
	}
};

// only tabs are measured, marked and copied.
const tabsIn = (root: HTMLElement): HTMLElement[] =>
	(
		(root.querySelector('slot')?.assignedElements({ flatten: true }) ??
			[]) as HTMLElement[]
	).filter((el) => el.matches(TAB));

// what a copy has to follow
// title too: a relabel shifts no layout, so nothing else would notice
const WATCHED = {
	attributes: true,
	attributeFilter: [
		'active',
		'disabled',
		'hidden',
		'badge',
		'href',
		'name',
		'title',
	],
	childList: true,
	subtree: true,
	characterData: true,
};

const useRevision = (tabs: () => HTMLElement[], version: number) => {
	const [revision, setRevision] = useState(0);

	useEffect(() => {
		const observer = new MutationObserver(() => setRevision((r) => r + 1));
		tabs().forEach((tab) => observer.observe(tab, WATCHED));
		return () => observer.disconnect();
	}, [version]);

	return revision;
};

// cache menu copies while their tabs keep overflowing.
// prune anything the bar no longer owns.
const useCopies = (
	tabs: () => HTMLElement[],
	overflowing: Set<HTMLElement>,
	version: number
) => {
	const revision = useRevision(tabs, version),
		cache = useRef<Map<HTMLElement, HTMLElement>>();

	cache.current ??= new Map();

	return useMemo(() => {
		const cached = cache.current as Map<HTMLElement, HTMLElement>,
			copies = tabs()
				.filter((tab) => overflowing.has(tab))
				.map((tab) => {
					const clone = cached.get(tab) ?? copy(tab);
					cached.set(tab, clone);
					refresh(tab, clone);
					return [tab, clone] as Copy;
				}),
			live = new Set(copies.map(([tab]) => tab));

		cached.forEach((_, tab) => {
			if (!live.has(tab)) {
				cached.delete(tab);
			}
		});

		rove(copies);

		return copies;
	}, [overflowing, version, revision]);
};

/**
 * @element cosmoz-tabs-next
 * @attr {('brand'|'underline')} variant
 * @attr {boolean} compact-width
 * @attr {string} more-label - label of the overflow menu trigger, defaults to a translated `More`
 * @csspart items - clipping container holding the tabs
 * @csspart more - overflow menu
 * @csspart more-button - overflow menu trigger
 * @csspart menu - overflow menu popover
 */
const Tabs = (host: CosmozTabsNextElement) => {
	if (!host.getAttribute('variant')) {
		host.setAttribute('variant', 'brand');
	}

	const variant = host.getAttribute('variant');
	const compactWidth = host.hasAttribute('compact-width') ? '' : null;

	const items = useRef<HTMLElement>(),
		setItems = useCallback((el?: Element) => {
			items.current = el as HTMLElement | undefined;
		}, []),
		[version, setVersion] = useState(0);

	const tabs = useCallback(
			() => (items.current ? tabsIn(items.current) : []),
			[]
		),
		// remember marks so moved tabs can be cleaned up.
		marked = useRef<Set<HTMLElement>>();

	marked.current ??= new Set();

	const apply = () => {
		arrange(host);
		// include projected tabs too.
		// host queries miss them.
		new Set([...host.querySelectorAll<HTMLElement>(TAB), ...tabs()]).forEach(
			(tab) => {
				reflect(tab, 'variant', variant);
				reflect(tab, 'compact-width', compactWidth);
			}
		);
	};

	const onSlotChange = () => {
		apply();
		setVersion((v) => v + 1);
	};

	// rerun on renders and slot changes.
	useEffect(apply);

	const { overflowing } = useOverflow(items, tabsIn, [
		version,
		variant,
		compactWidth,
	]);

	useLayoutEffect(() => {
		const was = marked.current as Set<HTMLElement>,
			now = new Set<HTMLElement>();

		tabs().forEach((tab) => {
			const over = overflowing.has(tab);
			tab.toggleAttribute('overflowing', over);
			if (over) {
				now.add(tab);
			}
		});

		// remove our visibility mark from tabs that left.
		was.forEach((tab) => {
			if (!now.has(tab)) {
				tab.removeAttribute('overflowing');
			}
		});

		marked.current = now;
	}, [overflowing, version]);

	const copies = useCopies(tabs, overflowing, version);

	useCloseWhenEmpty(host, copies.length > 0);

	return html`
		<slot name="tabs"></slot>
		<div class="items" part="items" role="tablist" ${ref(setItems)}>
			<slot @slotchange=${onSlotChange}></slot>
		</div>
		${renderOverflowMenu({
			items: copies.map(([, clone]) => clone),
			overflows: copies.length > 0,
			active: copies.some(([tab]) => tab.hasAttribute('active')),
			// read the property so `.moreLabel` works too.
			label: host.moreLabel,
			onItemClick: forward(copies),
		})}
		<slot name="stats"></slot>
	`;
};

customElements.define(
	'cosmoz-tabs-next',
	component(Tabs, {
		observedAttributes: ['variant', 'compact-width', 'more-label'],
		styleSheets: [normalize, nextTabsStyles],
	})
);
