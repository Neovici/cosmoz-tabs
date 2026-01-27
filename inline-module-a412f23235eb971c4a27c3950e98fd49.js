import './sb-preview/runtime.js';

const channel = __STORYBOOK_MODULE_CHANNEL_POSTMESSAGE__.createChannel({ page: "preview" });
__STORYBOOK_MODULE_PREVIEW_API__.addons.setChannel(channel);
window.__STORYBOOK_ADDONS_CHANNEL__ = channel;
const { SERVER_CHANNEL_URL } = globalThis;
if (SERVER_CHANNEL_URL) {
  const serverChannel = __STORYBOOK_MODULE_CHANNEL_WEBSOCKET__.createChannel({ url: SERVER_CHANNEL_URL });
  __STORYBOOK_MODULE_PREVIEW_API__.addons.setServerChannel(serverChannel);
  window.__STORYBOOK_SERVER_CHANNEL__ = serverChannel;
}

const importers = {
  "./stories/cosmoz-tab-card.stories.js": () => import('./cosmoz-tab-card.stories-zOEaeFTL.js'),
  "./stories/cosmoz-tab.stories.js": () => import('./cosmoz-tab.stories-ddXhjBxr.js'),
  "./stories/cosmoz-tabs-next.stories.js": () => import('./cosmoz-tabs-next.stories-JTEO-IIn.js'),
  "./stories/cosmoz-tabs.stories.js": () => import('./cosmoz-tabs.stories-0TXIIwJp.js')
};
function importFn(path) {
  return importers[path]();
}

const getProjectAnnotations = async () => {
  const configs = await Promise.all([
    import('./entry-preview-MXgE2NS3.js'),
    import('./entry-preview-docs-Dmjeaj5r.js'),
    import('@storybook/addon-essentials/dist/docs/preview.js'),
    import('@storybook/addon-essentials/dist/actions/preview.js'),
    import('@storybook/addon-essentials/dist/backgrounds/preview.js'),
    import('@storybook/addon-essentials/dist/measure/preview.js'),
    import('@storybook/addon-essentials/dist/outline/preview.js'),
    import('@storybook/addon-essentials/dist/highlight/preview.js'),
    import('@storybook/addon-links/dist/preview.js')
  ]);
  return __STORYBOOK_MODULE_PREVIEW_API__.composeConfigs(configs);
};
window.__STORYBOOK_PREVIEW__ = window.__STORYBOOK_PREVIEW__ || new __STORYBOOK_MODULE_PREVIEW_API__.PreviewWeb();
window.__STORYBOOK_STORY_STORE__ = window.__STORYBOOK_STORY_STORE__ || window.__STORYBOOK_PREVIEW__.storyStore;
window.__STORYBOOK_CLIENT_API__ = window.__STORYBOOK_CLIENT_API__ || new __STORYBOOK_MODULE_PREVIEW_API__.ClientApi({ storyStore: window.__STORYBOOK_PREVIEW__.storyStore });
window.__STORYBOOK_PREVIEW__.initialize({ importFn, getProjectAnnotations });
