import {
	assert, html, fixture, nextFrame
} from '@open-wc/testing';

import '../cosmoz-tabs.js';

teardown(() => {
	window.location.hash = '';
});

suite('cosmoz-tabs hashParam', () => {
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
		assert.deepEqual(
			Array.from(tabs.shadowRoot.querySelectorAll('[role=tab]')).map(e => e.getAttribute('href')),
			[
				'#!/#tab=tab0',
				'#!/#tab=tab1',
				'#!/#tab=tab2'
			]
		);
	});

	test('updates selection from location hash', async () => {
		window.location.hash = '##tab=tab0';
		await nextFrame();
		assert.equal(tabs.querySelector('[is-selected]').getAttribute('name'), 'tab0');

		window.location.hash = '##tab=tab1';
		await nextFrame();
		assert.equal(tabs.querySelector('[is-selected]').getAttribute('name'), 'tab1');
	});

	test('updates location hash on selection', async () => {
		assert.equal(tabs.querySelector('[is-selected]').getAttribute('name'), 'tab2');

		tabs.shadowRoot.querySelectorAll('[role=tab]')[1].click();
		await nextFrame();
		assert.equal(tabs.querySelector('[is-selected]').getAttribute('name'), 'tab1');
		assert.equal(window.location.hash, '#!/#tab=tab1');

		tabs.shadowRoot.querySelectorAll('[role=tab]')[0].click();
		await nextFrame();
		assert.equal(tabs.querySelector('[is-selected]').getAttribute('name'), 'tab0');
		assert.equal(window.location.hash, '#!/#tab=tab0');
	});
});

suite('cosmoz-tabs hashParam advanced', () => {
	const createFixture = async (opened = true, hashParam = undefined) => await fixture(html`
			<cosmoz-tabs id="tabs" style=${ opened ? '' : 'display: none' } .selected=${ 'tab0' } .hashParam=${ hashParam } >
				<cosmoz-tab name="tab0">Tab text 0</cosmoz-tab>
				<cosmoz-tab name="tab1">Tab text 1</cosmoz-tab>
				<cosmoz-tab name="tab2">Tab text 2</cosmoz-tab>
			</cosmoz-tabs>
		`);

	suite('when <cosmoz-tabs> is visible at creation time', () => {
		suite('and hash-param is not set', () => {
			test('displays the correct tab', async () => {
				// given that the page loads with a hash param value set to the last tab
				window.location.hash = '##tab=tab2';

				// when the element is created
				// and hash-param is not set
				const tabs = await createFixture();

				// then the hash is ignored and first tab is selected
				assert.equal(tabs.querySelector('[is-selected]').textContent, 'Tab text 0');
			});

			test('reads the hash when the hash-param property is first set', async () => {
				// given that the page loads with a hash param value set to the last tab
				window.location.hash = '##tab=tab2';

				// when the element is created
				// and hash-param is not set
				const tabs = await createFixture();

				// then the hash is ignored and first tab is selected
				assert.equal(tabs.querySelector('[is-selected]').textContent, 'Tab text 0');

				// when hash-param is updated
				tabs.hashParam = 'tab';
				await nextFrame();
				await nextFrame();

				// then the hash is read and the correct tab is displayed
				assert.equal(tabs.querySelector('[is-selected]').textContent, 'Tab text 2');
			});
		});

		suite('and hash-param is set', () => {
			test('displays the correct tab', async () => {
				// given that the page loads with a hash param value set to the last tab
				window.location.hash = '##tab=tab2';

				// when the element is created
				const tabs = await createFixture(true, 'tab');

				// then the last tab is selected
				assert.equal(tabs.querySelector('[is-selected]').textContent, 'Tab text 2');
			});

			test('displays the first tab if the hash param value is not set', async () => {
				// given that the page loads without a hash param
				window.location.hash = '#';

				// when the element is created
				const tabs = await createFixture(true, 'tab');

				// then the first tab is selected
				assert.equal(tabs.querySelector('[is-selected]').textContent, 'Tab text 0');
			});
		});
	});

	suite('when <cosmoz-tabs> is not visible at creation time', () => {
		test('displays the correct tab', async () => {
			// given that the page loads with a hash param value set to the last tab
			window.location.hash = '##tab=tab2';

			// when the element is created, but is not visible
			const tabs = await createFixture(false, 'tab');
			tabs.style.display = '';

			// then the last tab is selected
			assert.equal(tabs.querySelector('[is-selected]').textContent, 'Tab text 2');
		});

		test('uses the current hash param value', async () => {
			// given that the page loads with a hash param value set to the last tab
			window.location.hash = '##tab=tab2';

			// when the element is created, but is not visible
			const tabs = await createFixture(false, 'tab');

			// then the last tab is selected
			assert.equal(tabs.querySelector('[is-selected]').textContent, 'Tab text 2');

			// when the hash param is changed to the second tab
			window.location.hash = '##tab=tab1';
			await nextFrame();
			// then the second tab is selected
			assert.equal(tabs.querySelector('[is-selected]').textContent, 'Tab text 1');
			// when the element becomes visible
			tabs.style.display = '';

			// then the second tab is still selected
			assert.equal(tabs.querySelector('[is-selected]').textContent, 'Tab text 1');
		});

		suite('if the hashParam tab is invalid', () => {
			test('displays the fallback tab', async () => {
				// given that the page loads with a hash param value set to an invalid tab
				window.location.hash = '##tab=invalidtab';

				// when the element is created, but is not visible
				const tabs = await createFixture(false, 'tab');

				// when the element becomes visible
				tabs.style.display = '';

				// then the last tab is selected
				assert.equal(tabs.querySelector('[is-selected]').textContent, 'Tab text 0');
			});
		});
	});
});
