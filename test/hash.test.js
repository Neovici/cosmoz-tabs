import {
	assert, html, fixture
} from '@open-wc/testing';

import { dom } from '@polymer/polymer/lib/legacy/polymer.dom';
import { flush } from '@polymer/polymer/lib/utils/flush';

import '../cosmoz-tabs.js';

suite('hash', () => {
	let tabs;

	setup(async () => {
		tabs = await fixture(html`
			<cosmoz-tabs selected="tab2" hash-param="tab">
				<cosmoz-tab name="tab0">Tab text 1</cosmoz-tab>
				<cosmoz-tab name="tab1">Tab text 2</cosmoz-tab>
				<cosmoz-tab name="tab2">Tab text 3</cosmoz-tab>
			</cosmoz-tabs>
		`);
	});
	suiteTeardown(() => {
		window.location.hash = '';
	});

	test('items have links', () => {
		tabs.shadowRoot.querySelector('paper-tabs').items.forEach((tab, index) => {
			const link = dom(tab).querySelector('.link');
			assert.equal(link.getAttribute('href'), '##tab=' + tabs.items[index].getAttribute('name'));
		});
	});

	test('updates selected item from location hash', () => {
		flush();
		tabs._hashReady = false; // ignore hash read in test setup to test selected update
		window.location.hash = '##tab=tab0';
		flush();
		assert.isTrue(tabs._hashReady);
		assert.equal(tabs._routeHashParams[tabs.hashParam], 'tab0');
		assert.equal(tabs.selected, 'tab0');
		assert.equal(tabs.selectedItem, tabs.items[0]);

		window.location.hash = '##tab=tab1';
		flush();
		assert.equal(tabs._routeHashParams[tabs.hashParam], 'tab1', 'Expected _routeHashParams to be updated from location hash');
		assert.equal(tabs.selected, 'tab0', 'Expected selected to remain tab0 as selected was already updated once from hash.');
		assert.equal(tabs.selectedItem, tabs.items[0]);
		window.location.hash = '#';
	});

	test('updates location hash from selected item', () => {
		assert.equal(tabs.selectedItem, tabs.items[2]);
		tabs.selected = 'tab1';
		flush();
		assert.equal(tabs._routeHashParams[tabs.hashParam], 'tab1');
		assert.equal(window.location.hash, '##tab=tab1');

		tabs.selected = 'tab0';
		flush();
		assert.equal(tabs._routeHashParams[tabs.hashParam], 'tab0');
		assert.equal(window.location.hash, '##tab=tab0');
	});
});
