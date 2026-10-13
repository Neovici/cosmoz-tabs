import '@neovici/cosmoz-dropdown/cosmoz-dropdown-next';
import { chevronDownIcon } from '@neovici/cosmoz-icons/untitled';
import { t } from 'i18next';
import { html, type TemplateResult } from 'lit-html';

export const plain = (e: MouseEvent) =>
	e.button === 0 && !e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey;

/** asks the dropdown to close; `select` is its close request event */
export const closeMenu = (target: EventTarget | null) =>
	(target as HTMLElement | null)?.dispatchEvent(
		new Event('select', { bubbles: true }),
	);

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

/**
 * The overflow dropdown: a trigger and a popover of rows. Keyboard
 * behavior is the platform's - the trigger is a native button and the
 * rows are tabbable, `cosmoz-tab-next` handling Enter/Space itself.
 */
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
	>
		<button
			class="more-button"
			part="more-button"
			slot="button"
			type="button"
			aria-expanded="false"
			aria-haspopup="true"
			aria-controls="more-menu"
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
			@click=${onItemClick}
		>
			${items}
		</div>
	</cosmoz-dropdown-next>
`;
