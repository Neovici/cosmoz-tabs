import '@neovici/cosmoz-dropdown/cosmoz-dropdown-next';
import { chevronDownIcon } from '@neovici/cosmoz-icons/untitled';
import { useEffect } from '@pionjs/pion';
import { html, type TemplateResult } from 'lit-html';

export const DEFAULT_MORE_LABEL = 'More';

// ?hidden takes the trigger out of the layout but leaves the popover itself open
export const useCloseWhenEmpty = (host: HTMLElement, overflows: boolean) =>
	useEffect(() => {
		if (overflows) {
			return;
		}
		const dropdown = host.shadowRoot?.querySelector<
			HTMLElement & { opened?: boolean }
		>('.more');
		if (dropdown?.opened) {
			dropdown.opened = false;
		}
	}, [overflows]);

export const closeMenu = (target: EventTarget | null) =>
	(target as HTMLElement | null)?.dispatchEvent(
		new Event('select', { bubbles: true })
	);

const focusItem = (items: HTMLElement[], index: number) =>
	items[(index + items.length) % items.length]?.focus();

export const onMenuKeydown = (e: KeyboardEvent) => {
	const menu = e.currentTarget as HTMLElement,
		items = [...menu.querySelectorAll<HTMLElement>('[role="tab"]')].filter(
			(el) => !el.hasAttribute('disabled')
		);

	if (items.length === 0) {
		return;
	}

	const current = items.indexOf(
		(e.composedPath() as HTMLElement[]).find((el) =>
			items.includes(el)
		) as HTMLElement
	);

	switch (e.key) {
		case 'ArrowDown':
			focusItem(items, current + 1);
			break;
		case 'ArrowUp':
			focusItem(items, current < 0 ? items.length - 1 : current - 1);
			break;
		case 'Home':
			focusItem(items, 0);
			break;
		case 'End':
			focusItem(items, items.length - 1);
			break;
		case 'Enter':
		case ' ':
			if (current < 0) {
				return;
			}

			items[current].click();
			break;
		default:
			return;
	}
	e.preventDefault();
};

const activeElement = (
	root: DocumentOrShadowRoot = document
): Element | null => {
	const el = root.activeElement;
	return el?.shadowRoot ? activeElement(el.shadowRoot) : el;
};

const onDropdownToggle = (e: ToggleEvent) => {
	const button = (e.currentTarget as HTMLElement).querySelector<HTMLElement>(
		'.more-button'
	);
	const open = e.newState === 'open';
	button?.setAttribute('aria-expanded', String(open));
	if (!open && activeElement() === document.body) {
		button?.focus();
	}
};

export interface OverflowMenuOptions {
	items: unknown;
	overflows: boolean;
	active: boolean;
	label: string;
}

export const renderOverflowMenu = ({
	items,
	overflows,
	active,
	label,
}: OverflowMenuOptions): TemplateResult => html`
	<cosmoz-dropdown-next
		class="more"
		part="more"
		placement="bottom span-left"
		?hidden=${!overflows}
		?data-active=${active}
		@dropdown-toggle=${onDropdownToggle}
	>
		<button
			class="more-button"
			part="more-button"
			slot="button"
			type="button"
			aria-expanded="false"
		>
			<span>${label}</span>
			<span class="chevron" aria-hidden="true"
				>${chevronDownIcon({ width: '16', height: '16' })}</span
			>
		</button>
		<div
			class="menu"
			part="menu"
			role="tablist"
			aria-orientation="vertical"
			@keydown=${onMenuKeydown}
		>
			${items}
		</div>
	</cosmoz-dropdown-next>
`;
