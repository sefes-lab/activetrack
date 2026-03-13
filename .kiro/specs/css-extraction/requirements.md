# Requirements Document

## Introduction

ActiveTrack is a single-file PWA (Progressive Web App) that serves as an automated time and activity logger. Currently, all HTML, CSS (~826 lines), and JavaScript reside in a single `activetrack.html` file (~1,800 lines). This feature extracts the inline CSS into a separate `activetrack.css` file to reduce the HTML file size, improve maintainability, and enable independent caching of styles by the browser and service worker.

## Glossary

- **ActiveTrack_HTML**: The main `activetrack.html` file containing the application markup and JavaScript
- **ActiveTrack_CSS**: The new external `activetrack.css` file to contain all extracted styles
- **Service_Worker**: The `sw.js` file that caches application assets for offline PWA support
- **Cache_Name**: The versioned cache identifier string used by the Service_Worker (currently `activetrack-v2`)
- **Style_Block**: The inline `<style>...</style>` element in ActiveTrack_HTML (lines 56–882)
- **Link_Element**: An HTML `<link rel="stylesheet">` tag referencing an external CSS file

## Requirements

### Requirement 1: Extract Inline CSS to External File

**User Story:** As a developer, I want the inline CSS extracted into a separate file, so that the HTML file is smaller and styles are easier to maintain independently.

#### Acceptance Criteria

1. THE ActiveTrack_CSS SHALL contain all CSS rules currently in the Style_Block of ActiveTrack_HTML
2. WHEN the Style_Block is removed from ActiveTrack_HTML, THE ActiveTrack_HTML SHALL include a Link_Element referencing ActiveTrack_CSS in the `<head>` section
3. THE ActiveTrack_HTML SHALL NOT contain any inline `<style>` block after extraction
4. THE ActiveTrack_CSS SHALL preserve the original order of all CSS rules from the Style_Block

### Requirement 2: Visual and Functional Equivalence

**User Story:** As a user, I want the application to look and behave identically after the CSS extraction, so that the refactoring does not introduce regressions.

#### Acceptance Criteria

1. WHEN ActiveTrack_HTML is loaded in a browser, THE ActiveTrack_HTML SHALL render identically to the pre-extraction version
2. THE ActiveTrack_CSS SHALL include all general styles, dark mode styles, responsive/mobile styles, component styles, and animation styles without omission
3. WHEN the dark mode toggle is activated, THE ActiveTrack_HTML SHALL apply dark mode styles from ActiveTrack_CSS correctly

### Requirement 3: Service Worker Cache Update

**User Story:** As a developer, I want the service worker to cache the new CSS file, so that the PWA continues to work offline after the extraction.

#### Acceptance Criteria

1. THE Service_Worker SHALL include `./activetrack.css` in the ASSETS array
2. WHEN the ASSETS array is updated, THE Service_Worker SHALL use an incremented Cache_Name to trigger cache refresh
3. WHEN the application is loaded offline, THE Service_Worker SHALL serve ActiveTrack_CSS from the cache

### Requirement 4: Version History Update

**User Story:** As a developer, I want the version history updated to reflect the CSS extraction change, so that the project changelog remains accurate.

#### Acceptance Criteria

1. WHEN the CSS extraction is complete, THE ActiveTrack_HTML SHALL include a new version entry in the version history comment block documenting the CSS extraction
2. THE version entry SHALL follow the existing format used in the version history comment block
