import { playwright } from '@vitest/browser-playwright';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		projects: [false, true].map((touch) => ({
			test: {
				name: touch ? 'touch' : 'pointer',
				include: ['test/mobile-targets.browser.ts'],
				browser: {
					enabled: true,
					headless: true,
					provider: playwright({ contextOptions: { hasTouch: touch } }),
					viewport: { width: 390, height: 844 },
					instances: [{ browser: 'chromium' as const }],
				},
			},
		})),
	},
});
