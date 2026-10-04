import { normalize } from '@neovici/cosmoz-tokens/normalize';
import {
	component,
	html,
	useCallback,
	useEffect,
	useMemo,
	useRef,
	useState,
} from '@pionjs/pion';
import { ref } from 'lit-html/directives/ref.js';
import { otherState, selectedState } from './aria';
import { closeMenu, plain, renderOverflowMenu } from './overflow-menu';
import { nextTabsStyles, type TabsSize, type TabsVariant } from './styles';
import { useOverflow } from './use-overflow';

export interface CosmozTabsNextElement extends HTMLElement {
	variant?: TabsVariant;
	size?: TabsSize;
	compactWidth?: boolean;
	moreLabel?: string;
}

const TAB = 'cosmoz-tab-next';

const reflect = (tab: Element, name: string, value: string | null) => {
	if (tab.getAttribute(name) === value) {
		return;
	}
	if (value == null) {
		tab.removeAttribute(name);
	} else {
		tab.setAttribute(name, value);
	}
};

const sync = (tab: Element, clone: Element) => {
	(
		[
			'active',
			'disabled',
			'hidden',
			'href',
			'name',
			'badge',
			'title',
			'role',
		] as const
	).forEach((name) => reflect(clone, name, tab.getAttribute(name)));

	reflect(clone, otherState(clone), null);
	reflect(
		clone,
		selectedState(clone),
		clone.hasAttribute('active') ? 'true' : 'false',
	);

	reflect(clone, 'aria-disabled', tab.hasAttribute('disabled') ? 'true' : null);
	clone.setAttribute('tabindex', '-1');
};

const rove = (copies: readonly Copy[]) => {
	// rows are plain tab stops; the bar keeps its one stop on the
	// selected tab
	copies.forEach(([, clone]) => {
		if (!clone.hasAttribute('disabled') && !clone.hasAttribute('hidden')) {
			clone.setAttribute('tabindex', '0');
		}
	});
};

const copy = (tab: HTMLElement) => {
	const clone = tab.cloneNode(true) as HTMLElement;
	['variant', 'size', 'compact-width', 'overflowing', 'style'].forEach((name) =>
		clone.removeAttribute(name),
	);
	clone.setAttribute('menu', '');
	return clone;
};

const refresh = (tab: HTMLElement, clone: HTMLElement) => {
	if (clone.innerHTML !== tab.innerHTML) {
		clone.replaceChildren(
			...[...tab.childNodes].map((node) => node.cloneNode(true)),
		);
	}
	sync(tab, clone);
};

type Copy = readonly [HTMLElement, HTMLElement];

const like = (e: MouseEvent) =>
	// a MouseEvent is itself a MouseEventInit: the platform copies the
	// button/modifier fields in the dictionary conversion
	new MouseEvent('click', e);

const forward = (copies: readonly Copy[]) => (e: MouseEvent) => {
	const path = e.composedPath(),
		pair = copies.find(([, clone]) => path.includes(clone));

	if (!pair) {
		return;
	}

	const [tab, clone] = pair;
	e.stopPropagation();

	if (!tab.dispatchEvent(like(e))) {
		e.preventDefault();
	}

	if (plain(e)) {
		// a pick: the chosen tab takes focus - the clipped original is
		// `visibility: hidden` and unfocusable, so the bar's tab stop
		// takes it
		tab.focus();
		if (tab.hasAttribute('overflowing')) {
			const stop = (tab.getRootNode() as HTMLElement)?.querySelector?.(
				'[tabindex="0"]',
			) as HTMLElement | null;
			if (stop && stop !== tab) {
				stop.focus();
			}
		}
		closeMenu(clone);
	}
};

const shown = (tabs: HTMLElement[]) =>
	tabs.map((tab) => (tab.hidden ? 0 : 1)).join('');

const tabsIn = (root: HTMLElement): HTMLElement[] =>
	(
		(root.querySelector('slot')?.assignedElements({ flatten: true }) ??
			[]) as HTMLElement[]
	).filter((el) => el.matches(TAB));

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
		'role',
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

const useCopies = (
	tabs: () => HTMLElement[],
	overflowing: Set<HTMLElement>,
	version: number,
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
 * The group role is authored on the host and stays there; the default
 * (`tablist`) is written so readers see it. `role` is platform-reflected
 * and not in `observedAttributes`: an authored change re-renders through
 * the attribute→property path only for pion's own reflective props, so
 * later authored changes are read on the render other observed
 * attributes (or a slot change) trigger.
 */
const settings = (host: HTMLElement) => {
	if (!host.getAttribute('role')) {
		host.setAttribute('role', 'tablist');
	}
	const role =
		host.getAttribute('role') === 'radiogroup'
			? ('radiogroup' as const)
			: ('tablist' as const);
	return {
		variant: host.getAttribute('variant'),
		size: host.getAttribute('size'),
		compactWidth: host.hasAttribute('compact-width') ? '' : null,
		role,
		itemRole: role === 'radiogroup' ? 'radio' : 'tab',
	};
};

const stamp = (
	tab: Element,
	{ variant, size, compactWidth, itemRole }: ReturnType<typeof settings>,
) => {
	reflect(tab, 'variant', variant);
	reflect(tab, 'size', size);
	reflect(tab, 'compact-width', compactWidth);
	reflect(tab, 'role', itemRole);
	// roving tabindex: the selected tab is the bar's one tab stop; the
	// container owns the attribute like it owns role/variant
	reflect(tab, 'tabindex', tab.hasAttribute('active') ? '0' : '-1');
	reflect(tab, otherState(tab), null);
	reflect(
		tab,
		selectedState(tab),
		tab.hasAttribute('active') ? 'true' : 'false',
	);
};

/**
 * @element cosmoz-tabs-next
 * @attr {('brand'|'underline'|'segmented')} variant
 * @attr {('sm')} size - omit for the default size; sm trims the item's box on
 * both axes, and thins the segmented track's ring to match
 * @attr {boolean} compact-width
 * @attr {('tablist'|'radiogroup')} role - tablist by default; a segmented
 * control that picks a value rather than a view is a radiogroup: set it here
 * and each item becomes a radio, reporting aria-checked instead of
 * aria-selected
 * @attr {string} more-label - label of the overflow menu trigger, defaults to a translated `More`
 * @csspart items - the flex track holding the tabs (wraps when they do not fit)
 * @csspart more - overflow menu
 * @csspart more-button - overflow menu trigger
 * @csspart menu - overflow menu popover
 * @slot - the `cosmoz-tab-next` headers
 * @slot tabs - extra content at the start of the bar (assign it explicitly)
 * @slot stats - extra content at the end of the bar (assign it explicitly)
 */
const Tabs = (host: CosmozTabsNextElement) => {
	if (!host.getAttribute('variant')) {
		host.setAttribute('variant', 'brand');
	}

	const given = settings(host),
		{ role } = given;

	const items = useRef<HTMLElement>(),
		setItems = useCallback((el?: Element) => {
			items.current = el as HTMLElement | undefined;
		}, []),
		[version, setVersion] = useState(0);

	const tabs = useCallback(
		() => (items.current ? tabsIn(items.current) : []),
		[],
	);

	const apply = () => {
		new Set([...host.querySelectorAll<HTMLElement>(TAB), ...tabs()]).forEach(
			(tab) => stamp(tab, given),
		);
	};

	const onSlotChange = () => {
		apply();
		setVersion((v) => v + 1);
	};

	useEffect(apply);

	const overflowing = useOverflow(items, tabs, [
		tabs()
			.map((tab) => tab.getAttribute('name'))
			.join(','),
		shown(tabs()),
	]);

	const copies = useCopies(tabs, overflowing, version);

	return html`
		<slot name="tabs"></slot>
		<div class="items" part="items" ${ref(setItems)}>
			<slot @slotchange=${onSlotChange}></slot>
		</div>
		${renderOverflowMenu({
			items: copies.map(([, clone]) => clone),
			overflows: copies.length > 0,
			active: copies.some(([tab]) => tab.hasAttribute('active') && !tab.hidden),
			label: host.moreLabel,
			role,
			onItemClick: forward(copies),
		})}
		<slot name="stats"></slot>
	`;
};

customElements.define(
	'cosmoz-tabs-next',
	component(Tabs, {
		observedAttributes: ['variant', 'size', 'compact-width', 'more-label'],
		styleSheets: [normalize, nextTabsStyles],
	}),
);
