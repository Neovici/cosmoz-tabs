export interface Tab {
	name: string;
	hidden?: boolean;
	disable?: boolean;
	fallback?: boolean;
}

export interface RenderTab extends Tab {
	title?: string;
}

export interface Options {
	hashParam?: string;
}

type Unpacked<T> = T extends (infer U)[] ? U : T;

interface Result<T extends Tab> {
	tabs: T[];
	active: T;
	activated: () => boolean;
	activate: (tab: T['name']) => void;
	onActivate: (e: Event) => void;
}

export declare const useTabs: <T extends Tab, P extends Options>(
	tabs: T[],
	opts: P
) => Result<T>;

export interface RenderOptions<T extends RenderTab> {
	tabs: T[];
	active: T;
	onActivate: (e: Event) => void;
}

export declare const renderTabs: <T extends Tab, P extends Options>(
	tabs: T[],
	opts: P
) => Result<T>;
