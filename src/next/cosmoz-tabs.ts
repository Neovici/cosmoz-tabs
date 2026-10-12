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
	reflect,
	refresh,
	shown,
	stopOf,
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
			members = tabs(),
			copies = members
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

		// the bar's own stop: the selection's reachable representative -
		// the walk's home base even when the selection hides in the menu
		const stop = stopOf(members);
		members.forEach((member) =>
			reflect(member, 'tabindex', member === stop ? '0' : '-1'),
		);

		return copies;
	}, [overflowing, version, revision]);
};

/**
 * The frame's policy and the projection's map: the group role is
 * carried by the track's group (only the tabs inside it), value
 * pickers build on the input's own radiogroup (`cosmoz-toggle-group`),
 * and every bar member carries the group's variant/size and the item's
 * face.
 *
 * The map is projected by `forwardAttributes` onto the assigned members;
 * its functions are evaluated per element at projection time, so the
 * selection and the disabled word follow the element's own attributes.
 * The roving tabindex is the stop pass's (the container's `stopOf`):
 * the bar's stop is reachable even when the selection hides in the menu.
 */
const project = (host: HTMLElement) => {
	const authored = host.getAttribute('role');
	if (authored === 'radiogroup') {
		host.removeAttribute('role');
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
		'aria-selected': (el: Element) =>
			el.hasAttribute('active') ? 'true' : 'false',
		'aria-disabled': (el: Element) =>
			el.hasAttribute('disabled') ? 'true' : null,
	};
};

/** The keys the bar's walk speaks; the menu's keys are the dropdown's. */
const ROVED = new Set(['ArrowLeft', 'ArrowRight', 'Home', 'End']);

/**
 * The walk's target: the shown member a step from `from`, clamped at the
 * band's edges (no wrap — the edges are Home/End's; the overflowed
 * members' view is the menu, reached through its own keys).
 */
const rove = (
	members: readonly HTMLElement[],
	from: HTMLElement,
	key: string,
): HTMLElement | null => {
	const band = members.filter(shown);
	if (band.length === 0) {
		return null;
	}
	if (key === 'Home') {
		return band[0];
	}
	if (key === 'End') {
		return band[band.length - 1];
	}
	const at = band.indexOf(from);
	return at < 0
		? null
		: band[
				Math.max(
					0,
					Math.min(band.length - 1, at + (key === 'ArrowLeft' ? -1 : 1)),
				)
			];
};

/**
 * @element cosmoz-tabs-next
 * @attr {('brand'|'underline'|'segmented')} variant
 * @attr {('sm')} size - omit for the default size; sm trims the item's box on
 * both axes, and thins the segmented track's ring to match
 * @attr {boolean} compact-width
 * @attr {string} role - the family is a tablist: the role rides the
 * rendered group around the track's members; an authored `radiogroup` is
 * removed (with a `deprecation-warning` event) - a value picker
 * belongs in `cosmoz-toggle-group` (@neovici/cosmoz-input)
 * @attr {string} more-label - label of the overflow menu trigger, defaults to a translated `More`
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

	// The container roves, the item picks: the walk focuses a shown
	// member and its own click picks it (selection follows focus, one
	// pick path for pointer, Enter/Space and arrows). An overflowed view
	// stays out — the menu's walk is the dropdown's business.
	useEffect(() => {
		const onKey = (e: KeyboardEvent) => {
			if (!ROVED.has(e.key)) {
				return;
			}
			const members = tabs(),
				target = e.target as HTMLElement;
			if (!members.includes(target)) {
				return;
			}
			// the walk claims the key: Home/End would page otherwise
			e.preventDefault();
			const to = rove(members, target, e.key);
			if (!to || to === target) {
				return;
			}
			to.click();
			to.focus();
		};
		host.addEventListener('keydown', onKey);
		return () => host.removeEventListener('keydown', onKey);
	}, []);

	return html`
		<slot name="tabs"></slot>
		<div class="group" role="tablist">
			<slot
				${assignedRef(assigned)}
				${forwardAttributes(project(host))}
				${overflow({
					is: (el) => el.matches(TAB),
					onOverflow: setOverflowing,
				})}
				@slotchange=${onSlotChange}
			></slot>
		</div>
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
		observedAttributes: ['variant', 'size', 'compact-width', 'more-label'],
		styleSheets: [normalize, nextTabsStyles],
	}),
);
