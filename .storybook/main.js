export default {
	stories: ['../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	addons: [
		'@storybook/addon-docs',
		'@storybook/addon-a11y',
		'@storybook/addon-vitest',
		'@neovici/cfg/storybook/preset.mjs',
	],
	framework: {
		name: '@storybook/web-components-vite',
		options: {},
	},
	docs: {
		autodocs: 'tag',
	},
	// pre-bundle the storybook-side deps so the optimizer settles before
	// tests start: a cold-cache mid-test re-optimization reloads the
	// iframe and kills the running tests (cosmoz-slideout#ci-flake).
	viteFinal: (config) => ({
		...config,
		optimizeDeps: {
			...config.optimizeDeps,
			include: [
				...(config.optimizeDeps?.include ?? []),
				'lit-html/directives/if-defined.js',
				'lit-html/directives/ref.js',
			],
		},
	}),
};
