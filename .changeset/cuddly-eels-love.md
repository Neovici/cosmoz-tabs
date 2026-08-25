---
"@neovici/cosmoz-tabs": patch
---

Add `aria-hidden="true"` to the badge element in tab headers to prevent badge text from polluting the accessible name. This fixes `getByRole('tab', { name: 'Comments' })` failing when the tab has a badge count (e.g., accessible name was "Comments 5" instead of "Comments").