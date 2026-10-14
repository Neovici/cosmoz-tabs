---
'@neovici/cosmoz-tabs': minor
---

`useTabs` can remember the picked tab

Pass `persist: '<localStorage key>'` to `useTabs`. A tab click stores the tab
under that key, and the stored tab is shown whenever the hash names none, ahead
of `fallback`. A tab marked `persist: false` is never stored.
