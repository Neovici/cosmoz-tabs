import {
	assert, html, fixture
} from '@open-wc/testing';
import { component } from 'haunted';
import { encloses } from '../lib/utils';
import '../cosmoz-tab';

customElements.define('test-encloses', component(() => html`<div id="enclosed"></div>`));

suite('utils', () => {
	test('encloses', async () => {
		const tab = await fixture(html`<cosmoz-tab name="tab0"><test-encloses><test-encloses></cosmoz-tab>`),
			enclosed = tab.querySelector('test-encloses').shadowRoot.querySelector('#enclosed');
		assert.isTrue(encloses(tab, enclosed));
	});
});
