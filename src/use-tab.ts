import { useNotifyProperty } from '@neovici/cosmoz-utils/hooks/use-notify-property';
import { useCallback, useEffect } from '@pionjs/pion';
import type { TabElement } from './utils';

const useTab = (host: TabElement) => {
	useEffect(() => {
		host.dispatchEvent(
			new CustomEvent('cosmoz-tab-alter', {
				bubbles: true,
				composed: true,
			}),
		);
	}, [host.hidden, host.disabled, host.heading, host.badge, host.icon]);

	useNotifyProperty('isSelected', host.isSelected);

	return {
		onSlot: useCallback(
			({ target }: { target: HTMLSlotElement }) =>
				host.toggleAttribute(
					'has-cards',
					target
						.assignedElements()
						.some((el) => el.matches('cosmoz-tab-card, [has-cards]')),
				),
			[],
		),
	};
};

export { useTab };
