import {
	assert,
	html,
	fixtureSync,
	oneEvent
} from '@open-wc/testing';
import {
	assert as sinonAssert,
	spy
} from 'sinon';

import '../cosmoz-tabs.js';

suite('cosmoz-tabs', () => {
	let tabs;

	setup(async () => {
		tabs = await fixtureSync(html`
			<cosmoz-tabs>
				<cosmoz-tab name="t1" heading="Tab0">1</cosmoz-tab>
				<cosmoz-tab name="t2" heading="Tab1">2</cosmoz-tab>
				<cosmoz-tab name="t3" heading="Tab2">3</cosmoz-tab>
			</cosmoz-tabs>
		`);
	});

	test('fires tab-select event', async () => {
		setTimeout(() => {
			tabs.selected = 't3';
		});
		await oneEvent(tabs.querySelector('[name=t3]'), 'tab-select');
	});

	test('fires tab-first-select event only once before tab-select', async () => {
		const onFirstSelect = spy(),
			onSelect = spy(),
			tab = tabs.querySelector('[name=t3]');

		assert.isUndefined(tabs.selected);

		tab.addEventListener('tab-first-select', onFirstSelect);
		tab.addEventListener('tab-select', onSelect);

		setTimeout(() => {
			tabs.selected = 't3';
		});
		await oneEvent(tab, 'tab-select');
		sinonAssert.calledOnce(onFirstSelect);
		sinonAssert.calledOnce(onSelect);
		sinonAssert.callOrder(onFirstSelect, onSelect);

		onSelect.resetHistory();
		onFirstSelect.resetHistory();
		setTimeout(() => {
			tabs.selected = 't2';
		});
		await oneEvent(tabs.querySelector('[name=t2]'), 'tab-select');
		sinonAssert.notCalled(onFirstSelect);
		sinonAssert.notCalled(onSelect);

		onSelect.resetHistory();
		onFirstSelect.resetHistory();

		tabs.selected = 't3';
		setTimeout(() => {
			tabs.selected = 't3';
		});
		await oneEvent(tab, 'tab-select');
		sinonAssert.notCalled(onFirstSelect);
		sinonAssert.calledOnce(onSelect);

		tab.removeEventListener('tab-first-select', onFirstSelect);
		tab.removeEventListener('tab-select', onSelect);
	});
});
