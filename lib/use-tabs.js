import { notifyProperty } from '@neovici/cosmoz-utils/lib/hooks/use-notify-property';
import {
	useState, useEffect, useMemo, useCallback
} from 'haunted';
import { elect } from './utils';


const useTabs = host => {
	const { selected } = host,
		[tabs, setTabs] = useState([]),
		elected = useMemo(() => elect(tabs, selected), [tabs, selected]);

	useEffect(() => {
		if (!elected) {
			return;
		}
		elected.toggleAttribute('is-selected', true);
		queueMicrotask(() => window.dispatchEvent(new Event('resize')));
		return () => {
			elected.toggleAttribute('is-selected', false);
		};

	}, [elected]);

	useEffect(() => {
		const onTabAlter = e => {
			e.stopPropagation();
			setTabs(prev => prev.slice());
		};
		host.addEventListener('cosmoz-tab-alter', onTabAlter);
		return () => host.removeEventListener('cosmoz-tab-alter', onTabAlter);
	}, []);

	return {
		tabs,
		elected,
		onSlot: useCallback(({ target }) => setTabs(target.assignedElements().filter(el => el.matches('cosmoz-tab'))), []),
		onElect: useCallback(e => {
			const { tab } = e.currentTarget;
			notifyProperty(host, 'selected', tab.getAttribute('name'));
		}, [])
	};
};

export { useTabs };
