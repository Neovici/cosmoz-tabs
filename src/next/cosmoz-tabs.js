import { html, component, useLayoutEffect } from 'haunted';
import style from './cosmoz-tabs.css';

const Tabs = (host) => {
	useLayoutEffect(() => {
		host.setAttribute('role', 'tablist');
	}, []);

	return html`
		<style>
			${style}
		</style>
		<slot></slot>
	`;
};

customElements.define('cosmoz-tabs-next', component(Tabs));
