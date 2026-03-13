# ActiveTrack — Version History

## v0.45 — March 11, 2026
- Changed defaults: 30-minute prompt interval, dark mode on, beep muted
- Added daily activity hours tracker in sidebar (entry count + tracked time span)
- Confirmed daily log rotation at midnight, on reactivation, and on init

## v0.44
- Replaced native `alert`/`confirm` dialogs with custom styled modals
- Removes `file://` origin from dialog title bar

## v0.43
- UI design overhaul: monochrome button hierarchy (primary / secondary / danger / tertiary)
- Consistent icon + tooltip system across settings, dialogs, and forms

## v0.42
- Import dialog with radio buttons for merge/replace selection

## v0.41
- Export/Import JSON for transferring logs between devices and browsers

## v0.40
- Converted to Progressive Web App (PWA) with offline support

## v0.39
- Inline edit/delete per entry
- Manual "Add Entry" form in sidebar

## v0.38
- Daily log rotation at midnight or on tab reactivation, with save prompt

## v0.37
- Added beep notification toggle in settings

## v0.36
- Keyboard shortcut hints in UI
- Fixed inline styles, initial countdown display
- Improved CSV filename format (date-stamped)
- Save indicator
- Fixed z-index issues

## v0.35
- Rebranded to ActiveTrack
- Added intro description

## v0.34
- Updated Quick Fill defaults: Break-Fix full text, Ticket with colon/space, added Projects

## v0.33
- Fixed button positioning in settings panel (`clear: both` prevents line wrapping)

## v0.32
- Fixed settings panel sizing: compact inputs, resizable textarea with constraints

## v0.31
- Code optimizations: efficient sidebar updates, debounced saves, input validation
- UX improvements: paused state visual, keyboard shortcuts (P / ESC), countdown warning colors, editable quick-fill options, soft delete with undo

## v0.30
- Removed current time display
- Countdown in styled pillbox

## v0.29
- Changed toggle to vertical arrows
- Fixed duplicate button, light grey toggle color
- Adjusted toggle position, compact time displays on same line

## v0.28
- Added "Ticket" quick option
- Collapsible sidebar
- Fixed mobile layout issues

## v0.27
- Mobile-responsive design
- Light/Dark mode toggle
