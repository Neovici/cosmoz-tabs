import { html } from 'lit-html';

export const box = (root: HTMLElement) =>
	root.querySelector('.box') as HTMLElement;

/** a few frames, enough for the observer to deliver and the bar to re-render */
export const settle = async (frames = 4) => {
	for (let i = 0; i < frames; i++) {
		await new Promise(requestAnimationFrame);
	}
};

export const legacy = (root: HTMLElement) =>
		root.querySelector('cosmoz-tabs') as HTMLElement,
	next = (root: HTMLElement) =>
		root.querySelector('cosmoz-tabs-next') as HTMLElement;

export const sr = (el: HTMLElement) => el.shadowRoot as ShadowRoot;

export const clipped = (el: HTMLElement) =>
	sr(el).querySelectorAll('.items > .tab[overflowing]');
export const rows = (el: HTMLElement) =>
	sr(el).querySelectorAll('.menu .menu-item');
export const more = (el: HTMLElement) =>
	sr(el).querySelector('.more') as HTMLElement;
export const trigger = (el: HTMLElement) =>
	sr(el).querySelector('.more-button') as HTMLElement;

/**
 * Every tab has to be reachable: either laid out fully inside the clipping
 * container, or listed in the overflow menu. Counting the bar geometrically
 * rather than by the `overflowing` attribute is what makes this meaningful — a
 * misclassified tab is clipped by the container *and* missing from the menu,
 * which no attribute reports.
 */
export const reachable = (el: HTMLElement) => {
	const bounds = (
		sr(el).querySelector('.items') as HTMLElement
	).getBoundingClientRect();
	const inBar = [
		...sr(el).querySelectorAll<HTMLElement>('.items > .tab'),
	].filter((tab) => {
		const r = tab.getBoundingClientRect();
		return (
			r.width > 0 && r.left >= bounds.left - 1 && r.right <= bounds.right + 1
		);
	});
	return inBar.length + rows(el).length;
};

export const fixture = (width: string, extra = html``) => html`
	<div class="box" style="width: ${width}; overflow: hidden;">
		<cosmoz-tabs variant="underline">
			<cosmoz-tab name="overview" heading="Overview"></cosmoz-tab>
			<cosmoz-tab name="rows" heading="Invoice rows"></cosmoz-tab>
			<cosmoz-tab name="accounting" heading="Accounting"></cosmoz-tab>
			<cosmoz-tab name="history" heading="History"></cosmoz-tab>
			<cosmoz-tab name="attachments" heading="Attachments"></cosmoz-tab>
			${extra}
		</cosmoz-tabs>
	</div>
`;

export const nextFixture = (width: string, extra = html``) => html`
	<div class="box" style="width: ${width}; overflow: hidden;">
		<cosmoz-tabs-next variant="underline">
			${extra}
			<cosmoz-tab-next name="overview" active>Overview</cosmoz-tab-next>
			<cosmoz-tab-next name="rows" badge="5">Invoice rows</cosmoz-tab-next>
			<cosmoz-tab-next name="accounting">Accounting</cosmoz-tab-next>
			<cosmoz-tab-next name="history">History</cosmoz-tab-next>
			<cosmoz-tab-next name="attachments">Attachments</cosmoz-tab-next>
		</cosmoz-tabs-next>
	</div>
`;
