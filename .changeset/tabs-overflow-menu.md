---
'@neovici/cosmoz-tabs': major
---

Collect `cosmoz-tabs-next` tabs that do not fit into an overflow menu instead of relying on horizontal scrolling

`cosmoz-tabs-next` now clips the bar and renders the tabs that do not fit as rows of a
`cosmoz-dropdown-next` popover at the end of it. An overflowing tab exists twice — clipped
in the bar (`visibility: hidden`, so it is out of the accessibility tree) and as a copy in the menu —
and both copies drive the same selection. The trigger reads "More" followed by a chevron, is hidden
while everything fits, and is highlighted when the selected tab is one of the overflowing ones. It
reads `t('More')`, so it is translated out of the box and no call site has to pass anything; the new
`more-label` attribute (or `.moreLabel` property) overrides it where a different word is wanted.
Keyboard behavior is the platform's: the selected tab is the bar's one tab stop (roving
`tabindex`, as in the legacy family), the rows are tabbable like the bar's tabs, and
`cosmoz-tab-next` itself picks on Enter (keydown) and Space (keyup) like a native button.
Focus follows the pick - a row's Enter/Space lands it on the bar's selected tab, and a
dismissal (Escape, light dismiss, click outside, native via the `popover="auto"`
close-request stack) hands it back to the trigger. The dropdown reconciles the trigger's
`aria-expanded` to its own state, so every close path stays announced; this needs a small
local patch (`patches/@neovici+cosmoz-dropdown+7.7.1.patch`, upstream candidate for
cosmoz-dropdown).

It works with every variant and size: the trigger takes the item box of `brand`, `underline` and
`segmented` (sitting inside the segmented track), and `size="sm"` trims it like the tabs. A
`segmented` `compact-width` track still hugs its tabs, but now stops at its container's width so
the tabs past it move into the menu.

Only tabs take part in the overflow. `cosmoz-tabs-next` gains `tabs` and `stats` slots for the
rest of the bar (a heading, stats, pagination), and routes non-tab children into them automatically
by whether they sit before or after the first tab — so existing markup that mixes them into the
default slot keeps working, with the caveats below about content that sits _between_ tabs.

Breaking (all in `cosmoz-tabs-next`; `cosmoz-tabs` is unchanged):

- The host is now `flex: 0 1 auto; min-width: 0` instead of `flex: none`. As a flex item it
  could not shrink, so in a top bar it spilled out of its row and never overflowed. A consumer
  that sets `flex-shrink: 0` on it still overrides this and will not get the menu.
- Writes a `slot` attribute onto every non-tab light-DOM child it auto-routes (`tabs` or `stats`).
  This mutates the consumer's own DOM, so it is visible to DOM snapshots and to any selector keyed
  on `:not([slot])`. A `slot` the consumer set explicitly is never touched.
- Auto-routing groups non-tab content to the start or the end of the bar — it does not preserve
  position. A non-tab element sitting _between_ two tabs moves to the end rather than staying put.
- `renderTabs` sets `badge` as an attribute rather than a property, so a badge change is
  observable — which is how the overflow menu keeps its copies in step. An empty badge is
  omitted rather than emitted as `badge=""`, which would read as a boolean attribute.
  For the same reason menu copies track `badge` as an attribute only: a badge set purely as a
  property emits no mutation and cannot be followed.
- The bar no longer scrolls horizontally (`overflow-x: auto` → `overflow: clip`), and the
  scroll-the-selected-tab-into-view behaviour is gone with it.
- The tabs are now wrapped in an `.items` element (`::part(items)`), which is what carries
  `role="tablist"` — the role moved off the host.
- Still reads `role` from the host (`tablist` by default, `radiogroup` for a segmented picker),
  but it now puts it on `::part(items)` and on the menu and leaves the host as `role="none"`,
  so the heading, stats and trigger are not inside the group. A selector or test that looks
  for `cosmoz-tabs-next[role=tablist]` / `[role=radiogroup]` no longer matches. Later role
  changes are picked up (watched via a one-attribute observer; `role` is a native reflected
  property, so pion's attribute→property callback cannot re-render for it). Overflowing radios stay
  radios in the menu (`role="radio"`, `aria-checked`).
- Writes an `overflowing` attribute onto each consumer `cosmoz-tab-next` that does not fit (and
  removes it again). Like the `slot` routing above it mutates the consumer's own DOM, so it
  shows up in DOM snapshots and in selectors such as `:not([overflowing])`.
- `compute-scroll-into-view` stays for `cosmoz-tabs` (the legacy family still scrolls); it is
  no longer used by `cosmoz-tabs-next`. `@neovici/cosmoz-dropdown` and `i18next` are new
  dependencies, and `@neovici/cosmoz-icons` moved from a devDependency to a dependency (the
  trigger's chevron).
- `cosmoz-tab-next` now picks on Enter (keydown) and Space (keyup) on itself, like a native
  button; previously a focused tab was activated only through the consumer's click wiring.
