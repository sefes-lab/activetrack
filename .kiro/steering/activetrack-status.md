---
inclusion: auto
description: ActiveTrack project status, session changes, and pending work items
---

# ActiveTrack — Project Status & Context

## Current State (v0.451)
- Repo: github.com/sefes-lab/activetrack — GitHub Pages enabled
- Single-file PWA: `activetrack.html` (~1,000 lines HTML/JS), inline CSS (~824 lines in `<style>` block)
- Supporting files: `sw.js` (service worker, cache v4), `manifest.json`, icons, `CHANGELOG.md`
- Previous working version exists in `activetrack-old/ActivityLog.html` for reference

## Changes Made This Session

### v0.45
- Default interval changed from 6 → 30 minutes
- Default theme changed to dark mode
- Beep muted by default
- Added daily activity hours tracker in sidebar (today's entry count + time span from first to last entry)
- Confirmed daily log rotation is working (init, midnight, tab reactivation)
- Export version bumped to 0.45
- Service worker cache bumped to v4

### v0.451
- P keyboard shortcut now works globally (including while dialog is open)
- Only blocked when focus is on INPUT, TEXTAREA, or SELECT elements

### Other changes (no version bump)
- Moved version history from HTML comment block into `CHANGELOG.md`
- HTML comment now says "See CHANGELOG.md for full version history"
- Fixed dark mode visibility for dialog countdown text (`body.dark-mode .dialog-countdown` color)
- Fixed service worker stale cache issue from ActivityLog.html → activetrack.html rename (cache v2 → v3 → v4)

## Pending / Still To Do

### CSS Extraction (spec exists at `.kiro/specs/css-extraction/`)
- The spec (requirements, design, tasks) is complete but implementation was reverted after breaking the app
- Goal: extract the ~824 lines of inline CSS into `activetrack.css`
- Needs: create CSS file, add `<link>` tag, remove `<style>` block, update sw.js ASSETS array, bump cache name
- Previous attempt failed because the subagent left orphaned CSS in the HTML — needs careful manual execution
- The spec files can be reused; tasks just need re-execution

### User-requested items from this session
- All preference defaults (interval, dark mode, beep) are saved/loaded via localStorage JSON config — confirmed working
- Daily activity hours tracker was added but is basic (time span from first to last entry) — user may want cumulative active time or more granular tracking
- Daily log rotation is confirmed working but user specifically asked to ensure it — worth re-verifying after any future changes

### Other potential improvements noted during review
- No tests of any kind — could add basic validation
- Service worker ASSETS list is manually maintained — adding new files requires updating sw.js
- `generate-icons.html` is a dev utility shipped with the app — could be gitignored
- Some accessibility gaps (sidebar toggle uses arrow characters instead of ARIA state labels)
- README still has placeholder `YOUR_USERNAME` in the GitHub Pages URL — should be updated with actual URL
