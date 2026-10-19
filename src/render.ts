import { html, nothing, type TemplateResult } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import type { TabElement } from './utils';

interface RenderTabOptions {
	selectedTab?: TabElement;
	onSelect: (e: MouseEvent) => void;
	href: (tab: TabElement) => string | undefined;
	overflowing?: TabElement[];
}

const renderFace = (tab: TabElement) => html`
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
			?overflowing=${overflowing?.includes(tab)}
			aria-selected=${isSelected ? 'true' : 'false'}
			@click=${onSelect}
			.tab=${tab}
			href=${ifDefined(href(tab))}
		>
			${renderFace(tab)}
		</a>`;
	};

/** Anchors without an href do not activate on keys; the rows pick on both. */
const onMenuKey = (e: KeyboardEvent) => {
	const row = e.currentTarget as HTMLElement;
	if ((e.key !== 'Enter' && e.key !== ' ') || row.hasAttribute('disabled')) {
		return;
	}
	e.preventDefault();
	row.click();
};

const renderMenuTab =
	({ selectedTab, onSelect, href }: RenderTabOptions) =>
	(tab: TabElement): TemplateResult => {
		const isSelected = selectedTab === tab;
		return html`<a
			class="menu-tab"
			tabindex="0"
			role="tab"
			part=${isSelected ? 'menu-tab selected-menu-tab' : 'menu-tab'}
			?hidden=${tab.hidden}
			?disabled=${tab.disabled}
			aria-disabled=${ifDefined(tab.disabled ? 'true' : undefined)}
			aria-selected=${isSelected ? 'true' : 'false'}
			@click=${onSelect}
			@keydown=${onMenuKey}
			.tab=${tab}
			href=${ifDefined(href(tab))}
		>
			${renderFace(tab)}
		</a>`;
	};

export { renderMenuTab, renderTab };
