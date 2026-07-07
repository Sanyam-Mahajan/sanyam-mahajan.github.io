# sanyam-mahajan.github.io (Hugo)

Personal site in the academic-paper style of [pradyuprasad.com](https://pradyuprasad.com) (design lineage: [joodaloop](https://joodaloop.com)).

## Structure
- `content/_index.md` — home page bio (the "Abstract")
- `content/publications/*.md` — writing/publications (shown on /publications/ and as "Recent Writing" on home)
- `content/projects/*.md` — projects
- `content/cv.md` — CV page
- `layouts/` — templates; `static/css/style.css` — all styling
- Personal-info block and keywords: edit `layouts/home.html` and `hugo.toml` `[params]`

## Before deploying
1. Copy your CV PDF to `static/assets/Sanyam_Mahajan_CV.pdf` (the CV page links to it).
2. Optionally copy `assets/profile.png` from your old repo into `static/assets/` if you want to re-add a photo.

## Deploy (GitHub Pages)
1. Replace the contents of your `sanyam-mahajan.github.io` repo with this folder and push to `main`.
2. In the repo: Settings → Pages → Source: **GitHub Actions**.
3. The included `.github/workflows/hugo.yml` builds and deploys on every push.

## Local preview
```
hugo server
```

## Adding a new post
Create `content/publications/my-post.md`:
```
---
title: "Post title"
date: 2026-07-07
year: 2026
status: "Essay"
meta: "Sanyam Mahajan · 2026"
summary: "One-line summary shown in lists."
---
Body text…
```
