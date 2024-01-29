import { html } from 'haunted';
import '../src/cosmoz-tabs';
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
	`,
	tabCardCollapse = () => html`
		<cosmoz-tabs .selected=${'tab1'}>
			<cosmoz-tab heading="Tab 1" name="tab1"
				><cosmoz-tab-card-next heading="Gianni"
					><cosmoz-collapse
						heading="Paperino"
					></cosmoz-collapse></cosmoz-tab-card-next
			></cosmoz-tab>
			<cosmoz-tab heading="Tab 2" name="tab2" badge="3"></cosmoz-tab>
			<cosmoz-tab heading="Tab 3" name="tab3" badge="4"></cosmoz-tab>
		</cosmoz-tabs>
	`;

export { basics, tabCardCollapse };
