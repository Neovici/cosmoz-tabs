[![Build Status](https://github.com/Neovici/cosmoz-tabs/workflows/Github%20CI/badge.svg)](https://github.com/Neovici/cosmoz-tabs/actions?workflow=Github+CI)
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/Neovici/cosmoz-tabs)

# &lt;cosmoz-tabs&gt;

Tabbed-views web components, styled with the [Untitled UI](https://www.untitledui.com)
design system via [`@neovici/cosmoz-tokens`](https://github.com/neovici/cosmoz-tokens).
Built with [Pion.js](https://github.com/pionjs/pion) + lit-html.

The package ships **two tab families** plus a card:

| Element / API                                                                       | Use it when                                                                                                                                                              |
| ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `cosmoz-tabs` + `cosmoz-tab`                                                        | **DOM-driven**: author `<cosmoz-tab>` elements; the container renders the bar and switches panels. Selection works out of the box.                                       |
| `cosmoz-tabs-next` + `cosmoz-tab-next` (+ `useTabs`/`renderTabs`/`renderActivated`) | **Data-driven**: drive tabs from a data array; a `cosmoz-tab-next` is only the clickable header — selection is owned by the consumer (hook or your own `active` wiring). |
| `cosmoz-tab-card`                                                                   | A collapsible card, typically placed inside a `cosmoz-tab`.                                                                                                              |

Both families share a single styling source of truth (`src/styles.ts`) and support two
Untitled UI variants via a `variant` attribute on the container: `brand` (default) and
`underline`. Tabs spread to fill the bar by default (as the legacy tabs did); set
`full-width="false"` to size them to their content.

> Styling comes from `@neovici/cosmoz-tokens` (`--cz-*`), with light/dark mode via
> `:root.dark-mode`. It ships as a dependency — see [Install](#install) for loading it.

## Install

```sh
npm i @neovici/cosmoz-tabs
```

`@neovici/cosmoz-tokens` ships as a dependency, so it is installed for you. The host app
just needs to load it once for the `--cz-*` token values:

```js
import "@neovici/cosmoz-tokens";
```

## Usage

### Legacy family (`cosmoz-tabs`)

```js
import "@neovici/cosmoz-tabs";
```

```html
<cosmoz-tabs selected="overview">
	<cosmoz-tab name="overview" heading="Overview">…</cosmoz-tab>
	<cosmoz-tab name="rows" heading="Invoice rows" badge="5">…</cosmoz-tab>
	<cosmoz-tab name="history" heading="History">…</cosmoz-tab>
</cosmoz-tabs>
```

Bind selection to the URL with `hash-param`. Tabs spread by default; size them to their
content with `full-width="false"`:

```html
<cosmoz-tabs hash-param="tab" full-width="false">…</cosmoz-tabs>
```

Icons are passed as a lit-html template (e.g. from
[`@neovici/cosmoz-icons`](https://github.com/neovici/cosmoz-icons)) via the `.icon` property:

```js
import { receiptIcon } from "@neovici/cosmoz-icons/untitled";
html`<cosmoz-tab heading="Overview" name="overview" .icon=${receiptIcon()}
	>…</cosmoz-tab
>`;
```

### Next family (`cosmoz-tabs-next`)

The recommended, data-driven pattern using the hook API:

```js
import {
	useTabs,
	renderTabs,
	renderActivated,
} from "@neovici/cosmoz-tabs/next";

const tabs = [
	{ name: "overview", title: "Overview", render: renderOverview },
	{ name: "rows", title: "Invoice rows", badge: "5", render: renderRows },
];

const Component = () => {
	const model = useTabs(tabs, { hashParam: "tab" });
	return html`
		<cosmoz-tabs-next variant="brand"> ${renderTabs(model)} </cosmoz-tabs-next>
		${renderActivated(model, (tab) =>
			tab.isActive ? html`<div>${tab.render()}</div>` : ""
		)}
	`;
};
```

`render` above is a consumer-defined field, not part of the `Tab`/`RenderTab` type — the
hook and `renderActivated`/`renderTabs` are generic over your tab shape and carry your extra
fields through, so `tab.render()` is type-safe.

For the next family the container reflects `variant`/`full-width` onto each
`cosmoz-tab-next` as `data-variant`/`data-full-width` (CSS cannot cross the shadow
boundary); when both `renderTabs(...)` and the container set them, the container wins. Slot
an icon with the icon template's `slot` option: `${receiptIcon({ slot: 'icon' })}`.

## API

The custom-element API (attributes, properties, slots, CSS parts) is described in
[`custom-elements.json`](./custom-elements.json) and in the JSDoc/Storybook stories.
Highlights:

- **`cosmoz-tabs`** — attrs `selected`, `hash-param`, `no-resize`, `variant`, `full-width`;
  parts `tabs`, `tab`, `content`; events `tab-first-select`, `tab-select`.
- **`cosmoz-tab`** — attrs `heading`, `badge`, `disabled`, `hidden`; prop `.icon`.
- **`cosmoz-tabs-next`** — attrs `variant`, `full-width`.
- **`cosmoz-tab-next`** — attrs `active`, `badge`, `href`, `disabled`; `icon` slot.
- **`cosmoz-tab-card`** — attrs `heading`, `collapsable`, `collapsed`; parts `header`,
  `heading`, `collapse-icon`, `content`. Themable via the `--cosmoz-tab-card-*` custom
  properties (which default to `--cz-*` tokens).

## Development

```sh
npm run storybook:start
npm test
npm run test:watch
npm run lint
npm run build
```

Releases are cut by semantic-release in CI (conventional commits) — there is no manual
changeset step.

Stories double as tests: see `stories/*.stories.js` (demos) and `stories/*.test.stories.ts`
(behavioral tests run by `@storybook/addon-vitest`).
