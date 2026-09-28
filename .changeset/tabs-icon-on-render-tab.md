---
'@neovici/cosmoz-tabs': minor
---

Add an `icon` option to the `next` `RenderTab` and render it into the tab's `icon` slot.

`renderTabs` now renders `tab.icon({ slot: 'icon' })` before the label, so
data-driven tabs get the same leading icons the raw `cosmoz-tab-next` API
already supports via the `icon` slot (the "With icons" story's mechanism).
Icon factories are the `@neovici/cosmoz-icons/untitled` exports
(`receiptIcon({ slot: 'icon' })` etc.); a tab without `icon` is unchanged.
