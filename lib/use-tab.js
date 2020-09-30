import { render } from 'lit-html';
import {
	useEffect, useCallback
} from 'haunted';

import { useNotifyProperty } from '@neovici/cosmoz-utils/lib/hooks/use-notify-property';

const useTab = host => {
	useEffect(() => {
		host.dispatchEvent(new CustomEvent('cosmoz-tab-alter', {
			bubbles: true,
			composed: true
		}));
	}, [host.hidden, host.disabled, host.heading, host.badge, host.iconStyle]);

	useNotifyProperty('isSelected', host.isSelected);

	useEffect(() => {
		if (!host.isSelected || !host.render) {
			return;
		}
		render(host.render(host), host);
	}, [host.isSelected], host.render);

	return {
		onSlot: useCallback(({ target }) => host.toggleAttribute(
			'has-cards',
			target.assignedElements().some(el => el.matches('cosmoz-tab-card'))
		), [])
	};
};

export {
	useTab
};
