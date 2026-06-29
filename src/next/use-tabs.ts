import { useHashParam } from '@neovici/cosmoz-router/use-hash-param';
import { invoke } from '@neovici/cosmoz-utils/function';
import { html, useCallback, useMemo, useRef } from '@pionjs/pion';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import type { TabsVariant } from '../styles';

export type { TabsVariant };

export interface Tab {
	name: string;
	hidden?: boolean;
	disabled?: boolean;
	fallback?: boolean;
}

export interface RenderTab extends Tab {
	title?: string | (() => string);
	badge?: string;
	content?: unknown;
}

export interface Options {
	hashParam?: string;
	onActivate?: (name: string) => void;
}

export interface Result<T extends Tab> {
	tabs: T[];
	active: T;
	activated: string[];
	activate: (name: string) => void;
	onActivate: (e: Event) => void;
}

export interface RenderTabsOptions<T extends RenderTab> {
	tabs: T[];
	active: T;
	onActivate: (e: Event) => void;
	className?: string;
	variant?: TabsVariant;
	compactWidth?: boolean;
}

export type RenderTabs<T extends RenderTab> = RenderTabsOptions<T>;

const isValid = (tab: Tab): boolean => !tab.hidden && !tab.disabled;

const valid = <T extends Tab>(tabs: T[]): T | undefined =>
	tabs
		.slice()
		.sort((a, b) => Number(b.fallback ?? false) - Number(a.fallback ?? false))
		.find(isValid);

const choose = <T extends Tab>(tabs: T[], name?: string): T | undefined => {
	const tab = name ? tabs.find((t) => t.name === name) : undefined;
	return tab && isValid(tab) ? tab : valid(tabs);
};

export const useTabs = <T extends Tab>(
	tabs: T[],
	{ hashParam, onActivate }: Options = {}
): Result<T> => {
	const [name, activate] = useHashParam(hashParam),
		ref = useRef<string[]>([]),
		active = useMemo(() => choose(tabs, name ?? undefined), [tabs, name]) as T,
		activated = useMemo(() => {
			const current = active?.name;
			return (ref.current = [
				...(ref.current ?? []).filter((i) => i !== current),
				current,
			].filter(Boolean) as string[]);
		}, [active]);

	return {
		tabs,
		active,
		activated,
		activate,
		onActivate: useCallback(
			(e: Event) => {
				const me = e as MouseEvent;
				if (me.button !== 0 || me.metaKey || me.ctrlKey) {
					return;
				}
				const tabName = (e.currentTarget as Element | null)?.getAttribute(
					'name'
				);
				if (!tabName) {
					return;
				}
				onActivate?.(tabName);
				activate(tabName);
			},
			[activate, onActivate]
		),
	};
};

export const renderTabs = <T extends RenderTab>({
	tabs,
	active,
	onActivate,
	className,
	variant,
	compactWidth,
}: RenderTabsOptions<T>) =>
	tabs.map((tab) => {
		const title = invoke(tab.title);
		return html`<cosmoz-tab-next
			name=${tab.name}
			class=${ifDefined(className)}
			variant=${ifDefined(variant)}
			?compact-width=${ifDefined(compactWidth)}
			title=${ifDefined(title)}
			?active=${active?.name === tab.name}
			?hidden=${tab.hidden}
			?disabled=${tab.disabled}
			.badge=${tab.badge}
			@click=${onActivate}
			>${tab.content ?? title}</cosmoz-tab-next
		>`;
	});

export const renderActivated = <T extends RenderTab, R>(
	{ tabs, active, activated }: { tabs: T[]; active: T; activated: string[] },
	render: (t: T & { isActive: boolean }) => R
): R[] =>
	tabs
		.filter((t) => activated.includes(t.name))
		.map((tab) => render({ ...tab, isActive: active?.name === tab.name }));
