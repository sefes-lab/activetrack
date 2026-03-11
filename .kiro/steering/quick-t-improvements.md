---
inclusion: fileMatch
fileMatchPattern: "SIMT/quick-t.html"
---

# Quick-T Planned Improvements

## UX / Functionality
- Copy URL to clipboard button
- Form reset / clear button
- Remember last-used assignee via localStorage
- Persist dark/light mode preference in localStorage
- Inline form validation instead of alert()
- Keyboard shortcut (Ctrl+Enter) to submit

## Data / Maintainability
- Externalize DATA object and assignee list to a JSON file or API
- Add search/filter support for assignee dropdown

## Accessibility
- Add aria-label to dark mode toggle button
- Add aria-required="true" to required fields
- Replace alert() with inline screen-reader-friendly error messages
- Manage focus after submit

## Visual / Polish
- Success toast/confirmation after opening ticket link
- Better responsive stacking on narrow screens
- Make generated URL preview a clickable link

## Code Quality
- Move inline event handlers to addEventListener calls
- Add @media queries for smaller viewports
