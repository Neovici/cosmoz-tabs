import { storybookPlugin } from '@web/dev-server-storybook';

export default {
	plugins: [storybookPlugin({ type: 'web-components' })],
	nodeResolve: true
};
