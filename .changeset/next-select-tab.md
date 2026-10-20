---
'@neovici/cosmoz-tabs': minor
---

`useTabs` (next) returns `select(name)`, which selects a tab the way a click does: it calls `onActivate` and then activates the tab. Use it to select a tab from elsewhere, such as a breadcrumb link. `activate` still only updates the active tab.
