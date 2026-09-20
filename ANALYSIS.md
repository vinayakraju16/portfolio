# Repository Analysis

An overview of the `Portfolio` codebase as of 2026-09-19: what it is, how it's built, and what's worth knowing before making further changes.

## What this is

A single-page personal portfolio for Siddhivinayak Raghavraju (full-stack developer / AI-ML engineer), built as a static React app and deployed as a static site (there's a `public/_redirects` file, consistent with a Netlify/Cloudflare Pages-style deployment).

## Stack

- **React 19** + **Vite 7** — build tooling and dev server (`npm run dev`, `npm run build`)
- **Framer Motion** — scroll-reveal and entrance animations
- **React Icons** (`react-icons/fa`, `react-icons/si`) — all iconography
- **Plain CSS** (`App.css`, `index.css`) — no CSS framework or CSS-in-JS; one global stylesheet with CSS custom properties for theme tokens
- **ESLint 9** (flat config) for linting; no test framework is configured

## Structure

```
index.html          Document shell, meta/OG tags, Google Fonts links
src/
  main.jsx          React root
  App.jsx           Entire site as one component (hero, work, experience, about, contact)
  App.css           All component styling
  index.css         Base/reset styles
  assets/           Profile photo
public/
  favicon.svg, _redirects, Siddhivinayak-Raghavraju-Resume.pdf
```

The whole page is one file (`App.jsx`) rather than split into components. For a single-page portfolio of this size that's a reasonable, low-overhead choice — content (projects, capabilities arrays) is already separated from markup at the top of the file.

## Design system (before this session's changes)

- Cool blue/slate palette (`--ink`, `--muted`, `--accent: #2563eb`) on a light background, defined as CSS custom properties in `App.css`.
- Rounded pill buttons, soft shadows, a floating pill-shaped sticky header, and a two-column hero with a photo card.
- Scroll-triggered reveal animation (`whileInView`) was only applied to the hero and project cards — other sections appeared instantly.
- Typography relied on the `Inter` font-family name without ever loading a web font, so it silently fell back to system fonts (San Francisco / Segoe UI / Roboto depending on OS) — the intended type identity never actually rendered.

## Findings from this session

**Dead code and unreferenced assets removed:**
- `src/components/` contained 5 unused files (`BackgroundParticles.jsx`, `CustomCursor.jsx`, `Hero3DGraphics.jsx`, `Magnetic.jsx`, `ScrambleText.jsx`) — leftovers from an earlier, more experimental design direction. Three depended on packages that were never installed (`@tsparticles/react`, `@react-three/fiber`, `@react-three/drei`, `three`), and none were imported anywhere.
- Root-level `styles.css` — not referenced by any HTML/JS/CSS in the project.
- `src/assets/react.svg` and `public/vite.svg` — unused Vite/React template defaults.
- `src/assets/hackthon image.avif` — unused, unreferenced.
- `src/assets/Vinayak-natural.jpg` and `src/assets/Vinayak.png` (6.5 MB) — unused alternate photos; only `Vinayak-normal-v2.jpg` is referenced from `App.jsx`.

**Removed after confirmation (personal documents / independent repo, not plain code cruft):**
- `Siddhivinayak Resume edit.pdf` (repo root) — superseded by `public/Siddhivinayak-Raghavraju-Resume.pdf`, which is the file actually linked from the site's download/résumé buttons.
- `vinayakraju16.github.io/` — an entire separate, independent git repository (its own `.git` history) containing an earlier plain HTML/CSS/JS portfolio attempt, nested inside this repo. Superseded by the current React app; deleted at the user's request.

**Left in place (kept by user's choice):**
- `T-GCPMLE-A-m1-l1-en-file-1.en.pdf` (repo root, untracked, ~844 KB) — a GCP ML Engineer course file unrelated to the portfolio. Still worth relocating out of the repo at some point, but the user chose to keep it for now.

**Visual/UX polish applied:**
- Loaded real web fonts (`Manrope` for headings, `Inter` for body) via Google Fonts in `index.html`, and applied `Manrope` to all headings/brand mark — previously "Inter" was specified but never actually loaded.
- Added a subtle blue→violet gradient to the hero's emphasized headline text and a soft animated glow behind the profile photo card for visual depth.
- Extended the existing scroll-reveal animation pattern (already used for the hero and project cards) to the stats strip, experience card, about/capabilities section, and contact section, plus a fade-in for the sticky header — so the whole page now animates in consistently instead of only the top two sections.
- Fixed a `theme-color` mismatch in `index.html` (declared `#f5f6f1`, background is actually `#e9eef3`).

All changes respect the existing `prefers-reduced-motion` handling already in `App.css`, which disables animations for users who request it.

## Suggested next steps

- Decide on the two flagged PDFs (remove the stale résumé, relocate or remove the unrelated course PDF).
- No automated tests exist; if this grows beyond a static portfolio, consider basic smoke tests, but for a single-page site this is optional.
- Consider adding an `og:image` (e.g. the profile photo) for richer link previews on LinkedIn/Twitter/Slack.
