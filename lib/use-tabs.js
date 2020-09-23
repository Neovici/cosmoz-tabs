import { notifyProperty } from '@neovici/cosmoz-utils/lib/hooks/use-notify-property';
import {
	useState, useEffect, useMemo, useCallback
} from 'haunted';
import {
	useHashParam, link
} from './use-hash-param';
import {
	elect, getName, isValid
} from './utils';

const useTabs = host => {
	const {
			selected, hashParam
		} = host,
		[tabs, setTabs] = useState([]),
		param = useHashParam(hashParam),
		selection = hashParam == null || param == null && selected != null ? selected : param,
		elected = useMemo(() => elect(tabs, selection), [tabs, selection]);

	useEffect(() => {
		if (!elected) {
			return;
		}
		elected.toggleAttribute('is-selected', true);
		const opts = {
			bubbles: false,
			composed: true
		};
		if (!elected._active) {
			elected.dispatchEvent(new CustomEvent('tab-first-select', opts));
			elected._active = true;
		}

		elected.dispatchEvent(new CustomEvent('tab-select', opts));
		requestAnimationFrame(() => window.dispatchEvent(new Event('resize')));
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

	const href = useCallback(tab => isValid(tab) ? link(hashParam, getName(tab)) : undefined, [hashParam]);

	return {
		tabs,
		elected,
		onSlot: useCallback(({ target }) => setTabs(target.assignedElements().filter(el => el.matches('cosmoz-tab'))), []),
		onElect: useCallback(e => {
			if (e.button !== 0 || e.metaKey || e.ctrlKey) {
				return;
			}
			const { tab } = e.currentTarget;
			notifyProperty(host, 'selected', getName(tab));

			if (hashParam == null) {
				return;
			}

			e.preventDefault();
			window.history.pushState({}, '', href(tab));
			queueMicrotask(() => window.dispatchEvent(new CustomEvent('hash-changed')));

		}, []),
		href
	};
};

export { useTabs };
