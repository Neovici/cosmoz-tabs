import { html } from 'lit-html';

export const box = (root: HTMLElement) =>
	root.querySelector('.box') as HTMLElement;

/** wait a few frames for observer reports and rerenders. */
export const settle = async (frames = 4) => {
	for (let i = 0; i < frames; i++) {
		await new Promise(requestAnimationFrame);
	}
};

/**
 * Observer deliveries (IO) run at frame boundaries; an idle headless
 * runner produces none - rAF itself is compositor-fed there. Poke the
 * compositor with a zero-second animation (a BeginFrame source) and
 * the frames - and with them the intersection deliveries - arrive.
 */
export const pump = async (frames = 4) => {
	const poked = document.body.animate([], { duration: 1 });
	for (let i = 0; i < frames + 2; i++) {
		await new Promise(requestAnimationFrame);
	}
	poked.cancel();
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

/**
 * Fixed tab widths: the overflow set is not font-load dependent, so the
 * rows the stories assert on are deterministic.
 */
export const nextFixture = (width: string, extra = html``) => html`
	<div class="box" style="width: ${width}; overflow: hidden;">
		<cosmoz-tabs-next variant="underline">
			${extra}
			<cosmoz-tab-next
				name="overview"
				active
				style="width: 90px; flex: 0 0 90px"
				>Overview</cosmoz-tab-next
			>
			<cosmoz-tab-next
				name="rows"
				badge="5"
				style="width: 110px; flex: 0 0 110px"
				>Invoice rows</cosmoz-tab-next
			>
			<cosmoz-tab-next name="accounting" style="width: 100px; flex: 0 0 100px"
				>Accounting</cosmoz-tab-next
			>
			<cosmoz-tab-next name="history" style="width: 80px; flex: 0 0 80px"
				>History</cosmoz-tab-next
			>
			<cosmoz-tab-next name="attachments" style="width: 110px; flex: 0 0 110px"
				>Attachments</cosmoz-tab-next
			>
		</cosmoz-tabs-next>
	</div>
`;
