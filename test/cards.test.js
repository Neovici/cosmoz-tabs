import {
	assert, html, fixture
} from '@open-wc/testing';

import '../cosmoz-tabs.js';

suite('cards basic', () => {
	let tabs;

	setup(async () => {
		tabs = await fixture(html`
			<cosmoz-tabs selected="0">
				<cosmoz-tab heading="Tab 1">
					<cosmoz-tab-card heading="card 1 heading">card 1</cosmoz-tab-card>
					<cosmoz-tab-card heading="card 2 heading">card 2</cosmoz-tab-card>
					<cosmoz-tab-card heading="card 3 heading">card 3</cosmoz-tab-card>
				</cosmoz-tab>
				<cosmoz-tab heading="Tab2">Tab 2 text</cosmoz-tab>
				<cosmoz-tab heading="Tab3">Tab 3 text</cosmoz-tab>
			</cosmoz-tabs>
		`);
	});

	test('collects cosmoz-tab-card elements as items', () => {
		const tab = tabs.items[0];
		assert.isArray(tab.items);
		assert.lengthOf(tab.items, 3);

		tab.items.forEach(item => {
			assert.equal(item.tagName, 'COSMOZ-TAB-CARD');
		});
	});

	test('cards have elevation 1', () => {
		const tab = tabs.items[0];
		tab.items.forEach(item => {
			const material = item.shadowRoot.querySelector('paper-material');
			assert.equal(material.elevation, 1);
		});
	});

	test('cards are opened', () => {
		const tab = tabs.items[0];
		tab.items.forEach(item => {
			const el = item.$.content,
				style = getComputedStyle(el);
			assert.equal(style.getPropertyValue('display'), 'block');
		});
	});

	test('cards have headings', () => {
		const tab = tabs.items[0];
		tab.items.forEach(item => {
			const heading = item.shadowRoot.querySelector('.heading');
			assert.equal(heading.innerText, item.heading);
		});
	});
});

suite('cards accordion', () => {
	let tabs;

	setup(async () => {
		tabs = await fixture(html`
			<cosmoz-tabs accordion>
				<cosmoz-tab heading="Tab 1" selected-values="[0]">
					<cosmoz-tab-card heading="card 1 heading">card 1</cosmoz-tab-card>
					<cosmoz-tab-card heading="card 2 heading">card 2</cosmoz-tab-card>
					<cosmoz-tab-card heading="card 3 heading">card 3</cosmoz-tab-card>
				</cosmoz-tab>
				<cosmoz-tab heading="Tab2">Tab 2 text</cosmoz-tab>
				<cosmoz-tab heading="Tab3">Tab 3 text</cosmoz-tab>
			</cosmoz-tabs>
		`);
	});

	test('accordion property is forwarded to cards', () => {
		const tab = tabs.items[0];
		assert.equal(tab.accordion, tabs.accordion);
		tab.items.forEach(item => {
			assert.equal(item.accordion, tabs.accordion);
		});
	});

	test('tab containing cards has hidden header', () => {
		const tab = tabs.items[0],
			style = window.getComputedStyle(tab.$.header),
			display = style.getPropertyValue('display');
		assert.equal(display, 'none');
	});

	test('in accordion mode selected cards are opened', () => {
		const tab = tabs.items[0];

		assert.lengthOf(tab.selectedItems, 1);
		tab.selectedItems.forEach(item => {
			const el = item.$.content,
				style = getComputedStyle(el);
			assert.equal(style.getPropertyValue('display'), 'block');
		});
	});

	test('in accordion mode unselected cards are closed', () => {
		const tab = tabs.items[0],
			unselected = tab.items.filter(item => {
				return tab.selectedItems.indexOf(item) < 0;
			});

		assert.lengthOf(unselected, 2);
		unselected.forEach(item => {
			assert.equal(item.$.content.style.display, '');
		});
	});
});
