import {
	assert, html, fixture
} from '@open-wc/testing';

import { dom } from '@polymer/polymer/lib/legacy/polymer.dom';
import { flush } from '@polymer/polymer/lib/utils/flush';
import '@polymer/iron-collapse';
import '../cosmoz-tabs.js';

suiteTeardown(() => {
	window.location.hash = '';
});

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

suite('hash param', () => {
	const createFixture = async ({
		opened = true,
		hashParam = undefined
	} = {}) => {
		const collapse = await fixture(html`
			<iron-collapse .opened=${opened} no-animation>
				<cosmoz-tabs id="tabs" .selected=${'tab0'} .hashParam=${hashParam} >
					<cosmoz-tab name="tab0">Tab text 0</cosmoz-tab>
					<cosmoz-tab name="tab1">Tab text 1</cosmoz-tab>
					<cosmoz-tab name="tab2">Tab text 2</cosmoz-tab>
				</cosmoz-tabs>
			</iron-collapse>
		`);
		return {
			collapse,
			tabs: collapse.querySelector('cosmoz-tabs')
		};
	};

	suite('when <cosmoz-tabs> is visible at creation time', () => {
		suite('and hash-param is not set', () => {
			test('displays the correct tab', async () => {
				// given that the page loads with a hash param value set to the last tab
				window.location.hash = '##tab=tab2';

				// when the element is created
				// and hash-param is not set
				const { collapse } = await createFixture();

				// then the hash is ignored and first tab is selected
				assert.equal(collapse.querySelector('.cosmoz-selected').textContent, 'Tab text 0');
			});

			test('reads the hash when the hash-param property is first set', async () => {
				// given that the page loads with a hash param value set to the last tab
				window.location.hash = '##tab=tab2';

				// when the element is created
				// and hash-param is not set
				const { tabs } = await createFixture();

				// then the hash is ignored and first tab is selected
				assert.equal(tabs.querySelector('.cosmoz-selected').textContent, 'Tab text 0');

				// when hash-param is updated
				tabs.hashParam = 'tab';

				// then the hash is read and the correct tab is displayed
				assert.equal(tabs.querySelector('.cosmoz-selected').textContent, 'Tab text 2');
			});

			test('ignores further changes to the hash-param property', async () => {
				// given that the page loads with multiple hash param values
				window.location.hash = '##tab=tab2&tabx=tab1';

				// when the element is created
				// and hash-param is not set
				const { tabs } = await createFixture();

				// then the hash is ignored and first tab is selected
				assert.equal(tabs.querySelector('.cosmoz-selected').textContent, 'Tab text 0');

				// when hash-param is updated
				tabs.hashParam = 'tab';

				// then the hash is read and the correct tab is displayed
				assert.equal(tabs.querySelector('.cosmoz-selected').textContent, 'Tab text 2');

				// and further changes are ignored
				tabs.hashParam = 'tabx';
				assert.equal(tabs.querySelector('.cosmoz-selected').textContent, 'Tab text 2');

				tabs.hashParam = undefined;
				assert.equal(tabs.querySelector('.cosmoz-selected').textContent, 'Tab text 2');
			});
		});

		suite('and hash-param is set', () => {
			test('displays the correct tab', async () => {
				// given that the page loads with a hash param value set to the last tab
				window.location.hash = '##tab=tab2';

				// when the element is created
				const { tabs } = await createFixture({
					hashParam: 'tab'
				});

				// then the last tab is selected
				assert.equal(tabs.querySelector('.cosmoz-selected').textContent, 'Tab text 2');
			});

			test('displays the first tab if the hash param value is not set', async () => {
				// given that the page loads without a hash param
				window.location.hash = '#';

				// when the element is created
				const { tabs } = await createFixture({
					hashParam: 'tab'
				});

				// then the first tab is selected
				assert.equal(tabs.querySelector('.cosmoz-selected').textContent, 'Tab text 0');
			});

			test('ignores further hash param value changes', async () => {
				// given that the page loads with a hash param value set to the last tab
				window.location.hash = '##tab=tab2';

				// when the element is created
				const { tabs } = await createFixture({
					hashParam: 'tab'
				});

				// then the last tab is selected
				assert.equal(tabs.querySelector('.cosmoz-selected').textContent, 'Tab text 2');

				// when the hash param is changed to the first tab
				window.location.hash = '##tab=tab1';

				// then the last tab remains selected
				assert.equal(tabs.querySelector('.cosmoz-selected').textContent, 'Tab text 2');
			});

			test('ignores changes to the hash-param property', async () => {
				// given that the page loads with multiple hash param values
				window.location.hash = '##tab=tab2&tabx=tab1';

				// when the element is created
				// and hash-param is set to 'tab
				const { tabs } = await createFixture({
					hashParam: 'tab'
				});

				// then the correct tab is selected
				assert.equal(tabs.querySelector('.cosmoz-selected').textContent, 'Tab text 2');

				// when hash-param is changed
				tabs.hashParam = 'tabx';

				// then the change is ignored
				assert.equal(tabs.querySelector('.cosmoz-selected').textContent, 'Tab text 2');
			});
		});
	});

	suite('when <cosmoz-tabs> is not visible at creation time', () => {
		test('displays the correct tab', async () => {
			// given that the page loads with a hash param value set to the last tab
			window.location.hash = '##tab=tab2';

			// when the element is created, but is not visible
			const {
				tabs, collapse
			} = await createFixture({
				hashParam: 'tab',
				opened: false
			});

			// when the element becomes visible
			collapse.opened = true;

			// then the last tab is selected
			assert.equal(tabs.querySelector('.cosmoz-selected').textContent, 'Tab text 2');
		});

		test('uses the current hash param value', async () => {
			// given that the page loads with a hash param value set to the last tab
			window.location.hash = '##tab=tab2';

			// when the element is created, but is not visible
			const {
				tabs, collapse
			} = await createFixture({
				hashParam: 'tab',
				opened: false
			});
			// then the last tab is selected
			assert.equal(tabs.querySelector('.cosmoz-selected').textContent, 'Tab text 2');

			// when the hash param is changed to the second tab
			window.location.hash = '##tab=tab1';
			// then the last tab is still selected
			assert.equal(tabs.querySelector('.cosmoz-selected').textContent, 'Tab text 2');
			// when the element becomes visible
			collapse.opened = true;

			// then the second tab is selected
			assert.equal(tabs.querySelector('.cosmoz-selected').textContent, 'Tab text 1');
		});

		test('ignores further hash param value changes', async () => {
			// given that the page loads with a hash param value set to the last tab
			window.location.hash = '##tab=tab2';

			// when the element is created, but is not visible
			const {
				tabs, collapse
			} = await createFixture({
				hashParam: 'tab',
				opened: false
			});

			// when the element becomes visible
			collapse.opened = true;

			// then the last tab is selected
			assert.equal(tabs.querySelector('.cosmoz-selected').textContent, 'Tab text 2');

			// when the hash param is changed to the first tab
			window.location.hash = '##tab=tab1';

			// and the element becomes invisible, then visible again
			collapse.opened = false;
			collapse.opened = true;

			// then the last tab remains selected
			assert.equal(tabs.querySelector('.cosmoz-selected').textContent, 'Tab text 2');

			// when the hash param is changed to the first tab
			window.location.hash = '##tab=tab0';

			// and the element becomes invisible, then visible again
			collapse.opened = false;
			collapse.opened = true;

			// then the last tab still remains selected
			assert.equal(tabs.querySelector('.cosmoz-selected').textContent, 'Tab text 2');
		});

		test('ignores changes to the hash-param property after it is first set', async () => {
			// given that the page loads with multiple hash param values: 'tab' and 'tabx'
			window.location.hash = '##tab=tab2&tabx=tab1';

			// when the element is created
			// and hash-param is not set
			// and the element is not visible
			const {
				tabs, collapse
			} = await createFixture({
				hashParam: null,
				opened: false
			});

			// when the hash-param is updated to 'tabx'
			tabs.hashParam = 'tabx';

			// and the element becomes visible
			collapse.opened = true;

			// then the value specified by 'tabx' is selected
			assert.equal(tabs.querySelector('.cosmoz-selected').textContent, 'Tab text 1');

			// when hash-param is changed to 'tab'
			tabs.hashParam = 'tab';

			// then the change is ignored
			assert.equal(tabs.querySelector('.cosmoz-selected').textContent, 'Tab text 1');

			// when the element becomes invisible, then visible again
			collapse.opened = false;
			collapse.opened = true;

			// then the change is still ignored
			assert.equal(tabs.querySelector('.cosmoz-selected').textContent, 'Tab text 1');
		});

		suite('if the hashParam tab is invalid', () => {
			test('displays the fallback tab', async () => {
				// given that the page loads with a hash param value set to an invalid tab
				window.location.hash = '##tab=invalidtab';

				// when the element is created, but is not visible
				const {
					tabs, collapse
				} = await createFixture('basic', {
					hashParam: 'tab',
					opened: false
				});

				// when the element becomes visible
				collapse.opened = true;

				// then the last tab is selected
				assert.equal(tabs.querySelector('.cosmoz-selected').textContent, 'Tab text 0');
			});
		});
	});
});
