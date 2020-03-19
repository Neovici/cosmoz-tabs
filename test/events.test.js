import {
	assert,
	html,
	fixtureSync
} from '@open-wc/testing';
import {
	assert as sinonAssert,
	spy
} from 'sinon';

import { flush } from '@polymer/polymer/lib/utils/flush';
import '../cosmoz-tabs.js';

suite('events', () => {
	let tabs;

	setup(async () => {
		tabs = await fixtureSync(html`
			<cosmoz-tabs fallback-selection=''>
				<cosmoz-tab name="t1" heading="Tab0">1</cosmoz-tab>
				<cosmoz-tab name="t2" heading="Tab1">2</cosmoz-tab>
				<cosmoz-tab name="t3" heading="Tab2">3</cosmoz-tab>
			</cosmoz-tabs>
		`);
	});

	test('fires tab-select event', async () => {
		assert.isUndefined(tabs.selected);
		const onSelect = spy();
		tabs.items[2].addEventListener('tab-select', onSelect);
		tabs.selected = 't3';
		tabs.items[2].removeEventListener('tab-select', onSelect);
		sinonAssert.calledOnce(onSelect);
	});

	test('fires tab-first-select event only once before tab-select', () => {
		const onFirstSelect = spy(),
			onSelect = spy();

		assert.isUndefined(tabs.selected);

		tabs.items[2].addEventListener('tab-first-select', onFirstSelect);
		tabs.items[2].addEventListener('tab-select', onSelect);

		tabs.selected = 't3';
		flush();
		sinonAssert.calledOnce(onFirstSelect);
		sinonAssert.calledOnce(onSelect);
		sinonAssert.callOrder(onFirstSelect, onSelect);

		onSelect.resetHistory();
		onFirstSelect.resetHistory();
		tabs.selected = 't2';
		sinonAssert.notCalled(onFirstSelect);
		sinonAssert.notCalled(onSelect);

		onSelect.resetHistory();
		onFirstSelect.resetHistory();

		tabs.selected = 't3';
		sinonAssert.notCalled(onFirstSelect);
		sinonAssert.calledOnce(onSelect);
	});
});
