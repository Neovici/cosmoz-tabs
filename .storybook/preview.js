import {
  addParameters,
  addDecorator,
  setCustomElements,
  withA11y,
} from '@open-wc/demoing-storybook';

addDecorator(withA11y);

addParameters({
  a11y: {
    config: {},
    options: {
      checks: { 'color-contrast': { options: { noScroll: true } } },
      restoreScroll: true,
    }
  },
  docs: {
    iframeHeight: '400px',
  },
  options: {
    enableShortcuts: false
  }
});

async function run() {
  const customElements = await (
    await fetch('../custom-elements.json')
  ).json();

  setCustomElements(customElements);
}

run();
