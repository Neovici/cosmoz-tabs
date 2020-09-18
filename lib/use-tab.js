import {
	useEffect, useCallback
} from 'haunted';
import { notifyProperty } from './utils';

const useTabProperty = (host, name) => {
		const value = host[name];
		useEffect(() => {
			notifyProperty(host, name, value);
		}, [name, value]);

	},

	useTabProperties = host => {
		useTabProperty(host, 'hidden');
		useTabProperty(host, 'disabled');
		useTabProperty(host, 'heading');
		useTabProperty(host, 'badge');
		useTabProperty(host, 'iconStyle');

	},
	useTab = host => {
		useTabProperties(host);
		const onSlot = useCallback(({ target }) => host.toggleAttribute(
			'has-cards',
			target.assignedElements().some(el => el.matches('cosmoz-tab-card'))
		), []);

		return { onSlot };
	};

export {
	useTab
};
