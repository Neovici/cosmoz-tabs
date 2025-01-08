import { x } from './lit-html-CmtJAihu.js';
import './cosmoz-tabs-BgsztwmZ.js';
import './if-defined-Bb7yiZFq.js';

var cosmozTabCard_stories = {
  title: "Card",
  component: "cosmoz-tab-card"
};
const alternateIcon = x`<svg
	slot="collapse-icon"
	width="11"
	height="11"
	viewBox="0 0 11 11"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<path
		d="M4 10L8 5.5L4 1"
		stroke="black"
		stroke-width="1.5"
		stroke-linecap="round"
	/>
</svg>`;
const basics = () => x` <style>
			body {
				--cosmoz-tab-card-padding: 1em;
				font-family: 'Inter' sans-serif;
			}
		</style>
		<cosmoz-tabs selected="tab2">
			<cosmoz-tab heading="Tab1" name="tab1">
				<cosmoz-tab-card heading="Card1">
					<p>
						Duis suscipit commodo commodo. Fusce hendrerit gravida urna.
						Pellentesque facilisis lacinia felis ut auctor. Aenean nec diam
						tempus, suscipit est ut, finibus nulla. Vestibulum auctor diam
						risus, at interdum libero ultrices vitae. Suspendisse tincidunt erat
						a ipsum aliquam, quis consequat tortor rutrum. Morbi sapien erat,
						mollis a felis eget, faucibus laoreet ante.
					</p>
				</cosmoz-tab-card>
			</cosmoz-tab>
			<cosmoz-tab heading="Tab2" name="tab2">
				<cosmoz-tab-card collapsable collapsed heading="Card2">
					<p>
						Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
						posuere cubilia Curae; Fusce non libero eget lorem interdum lacinia.
						Vivamus eu libero lacus. Vestibulum blandit ornare orci non
						imperdiet. Aliquam condimentum lacus mauris, id aliquet lectus
						faucibus vel. Aliquam luctus vulputate iaculis. Vestibulum eu
						sagittis nisi, sed gravida ante.
					</p>
				</cosmoz-tab-card>
				<cosmoz-tab-card collapsable heading="Card3">
					<p>
						Class aptent taciti sociosqu ad litora torquent per conubia nostra,
						per inceptos himenaeos. Nulla facilisi. Sed laoreet mi eget
						consequat consequat. Fusce pretium ligula vel velit hendrerit
						sagittis. Aenean imperdiet interdum dolor sit amet dapibus.
						Suspendisse eget accumsan odio, sit amet facilisis diam. Interdum et
						malesuada fames ac ante ipsum primis in faucibus. Praesent magna
						elit, tristique sed consectetur at, tristique nec leo. Nullam sit
						amet mauris mauris.
					</p>
				</cosmoz-tab-card>
			</cosmoz-tab>
			<cosmoz-tab heading="Tab3" name="tab3">
				<style>
					cosmoz-tab[name='tab3'] cosmoz-tab-card {
						--cosmoz-tab-card-collapse-icon-order: 1;
					}
				</style>
				<cosmoz-tab-card heading="Card4" collapsable collapsed>
					${alternateIcon}

					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
						massa ante, maximus in consectetur non, imperdiet ullamcorper risus.
						Donec vulputate justo nibh. Pellentesque habitant morbi tristique
						senectus et netus et malesuada fames ac turpis egestas. Integer
						tempor, lorem eget porta maximus, lectus ligula varius eros, non
						pharetra magna magna vel mauris. Mauris et nunc ligula. Donec quis
						cursus eros. Nam fermentum dictum erat, quis suscipit dui. Etiam nec
						velit tellus. Pellentesque sed porttitor orci. Cras eget imperdiet
						libero.
					</p>
				</cosmoz-tab-card>
				<cosmoz-tab-card heading="Card5" collapsable>
					${alternateIcon}

					<em slot="after-title"> Summary</em>

					<p>
						Fusce consectetur nisi at felis finibus rutrum. Vestibulum fermentum
						pharetra sem, vitae tincidunt est mattis tristique. Donec blandit
						nulla non tellus tincidunt pretium. Phasellus et purus id dolor
						venenatis mollis. Vivamus malesuada risus lorem, vitae iaculis
						mauris viverra non. Integer quam sapien, pulvinar ut porta ac,
						semper in velit. Donec consectetur, odio a efficitur maximus, nisl
						felis egestas sapien, eu ullamcorper elit arcu eget urna. Sed
						ullamcorper felis nibh, in mattis diam iaculis id. Aenean consequat
						nulla justo, ac commodo nulla congue non. Nam et dui in nunc mattis
						gravida rutrum ac mauris.
					</p>
				</cosmoz-tab-card>
				<cosmoz-tab-card heading="Card6">
					<p>
						Etiam ante dolor, commodo non vestibulum vel, malesuada a nunc.
						Vestibulum accumsan, sapien eu gravida consectetur, purus felis
						lobortis massa, id consequat eros lacus sit amet quam. Nunc bibendum
						elit turpis. Ut et convallis quam, ut elementum enim. Aenean semper
						mattis enim quis luctus. Vivamus libero urna, dictum non lacus a,
						porta consequat lacus. Etiam eu nisi diam. Nam varius non ex vitae
						scelerisque.
					</p>
				</cosmoz-tab-card>
			</cosmoz-tab>
		</cosmoz-tabs>`;
const __namedExportsOrder = ["basics"];

export { __namedExportsOrder, basics, cosmozTabCard_stories as default };
