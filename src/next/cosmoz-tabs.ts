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
	DEFAULT_MORE_LABEL,
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

// what we assigned, so that re-running can move an element the DOM order no
// longer agrees with - while never touching a slot the consumer chose
const assigned = new WeakMap<Element, string>();

const arrange = (host: HTMLElement) => {
	let seenTab = false;
	[...host.children].forEach((el) => {
		if (el.matches(TAB)) {
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

// what a menu copy has to keep in step with its tab
const sync = (tab: Element, clone: Element) => {
	(['active', 'disabled', 'hidden', 'href', 'name', 'badge'] as const).forEach(
		(name) => reflect(clone, name, tab.getAttribute(name))
	);

	const badge = (tab as { badge?: string }).badge;
	if (badge != null && !tab.hasAttribute('badge')) {
		(clone as { badge?: string }).badge = badge;
	}
};

// an overflowing tab cannot be in two places at once, so the menu gets a copy
// the copy forwards activation to the original
const copy = (tab: HTMLElement) => {
	const clone = tab.cloneNode(true) as HTMLElement;
	['variant', 'compact-width', 'overflowing', 'style'].forEach((name) =>
		clone.removeAttribute(name)
	);
	clone.setAttribute('menu', '');
	clone.setAttribute('tabindex', '0');
	sync(tab, clone);
	clone.addEventListener('click', (e) => {
		e.stopPropagation();
		tab.click();
		closeMenu(clone);
	});
	return [tab, clone] as const;
};

const WATCHED = {
	attributes: true,
	attributeFilter: ['active', 'disabled', 'hidden', 'badge', 'href', 'name'],
	childList: true,
	subtree: true,
	characterData: true,
};

// the menu copies of the overflowing tabs, rebuilt whenever an original changes
const useCopies = (
	tabs: () => HTMLElement[],
	overflowing: Set<HTMLElement>,
	version: number
) => {
	const [revision, setRevision] = useState(0);

	useEffect(() => {
		const observer = new MutationObserver(() => setRevision((r) => r + 1));
		tabs().forEach((tab) => observer.observe(tab, WATCHED));
		return () => observer.disconnect();
	}, [version]);

	return useMemo(
		() =>
			tabs()
				.filter((tab) => overflowing.has(tab))
				.map(copy),
		[overflowing, version, revision]
	);
};

/**
 * @element cosmoz-tabs-next
 * @attr {('brand'|'underline')} variant
 * @attr {boolean} compact-width
 * @attr {string} more-label - label of the overflow menu trigger, defaults to `More`
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

	// only tabs are measured, marked and copied - never the heading, stats or
	// pagination a consumer may have slotted alongside them
	const tabs = useCallback(
		() =>
			(
				(items.current
					?.querySelector('slot')
					?.assignedElements({ flatten: true }) ?? []) as HTMLElement[]
			).filter((el) => el.matches(TAB)),
		[]
	);

	const apply = () => {
		arrange(host);
		host.querySelectorAll(TAB).forEach((tab) => {
			reflect(tab, 'variant', variant);
			reflect(tab, 'compact-width', compactWidth);
		});
	};

	const onSlotChange = () => {
		apply();
		setVersion((v) => v + 1);
	};

	// re-applied on every render
	// variant is an observed attribute and on slot changes
	useEffect(apply);

	const { overflowing } = useOverflow(() => items.current, tabs, [
		version,
		variant,
		compactWidth,
	]);

	useLayoutEffect(
		() =>
			tabs().forEach((tab) =>
				tab.toggleAttribute('overflowing', overflowing.has(tab))
			),
		[overflowing, version]
	);

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
			label: host.getAttribute('more-label') ?? DEFAULT_MORE_LABEL,
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
