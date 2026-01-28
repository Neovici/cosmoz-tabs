import { html, useCallback, useMemo, useRef } from '@pionjs/pion';
import { ifDefined } from 'lit-html/directives/if-defined.js';

import { useHashParam } from '@neovici/cosmoz-router/use-hash-param';
import { invoke } from '@neovici/cosmoz-utils/function';

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

export const useTabs = (tabs, { hashParam, onActivate }) => {
	const [name, activate] = useHashParam(hashParam),
		ref = useRef([]),
		active = useMemo(() => choose(tabs, name), [tabs, name]),
		activated = useMemo(() => {
			const name = active.name;
			return (ref.current = [...ref.current.filter((i) => i !== name), name]);
		}, [active]);

	return {
		tabs,
		active,
		activated,
		activate,
		onActivate: useCallback(
			(e) => {
				if (e.button !== 0 || e.metaKey || e.ctrlKey) {
					return;
				}
				const name = e.currentTarget?.getAttribute('name');
				if (!name) {
					return;
				}
				onActivate?.(name);
				activate(name);
			},
			[activate, onActivate],
		),
	};
};

export const renderTabs = ({ tabs, active, onActivate, className }) =>
	tabs.map((tab) => {
		const title = invoke(tab.title);
		return html`<cosmoz-tab-next
			name=${tab.name}
			class=${ifDefined(className)}
			title=${ifDefined(typeof title === 'string' ? title : undefined)}
			?active=${active.name === tab.name}
			?hidden=${tab.hidden}
			?disabled=${tab.disabled}
			.badge=${tab.badge}
			@click=${onActivate}
			>${tab.content ?? title}</cosmoz-tab-next
		>`;
	});

export const renderActivated = ({ tabs, active, activated }, render) =>
	tabs
		.filter((t) => activated.includes(t.name))
		.map((tab) => render({ ...tab, isActive: active.name === tab.name }));
