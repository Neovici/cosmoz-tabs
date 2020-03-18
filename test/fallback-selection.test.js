import {
	assert, html, fixture
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
		let onIronItemsChanged;
		tabs.addEventListener('iron-items-changed', onIronItemsChanged = () => {
			tabs.removeEventListener('iron-items-changed', onIronItemsChanged);
		});
	});

	test('fallback-selection is 0 ', () => {
		assert.isNotNull(tabs.fallbackSelection);
		assert.equal(tabs.fallbackSelection, 'tab0');
		assert.equal(tabs.selected, 'tab0');
		assert.equal(tabs.selectedItem, tabs.items[0]);
	});
});
