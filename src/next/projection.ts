import { otherState, selectedState } from './aria';
import { closeMenu, plain } from './overflow-menu';

/** The pair a projection carries: the original tab and its menu copy. */
export type CopyPair = readonly [HTMLElement, HTMLElement];

/** Reflects only on change: the stamped attrs live in the consumer's DOM. */
export const reflect = (tab: Element, name: string, value: string | null) => {
	if (tab.getAttribute(name) === value) {
		return;
	}
	if (value == null) {
		tab.removeAttribute(name);
	} else {
		tab.setAttribute(name, value);
	}
};

/**
 * The copy mirrors its original's observable face: the plain attributes
 * the render carries, the aria state its own role's wording (a radio
 * copy reports aria-checked), and an explicit -1 until the projection's
 * tabStops marks the stop.
 */
export const sync = (tab: Element, clone: Element) => {
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

/** marks the enabled rows as tab stops; the bar keeps its one stop on the selected tab */
export const tabStops = (copies: readonly CopyPair[]) => {
	copies.forEach(([, clone]) => {
		if (!clone.hasAttribute('disabled') && !clone.hasAttribute('hidden')) {
			clone.setAttribute('tabindex', '0');
		}
	});
};

/** the projection: a clone without the bar-side attributes, wearing the menu mark */
export const copyOf = (tab: HTMLElement) => {
	const clone = tab.cloneNode(true) as HTMLElement;
	['variant', 'size', 'compact-width', 'overflowing', 'style'].forEach((name) =>
		clone.removeAttribute(name),
	);
	clone.setAttribute('menu', '');
	return clone;
};

/** keeps a copy's content in step with its original's */
export const refresh = (tab: HTMLElement, clone: HTMLElement) => {
	if (clone.innerHTML !== tab.innerHTML) {
		clone.replaceChildren(
			...[...tab.childNodes].map((node) => node.cloneNode(true)),
		);
	}
	sync(tab, clone);
};

/** a MouseEvent is itself a MouseEventInit: the platform copies the
    button/modifier fields in the dictionary conversion */
export const copyClick = (e: MouseEvent) => new MouseEvent('click', e);

/** re-targets a menu-row click onto its original; plain picks close the menu */
export const forward = (copies: readonly CopyPair[]) => (e: MouseEvent) => {
	const path = e.composedPath(),
		pair = copies.find(([, clone]) => path.includes(clone));

	if (!pair) {
		return;
	}

	const [tab, clone] = pair;
	e.stopPropagation();

	if (!tab.dispatchEvent(copyClick(e))) {
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
