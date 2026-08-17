import { html } from "lit-html";

export const box = (root: HTMLElement) =>
	root.querySelector(".box") as HTMLElement;

/** wait a few frames for observer reports and rerenders. */
export const settle = async (frames = 4) => {
	for (let i = 0; i < frames; i++) {
		await new Promise(requestAnimationFrame);
	}
};

export const legacy = (root: HTMLElement) =>
		root.querySelector("cosmoz-tabs") as HTMLElement,
	next = (root: HTMLElement) =>
		root.querySelector("cosmoz-tabs-next") as HTMLElement;

export const sr = (el: HTMLElement) => el.shadowRoot as ShadowRoot;

/**
 * force gc and count surviving refs.
 * chromium gets gc from the vitest config.
 */
export const retained = async (refs: WeakRef<object>[]) => {
	const gc = (window as unknown as { gc?: () => void }).gc;

	if (!gc) {
		throw new Error(
			"window.gc is unavailable: run with --js-flags=--expose-gc"
		);
	}

	/** use real turns so recent microtasks stop holding refs. */
	for (let i = 0; i < 5; i++) {
		gc();
		await new Promise((r) => setTimeout(r, 30));
	}

	return refs.filter((ref) => ref.deref()).length;
};

export const clipped = (el: HTMLElement) =>
	sr(el).querySelectorAll(".items > .tab[overflowing]");
export const rows = (el: HTMLElement) =>
	sr(el).querySelectorAll(".menu .menu-item");
export const more = (el: HTMLElement) =>
	sr(el).querySelector(".more") as HTMLElement;
export const trigger = (el: HTMLElement) =>
	sr(el).querySelector(".more-button") as HTMLElement;

/**
 * count visible geometry, not component state.
 * this catches clipped tabs missing from the menu.
 */
export const reachable = (el: HTMLElement) => {
	const bounds = (
		sr(el).querySelector(".items") as HTMLElement
	).getBoundingClientRect();
	const inBar = [
		...sr(el).querySelectorAll<HTMLElement>(".items > .tab"),
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
