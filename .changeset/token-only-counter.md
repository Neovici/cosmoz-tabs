---
'@neovici/cosmoz-tabs': minor
---

Build the hot tab counter from plain cosmoz-tokens instead of `color-mix()` tints.

While a tab is hovered or selected, its counter now uses `--cz-color-bg-tertiary`, `--cz-color-text-primary` and a `--cz-color-border-primary` ring. That makes it more visible than the old 12% brand tint in both light and dark themes. The `brand` variant uses the same counter, so the separate on-brand tint is gone.
