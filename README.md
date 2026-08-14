[![Build Status](https://github.com/Neovici/cosmoz-tabs/workflows/Github%20CI/badge.svg)](https://github.com/Neovici/cosmoz-tabs/actions?workflow=Github+CI)
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/Neovici/cosmoz-tabs)
[![Changesets](https://img.shields.io/badge/Changesets-🦋%20changesets-268ADA.svg)](https://github.com/changesets/changesets)

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
`underline`. Tabs spread to fill the bar by default (as the legacy tabs did); add the
`compact-width` attribute to size them to their content.

Both families also share the **overflow menu**: the bar does not scroll, and tabs that do
not fit are collected into a dropdown at the end of it. See
[Overflow menu](#overflow-menu).

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
content with `compact-width`:

```html
<cosmoz-tabs hash-param="tab" compact-width>…</cosmoz-tabs>
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

For the next family the container reflects `variant`/`compact-width` onto each
`cosmoz-tab-next` as plain `variant`/`compact-width` attributes (CSS cannot cross the shadow
boundary); when both `renderTabs(...)` and the container set them, the container wins. Slot
an icon with the icon template's `slot` option: `${receiptIcon({ slot: 'icon' })}`.

### Overflow menu

The tab bar never scrolls horizontally. It clips instead, and the tabs that do not fit are
rendered a second time as rows of a dropdown at the end of the bar — so an overflowing tab
exists twice: clipped in the bar (`visibility: hidden`, hence out of the accessibility tree)
and as a copy in the menu. Both drive the same selection. The trigger only appears once
something actually overflows, and is highlighted while the selected tab is one of the
overflowing ones.

There is nothing to wire up; it is on by default in both families. The trigger reads
`More` followed by a chevron; the label can be localized per instance:

```html
<cosmoz-tabs more-label="Fler">…</cosmoz-tabs>
```

Which tabs fit is measured with an `IntersectionObserver` rooted on the clipping element
(`src/use-overflow.ts`), so the browser's own layout decides — there is no width bookkeeping
to keep in sync. Style the menu through the `more`, `more-button`, `menu` and (legacy)
`menu-item` parts.

Only tabs take part in this. Anything else in the bar — a heading, stats, pagination —
belongs outside the overflow area, in the `tabs` (start) or `stats` (end) slot:

```html
<cosmoz-tabs-next>
	<div slot="tabs">Orders</div>
	<cosmoz-tab-next name="all" active>All</cosmoz-tab-next>
	<cosmoz-tab-next name="draft">Draft</cosmoz-tab-next>
	<div slot="stats">1-20 of 87</div>
</cosmoz-tabs-next>
```

For `cosmoz-tabs-next` those slots are also assigned **automatically**: a non-tab child is
routed to `tabs` or `stats` depending on whether it sits before or after the first tab, so
existing markup that mixes them into the default slot keeps working. Set `slot` yourself to
override.

The dropdown comes from [`@neovici/cosmoz-dropdown`](https://github.com/neovici/cosmoz-dropdown)
and the chevron from [`@neovici/cosmoz-icons`](https://github.com/neovici/cosmoz-icons); both
ship as dependencies.

## API

The custom-element API (attributes, properties, slots, CSS parts) is described in
[`custom-elements.json`](./custom-elements.json) and in the JSDoc/Storybook stories.
Highlights:

- **`cosmoz-tabs`** — attrs `selected`, `hash-param`, `no-resize`, `variant`, `compact-width`,
  `more-label`; parts `tabs`, `items`, `tab`, `more`, `more-button`, `menu`, `menu-item`,
  `content`; events `tab-first-select`, `tab-select`.
- **`cosmoz-tab`** — attrs `heading`, `badge`, `disabled`, `hidden`; prop `.icon`.
- **`cosmoz-tabs-next`** — attrs `variant`, `compact-width`, `more-label`; parts `items`,
  `more`, `more-button`, `menu`; slots `tabs`, `stats` (auto-assigned for non-tab children).
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

Releases are managed with changesets in CI.

Stories double as tests: see `stories/*.stories.js` (demos) and `stories/*.test.stories.ts`
(behavioral tests run by `@storybook/addon-vitest`).
