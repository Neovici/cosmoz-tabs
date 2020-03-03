import {
	assert, html, fixture
} from '@open-wc/testing';

suite('invalid', () => {
	let tabs;

	suiteSetup(async () => {
		await import('../cosmoz-tabs.js');
	});

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

	test('hiding selected tab changes selection to fallbackSelection', () => {
		tabs.selected = 'tab1';
		assert.equal(tabs.selectedItem, tabs.items[1]);
		tabs.selectedItem.hidden = true;

		const paperTab = tabs.shadowRoot.querySelector('paper-tabs').items[1];
		assert.isTrue(paperTab.hidden);
		assert.equal(tabs.selected, tabs.fallbackSelection);
		assert.equal(tabs.selectedItem, tabs._valueToItem(tabs.fallbackSelection));
	});

	test('selecting a hidden tab changes selection to fallbackSelection', () => {
		tabs.selected = 'tab1';

		assert.equal(tabs.selectedItem, tabs.items[1]);
		assert.isTrue(tabs.items[2].hidden);

		tabs.selected = 'tab2';

		assert.equal(tabs.selected, tabs.fallbackSelection);
		assert.equal(tabs.selectedItem, tabs._valueToItem(tabs.fallbackSelection));
	});

	test('disabling selected tab changes selection to fallbackSelection', () => {
		tabs.selected = 'tab1';

		assert.equal(tabs.selectedItem, tabs.items[1]);
		tabs.selectedItem.disabled = true;

		const paperTab = tabs.shadowRoot.querySelector('paper-tabs').items[1];
		assert.isTrue(paperTab.disabled);
		assert.equal(tabs.selected, tabs.fallbackSelection);
		assert.equal(tabs.selectedItem, tabs._valueToItem(tabs.fallbackSelection));

	});

	test('selecting a disabled tab changes selection to fallbackSelection', () => {
		tabs.selected = 'tab1';

		assert.equal(tabs.selectedItem, tabs.items[1]);
		assert.isTrue(tabs.items[3].disabled);

		tabs.selected = 'tab3';

		assert.equal(tabs.selected, tabs.fallbackSelection);
		assert.equal(tabs.selectedItem, tabs._valueToItem(tabs.fallbackSelection));
	});

	test('showing a fallback hidden tab selects it', () => {
		const hiddenTab = tabs.items[1];
		tabs.selected = 'tab1';
		assert.equal(tabs.selectedItem, hiddenTab);
		hiddenTab.hidden = true;

		const paperTab = tabs.shadowRoot.querySelector('paper-tabs').items[1];
		assert.isTrue(paperTab.hidden);
		assert.equal(tabs.selected, tabs.fallbackSelection);
		assert.equal(tabs.selectedItem, tabs._valueToItem(tabs.fallbackSelection));

		hiddenTab.hidden = false;
		assert.equal(tabs.selectedItem, hiddenTab);
	});

	test('enabling a fallback disabled tab selects	it', () => {
		const disabledTab = tabs.items[3];
		tabs.selected = 'tab1';
		assert.equal(tabs.selectedItem, tabs.items[1]);
		assert.isTrue(disabledTab.disabled);

		tabs.selected = 'tab3';

		assert.equal(tabs.selected, tabs.fallbackSelection);
		assert.equal(tabs.selectedItem, tabs._valueToItem(tabs.fallbackSelection));

		disabledTab.disabled = false;
		assert.equal(tabs.selectedItem, disabledTab);
	});

});
