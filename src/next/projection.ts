import { closeMenu, plain } from './overflow-menu';

/** The pair a projection carries: the original tab and its menu copy. */
export type CopyPair = readonly [HTMLElement, HTMLElement];

/** The members the band hands focus to: enabled, and showing in the band. */
export const shown = (member: HTMLElement) =>
	!member.hasAttribute('disabled') &&
	!member.hasAttribute('hidden') &&
	!member.hasAttribute('overflowing');

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
 * the render carries, the aria-selected state, and an explicit -1 until
 * the projection's tabStops marks the stop.
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

	reflect(
		clone,
		'aria-selected',
		clone.hasAttribute('active') ? 'true' : 'false',
	);

	reflect(clone, 'aria-disabled', tab.hasAttribute('disabled') ? 'true' : null);
	clone.setAttribute('tabindex', '-1');
};

/** marks the shown rows as tab stops; the bar keeps its one stop on the selection */
export const tabStops = (copies: readonly CopyPair[]) => {
	copies.forEach(([, clone]) => {
		if (shown(clone)) {
			clone.setAttribute('tabindex', '0');
		}
	});
};

/**
 * The bar's one stop: the selection when it shows in the band. Where
 * the selection hides in the menu, the shown member before it keeps
 * the stop - the bar stays reachable, and the walk has a home base.
 */
export const stopOf = (members: readonly HTMLElement[]): HTMLElement | null => {
	const active = members.find((member) => member.hasAttribute('active'));
	if (active == null) {
		return null;
	}
	if (shown(active)) {
		return active;
	}
	const before = members.slice(0, members.indexOf(active));
	return [...before].reverse().find(shown) ?? null;
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
		// a pick: the menu closes; the dropdown returns focus to the
		// trigger, and the container's stop keeps the bar reachable
		closeMenu(clone);
	}
};
