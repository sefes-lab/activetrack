# ActiveTrack — User Manual

ActiveTrack is a lightweight time and activity logger that runs in your browser. It prompts you at regular intervals to record what you're working on, building a timestamped log of your day.

It works offline as a Progressive Web App (PWA) and stores all data locally in your browser — nothing is sent to a server.

---

## Getting Started

Open `activetrack.html` in any modern browser, or visit the hosted version at https://sefes-lab.github.io/activetrack/activetrack.html.

On first load, ActiveTrack will immediately show a prompt dialog asking what you're doing. Select a category, optionally add details, and click Submit. The app will continue prompting you at the configured interval (default: every 30 minutes).

### Install as PWA

On mobile or desktop, you can install ActiveTrack as a standalone app:
- Chrome/Edge: Click the install icon in the address bar, or use Menu → "Install ActiveTrack"
- Safari (iOS): Tap Share → "Add to Home Screen"

Once installed, it works offline and launches like a native app.

---

## The Prompt Dialog

When the interval timer reaches zero, a dialog appears asking "What are you doing?"

The dialog contains:
- A "Last" indicator showing your previous category
- A category dropdown with emoji-tagged options (e.g., 🔧 Break-Fix, 🤝 Meeting)
- An optional text field for additional details
- A Submit button
- A countdown showing time remaining before auto-submit

### Auto-Submit

If you don't respond within the timeout period (default: 30 seconds), the dialog closes automatically and logs your last-used category. A warning appears at 10 seconds with a beep (if enabled).

### Keyboard Shortcuts

| Key | Action |
|---|---|
| Enter | Submit the current dialog |
| Escape | Dismiss the dialog without logging |
| P | Pause or unpause the timer (works anywhere except when typing in a text field) |

---

## Categories

Categories are the primary way to classify your activity. Each has an emoji for quick visual identification.

### Default Categories

| Emoji | Category | Typical Use |
|---|---|---|
| 🔧 | Break-Fix | Troubleshooting, incident response, bug fixes |
| 🎫 | Ticket | Working on a specific ticket or task |
| 📋 | Projects | Planned project work, feature development |
| 🤝 | Meeting | Calls, syncs, 1:1s, stand-ups |
| 💬 | Support | Helping teammates, answering questions |
| 📧 | Comms | Email, Slack, Chime, async communication |
| 📚 | Learning | Training, reading docs, research |
| 🛠️ | Admin | Timesheets, approvals, tooling setup |
| ☕ | Break | Lunch, coffee, personal time |
| ❓ | Other | Anything that doesn't fit above |

### Editing Categories

Open Settings (⚙ button) and edit the "Categories" textarea. Each line should be an emoji followed by a space and the label name:

```
🔧 Break-Fix
🎫 Ticket
📋 Projects
```

You can add, remove, or reorder lines. If you clear the textarea entirely and save, it resets to the defaults.

---

## Activity Log (Sidebar)

The sidebar on the right displays your activity log as a table with columns: Date, Time, Category, and Details.

### Stats Bar

At the top of the sidebar, a stats bar shows:
- Total entries across all days in the current session
- Today's entry count
- Tracked time (span from your first entry to your last entry today)

### Adding a Manual Entry

Click the + button above the table to open the manual entry form. Fill in:
- Date (defaults to today)
- Time (defaults to now)
- Category (required)
- Details (optional)

Manual entries are inserted in chronological order.

### Editing an Entry

Click the ✏️ icon on any row to edit the details text inline. Press Enter to save or Escape to cancel.

### Deleting an Entry

Click the 🗑️ icon on any row. A confirmation dialog appears before deletion.

### Collapsing the Sidebar

Click the sidebar toggle button (✕ when open, ☰ when collapsed) to show or hide the sidebar. On desktop, it appears on the right edge of the screen. On mobile, it collapses below the main content. The sidebar state is remembered between sessions.

---

## Pausing the Timer

Click the ⏸ button or press P to pause the countdown. The countdown pill turns yellow to indicate the paused state. Press P again or click ▶ to resume.

While paused, no prompts will appear and the countdown stays frozen.

---

## Settings

Click the ⚙ button to open the Settings panel.

### Available Settings

| Setting | Default | Range | Description |
|---|---|---|---|
| Prompt Interval | 30 minutes | 1–60 min | How often the prompt dialog appears |
| Dialog Timeout | 30 seconds | 10–120 sec | How long the dialog waits before auto-submitting |
| Enable Beep | Off | On/Off | Play a beep sound when the dialog appears and at the 10-second warning |
| Categories | 10 defaults | Any | Emoji-tagged activity categories, one per line |

Click "Save Settings" to apply. Settings are stored in your browser and persist across sessions.

---

## Dark Mode

Toggle the switch in the top-right corner to switch between light and dark themes. Your preference is saved automatically.

---

## Daily Log Rotation

ActiveTrack automatically detects when a new day begins. This happens:
- When you first open the app on a new day
- At midnight (if the app is open)
- When you return to the tab after it's been in the background overnight

When a new day is detected and you have entries from the previous day, a dialog asks whether to save yesterday's log as a CSV file before clearing. You can choose:
- "Save & Clear" — downloads a CSV and starts fresh
- "Just Clear" — clears the log without saving

---

## Export and Import

### CSV Download

Click "📄 CSV" in the sidebar to download the current log as a CSV file. The file is named `ActiveTrack-YYYY-MM-DD.csv` and contains columns: Date, Time, Category, Details.

### JSON Export

Click "⬇ Export" to download a full JSON backup including your log entries, settings, and categories. The file is named `ActiveTrack-YYYY-MM-DD.json`.

### JSON Import

Click "⬆ Import" and select a previously exported JSON file. You'll be asked to choose:
- "Merge with existing log" — combines imported entries with your current log, sorted chronologically
- "Replace existing log" — overwrites your current log with the imported data

Import is backward compatible with older export files.

---

## Clear Log

Click "🗑 Clear" in the sidebar to delete all entries. A confirmation dialog appears first. After clearing, an undo banner appears at the bottom of the screen for 10 seconds — click "Undo" to restore the deleted entries.

---

## Offline Support

ActiveTrack works offline after the first visit. A service worker caches all app files so you can use it without an internet connection. Data is stored in your browser's localStorage.

When you go back online, the service worker checks for updates and refreshes the cache automatically (network-first strategy).

---

## Data Storage

All data is stored in your browser's localStorage:
- `activityLog` — your log entries (array of date/time/category/response objects)
- `lastCategory` — your most recent category selection
- `config` — all settings including interval, timeout, theme, sidebar state, and categories
- `lastActiveDate` — used for daily log rotation detection

No data leaves your browser. Clearing browser data or switching browsers will lose your log unless you export it first.

---

## Keyboard Reference

| Key | Context | Action |
|---|---|---|
| P | Anywhere (not in a text field) | Toggle pause/unpause |
| Enter | In prompt dialog | Submit response |
| Escape | In prompt dialog | Dismiss without logging |
| Enter | While editing an entry | Save the edit |
| Escape | While editing an entry | Cancel the edit |

---

## Version

Current version: v0.47

See `CHANGELOG.md` for full version history.
