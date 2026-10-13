# LifeAssist-AI Site

Marketing, support, and privacy pages for the iPhone and iPad 1.0 release.
Uses the same static GitHub Pages structure as chess-grandmaster-site.

## Publication

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
Chess Grandmaster website. Source review date: October 12, 2026.

There are no JavaScript dependencies, analytics, website forms, cookies set by the site, or external fonts. Website appearance is remembered in browser local storage. The homepage includes six illustrative development-build iPad screenshots and three simulator app previews, optimized for web. Videos load only on request, have playback controls, and do not autoplay. The document preview honestly uses file import. Add an actual App Store download link when available; the release is still in preparation.

The guide covers unified Add/capture drafts, type-specific alphabetical categories, suggested Notes, Voice Input, grouped details, event/expiry reminders, archive/read-only/restore/permanent deletion, keyboard guidance, Search, Vault, compact Settings, and manual Backup & Restore, including iCloud Drive, local Files, Mac transfer, and unresolved Google Drive file-provider troubleshooting. FAQ and privacy copy reflect the latest release. Do not promise live AI, automatic cloud sync, encrypted backups, or Vault recovery through app backups.

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
