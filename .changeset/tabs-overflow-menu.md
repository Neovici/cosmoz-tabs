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
`aria-expanded` to its own state, so every close path stays announced;
`@neovici/cosmoz-dropdown@8.0.1` carries the invoker management.

It works with every variant and size: the trigger takes the item box of `brand`, `underline` and
`segmented` (sitting inside the segmented track), and `size="sm"` trims it like the tabs. A
`segmented` `compact-width` track still hugs its tabs, but now stops at its container's width so
the tabs past it move into the menu.

Only tabs take part in the overflow. `cosmoz-tabs-next` gains `tabs` and `stats` slots for
the rest of the bar (a heading, stats, pagination). The component never touches the
consumer's slot assignments — assign non-tab children explicitly.

Breaking (all in `cosmoz-tabs-next`; `cosmoz-tabs` is unchanged):

- The host is now `flex: 0 1 auto; min-width: 0` instead of `flex: none`. As a flex item it
  could not shrink, so in a top bar it spilled out of its row and never overflowed. A consumer
  that sets `flex-shrink: 0` on it still overrides this and will not get the menu.
- `renderTabs` sets `badge` as an attribute rather than a property, so a badge change is
  observable — which is how the overflow menu keeps its copies in step. An empty badge is
  omitted rather than emitted as `badge=""`, which would read as a boolean attribute.
  For the same reason menu copies track `badge` as an attribute only: a badge set purely as a
  property emits no mutation and cannot be followed.
- The bar no longer scrolls horizontally, and it does not clip either: its track
  **wraps** — a tab that does not fit lands on a second row by layout alone — and the
  wrapped tabs are then taken out of the layout and offered in the menu instead. The
  scroll-the-selected-tab-into-view behaviour is gone with the scrolling.
- `role` stays where it was: authored on the host, written to the host (default
  `tablist`, written when absent). The menu carries the same role, so overflowing
  radios stay radios in the menu (`role="radio"`, `aria-checked`).
- Writes an `overflowing` attribute onto each consumer `cosmoz-tab-next` that does not fit (and
  removes it again). This mutates the consumer's own DOM, so it shows up in DOM snapshots and
  in selectors such as `:not([overflowing])`.
- `compute-scroll-into-view` stays for `cosmoz-tabs` (the legacy family still scrolls); it is
  no longer used by `cosmoz-tabs-next`. `@neovici/cosmoz-dropdown` (8.0.1, for the
  invoker management) and `i18next` are new
  dependencies, and `@neovici/cosmoz-icons` moved from a devDependency to a dependency (the
  trigger's chevron).
- `cosmoz-tab-next` now picks on Enter (keydown) and Space (keyup) on itself, like a native
  button; previously a focused tab was activated only through the consumer's click wiring.
- The selected tab is the bar's one tab stop (roving `tabindex` stamped by the container,
  as the legacy family models it); every enabled menu row is a tab stop while the menu
  is open.
