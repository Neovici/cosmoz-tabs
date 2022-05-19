import { html } from 'haunted';
import { until } from 'lit-html/directives/until.js';

import '../src/cosmoz-tabs';
import '@polymer/iron-list';

export default {
	title: 'Tabs',
	component: 'cosmoz-tabs'
};

const basic = () => html`
	<cosmoz-tabs .selected=${ 'tab2' }>
		<cosmoz-tab heading="Tab1" name="tab1">
		<p>
		  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum massa ante,
		  maximus in consectetur non, imperdiet ullamcorper risus. Donec vulputate justo nibh.
		  Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
		  Integer tempor, lorem eget porta maximus, lectus ligula varius eros, non pharetra magna magna
		  vel mauris. Mauris et nunc ligula. Donec quis cursus eros. Nam fermentum dictum erat,
		  quis suscipit dui. Etiam nec velit tellus. Pellentesque sed porttitor orci.
		  Cras eget imperdiet libero.
		</p>
		</cosmoz-tab>
		<cosmoz-tab heading="Tab2" name="tab2">
		<p>
		  Fusce consectetur nisi at felis finibus rutrum. Vestibulum fermentum pharetra sem,
		  vitae tincidunt est mattis tristique. Donec blandit nulla non tellus tincidunt pretium.
		  Phasellus et purus id dolor venenatis mollis. Vivamus malesuada risus lorem,
		  vitae iaculis mauris viverra non. Integer quam sapien, pulvinar ut porta ac,
		  semper in velit. Donec consectetur, odio a efficitur maximus, nisl felis egestas sapien,
		  eu ullamcorper elit arcu eget urna. Sed ullamcorper felis nibh, in mattis diam iaculis id.
		  Aenean consequat nulla justo, ac commodo nulla congue non. Nam et dui in nunc mattis gravida
		  rutrum ac mauris.
		</p>
		</cosmoz-tab>
		<cosmoz-tab heading="Tab3" name="tab3">
		<p>
		  Etiam ante dolor, commodo non vestibulum vel, malesuada a nunc. Vestibulum accumsan,
		  sapien eu gravida consectetur, purus felis lobortis massa, id consequat eros lacus sit amet quam.
		  Nunc bibendum elit turpis. Ut et convallis quam, ut elementum enim. Aenean semper mattis enim
		  quis luctus. Vivamus libero urna, dictum non lacus a, porta consequat lacus. Etiam eu nisi diam.
		  Nam varius non ex vitae scelerisque.
		</p>
		</cosmoz-tab>
	</cosmoz-tabs>`,

	hash = () => html`
	<cosmoz-tabs hash-param="tab">
		<cosmoz-tab heading="Tab1" name="tab0">
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum massa ante,
				maximus in consectetur non, imperdiet ullamcorper risus. Donec vulputate justo nibh.
			</p>
		</cosmoz-tab>
		<cosmoz-tab heading="Tab2" name="tab1">
			<p>
				Fusce consectetur nisi at felis finibus rutrum. Vestibulum fermentum pharetra sem,
				vitae tincidunt est mattis tristique. Donec blandit nulla non tellus tincidunt pretium.
			</p>
		</cosmoz-tab>
		<cosmoz-tab heading="Tab3" name="tab2">
			<p>
				Etiam ante dolor, commodo non vestibulum vel, malesuada a nunc. Vestibulum accumsan,
				sapien eu gravida consectetur, purus felis lobortis massa, id consequat eros lacus sit amet quam.
			</p>
		</cosmoz-tab>
	</cosmoz-tabs>`,

	sizing = () => html`${ until(fetch('/node_modules/@polymer/iron-list/demo/data/contacts.json').then(r => r.json()).then(items => html`
	<cosmoz-tabs style="height: 400px">
		<cosmoz-tab heading="Flex List" name="tab1">
			<iron-list style="flex:1 0.000000001px;" .items=${ items } as="item">
				<template>
					<div class="item">
						<b>#[[index]] - [[item.index]] - [[item.name]]</b>
						<p>[[item.longText]]</p>
					</div>
				</template>
			</iron-list>
		</cosmoz-tab>
		<cosmoz-tab heading="Sized List" name="tab2">
			<iron-list style="height: 300px;" .items=${ items } as="item">
				<template>
					<div class="item">
						<b>#[[index]] - [[item.index]] - [[item.name]]</b>
						<p>[[item.longText]]</p>
					</div>
				</template>
			</iron-list>
		</cosmoz-tab>
		<cosmoz-tab heading="Content" name="tab3">
			${ items.map((item, index) => html`
					<div class="item">
						<b>#${ index }- ${ item.name }</b>
						<p>${ item.longText }</p>
					</div>
				`) }
			</p>
		</cosmoz-tab>
	</cosmoz-tabs>`), 'Loading') }`;
export {
	basic,
	hash,
	sizing
};
