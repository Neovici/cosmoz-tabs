---
"@neovici/cosmoz-tabs": major
---

Collect tabs that do not fit into an overflow menu instead of relying on horizontal scrolling

Both `cosmoz-tabs` and `cosmoz-tabs-next` now clip the bar and render the tabs that do not fit as
rows of a `cosmoz-dropdown-next` popover at the end of it. An overflowing tab exists twice — clipped
in the bar (`visibility: hidden`, so it is out of the accessibility tree) and as a copy in the menu —
and both copies drive the same selection. The trigger reads "More" followed by a chevron, is hidden
while everything fits, and is highlighted when the selected tab is one of the overflowing ones. Its
label can be localized with the new `more-label` attribute. Menu rows are reachable with the
arrow keys and activate with Enter/Space.

Only tabs take part in the overflow. `cosmoz-tabs-next` gains `tabs` and `stats` slots for the
rest of the bar (a heading, stats, pagination), matching the ones `cosmoz-tabs` already had, and
routes non-tab children into them automatically by whether they sit before or after the first
tab — so existing markup that mixes them into the default slot keeps working unchanged.

Breaking:

- `cosmoz-tabs-next`'s host is now `flex: 0 1 auto; min-width: 0` instead of `flex: none`. As a
  flex item it could not shrink, so in a top bar it spilled out of its row and never overflowed.
  A consumer that sets `flex-shrink: 0` on it still overrides this and will not get the menu.
- `renderTabs` sets `badge` as an attribute rather than a property, so a badge change is
  observable — which is how the overflow menu keeps its copies in step.
- The bar no longer scrolls horizontally (`overflow-x: auto` → `overflow: hidden`), and the
  scroll-the-selected-tab-into-view behaviour is gone with it.
- The tabs are now wrapped in an `.items` element (`::part(items)`) inside `::part(tabs)`, which is
  what carries `role="tablist"` — on `cosmoz-tabs-next` that role moved off the host.
- `compute-scroll-into-view` is no longer a dependency. `@neovici/cosmoz-dropdown` is a new one, and
  `@neovici/cosmoz-icons` moved from a devDependency to a dependency (the trigger's chevron).
