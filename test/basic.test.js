import {
	assert, html, fixture, nextFrame
} from '@open-wc/testing';

import '../cosmoz-tabs.js';

suite('basic', () => {
	let tabs;

	setup(async () => {
		tabs = await fixture(html`
			<cosmoz-tabs>
				<cosmoz-tab name="tab0" heading="Tab0">1</cosmoz-tab>
				<cosmoz-tab name="tab1" heading="Tab1" badge="2">2</cosmoz-tab>
				<cosmoz-tab name="tab2" hidden>3</cosmoz-tab>
				<cosmoz-tab name="tab3" heading="Tab3" disabled>3</cosmoz-tab>
			</cosmoz-tabs>
		`);
	});

	test('instantiates a cosmoz-tabs', () => {
		assert.equal(tabs.tagName, 'COSMOZ-TABS');
	});

	test('selects an item', async () => {
		assert.equal(tabs.selected, undefined);
		assert.equal(tabs.querySelector('[is-selected]').getAttribute('name'), 'tab0');

		tabs.selected = 'tab1';
		await nextFrame();
		assert.equal(tabs.querySelector('[is-selected]').getAttribute('name'), 'tab1');
	});

	test('contains a tablist with the same number of tabs', () => {
		assert.lengthOf(tabs.shadowRoot.querySelectorAll('[role=tab]'), tabs.querySelectorAll('cosmoz-tab').length);
	});

	test('sets heading inside tab', () => {
		assert.deepEqual(
			Array.from(tabs.shadowRoot.querySelectorAll('[role=tab]>span')).map(e => e.innerText),
			Array.from(tabs.querySelectorAll('cosmoz-tab')).map(t => t.heading ?? '')
		);
	});

	test('sets badge inside tab', () => {
		assert.lengthOf(tabs.shadowRoot.querySelectorAll('.badge'), 1);
		assert.equal(tabs.shadowRoot.querySelectorAll('[role=tab]')[1].querySelector('.badge').innerText, '2');
	});

	test('sets hidden on tab', () => {
		const _tabs = tabs.shadowRoot.querySelectorAll('[role=tab]'),
			tabVisible = _tabs[0],
			tabHidden = _tabs[2];

		assert.isNull(tabVisible.getAttribute('hidden'));
		assert.notEqual(window.getComputedStyle(tabVisible).getPropertyValue('display'), 'none');

		assert.equal(tabHidden.getAttribute('hidden'), '');
		assert.equal(window.getComputedStyle(tabHidden).getPropertyValue('display'), 'none');
	});

	test('sets disabled on tab', () => {
		const _tabs = tabs.shadowRoot.querySelectorAll('[role=tab]'),
			tabNormal = _tabs[0],
			tabDisabled = _tabs[3];

		assert.isNull(tabNormal.getAttribute('disabled'));
		assert.equal(tabDisabled.getAttribute('disabled'), '');
	});

	test('setting hidden on cosmoz-tab updates tab', async () => {
		tabs.querySelectorAll('cosmoz-tab')[1].toggleAttribute('hidden', true);
		await nextFrame();
		assert.equal(tabs.shadowRoot.querySelectorAll('[role=tab]')[1].getAttribute('hidden'), '');
	});

	test('setting disabled on cosmoz-tab updates tab', async () => {
		tabs.querySelectorAll('cosmoz-tab')[1].toggleAttribute('disabled', true);
		await nextFrame();
		assert.equal(tabs.shadowRoot.querySelectorAll('[role=tab]')[1].getAttribute('disabled'), '');
	});

	test('setting heading on cosmoz-tab updates paper-tab', async () => {
		tabs.querySelectorAll('cosmoz-tab')[1].setAttribute('heading', 'Another tab');
		await nextFrame();
		assert.equal(tabs.shadowRoot.querySelectorAll('[role=tab]')[1].querySelector('span').innerText, 'Another tab');

	});

	test('setting badge on cosmoz-tab updates paper-tab', async () => {
		tabs.querySelectorAll('cosmoz-tab')[0].setAttribute('badge', 'Inbox');
		await nextFrame();
		assert.equal(tabs.shadowRoot.querySelectorAll('[role=tab]')[0].querySelector('.badge').innerText, 'Inbox');
	});
});
