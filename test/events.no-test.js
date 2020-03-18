import {
	assert,
	html,
	fixture,
	oneEvent
} from '@open-wc/testing';
import {
	assert as sinonAssert,
	spy
} from 'sinon';

import '../cosmoz-tabs.js';

suite('events', () => {
	let tabs;

	setup(async () => {
		tabs = await fixture(html`
			<cosmoz-tabs>
				<cosmoz-tab heading="Tab0">1</cosmoz-tab>
				<cosmoz-tab heading="Tab1">2</cosmoz-tab>
				<cosmoz-tab heading="Tab2">3</cosmoz-tab>
			</cosmoz-tabs>
		`);
		let onIronItemsChanged;
		tabs.addEventListener('iron-items-changed', onIronItemsChanged = () => {
			tabs.removeEventListener('iron-items-changed', onIronItemsChanged);
		});
	});

	test('fires tab-select event', async () => {
		assert.isUndefined(tabs.selected);
		setTimeout(() => {
			tabs.selected = 2;
		});
		await oneEvent(tabs.items[2], 'tab-select');
	});

	test('fires tab-first-select event only once before tab-select', () => {
		const onFirstSelect = spy(),
			onSelect = spy();

		assert.isUndefined(tabs.selected);

		tabs.items[2].addEventListener('tab-first-select', onFirstSelect);
		tabs.items[2].addEventListener('tab-select', onSelect);

		tabs.selected = 2;
		sinonAssert.calledOnce(onFirstSelect);
		sinonAssert.calledOnce(onSelect);
		assert.callOrder(onFirstSelect, onSelect);

		onSelect.reset();
		onFirstSelect.reset();
		tabs.selected = 1;
		assert.notCalled(onFirstSelect);
		assert.notCalled(onSelect);

		onSelect.reset();
		onFirstSelect.reset();

		tabs.selected = 2;
		assert.notCalled(onFirstSelect);
		sinonAssert.calledOnce(onSelect);
	});
});
