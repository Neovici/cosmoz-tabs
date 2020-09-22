import {
	useEffect, useCallback
} from 'haunted';

const useTab = host => {
	useEffect(() => {
		host.dispatchEvent(new CustomEvent('cosmoz-tab-alter', {
			bubbles: true,
			composed: true
		}));
	}, [host.hidden, host.disabled, host.heading, host.badge, host.iconStyle]);

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
