import { normalize } from '@neovici/cosmoz-tokens/normalize';
import { assignedRef } from '@neovici/cosmoz-utils/directives/assigned-ref';
import { forwardAttributes } from '@neovici/cosmoz-utils/directives/forward-attributes';
import {
	component,
	html,
	useCallback,
	useEffect,
	useMemo,
	useRef,
	useState,
} from '@pionjs/pion';
import { overflow } from './overflow';
import { renderOverflowMenu } from './overflow-menu';
import {
	copyOf,
	forward,
	refresh,
	tabStops,
	type CopyPair,
} from './projection';
import { nextTabsStyles, type TabsSize, type TabsVariant } from './styles';

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

const WATCHED = {
	attributes: true,
	// not role: the group owns the wording and stamps it per render; an
	// observer would feed on its own same-value writes
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
 * The host's policy and the projection's map: the family is a tablist
 * (the default written at connect via `TabsNextBase`), value pickers
 * build on the input's own radiogroup (`cosmoz-toggle-group`), and every
 * bar member carries the group's variant/size and the item's face.
 *
 * The map is projected by `forwardAttributes` onto the assigned members;
 * its functions are evaluated per element at projection time, so the
 * roving tabindex and the selection word with the element's own `active`.
 */
const project = (host: HTMLElement) => {
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
		'compact-width': host.hasAttribute('compact-width') ? '' : null,
		role: 'tab',
		tabindex: (el: Element) => (el.hasAttribute('active') ? '0' : '-1'),
		'aria-selected': (el: Element) =>
			el.hasAttribute('active') ? 'true' : 'false',
	};
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

	const [version, setVersion] = useState(0),
		[overflowing, setOverflowing] = useState<Set<HTMLElement>>(() => new Set()),
		assigned = useRef<Element[]>(),
		tabs = useCallback(
			() =>
				(assigned.current ?? []).filter((el) =>
					el.matches(TAB),
				) as HTMLElement[],
			[],
		),
		onSlotChange = () => setVersion((v) => v + 1);

	const copies = useCopies(tabs, overflowing, version);

	return html`
		<slot name="tabs"></slot>
		<slot
			${assignedRef(assigned)}
			${forwardAttributes(project(host))}
			${overflow({
				host,
				is: (el) => el.matches(TAB),
				onOverflow: setOverflowing,
			})}
			@slotchange=${onSlotChange}
			style="display: contents"
		></slot>
		${renderOverflowMenu({
			items: copies.map(([, clone]) => clone),
			overflows: copies.length > 0,
			active: copies.some(([tab]) => tab.hasAttribute('active') && !tab.hidden),
			label: host.moreLabel,
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
