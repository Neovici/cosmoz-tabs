import {
	assert, html, fixture, nextFrame
} from '@open-wc/testing';
import { spy } from 'sinon';

import '../cosmoz-tabs.js';

suite('cosmoz-tabs', () => {
	let tabs;

	setup(async () => {
		tabs = await fixture(html`
			<cosmoz-tabs>
				<cosmoz-tab name="tab0" heading="Tab0">1</cosmoz-tab>
				<cosmoz-tab name="tab1" heading="Tab1" badge="2" icon="radio-button-unchecked" selected-icon="radio-button-checked" icon-color="red">2</cosmoz-tab>
				<cosmoz-tab name="tab2" hidden>3</cosmoz-tab>
				<cosmoz-tab name="tab3" heading="Tab3" disabled icon="warning">3</cosmoz-tab>
			</cosmoz-tabs>
		`);
	});

	test('instantiates a cosmoz-tabs', () => {
		assert.equal(tabs.tagName, 'COSMOZ-TABS');
	});

	test('selects an item', async () => {
		assert.equal(tabs.selected, 'tab0');
		assert.equal(tabs.querySelector('[is-selected]').getAttribute('name'), 'tab0');

		tabs.selected = 'tab1';
		await nextFrame();
		assert.equal(tabs.querySelector('[is-selected]').getAttribute('name'), 'tab1');
	});

	test('does not resize on select', async () => {
		tabs.toggleAttribute('no-resize', true);
		await nextFrame();

		const resizeSpy = spy();
		window.addEventListener('resize', resizeSpy);

		tabs.selected = 'tab1';
		await nextFrame();
		window.removeEventListener('resize', resizeSpy);
		assert.isTrue(resizeSpy.notCalled);
	});

	test('contains a tablist with the same number of tabs', () => {
		assert.lengthOf(tabs.shadowRoot.querySelectorAll('[role=tab]'), tabs.querySelectorAll('cosmoz-tab').length);
	});

	test('sets icon inside tab', async () => {
		let icon = tabs.shadowRoot.querySelectorAll('[role="tab"]')[1].querySelector('iron-icon');
		assert.equal(icon.getAttribute('icon'), 'radio-button-unchecked');
		tabs.selected = 'tab1';
		await nextFrame();
		icon = tabs.shadowRoot.querySelectorAll('[role="tab"]')[1].querySelector('iron-icon');
		assert.equal(icon.getAttribute('icon'), 'radio-button-checked');
		assert.equal(icon.style.color, 'red');
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

	test('setting heading on cosmoz-tab updates tab', async () => {
		tabs.querySelectorAll('cosmoz-tab')[1].setAttribute('heading', 'Another tab');
		await nextFrame();
		assert.equal(tabs.shadowRoot.querySelectorAll('[role=tab]')[1].querySelector('span').innerText, 'Another tab');
	});

	test('setting badge on cosmoz-tab updates tab', async () => {
		tabs.querySelectorAll('cosmoz-tab')[0].setAttribute('badge', 'Inbox');
		await nextFrame();
		assert.equal(tabs.shadowRoot.querySelectorAll('[role=tab]')[0].querySelector('.badge').innerText, 'Inbox');
	});

	test('hiding selected tab changes selection to fallback', async () => {
		tabs.selected = 'tab1';
		await nextFrame();
		const elected = tabs.querySelector('[is-selected]');
		assert.equal(elected.getAttribute('name'), 'tab1');

		elected.toggleAttribute('hidden', true);
		await nextFrame();
		assert.equal(tabs.shadowRoot.querySelectorAll('[role=tab]')[1].getAttribute('hidden'), '');
		assert.notEqual(tabs.querySelector('[is-selected]'), elected);
		assert.equal(tabs.querySelector('[is-selected]').getAttribute('name'), 'tab0');
	});

	test('selecting a hidden tab changes selection to fallback', async () => {
		tabs.selected = 'tab1';
		await nextFrame();
		assert.equal(tabs.querySelector('[is-selected]').getAttribute('name'), 'tab1');
		assert.isTrue(tabs.querySelectorAll('cosmoz-tab')[2].hidden);

		tabs.selected = 'tab2';
		assert(tabs.querySelector('[is-selected]').getAttribute('name'), 'tab0');
	});

	test('disabling selected tab changes selection to fallback', async () => {
		tabs.selected = 'tab1';
		await nextFrame();
		const elected = tabs.querySelector('[is-selected]');
		assert.equal(elected.getAttribute('name'), 'tab1');


		elected.disabled = true;
		await nextFrame();
		assert.equal(tabs.shadowRoot.querySelectorAll('[role=tab]')[1].getAttribute('disabled'), '');

		assert.notEqual(tabs.querySelector('[is-selected]'), elected);
		assert.equal(tabs.querySelector('[is-selected]').getAttribute('name'), 'tab0');

	});

	test('selecting a disabled tab changes selection to fallback', async () => {
		tabs.selected = 'tab1';
		await nextFrame();
		assert.equal(tabs.querySelector('[is-selected]').getAttribute('name'), 'tab1');
		assert.isTrue(tabs.querySelectorAll('cosmoz-tab')[3].disabled);

		tabs.selected = 'tab3';
		assert(tabs.querySelector('[is-selected]').getAttribute('name'), 'tab0');
	});

	test('showing a fallback hidden tab selects it', async () => {
		const hiddenTab = tabs.querySelectorAll('cosmoz-tab')[1];
		tabs.selected = 'tab1';
		await nextFrame();
		assert.equal(hiddenTab.getAttribute('is-selected'), '');

		hiddenTab.hidden = true;
		await nextFrame();
		assert.isTrue(tabs.shadowRoot.querySelectorAll('[role=tab]')[1].hidden);
		assert.equal(tabs.querySelector('[is-selected]').getAttribute('name'), 'tab0');
		assert.notEqual(tabs.querySelector('[is-selected]'), hiddenTab);

		hiddenTab.hidden = false;
		await nextFrame();

		assert.equal(tabs.querySelector('[is-selected]').getAttribute('name'), hiddenTab.getAttribute('name'));
	});

	test('enabling a fallback disabled tab selects	it', async () => {
		const disabledTab = tabs.querySelectorAll('cosmoz-tab')[3];
		tabs.selected = 'tab1';
		await nextFrame();
		assert.equal(tabs.querySelectorAll('cosmoz-tab')[1].getAttribute('[is-selected]', ''));
		assert.isTrue(disabledTab.disabled);

		tabs.selected = 'tab3';
		assert.notEqual(tabs.querySelector('[is-selected]'), disabledTab);

		disabledTab.disabled = false;
		await nextFrame();
		assert.equal(tabs.querySelector('[is-selected]'), disabledTab);
	});

	test('select', async () => {
		tabs.shadowRoot.querySelectorAll('[role=tab]')[1].click();
		await nextFrame();
		assert.equal(tabs.selected, 'tab1');
		assert.equal(tabs.querySelector('[is-selected]').getAttribute('name'), 'tab1');
	});

	test('ctrl + click', async () => {
		tabs.shadowRoot.querySelectorAll('[role=tab]')[1].dispatchEvent(new MouseEvent('click', { ctrlKey: true }));
		await nextFrame();
		assert.notEqual(tabs.selected, 'tab1');
		assert.equal(tabs.querySelector('[is-selected]').getAttribute('name'), 'tab0');
	});
});
