import {
	assert, html, fixture
} from '@open-wc/testing';
import { tap } from '@polymer/iron-test-helpers/mock-interactions.js';

import '../cosmoz-tabs.js';

suite('basic', () => {
	let tabs;

	setup(async () => {
		tabs = await fixture(html`
			<cosmoz-tabs accordion selected-values='["tab1","tab2"]'>
				<cosmoz-tab name="tab0">Tab text 1</cosmoz-tab>
				<cosmoz-tab name="tab1">Tab text 2</cosmoz-tab>
				<cosmoz-tab name="tab2">Tab text 3</cosmoz-tab>
			</cosmoz-tabs>
		`);
		const onIronItemsChanged = () => {
			tabs.removeEventListener('iron-items-changed', onIronItemsChanged);
		};
		tabs.addEventListener('iron-items-changed', onIronItemsChanged);
	});

	test('in accordion mode multi is true', () => {
		assert.isTrue(tabs.accordion);
		assert.isTrue(tabs.multi);
	});

	test('in accordion mode multiple items can be selected', () => {
		assert.lengthOf(tabs.selectedItems, 2);
		assert.include(tabs.selectedItems, tabs.items[1]);
		assert.include(tabs.selectedItems, tabs.items[2]);
	});

	test('in accordion mode unselected items are closed', () => {
		const item = tabs.items[0],
			el = item.$.content,
			style = getComputedStyle(el);
		assert.equal(style.getPropertyValue('display'), 'none');
	});

	test('in accordion mode selected items are opened', () => {
		assert.lengthOf(tabs.selectedItems, 2);

		tabs.selectedItems.forEach(item => {
			const el = item.$.content,
				style = getComputedStyle(el);

			assert.equal(style.getPropertyValue('display'), 'block');
		});
	});

	test('in accordion mode selectedItem remains selected', () => {
		tap(tabs.items[1].$.header);
		assert.equal(tabs.selectedItems.length, 1);

		tap(tabs.items[2].$.header);
		assert.equal(tabs.selectedItems.length, 1);
		assert.equal(tabs.selectedItems[0], tabs.items[2]);
	});

	test('accordion property is forwarded to children', () => {
		assert.isArray(tabs.items);
		assert.lengthOf(tabs.items, 3);

		tabs.items.forEach(item => {
			assert.equal(item.tagName, 'COSMOZ-TAB');
			assert.isTrue(item.accordion);
		});
	});

	test('in accordion mode it does not contain a paper-tabs element', () => {
		const paperTabs = tabs.shadowRoot.querySelector('paper-tabs');
		assert.isNull(paperTabs);
	});

	test('in accordion mode cosmoz-tab #header is visible', () => {
		tabs.items.forEach(item => {
			assert.isNotNull(item.$.header);
			const style = window.getComputedStyle(item.$.header),
				display = style.getPropertyValue('display');
			assert.notEqual(display, 'none');
		});
	});

	test('in accordion mode tapping the header of a unselected item selects it', () => {
		const item = tabs.items[0];
		assert.isNotNull(item.$.header);
		assert.notInclude(tabs.selectedItems, item);

		tap(item.$.header);
		assert.include(tabs.selectedItems, item);
	});

	test('in accordion mode tapping the header of a selected item unselects it', () => {
		const item = tabs.items[1];
		assert.isNotNull(item.$.header);
		assert.include(tabs.selectedItems, item);

		tap(item.$.header);
		assert.notInclude(tabs.selectedItems, item);
	});
});
