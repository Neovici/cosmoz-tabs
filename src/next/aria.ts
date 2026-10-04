/**
 * A tab reports its selection with aria-selected; the wording is read
 * from the item's own role (the copy mirrors roles too).
 */
export const selectedState = (item: Element) =>
	item.getAttribute('role') === 'radio' ? 'aria-checked' : 'aria-selected';

export const otherState = (item: Element) =>
	selectedState(item) === 'aria-checked' ? 'aria-selected' : 'aria-checked';
