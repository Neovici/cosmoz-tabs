---
'@neovici/cosmoz-tabs': major
---

Overflow menu for `cosmoz-tabs-next`

Tabs that do not fit in the bar move into a "More" dropdown at its end
instead of scrolling. The trigger is translated, hidden while everything
fits, and highlighted when the selected tab is hidden in it.

Breaking:

- The bar wraps to a second row instead of scrolling; tabs that do not
  fit are marked (`overflowing`) and offered in the menu — their box
  keeps its layout slot, the mark only paints it away (`visibility:
hidden`). `cosmoz-tabs` (legacy) still scrolls as before.
- The host can shrink in a flex row (`flex: 0 1 auto; min-width: 0`).
  `flex-shrink: 0` on it keeps the old overflow behavior (no menu).
- `renderTabs` sets `badge` as an attribute, not a property. Menu copies
  follow attributes only — a badge set as a property is not tracked.
- Writes `overflowing` onto tabs that do not fit (visible in snapshots).
- The bar does not auto-route children: extra content only reaches the
  `tabs`/`stats` slots with an explicit `slot=`. Anything assigned to
  the default slot carries the family's identity (`role`, `tabindex`,
  `variant`) — keep `cosmoz-tab-next` items there.
- `role` is owned by the family: a tablist, written to the host when
  absent; an authored `radiogroup` is overridden with a
  `deprecation-warning` event — the radio picker moved to
  `cosmoz-toggle-group` (`@neovici/cosmoz-input`).
- `cosmoz-tab-next` picks on Enter and Space like a native button; the
  selected tab is the bar's one tab stop; every menu row is a tab stop
  while the menu is open.
- A disabled member is named (`aria-disabled`) in the bar and in the
  menu alike.
- The bar's arrows pick: Left and Right walk the shown members with
  activation following focus, Home/End jump to the band's edges; hidden,
  disabled and overflowed members stay out of the walk (the menu reaches
  the overflowed ones).
- New dependencies: `@neovici/cosmoz-dropdown` (8.0.1 — the dropdown
  reconciles `aria-expanded` and restores focus to the trigger) and
  `i18next`. `@neovici/cosmoz-icons` is now a runtime dependency.
