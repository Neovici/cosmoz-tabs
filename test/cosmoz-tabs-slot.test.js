import { assert, html, fixture, nextFrame } from '@open-wc/testing';
import { component } from 'haunted';

import '../src/cosmoz-tabs.js';

suiteSetup(() => {
	if (customElements.get('slot-test')) {
		return;
	}
	customElements.define(
		'slot-test',
		component(
			() => html`
				<cosmoz-tabs>
					<cosmoz-tab name="tab0" heading="Tab0">1</cosmoz-tab>
					<slot></slot>
				</cosmoz-tabs>
			`
		)
	);
});

suite('cosmoz-tabs slot', () => {
	test('collects cosmoz-tabs from slot', async () => {
		const el = await fixture(html`
				<slot-test>
					<cosmoz-tab name="tab1">2</cosmoz-tab>
					<span name="notatab2">3</span>
				</slot-test>
			`),
			tabs = el.shadowRoot.querySelector('cosmoz-tabs');
		await nextFrame();
		await nextFrame();
		tabs.selected = 'tab1';
		await nextFrame();
		assert.equal(
			el.querySelector('cosmoz-tab').getAttribute('is-selected'),
			''
		);
	});
});
