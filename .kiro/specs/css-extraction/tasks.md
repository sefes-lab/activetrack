# Implementation Plan: CSS Extraction

## Overview

Extract ~826 lines of inline CSS from `activetrack.html` into a separate `activetrack.css` file, create a `CHANGELOG.md` with the full version history, update the HTML to reference the external stylesheet, and update the service worker to cache the new file. This is a pure refactoring — no CSS rules are added, removed, or modified.

## Tasks

- [x] 1. Create `activetrack.css` with extracted CSS
  - [x] 1.1 Extract the CSS content from the `<style>...</style>` block in `activetrack.html` (lines 56–882) into a new `activetrack.css` file in the project root
    - Copy all CSS rules verbatim — no formatting changes, no reordering, no minification
    - The file must contain only the CSS content between the `<style>` and `</style>` tags (exclusive of the tags themselves)
    - Includes: general styles, dark mode styles, component styles, animation keyframes, responsive/mobile `@media` queries, theme toggle styles
    - _Requirements: 1.1, 1.4, 2.2_

  - [ ]* 1.2 Write property test for CSS extraction content equivalence
    - **Property 1: CSS extraction content equivalence**
    - Using `fast-check`, generate random valid CSS content (varying selectors, media queries, keyframes, comments), wrap in `<style>...</style>`, apply extraction logic, and assert the output is byte-for-byte identical to the original CSS content
    - Minimum 100 iterations
    - **Validates: Requirements 1.1, 1.4, 2.2**

- [x] 2. Create `CHANGELOG.md` with version history
  - [x] 2.1 Create `CHANGELOG.md` in the project root containing the full version history from the HTML comment block
    - Include all entries from v0.27 through v0.44 in reverse chronological order (newest first)
    - Add a new v0.45 entry at the top: "Extracted inline CSS to external `activetrack.css` file" and "Moved version history from HTML comment block to CHANGELOG.md"
    - Use markdown heading format (`## v0.XX`) for each version entry
    - Preserve the original descriptions from the HTML comment block
    - _Requirements: 4.1, 4.2_

- [x] 3. Modify `activetrack.html`
  - [x] 3.1 Remove the `<style>...</style>` block (lines 56–882) from `activetrack.html`
    - The entire style block including the opening `<style>` and closing `</style>` tags must be removed
    - No inline `<style>` element should remain in the file
    - _Requirements: 1.3_

  - [x] 3.2 Add a `<link rel="stylesheet" href="activetrack.css">` element in the `<head>` section
    - Place it after the `<link rel="apple-touch-icon" href="icon-192.png">` line and before the `<title>` element
    - _Requirements: 1.2_

  - [x] 3.3 Update the version history comment block at the top of `activetrack.html`
    - Change the version from `v0.44` to `v0.45`
    - Remove the detailed version history entries (v0.27–v0.44)
    - Replace with a brief reference: `See CHANGELOG.md for version history.`
    - Keep the date, creator, description, and features list intact
    - _Requirements: 4.1, 4.2_

- [x] 4. Checkpoint — Verify HTML and CSS changes
  - Ensure all tests pass, ask the user if questions arise.

- [x] 5. Modify `sw.js` — update service worker caching
  - [x] 5.1 Add `'./activetrack.css'` to the ASSETS array in `sw.js`
    - Place it after `'./activetrack.html'` to keep related files together
    - _Requirements: 3.1_

  - [x] 5.2 Increment `CACHE_NAME` from `'activetrack-v2'` to `'activetrack-v3'`
    - This triggers the service worker install event and forces a full cache refresh for all users
    - _Requirements: 3.2_

- [x] 6. Final checkpoint — Ensure all changes are consistent
  - Ensure all tests pass, ask the user if questions arise.
  - Verify: `activetrack.css` exists with all CSS rules, `CHANGELOG.md` exists with full version history, `activetrack.html` has no `<style>` block and has the `<link>` element, `sw.js` caches the new CSS file with incremented cache name.

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation
- This is a static file refactoring — no runtime logic changes, no new JavaScript
- Property test validates the universal correctness property from the design document
