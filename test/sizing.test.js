import {
	assert, html, fixture
} from '@open-wc/testing';
import {
	assert as sinonAssert,
	spy
} from 'sinon';
import { flush } from '@polymer/polymer/lib/utils/flush';
import '@polymer/iron-list';
import '../cosmoz-tabs.js';

suite('sizing', () => {
	suiteSetup(() => {
		const documentContainer = document.createElement('template');

		documentContainer.innerHTML = `<custom-style id="sizing-css"><style is="custom-style">
		.item {
			color: white;
			overflow: hidden;
		}

		.item:nth-child(odd) {
			background-color: green;
		}

		.item:nth-child(even) {
			background-color: red;
		}
	</style></custom-style>`;
		document.body.appendChild(documentContainer.content);
	});

	suiteTeardown(() =>
		document.body.removeChild(document.querySelector('#sizing-css'))
	);

	test('sizes non explicitly sized tabs and list without flex renders max items', async () => {
		const tabs = await fixture(html`
			<cosmoz-tabs selected="tab0">
				<cosmoz-tab name="tab0" heading="Flex">
					<iron-list>
						<template>
							<div class="item">
								<div style="height: 100px;">[[item]]</div>
							</div>
						</template>
					</iron-list>
				</cosmoz-tab>
				<cosmoz-tab name="tab1" heading="Content">
					<p>
						Etiam ante dolor, commodo non vestibulum vel, malesuada a nunc. Vestibulum accumsan,
						sapien eu gravida consectetur, purus felis lobortis massa, id consequat eros lacus sit amet quam.
						Nunc bibendum elit turpis. Ut et convallis quam, ut elementum enim. Aenean semper mattis enim
						quis luctus. Vivamus libero urna, dictum non lacus a, porta consequat lacus. Etiam eu nisi diam.
						Nam varius non ex vitae scelerisque.
					</p>
				</cosmoz-tab>
			</cosmoz-tabs>
		`),
			list = tabs.querySelector('iron-list'),
			onResize = spy();

		list.addEventListener('iron-resize', onResize);
		flush();

		list.items = Array.from(Array(100).keys());
		flush();
		tabs._debouncer.flush();

		list.removeEventListener('iron-resize', onResize);

		assert.closeTo(list.getBoundingClientRect().height, 10000, 0.1);
		assert.lengthOf(list.queryAllEffectiveChildren('.item'), 100);

		sinonAssert.calledOnce(onResize);
	});

	test('explicitly sized tabs with element selected and flex list renders only a few items', async () => {
		const tabs = await fixture(html`
			<cosmoz-tabs selected="tab0" style="height: 400px">
				<cosmoz-tab name="tab0" heading="Flex">
					<iron-list style="flex: 1 1 0.00000001px;">
						<template>
							<div class="item">
								<div style="height: 100px;">[[item]]</div>
							</div>
						</template>
					</iron-list>
				</cosmoz-tab>
				<cosmoz-tab name="tab1" heading="Content">
					<p>
						Etiam ante dolor, commodo non vestibulum vel, malesuada a nunc. Vestibulum accumsan,
						sapien eu gravida consectetur, purus felis lobortis massa, id consequat eros lacus sit amet quam.
						Nunc bibendum elit turpis. Ut et convallis quam, ut elementum enim. Aenean semper mattis enim
						quis luctus. Vivamus libero urna, dictum non lacus a, porta consequat lacus. Etiam eu nisi diam.
						Nam varius non ex vitae scelerisque.
					</p>
				</cosmoz-tab>
			</cosmoz-tabs>`),
			list = tabs.querySelector('iron-list'),
			onResize = spy();

		list.addEventListener('iron-resize', onResize);
		flush();

		list.items = Array.from(Array(500).keys());
		flush();
		tabs._debouncer.flush();

		list.removeEventListener('iron-resize', onResize);

		assert.closeTo(list.getBoundingClientRect().height, 349, 0.1);
		assert.isAbove(list.queryAllEffectiveChildren('.item').length, 3);
		assert.isBelow(list.queryAllEffectiveChildren('.item').length, 12);

		sinonAssert.calledOnce(onResize);
	});

	test('explicitly sized tabs and flex list updates size and renders only a few items upon selection', async () => {
		const tabs = await fixture(html`
				<cosmoz-tabs style="height: 400px" fallback-selection>
					<cosmoz-tab name="tab0" heading="Flex">
						<iron-list id="x-list" style="flex: 1 1 0.00000001px;">
							<template>
								<div class="item">
									<div style="height: 100px;">[[item]]</div>
								</div>
							</template>
						</iron-list>
					</cosmoz-tab>
					<cosmoz-tab name="tab1" heading="Content">
						<p>
							Etiam ante dolor, commodo non vestibulum vel, malesuada a nunc. Vestibulum accumsan,
							sapien eu gravida consectetur, purus felis lobortis massa, id consequat eros lacus sit amet quam.
							Nunc bibendum elit turpis. Ut et convallis quam, ut elementum enim. Aenean semper mattis enim
							quis luctus. Vivamus libero urna, dictum non lacus a, porta consequat lacus. Etiam eu nisi diam.
							Nam varius non ex vitae scelerisque.
						</p>
					</cosmoz-tab>
				</cosmoz-tabs>
			`),
			list = tabs.querySelector('iron-list'),
			onResize = spy();

		flush();

		assert.isUndefined(tabs.selected);
		list.items = Array.from(Array(500).keys());
		list.addEventListener('iron-resize', onResize);

		tabs.selected = 'tab0';
		flush();
		tabs._debouncer.flush();
		list.removeEventListener('iron-resize', onResize);

		assert.closeTo(list.getBoundingClientRect().height, 349, 0.1);
		assert.isAbove(list.queryAllEffectiveChildren('.item').length, 3);
		assert.isBelow(list.queryAllEffectiveChildren('.item').length, 12);

		sinonAssert.calledOnce(onResize);
	});
});
