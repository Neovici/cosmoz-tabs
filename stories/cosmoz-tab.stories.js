import { html } from 'haunted';

import '../cosmoz-tabs';

export default {
	title: 'Tab',
	component: 'cosmoz-tab'
};

const basics = () => html`
	<cosmoz-tabs selected="tab3">
		<cosmoz-tab heading="Tab1" name="tab1" disabled>
			<p>
			  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum massa ante,
			  maximus in consectetur non, imperdiet ullamcorper risus. Donec vulputate justo nibh.
			</p>
		</cosmoz-tab>
		<cosmoz-tab heading="Tab2" name="tab2" badge="2" icon-color="red" icon="icons:check-box-outline-blank" selected-icon="icons:check-box">
			<p>
			  Fusce consectetur nisi at felis finibus rutrum. Vestibulum fermentum pharetra sem,
			  vitae tincidunt est mattis tristique. Donec blandit nulla non tellus tincidunt pretium.
			  Phasellus et purus id dolor venenatis mollis.
			</p>
		</cosmoz-tab>
		<cosmoz-tab heading="Tab3" name="tab3" badge="3" hidden>
			<p>
			  Etiam ante dolor, commodo non vestibulum vel, malesuada a nunc. Vestibulum accumsan,
			  sapien eu gravida consectetur, purus felis lobortis massa, id consequat eros lacus sit amet quam.
			  Nunc bibendum elit turpis.
			</p>
		</cosmoz-tab>
		<cosmoz-tab heading="Tab4" name="tab4" badge="4">
			<p>
			Sed pretium a felis sed dictum. Vestibulum ornare quam in metus vehicula consectetur.
			Proin faucibus ac sapien vel bibendum. Quisque molestie cursus lacus.
			Maecenas sit amet finibus diam, eget finibus nisi. Integer eget laoreet metus. Fusce quis molestie massa.
			</p>
		</cosmoz-tab>
	</cosmoz-tabs>
`;

export {
	basics
};
