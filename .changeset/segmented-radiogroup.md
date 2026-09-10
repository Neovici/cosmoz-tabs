---
'@neovici/cosmoz-tabs': minor
---

Let a `cosmoz-tabs-next` be a `radiogroup`. A segmented control usually picks a value rather than a view, and a `tab` owes its reader a `tabpanel` it controls — a filter has none. Set `role="radiogroup"` on the container and each item becomes a `radio`, reporting `aria-checked` instead of `aria-selected`. The default is unchanged: containers are still a `tablist` of `tab`s.
