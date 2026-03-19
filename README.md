# ActiveTrack

Automated time and activity logger. Asks what you're up to at regular intervals.

ActiveTrack is a lightweight, single-file PWA that periodically prompts you to log what you're working on. Designed for personal productivity tracking with zero setup — just open and go.

**Live app**: https://sefes-lab.github.io/activetrack/activetrack.html

## Features

- **Periodic prompts** — Configurable interval (default 30 min) with countdown timer and audio beep
- **Emoji categories** — 10 default categories (🔧 Break-Fix, 🎫 Ticket, 📋 Projects, 🤝 Meeting, etc.) with optional detail text
- **Activity Log sidebar** — Timestamped entries with category, inline edit, and delete
- **Manual entry** — Add entries at any time with chronological sorting
- **Daily rotation** — Automatically prompts to save and clear at midnight (local time)
- **Export/Import** — JSON export with full log + settings; merge or replace on import
- **CSV download** — One-click export for spreadsheet use
- **Light/Dark mode** — Toggle with persistent preference
- **Keyboard shortcuts** — `P` to pause/unpause, `ESC` to dismiss dialog
- **PWA support** — Installable on mobile and desktop with offline caching
- **Soft delete** — Clear log with 10-second undo
- **Responsive design** — Works on desktop, tablet, and mobile
- **No server required** — All data stored in localStorage

## Getting Started

### Run locally

Open `activetrack.html` in any modern browser. That's it.

### Install as PWA

- **iOS Safari**: Share → "Add to Home Screen"
- **Android Chrome**: Menu → "Install app"
- **Desktop Chrome/Edge**: Click install icon in address bar

## Files

| File | Purpose |
|------|---------|
| `activetrack.html` | Main application (single-file HTML/CSS/JS) |
| `manifest.json` | PWA manifest for installability |
| `sw.js` | Service worker for offline caching |
| `icon-192.png` | App icon (192x192) |
| `icon-512.png` | App icon (512x512) |
| `CHANGELOG.md` | Version history |
| `MANUAL.md` | Full user manual |

## Settings

Configurable via the ⚙ button:

- Prompt interval (1–60 minutes)
- Dialog timeout (10–120 seconds)
- Beep notification toggle
- Categories (emoji + label, editable, one per line)

## Data

All data is stored in the browser's `localStorage`. Use Export/Import (JSON) to transfer between devices or browsers. See [MANUAL.md](MANUAL.md) for full documentation.

## License

All rights reserved — see [LICENSE](LICENSE) for details.

## Author

Created by sefes
