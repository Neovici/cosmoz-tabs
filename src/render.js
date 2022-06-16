import { html } from 'haunted';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { getIcon, getIconStyle } from './utils';

const style = `
:host {
	position: relative;
	display: flex;
	flex-direction: column;
	font-family: var(--cosmoz-font-base, inherit);
	font-size: 14px;
}

.tabs {
	background-color: var(--cosmoz-tabs-bg-color, #fff);
	color: var(--cosmoz-tabs-text-color, #606c7e);
	font-family: var(--cosmoz-tabs-font-family, inherit);
	font-size: var(--cosmoz-tabs-font-size, 13px);
	line-height: var(--cosmoz-tabs-line-height, 19px);
	box-shadow: var(--cosmoz-tabs-shadow, inset 0 -1px 0 0 #e5e6eb);
	flex: none;
	display: flex;
	align-items: center;
	overflow-x:  auto;
	-webkit-overflow-scrolling: auto;
	scrollbar-width: none;
	padding-bottom: 1px;
}
.tabs::-webkit-scrollbar {
	display: none;
}

.tab {
	position: relative;
	display: flex;
	box-sizing: border-box;
	align-items: center;
	justify-content: center;
	flex: 1;
	padding: 11px 24px;
	color: inherit;
	text-decoration: none;
	text-align: center;
	letter-spacing: 0.3px;
	text-overflow: ellipsis;
	white-space: nowrap;
	cursor: pointer;
	/* TODO(accessibility): focused tab should be outlined */
	outline: 0;
}

.tab[aria-selected] {
	color: var(--cosmoz-tabs-accent-color, #508aef);
	box-shadow: inset 0 -3px 0px 0px var(--cosmoz-tabs-accent-color, #508aef);
	font-weight: 700;
	letter-spacing: 0;
}

.tab[disabled] {
	opacity: 0.4;
	pointer-events: none;
}

.icon {
	height: 13px;
	width: 13px;
	margin: 0 10px 0 10px;
	flex-shrink: 0;
}

#content {
	display: flex;
	flex-direction: column;
	flex: auto;
}

.tab[hidden],
#content ::slotted(:not(slot):not([is-selected])) {
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
		selectedTab,
		onSelect,
		href
	}) => (tab, i, tabs) => {
		const isSelected = selectedTab === tab,
			icon = getIcon(tab, isSelected);
		return html`<a class="tab" tabindex="-1" role="tab"
			part=${ ['tab', i === 0 && 'first-tab', i === tabs.length - 1 && 'last-tab', isSelected && 'selected-tab'].filter(Boolean).join(' ') }
			?hidden=${ tab.hidden } ?disabled=${ tab.disabled }
			?aria-selected=${ isSelected }
			@click=${ onSelect }
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
