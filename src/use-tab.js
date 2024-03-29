import { useEffect, useCallback } from '@pionjs/pion';
import { useNotifyProperty } from '@neovici/cosmoz-utils/hooks/use-notify-property';

const useTab = (host) => {
	useEffect(() => {
		host.dispatchEvent(
			new CustomEvent('cosmoz-tab-alter', {
				bubbles: true,
				composed: true,
			})
		);
	}, [
		host.hidden,
		host.disabled,
		host.heading,
		host.badge,
		host.icon,
		host.iconStyle,
	]);

	useNotifyProperty('isSelected', host.isSelected);

	return {
		onSlot: useCallback(
			({ target }) =>
				host.toggleAttribute(
					'has-cards',
					target.assignedElements().some((el) => el.matches('cosmoz-tab-card, [has-cards]'))
				),
			[]
		),
	};
};

export { useTab };
