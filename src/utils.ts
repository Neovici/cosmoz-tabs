export interface TabElement extends HTMLElement {
	disabled?: boolean;
	heading?: string;
	badge?: string;
	icon?: unknown;
	isSelected?: boolean;
	_active?: boolean;
	_fallbackFor?: TabElement;
}

export const isValid = (tab: TabElement): boolean =>
	!tab.hidden && !tab.disabled;

export const getName = (tab: Element): string | null =>
	tab.getAttribute('name');

const valid = (tabs: TabElement[]): TabElement | undefined =>
	tabs.find(isValid);

export const choose = (
	tabs: TabElement[],
	selected?: string | null,
): TabElement | undefined => {
	if (selected == null) {
		return valid(tabs);
	}
	const selectedTab = tabs.find((tab) => getName(tab) === selected);
	if (selectedTab == null) {
		return valid(tabs);
	}
	if (isValid(selectedTab)) {
		return selectedTab;
	}
	const fallback = valid(tabs);
	/* istanbul ignore else */
	if (fallback) {
		fallback._fallbackFor = selectedTab;
	}
	return fallback;
};

export const collect = (slot: HTMLSlotElement): TabElement[] =>
	slot.assignedElements().flatMap((el) => {
		if (el.matches('cosmoz-tab')) {
			return [el as TabElement];
		}
		if (el.matches('slot')) {
			return collect(el as HTMLSlotElement);
		}
		return [];
	});
