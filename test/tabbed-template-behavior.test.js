import {
	assert, html, fixture
} from '@open-wc/testing';
import { flush } from '@polymer/polymer/lib/utils/flush';
import './helpers/template-bind-test-helper.js';
import '../cosmoz-tabs.js';

suite('tabbed-template', () => {
	suite('basic', () => {
		let tabs;

		setup(async () => {
			tabs = await fixture(html`
				<cosmoz-tabs>
					<cosmoz-tab name="tab0" heading="Tab0">1</cosmoz-tab>
					<cosmoz-tab name="tab1" heading="Tab1">
						<template>
							<div>Tab1</div>
						</template>
					</cosmoz-tab>
				</cosmoz-tabs>
			`);
		});

		test('renders tab', () => {
			const tab = tabs.items[1];
			tab.render();
			assert.isNotOk(tab.querySelector('div'));
			flush();
			assert.isOk(tab.querySelector('div'));
		});

		test('creates instance only once', () => {
			const tab = tabs.items[1];
			tab.render();
			flush();
			const div = tab.querySelector('div');
			assert.isOk(div);
			tab._createInstance();
			const divs = tab.querySelectorAll('div');
			assert.lengthOf(divs, 1);
			assert.equal(divs[0], div);
		});
	});

	suite('prerender', () => {
		let tabs,
			helper,
			bind;

		setup(async () => {
			bind = await fixture(html`
				<dom-bind>
					<template is="dom-bind">
						<template-bind-test-helper test-prop="{{ myTestProp }}">
							<cosmoz-tabs>
								<cosmoz-tab name="tab0" heading="Tab0">1</cosmoz-tab>
								<cosmoz-tab name="tab1" heading="Tab1" prerender>
									<template>
										<template-bind-test-helper test-prop="{{ myTestProp }}"></template-bind-test-helper>
									</template>
								</cosmoz-tab>
							</cosmoz-tabs>
						</template-bind-test-helper>
					</template>
				</dom-bind>
			`);
			helper = bind.parentElement.firstElementChild;
			tabs = helper.querySelector('cosmoz-tabs');
		});

		test('renders tab that has prerender enabled ', () => {
			flush();
			const tab = tabs.items[1],
				childHelper = tab.querySelector('template-bind-test-helper');
			assert.notEqual(helper, childHelper);
			assert.isOk(childHelper);
			assert.equal(childHelper.testProp, helper.testProp);
		});
	});

	suite('binding', () => {
		let tabs,
			helper,
			bind;

		setup(async () => {
			bind = await fixture(html`
				<dom-bind>
					<template is="dom-bind">
						<template-bind-test-helper test-prop="{{ myTestProp }}">
							<cosmoz-tabs>
								<cosmoz-tab name="tab0" heading="Tab0">1</cosmoz-tab>
								<cosmoz-tab name="tab1" heading="Tab1">
									<template>
										<template-bind-test-helper test-prop="{{ myTestProp }}"></template-bind-test-helper>
									</template>
								</cosmoz-tab>
							</cosmoz-tabs>
						</template-bind-test-helper>
					</template>
				</dom-bind>
			`);
			helper = bind.parentElement.firstElementChild;
			tabs = helper.querySelector('cosmoz-tabs');
		});

		test('updates testProp from the parentElement of cosmoz-tabs to the children of tab1', () => {
			helper.testProp = 'tested';
			tabs.selected = 'tab1';
			flush();
			const tab = tabs.selectedItem,
				childHelper = tab.querySelector('template-bind-test-helper');
			assert.isOk(childHelper);
			assert.equal(helper.testProp, childHelper.testProp);
		});

		test('updates testProp from the children of tab1 up to the parentElement of cosmoz-tabs', () => {
			tabs.selected = 'tab1';
			flush();

			const tab = tabs.selectedItem,
				childHelper = tab.querySelector('template-bind-test-helper');

			assert.isOk(childHelper);
			childHelper.testProp = 'tested';

			assert.equal(childHelper.testProp, helper.testProp);
		});
	});
});
