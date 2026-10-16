# LifeAssist-AI Site

Marketing, support, and privacy pages for the iPhone and iPad 1.0 release.
Uses the same static GitHub Pages structure as chess-grandmaster-site.

## Publication

The site is published at https://angdembey.github.io/ai-life-assistant-site/. The October 16 build 8 guide, FAQ, marketing, and privacy updates were deployed in commit 773c599b9e0d0d0b439f83db442a8798db5b4c76 and verified live. The October 16 media refresh replaces all gallery images and previews with current build 8 captures. Verify its GitHub Pages deployment before announcing the new media live. The initial setup instructions below are retained for reference.


Create a public GitHub repository named ai-life-assistant-site under Angdembey.
Upload this directory's README.md, .gitignore, and docs/ folder. Configure
Settings → Pages → Deploy from a branch → main → /docs → Save.
Publish only the website files; the mobile app source is not part of this site.

Expected URLs after GitHub Pages is enabled and deployment succeeds:

- Marketing: https://angdembey.github.io/ai-life-assistant-site/
- Support: https://angdembey.github.io/ai-life-assistant-site/support/
- Privacy: https://angdembey.github.io/ai-life-assistant-site/privacy/

GitHub Pages publishes from main /docs. Confirm the deployment succeeds and
all three URLs respond before entering them in App Store Connect.

To upload with Git after creating an empty repository, run these commands
inside the separate website checkout (not the mobile app repository):

```sh
git init -b main
git add README.md .gitignore docs
git commit -m "Create LifeAssist-AI marketing, support, and privacy site"
git remote add origin https://github.com/Angdembey/ai-life-assistant-site.git
git push -u origin main
```

Alternatively upload the website files through GitHub's web interface. Extract
the downloadable ZIP from the parent project's artifacts/ folder first and
preserve the docs/ directory when uploading.

## Content and maintenance

Public contact: Dhana Angdembey / angdembey.dra@gmail.com, matching the existing
Chess Grandmaster website. Source review date: October 16, 2026. Current source includes build 8 text and fresh media.

There are no JavaScript dependencies, analytics, website forms, cookies set by the site, or external fonts. Website appearance is remembered in browser local storage. The homepage includes six build 8 screenshots (five iPad and one locked-Vault iPhone screen) and three build 8 simulator previews, optimized for web. Videos load only on request, have playback controls, and do not autoplay. The document preview shows the shared Capture chooser and an existing SPECIMEN PDF viewer, with Share and Print controls. It does not show a completed import, scan, share, or print job. The privacy preview shows only the locked Vault and ordinary backup settings. All new screenshots and footage were captured from build 8; no old UI footage was reused. Add an actual App Store download link when available; the release is still in preparation.

The guide now covers the Home pie/Legends, header Save and unsaved-change guards, app-wide iOS Done, five numbered Capture methods, Add Code cancellation destinations, attachment actions and Full Text, date validation, Cancel Reminder, four Vault editors, and current Settings. iPad hover is owner-confirmed; visible Capture guidance does not require hover on iPhone. It also retains unified Add/capture drafts, type-specific alphabetical categories, suggested Notes, Voice Input, grouped details, event/expiry reminders, archive/read-only/restore/permanent deletion, keyboard guidance, Search, Vault, compact Settings, and manual ordinary Backup & Restore plus separate encrypted Vault backup/recovery using an owner-held key, including iCloud Drive, local Files, Mac transfer, and unresolved Google Drive file-provider troubleshooting. FAQ and privacy copy reflect the latest release. Do not promise live AI, automatic cloud sync, or encrypted ordinary item backups. Vault recovery requires its separate encrypted archive and matching recovery key; ordinary backups still exclude it. On October 16, 2026, the owner confirmed ordinary-item and encrypted Vault backup/restore passed on the same device and a new device, and accepted the tested current workflows. This is owner-reported device validation; exact device models/OS combinations were not enumerated in that confirmation.

The privacy policy describes local data, optional sharing/printing/link opening,
device backups, deletion limits, email support, and GitHub Pages hosting.
Verify it against the final shipped app and dependencies before release.

Once deployed, verify all three URLs without signing in, enter Support and
Privacy URLs into App Store Connect, and add easily accessible in-app links.
Final URLs must be confirmed live before adding them to the app.

References:
- https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
- https://developer.apple.com/app-store/app-privacy-details/
- https://developer.apple.com/app-store/review/guidelines/#privacy
