export interface Tab {
	hidden?: boolean;
	disable?: boolean;
}

export interface RenderTab extends Tab {
	name: string;
	title?: string;
}

export interface Options {
	hashParam?: string;
}

type Unpacked<T> = T extends (infer U)[] ? U : T;

export declare const useTabs: <T extends Tab, P extends Options>(
	tabs: T[],
	opts: P
) => {
	tabs: T[];
	active: T;
	activated: () => boolean;
	activate: (tab: T) => void;
	onActivate: (e: Event) => void;
};

export interface RenderOptions<T extends RenderTab> {
	tabs: T[];
	active: T;
	onActivate: (e: Event) => void;
}

export declare const renderTabs: <T extends Tab, P extends Options>(
	tabs: T[],
	opts: P
) => {
	tabs: T[];
	active: T;
	activated: () => boolean;
	activate: (tab: T) => void;
	onActivate: (e: Event) => void;
};
