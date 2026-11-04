# Cognitiva Practice — GitHub Pages edition

Live website: https://sang006.github.io/cognitiva-practice/

Published and verified on GitHub Pages. The repository uses main/root branch publishing.

Thai-first static reasoning practice. 80 original tasks in four domains, 10/30/50-question modes, optional browser timer, raw scoring, per-domain charts and explanations. Mobile-friendly SVG diagrams preserve proportions.

## What this edition does

- Runs entirely in the browser with relative asset URLs, including repository subpaths.
- Requires no build, npm installation, backend, database, API keys or sign-in.
- Keeps answers/results in JavaScript memory only. Refresh/close clears them. No localStorage, cookies, analytics or remote result collection are added by this app.
- Prints a personal practice report using the browser print dialog. No certificates, certificate verification or standardized IQ scores.
- Contains answer keys in the public client files intentionally. It is a learning tool, not a secure assessment.

Questions are AI-authored original demonstration content, pending qualified human review and psychometric validation. Difficulty is an estimate. No copied proprietary test items or third-party accreditation claims.

## Local preview

From this directory:

```powershell
python -m http.server 5180 --bind 127.0.0.1
```

Open http://127.0.0.1:5180/ in a browser. Do not open index.html as a file URL: browsers restrict ES module imports from local files.

Optional tests (Node.js 24+, no dependencies): `npm test`

## GitHub Pages setup

Publish these files at the root of a dedicated repository. On GitHub Free, use a public repository; publish only this static practice edition, not private backend source or secrets.

Settings → Pages → Build and deployment → Deploy from a branch → `main` → `/ (root)` → Save.

`.nojekyll` disables Jekyll processing; no custom build workflow is required. GitHub still uses its Pages deployment infrastructure, which requires the owning account to be allowed to use Actions. If GitHub reports “GitHub Actions is currently disabled for your account,” contact GitHub Support. Changing the source branch does not remove that account restriction.

Enable Pages and confirm a successful deployment before treating the expected github.io URL as live. The host may maintain access logs under its own policy; the app does not send practice answers to it.
