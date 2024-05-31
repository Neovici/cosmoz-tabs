export interface Tab {
	name: string;
	hidden?: boolean;
	disabled?: boolean;
	fallback?: boolean;
}

export interface RenderTab extends Tab {
	title?: string;
}

export interface Options {
	hashParam?: string;
	onActivate?: (name: string) => void;
}

type Unpacked<T> = T extends (infer U)[] ? U : T;

interface Result<T extends Tab> {
	tabs: T[];
	active: T;
	activated: () => boolean;
	activate: (tab: T['name']) => void;
	onActivate: (e: Event) => void;
}

export type RenderTabs<T extends Tab> = Pick<
	Result<T>,
	'tabs' | 'active' | 'onActivate'
>;

export declare const useTabs: <T extends Tab, P extends Options>(
	tabs: T[],
	opts?: P,
) => Result<T>;

export interface RenderOptions<T extends RenderTab> {
	tabs: T[];
	active: T;
	onActivate: (e: Event) => void;
}

export declare const renderTabs: <T extends Tab>(
	opts: RenderTabs<T>,
) => unknown;

export declare const renderActivated: <T extends Tab, R>(
	opts: RenderTabs<T>,
	render: (t: T & { isActive: boolean }) => R,
) => R[];
