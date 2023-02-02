/* eslint-disable import/group-exports */
import { html, useMemo, useCallback, useRef } from 'haunted';
import { ifDefined } from 'lit-html/directives/if-defined.js';
/* eslint-disable-next-line import/no-unresolved */
import { useHashParam } from '@neovici/cosmoz-router/use-hash-param';

const isValid = (tab) => !tab.hidden && !tab.disabled,
	valid = (tabs) =>
		tabs
			.slice()
			// eslint-disable-next-line no-bitwise
			.sort((a, b) => (b.fallback >> 0) - (a.fallback >> 0))
			.find(isValid),
	choose = (tabs, name) => {
		const tab = name && tabs.find((tab) => tab.name === name);
		return tab && isValid(tab) ? tab : valid(tabs);
	};

export const useTabs = (tabs, { hashParam }) => {
	const [name, activate] = useHashParam(hashParam),
		ref = useRef([]),
		active = useMemo(() => choose(tabs, name), [tabs, name]),
		activated = useMemo(() => {
			const name = active.name;
			return (ref.current = [...ref.current.filter((i) => i !== name), name]);
		}, [active]),
		onActivate = useCallback(
			(e) => {
				if (e.button !== 0 || e.metaKey || e.ctrlKey) {
					return;
				}
				const name = e.currentTarget?.getAttribute('name');
				if (!name) {
					return;
				}
				activate(name);
			},
			[activate]
		);

	return {
		tabs,
		active,
		activated,
		activate,
		onActivate,
	};
};

export const renderTabs = ({ tabs, active, onActivate }) =>
	tabs.map(
		(tab) => html`<cosmoz-tab-next
			name=${tab.name}
			?active=${active.name === tab.name}
			?hidden=${tab.hidden}
			?disabled=${tab.disabled}
			title=${ifDefined(typeof tab.title === 'string' ? tab.title : undefined)}
			@click=${onActivate}
			>${tab.content ?? tab.title}</cosmoz-tab-next
		>`
	);
