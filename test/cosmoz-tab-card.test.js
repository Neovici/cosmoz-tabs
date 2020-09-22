import {
	assert, html, fixture
} from '@open-wc/testing';

import '../cosmoz-tabs.js';

suite('cosmoz-tab-card', () => {
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

	test('cards have headings', () => {
		Array.from(tabs.querySelectorAll('cosmoz-tab-card')).forEach(item => {
			const heading = item.shadowRoot.querySelector('.heading');
			assert.equal(heading.innerText, item.heading);
		});
	});
});
