/**
 * A tab reports its selection with aria-selected, a radio with aria-checked.
 * Both the item and its container need the same answer, and neither may
 * observe `role` as a property: the platform reflects it already.
 */
export const selectedState = (item: Element) =>
	item.getAttribute('role') === 'radio' ? 'aria-checked' : 'aria-selected';

export const otherState = (item: Element) =>
	selectedState(item) === 'aria-checked' ? 'aria-selected' : 'aria-checked';
