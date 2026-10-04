import { html } from 'lit-html';

export const box = (root: HTMLElement) =>
	root.querySelector('.box') as HTMLElement;

/** wait a few frames for observer reports and rerenders. */
export const settle = async (frames = 4) => {
	for (let i = 0; i < frames; i++) {
		await new Promise(requestAnimationFrame);
	}
};

export const next = (root: HTMLElement) =>
	root.querySelector('cosmoz-tabs-next') as HTMLElement;

export const sr = (el: HTMLElement) => el.shadowRoot as ShadowRoot;

/**
 * force gc and count surviving refs.
 * chromium gets gc from the vitest config.
 */
export const retained = async (refs: WeakRef<object>[]) => {
	const gc = (window as unknown as { gc?: () => void }).gc;

	if (!gc) {
		throw new Error(
			'window.gc is unavailable: run with --js-flags=--expose-gc',
		);
	}

	/** use real turns so recent microtasks stop holding refs. */
	for (let i = 0; i < 5; i++) {
		gc();
		await new Promise((r) => setTimeout(r, 30));
	}

	return refs.filter((ref) => ref.deref()).length;
};

export const more = (el: HTMLElement) =>
	sr(el).querySelector('.more') as HTMLElement;
export const trigger = (el: HTMLElement) =>
	sr(el).querySelector('.more-button') as HTMLElement;

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
