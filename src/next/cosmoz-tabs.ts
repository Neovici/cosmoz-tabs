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
import { renderOverflowMenu } from './overflow-menu';
import {
	copyOf,
	forward,
	reflect,
	refresh,
	tabStops,
	type CopyPair,
} from './projection';
import { nextTabsStyles, type TabsSize, type TabsVariant } from './styles';
import { useOverflow } from './use-overflow';

export interface CosmozTabsNextElement extends HTMLElement {
	variant?: TabsVariant;
	size?: TabsSize;
	compactWidth?: boolean;
	moreLabel?: string;
}

/**
 * The host is the widget: the group role is authored and carried here
 * (as the slideout's host is its dialog), settled at connect.
 */
export class TabsNextBase extends HTMLElement {
	connectedCallback() {
		if (!this.hasAttribute('role')) {
			this.setAttribute('role', 'tablist');
		}
	}
}

const TAB = 'cosmoz-tab-next';
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
					const clone = cached.get(tab) ?? copyOf(tab);
					cached.set(tab, clone);
					refresh(tab, clone);
					return [tab, clone] as CopyPair;
				}),
			live = new Set(copies.map(([tab]) => tab));

		cached.forEach((_, tab) => {
			if (!live.has(tab)) {
				cached.delete(tab);
			}
		});

		tabStops(copies);

		return copies;
	}, [overflowing, version, revision]);
};

/**
 * The family is a tablist (the default written at connect via
 * `TabsNextBase`); the host's role is owned here. Value pickers build
 * on the input's own radiogroup (`cosmoz-toggle-group`); authored
 * `radiogroup` overrides are reported.
 */
const settings = (host: HTMLElement) => {
	const authored = host.getAttribute('role');
	if (authored === 'radiogroup') {
		host.setAttribute('role', 'tablist');
		host.dispatchEvent(
			new CustomEvent('deprecation-warning', {
				detail: {
					message:
						'role=radiogroup is no longer supported: a value picker belongs in cosmoz-toggle-group (@neovici/cosmoz-input); the items are tabs.',
				},
			}),
		);
	}
	return {
		variant: host.getAttribute('variant'),
		size: host.getAttribute('size'),
		compactWidth: host.hasAttribute('compact-width') ? '' : null,
		role: 'tablist' as const,
		itemRole: 'tab' as const,
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
 * @attr {string} role - a tablist; an authored `radiogroup` is
 * overridden (with a `deprecation-warning` event) - a value picker
 * belongs in `cosmoz-toggle-group` (@neovici/cosmoz-input)
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
		baseElement: TabsNextBase,
		observedAttributes: ['variant', 'size', 'compact-width', 'more-label'],
		styleSheets: [normalize, nextTabsStyles],
	}),
);
