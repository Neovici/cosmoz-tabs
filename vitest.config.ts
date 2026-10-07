import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vitest/config';

const dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
	// pre-bundle the browser project's runtime deps: the optimizer must
	// settle before tests start - a cold-cache mid-test re-optimization
	// reloads the page and kills running tests (cosmoz-slideout#ci-flake)
	optimizeDeps: {
		include: [
			'@neovici/cosmoz-utils',
			'@neovici/cosmoz-router',
			'@neovici/cosmoz-router/use-hash-param',
			'@neovici/cosmoz-tokens/normalize',
			'@neovici/cosmoz-dropdown/cosmoz-dropdown-next',
			'@neovici/cosmoz-icons/untitled',
			'@pionjs/pion',
			'i18next',
			'lit-html',
			'lit-html/directives/if-defined.js',
			'lit-html/directives/ref.js',
		],
	},
	test: {
		projects: [
			{
				extends: true,
				plugins: [
					storybookTest({
						configDir: path.join(dirname, '.storybook'),
						storybookScript: 'npm run storybook:start -- --no-open',
					}),
				],
				test: {
					name: 'storybook',
					browser: {
						enabled: true,
						provider: playwright({
							launchOptions: { args: ['--js-flags=--expose-gc'] },
						}),
						headless: true,
						instances: [{ browser: 'chromium' }],
					},
				},
			},
		],
	},
});
