import cfg from '@neovici/cfg/eslint/index.mjs';

export default [
	{
		ignores: ['coverage/**', 'storybook-static/**', 'dist/**'],
	},
	...cfg,
	{
		files: ['stories/**/*.js'],
		rules: {
			'max-lines': 'off',
		},
	},
];
