import { html } from 'haunted';
import { ifDefined } from 'lit-html/directives/if-defined';

import {
	getIcon, getIconStyle
} from './utils';

const style = `
:host {
	position: relative;
	display: flex;
	flex-direction: column;
	font-family: var(--cosmoz-font-base, inherit);
	font-size: 14px;
}

.tabs {
	background-color: #fff;
	margin-bottom: 3px;
	box-shadow: var(--cosmoz-shadow-2dp, var(--shadow-elevation-2dp_-_box-shadow, 0 2px 4px 0 #e5e5e5));
	flex: none;
	display: flex;
	align-items: center;
	overflow: hidden;
	touch-action: pan-y;
}

.tab {
	display: block;
	flex: 1;
	padding: 0.909em 12px;
	color: inherit;
	text-decoration: none;
	text-align: center;
	font-size: 1.14285em;
	line-height: 1.2;
	font-weight: 300;
	text-overflow: ellipsis;
	white-space: nowrap;
	cursor: pointer;
	/* TODO(accessibility): focused tab should be outlined */
	outline: 0;
}

.tab[aria-selected] {
	box-shadow: inset 0 -1.4px 0px 0px var(--cosmoz-tabs-selection-bar-color, #00b4db);
	font-weight: 400;
}

.tab[disabled] {
	opacity: 0.65;
}

.icon {
	height: 13px;
	width: 13px;
	margin: 0 10px 0 10px;
	flex-shrink: 0;
	display: none;
	@apply --cosmoz-tabs-icon;
}

#content {
	display: flex;
	flex-direction: column;
	flex: auto;
}

.tab[hidden],
#content ::slotted(:not([is-selected])) {
	display: none !important;
}

.badge {
	font-family: var(--cosmoz-font-base, "Verdana, Arial, sans-serif");
	font-weight: normal;
	font-size: 11px;
	line-height: 1;
	border-radius: 0.90909em;
	box-sizing: border-box;

	transform: translateY(-50%);
	vertical-align: top;
	min-width: 1.81818em;
	padding: 0.40909em 0.36363em;

	max-width: 80px;
	text-overflow: ellipsis;
	overflow: hidden;

	background-color: var(--accent-color, #ff4081);
	color: #ffffff;
	text-align: center;
}`,

	renderTab = ({
		elected,
		onElect,
		href
	}) => tab => {
		const isSelected = elected === tab,
			icon = getIcon(tab, isSelected);
		return html`<a class="tab" tabindex="-1" role="tab"
			?hidden=${ tab.hidden } ?disabled=${ tab.disabled }
			?aria-selected=${ isSelected }
			@click=${ onElect }
			.tab=${ tab }
			href=${ ifDefined(href(tab)) }
		>
			${ icon ? html `<iron-icon class="icon" icon=${ icon } style=${ getIconStyle(tab) }></iron-icon>` : '' }
			<span>${ tab.heading }</span>
			${ tab.badge ? html`<div class="badge" title=${ tab.badge }>${ tab.badge }</div>` : '' }
		</a>`;
	};

export {
	style,
	renderTab
};
