import { html, nothing, type TemplateResult } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { closeMenu } from './overflow-menu';
import type { TabElement } from './utils';

interface RenderTabOptions {
	selectedTab?: TabElement;
	onSelect: (e: MouseEvent) => void;
	href: (tab: TabElement) => string | undefined;
	overflowing?: Set<TabElement>;
}

const content = (tab: TabElement) => html`
	${(tab.icon as TemplateResult) ?? nothing}
	<span>${tab.heading}</span>
	${tab.badge
		? html`<div class="badge" part="badge" title=${tab.badge}>
				${tab.badge}
		  </div>`
		: nothing}
`;

const renderTab =
	({ selectedTab, onSelect, href, overflowing }: RenderTabOptions) =>
	(tab: TabElement, i: number, tabs: TabElement[]): TemplateResult => {
		const isSelected = selectedTab === tab;
		return html`<a
			class="tab"
			tabindex=${isSelected ? '0' : '-1'}
			role="tab"
			part=${[
				'tab',
				i === 0 && 'first-tab',
				i === tabs.length - 1 && 'last-tab',
				isSelected && 'selected-tab',
			]
				.filter(Boolean)
				.join(' ')}
			?hidden=${tab.hidden}
			?disabled=${tab.disabled}
			?overflowing=${overflowing?.has(tab)}
			aria-selected=${isSelected ? 'true' : 'false'}
			@click=${onSelect}
			.tab=${tab}
			href=${ifDefined(href(tab))}
		>
			${content(tab)}
		</a>`;
	};

// one tab stop for the whole list; the arrows move focus from there
// the selected row if it is in the menu, otherwise the first one that works
const roving = (tabs: TabElement[], selectedTab?: TabElement) => {
	const selected = tabs.findIndex((t) => t === selectedTab && !t.disabled);
	return selected < 0 ? tabs.findIndex((t) => !t.disabled) : selected;
};

const renderMenuItem =
	({ selectedTab, onSelect, href }: RenderTabOptions) =>
	(tab: TabElement, i: number, tabs: TabElement[]): TemplateResult => {
		const isSelected = selectedTab === tab;
		return html`<a
			class="menu-item"
			tabindex=${i === roving(tabs, selectedTab) ? '0' : '-1'}
			role="tab"
			part=${isSelected ? 'menu-item selected-menu-item' : 'menu-item'}
			?disabled=${tab.disabled}
			aria-disabled=${ifDefined(tab.disabled ? 'true' : undefined)}
			aria-selected=${isSelected ? 'true' : 'false'}
			@click=${(e: MouseEvent) => {
				onSelect(e);
				closeMenu(e.currentTarget);
			}}
			.tab=${tab}
			href=${ifDefined(href(tab))}
		>
			${content(tab)}
		</a>`;
	};

export { renderMenuItem, renderTab };
