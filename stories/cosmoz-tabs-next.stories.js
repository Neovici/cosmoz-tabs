import { html } from 'lit-html';

import '../src/next';

export default {
	title: 'Tabs (next)',
	component: 'cosmoz-tabs-next',
};

const basics = () => html`
	<cosmoz-tabs-next>
		<cosmoz-tab-next disabled>Tab1</cosmoz-tab-next>
		<cosmoz-tab-next disabled badge="2">Tab2</cosmoz-tab-next>
		<cosmoz-tab-next hidden badge="3">Tab3</cosmoz-tab-next>
		<cosmoz-tab-next badge="4" active href="#123">Tab4</cosmoz-tab-next>
		${Array(6)
			.fill()
			.map((_, i) => html`<cosmoz-tab-next>Tab ${5 + i}</cosmoz-tab-next>`)}
	</cosmoz-tabs-next>
`;

export { basics };
