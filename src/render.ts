import { html, nothing, type TemplateResult } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import type { TabElement } from './utils';

interface RenderTabOptions {
	selectedTab?: TabElement;
	onSelect: (e: MouseEvent) => void;
	href: (tab: TabElement) => string | undefined;
}

const renderTab =
	({ selectedTab, onSelect, href }: RenderTabOptions) =>
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
			aria-selected=${isSelected ? 'true' : 'false'}
			@click=${onSelect}
			.tab=${tab}
			href=${ifDefined(href(tab))}
		>
			${(tab.icon as TemplateResult) ?? nothing}
			<span>${tab.heading}</span>
			${tab.badge
				? html`<div class="badge" part="badge" title=${tab.badge}>
						${tab.badge}
				  </div>`
				: nothing}
		</a>`;
	};

export { renderTab };
