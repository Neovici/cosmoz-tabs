import '@neovici/cosmoz-tokens';
import { html } from 'lit-html';
import { within as withinShadow } from 'shadow-dom-testing-library';

export default {
	parameters: {
		docs: {
			source: {
				excludeDecorators: true,
				type: 'code',
				transform: (source) => {
					const match = source.match(/html`([\s\S]*?)`/u);
					return match?.[1]?.trim() ?? source;
				},
			},
		},
	},
	globalTypes: {
		theme: {
			name: 'Theme',
			description: 'Global theme for components',
			defaultValue: 'light',
			toolbar: {
				icon: 'circlehollow',
				items: [
					{ value: 'light', icon: 'sun', title: 'Light' },
					{ value: 'dark', icon: 'moon', title: 'Dark' },
				],
				dynamicTitle: true,
			},
		},
	},
	decorators: [
		(story, context) => {
			const isDark = context.globals?.theme === 'dark';
			document.documentElement.classList.toggle('dark-mode', isDark);

			return html`
				<style>
					@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");

					.story-root {
						font-family: var(--cz-font-body);
						color: var(--cz-color-text-primary);
						background: var(--cz-color-bg-primary);
						padding: calc(var(--cz-spacing) * 4);
						min-height: 100%;
						transition: background-color 0.2s, color 0.2s;
					}

					.story-row {
						display: flex;
						gap: calc(var(--cz-spacing) * 8);
						align-items: flex-start;
						flex-wrap: wrap;
					}

					.story-stack {
						display: flex;
						flex-direction: column;
						gap: calc(var(--cz-spacing) * 9);
					}

					.story-stack-100 > * {
						width: 100%;
					}

					.story-label {
						font-family: var(--cz-font-body);
						font-size: var(--cz-text-xs);
						font-weight: var(--cz-font-weight-semibold);
						letter-spacing: 0.06em;
						text-transform: uppercase;
						color: var(--cz-color-text-tertiary);
						margin-bottom: calc(var(--cz-spacing) * 3);
					}
				</style>
				<div class="story-root">${story()}</div>
			`;
		},
	],
	beforeEach({ canvasElement, canvas }) {
		Object.assign(canvas, { ...withinShadow(canvasElement) });
	},
};
