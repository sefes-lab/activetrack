---
inclusion: auto
description: ActiveTrack project status, session changes, and pending work items
---

# ActiveTrack — Project Status & Context

## Current State (v0.48)
- Repo: github.com/sefes-lab/activetrack — GitHub Pages enabled
- Single-file PWA: `activetrack.html` (~1,900 lines HTML/CSS/JS)
- Supporting files: `sw.js` (service worker, cache v7), `manifest.json`, icons, `CHANGELOG.md`, `MANUAL.md`
- Previous working version exists in `activetrack-old/ActivityLog.html` for reference
- All changes committed and pushed to GitHub through v0.471; v0.48 ready to commit

## Version History This Session

### v0.45
- Default interval changed from 6 → 30 minutes
- Default theme changed to dark mode, beep muted by default
- Added daily activity hours tracker in sidebar
- Service worker cache bumped to v4

### v0.451
- P keyboard shortcut works globally (blocked only in INPUT/TEXTAREA/SELECT)
- Dark mode dialog countdown visibility fix
- Version label added to Settings panel

### v0.46
- UI polish: system font stack (-apple-system, BlinkMacSystemFont, Segoe UI, Roboto)
- Zebra striping on activity log table rows
- Button toolbar with flex layout and consistent spacing
- Countdown pill shadow, dialog backdrop blur, settings panel shadow
- Dark mode green accent softened (#66BB6A)
- Smooth hover transitions on table rows and buttons
- Sidebar toggle icon changed to ☰/✕ (hamburger/close)
- Empty state message when activity log has no entries
- Service worker cache bumped to v5

### v0.48
- Multi-day view with ◀/▶ date navigation in sidebar
- Auto-archive: previous day's entries silently archived at midnight (no modal)
- Date-keyed `logArchive` storage alongside today's `activityLog`
- Past days shown as read-only; today is editable
- Auto-purge setting (keep N days, 0 = forever)
- Migration: existing past-date entries auto-moved to archive on load
- Export/Import includes full archive
- CSV exports the currently viewed day
- Table simplified: Date column removed (date nav replaces it)
- Service worker cache bumped to v7

### v0.47
- Replaced Quick Fill with 10 emoji-tagged Categories
- Categories: 🔧 Break-Fix, 🎫 Ticket, 📋 Projects, 🤝 Meeting, 💬 Support, 📧 Comms, 📚 Learning, 🛠️ Admin, ☕ Break, ❓ Other
- Category dropdown + optional detail text on same line in prompt dialog and manual entry
- New Category column in activity table
- Categories editable in Settings (emoji + label per line, defaults reset if emptied)
- Backward compatible with old entries and exports (quickFillOptions auto-migrated)
- CSV/JSON export includes category field
- DEFAULT_CATEGORIES constant (DRY — single source of truth for defaults)
- Service worker cache bumped to v6

### v0.471 (minor fixes, no changelog entry)
- Mobile: pause/settings buttons moved next to countdown
- Mobile: activity log table scrolls horizontally instead of pushing page wider
- Mobile: category dropdown auto-sized, details stays on same line
- Mobile: sidebar toggle debounced (300ms) to prevent double-fire
- Mobile: hover lift disabled on touch devices
- Fixed broken import/export button emojis (⬆/⬇ arrows)

### Other changes (no version bump)
- Moved version history from HTML comment block into `CHANGELOG.md`
- Created `MANUAL.md` — full user manual covering all features
- Fixed service worker stale cache issue from ActivityLog.html → activetrack.html rename

## Pending / Still To Do

### CSS Extraction — DEFERRED (user decision)
- User decided to keep single-file HTML for portability
- Spec exists at `.kiro/specs/css-extraction/` but is not being pursued
- Can be revisited if portability is no longer a priority

### Mobile beep notification — DEFERRED
- AudioContext blocked on iOS without user gesture
- Options explored: pre-warm AudioContext on first tap, Vibration API (Android only), base64 audio data URI
- User wants to explore HTML5 options later

### Other potential improvements
- No tests of any kind
- `generate-icons.html` is a dev utility shipped with the app — could be gitignored
- Accessibility pass (ARIA labels, focus management, screen reader announcements)
- Search/filter the log
- Notification API for background tab alerts
- Idle detection to auto-pause
- Export to clipboard
- Daily summary stats by category

## Related Projects

### QuickTicket Tool (separate workspace: quick-t)
- Standalone web tool for creating SIM-T tickets via Tickety API
- Setup guide saved at `/Users/sefes/OneDrive - amazon.com/quick-t/QuickTicket-Setup-Guide.md`
- Steering context saved at quick-t `.kiro/steering/quickticket-context.md`
- Currently in Phase 1 (prerequisites — needs Mac reboot, then toolbox installs)

## User Preferences & Corrections
- Always increment version and add to changelog for functional changes
- Minor fixes can use .001 increment without changelog entry
- Skip specs when user says to — go straight to implementation
- CSS extraction deferred — single-file portability preferred
- Don't delegate to subagent for file modifications (previous attempt broke the app)
- `activetrack-old/` folder is reference only
- User prefers step-by-step practical guidance
- `quick-t.html` is confidential — never include in activetrack repo
- User's AWS account: 257394451103, role: redbrass_admin
- Quick-t project lives at `/Users/sefes/Library/CloudStorage/OneDrive-amazon.com/quick-t/`
