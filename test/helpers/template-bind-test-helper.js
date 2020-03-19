import { PolymerElement } from '@polymer/polymer/polymer-element';
import { html } from '@polymer/polymer/lib/utils/html-tag';

class TemplateBindTestHelper extends PolymerElement {
	static get template() {
		return html`
			<span id="testContent">[[ testProp ]]</span>
			<slot></slot>
		`;
	}

	static get properties() {
		return {
			testProp: {
				type: String,
				value: '',
				notify: true
			}
		};
	}
}
customElements.define('template-bind-test-helper', TemplateBindTestHelper);
