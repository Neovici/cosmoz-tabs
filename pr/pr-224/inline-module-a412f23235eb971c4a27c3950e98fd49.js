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
  "./stories/cosmoz-tab-card.stories.js": () => import('./cosmoz-tab-card.stories-Dc5ZX_vn.js'),
  "./stories/cosmoz-tab.stories.js": () => import('./cosmoz-tab.stories-2AUepC4p.js'),
  "./stories/cosmoz-tabs-next.stories.js": () => import('./cosmoz-tabs-next.stories-IZLGxsa6.js'),
  "./stories/cosmoz-tabs.stories.js": () => import('./cosmoz-tabs.stories-B5npQcO3.js')
};
function importFn(path) {
  return importers[path]();
}

const getProjectAnnotations = async () => {
  const configs = await Promise.all([
    import('./entry-preview-CT1YEuLY.js'),
    import('./entry-preview-docs-XQHugYfQ.js'),
    import('./preview-C5fTX-SD.js'),
    import('./preview-BcJVSA4a.js'),
    import('./preview-Bf0d1tVO.js'),
    import('./preview-CU2JNqMw.js'),
    import('./preview-BT9ta7nr.js'),
    import('./preview-CDagOaLU.js'),
    import('./preview-DP9noNUd.js')
  ]);
  return __STORYBOOK_MODULE_PREVIEW_API__.composeConfigs(configs);
};
window.__STORYBOOK_PREVIEW__ = window.__STORYBOOK_PREVIEW__ || new __STORYBOOK_MODULE_PREVIEW_API__.PreviewWeb();
window.__STORYBOOK_STORY_STORE__ = window.__STORYBOOK_STORY_STORE__ || window.__STORYBOOK_PREVIEW__.storyStore;
window.__STORYBOOK_CLIENT_API__ = window.__STORYBOOK_CLIENT_API__ || new __STORYBOOK_MODULE_PREVIEW_API__.ClientApi({ storyStore: window.__STORYBOOK_PREVIEW__.storyStore });
window.__STORYBOOK_PREVIEW__.initialize({ importFn, getProjectAnnotations });
