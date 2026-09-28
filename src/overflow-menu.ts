import '@neovici/cosmoz-dropdown/cosmoz-dropdown-next';
import { chevronDownIcon } from '@neovici/cosmoz-icons/untitled';
import { useEffect } from '@pionjs/pion';
import { t } from 'i18next';
import { html, type TemplateResult } from 'lit-html';

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

export const plain = (e: MouseEvent) =>
	e.button === 0 && !e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey;

export const closeMenu = (target: EventTarget | null) =>
	(target as HTMLElement | null)?.dispatchEvent(
		new Event('select', { bubbles: true }),
	);

const focusItem = (items: HTMLElement[], index: number) =>
	items[(index + items.length) % items.length]?.focus();

const itemsOf = (menu: HTMLElement) =>
	[
		...menu.querySelectorAll<HTMLElement>('[role="tab"], [role="radio"]'),
	].filter((el) => !el.hasAttribute('disabled') && !el.hasAttribute('hidden'));

export const onMenuKeydown = (e: KeyboardEvent) => {
	const menu = e.currentTarget as HTMLElement,
		items = itemsOf(menu);

	if (items.length === 0) {
		return;
	}

	const current = items.indexOf(
		(e.composedPath() as HTMLElement[]).find((el) =>
			items.includes(el),
		) as HTMLElement,
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
	root: DocumentOrShadowRoot = document,
): Element | null => {
	const el = root.activeElement;
	return el?.shadowRoot ? activeElement(el.shadowRoot) : el;
};

const onDropdownToggle = (e: ToggleEvent) => {
	const dropdown = e.currentTarget as HTMLElement,
		button = dropdown.querySelector<HTMLElement>('.more-button');
	const open = e.newState === 'open';
	button?.setAttribute('aria-expanded', String(open));
	const focused = (dropdown.getRootNode() as Document | ShadowRoot)
		.activeElement;
	if (
		!open &&
		(activeElement() === document.body ||
			(focused != null && dropdown.contains(focused)))
	) {
		button?.focus();
	}
};

const onTriggerKeydown = (e: KeyboardEvent) => {
	if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') {
		return;
	}
	const button = e.currentTarget as HTMLElement,
		dropdown = button.closest('.more') as HTMLElement & { opened?: boolean },
		menu = dropdown.querySelector<HTMLElement>('.menu');
	e.preventDefault();
	if (!dropdown.opened) {
		button.click();
	}
	const items = menu ? itemsOf(menu) : [];
	focusItem(items, e.key === 'ArrowDown' ? 0 : items.length - 1);
};

const labelOf = (label?: unknown) =>
	typeof label === 'string' && label ? label : t('More') || 'More';

export interface OverflowMenuOptions {
	items: unknown;
	overflows: boolean;
	active: boolean;
	label?: string;
	role?: 'tablist' | 'radiogroup';
	onItemClick?: (e: MouseEvent) => void;
}

export const renderOverflowMenu = ({
	items,
	overflows,
	active,
	label,
	role = 'tablist',
	onItemClick,
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
			aria-haspopup="true"
			aria-controls="more-menu"
			@keydown=${onTriggerKeydown}
		>
			<span>${labelOf(label)}</span>
			<span class="chevron" aria-hidden="true"
				>${chevronDownIcon({ width: '16', height: '16' })}</span
			>
		</button>
		<div
			id="more-menu"
			class="menu"
			part="menu"
			role=${role}
			aria-orientation="vertical"
			@keydown=${onMenuKeydown}
			@click=${onItemClick}
		>
			${items}
		</div>
	</cosmoz-dropdown-next>
`;
