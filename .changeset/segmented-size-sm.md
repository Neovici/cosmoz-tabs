---
'@neovici/cosmoz-tabs': minor
---

Add a `size` attribute to both tab families. Omit it for the size the tabs have today; `size="sm"` trims the item's padding on both axes and thins the segmented track's ring, which is what a control placed beside a heading usually needs — the default segmented control stacks the item's padding on the track's, so it stands 45px tall and out-weighs the 25px heading next to it. The type is left alone, so labels read the same at either size. The next-family container reflects `size` onto its items the way it already reflects `variant`, and `renderTabs` takes it as an option.
