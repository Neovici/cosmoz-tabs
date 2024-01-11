import { html, component, useEffect } from '@pionjs/pion';
import style from './cosmoz-tabs.css';

const Tabs = (host) => {
	useEffect(() => {
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
