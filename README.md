# sanyam-mahajan.github.io

A personal academic site, set as a piece of legislation. One page, no build tools,
nothing to install.

---

## How to change things

You never need to open the HTML. Everything you'll actually want to edit lives in
two places, and both are plain lists.

You can do all of this **in your browser**, on github.com, on a phone if you like:
open the file, click the pencil icon, edit, then click **Commit changes**. The site
rebuilds itself in about a minute.

### `_config.yml` — the things that appear in one place

Your job title, affiliation, location, email, LinkedIn, Scholar, ORCID, the long
title at the top of the page, and the "last revised" date at the foot.

Change `last_revised` whenever you update anything. It shows in the footer and tells
Google the page is alive.

### `_data/` — the lists

| File | What it controls |
|---|---|
| `publications.yml` | Section 3, published work |
| `forthcoming.yml` | Section 4, under review and forthcoming |
| `experience.yml` | Schedule I, jobs and fellowships |
| `awards.yml` | Schedule II, awards and certificates |
| `definitions.yml` | Section 2, your education |

**To add a publication**, open `_data/publications.yml`, copy an existing block, and
change the fields. The order in the file is the order on the page, so put new work at
the top.

```yaml
- title: "The title of the piece"
  cite:
    - With Someone Else            # each line becomes its own line on the page
    - Journal Name, Vol. 2, No. 1 · 2026
  link: https://example.com/the-piece    # leave this out if there is no link
  plainly: >-
    One or two sentences, in your voice, saying what the piece actually
    argues. This is the right-hand column. It is the best writing on the
    page, so do not let it go stale.
```

Two special fields:

- `request: true` replaces the link with a pre-filled email asking you for a copy.
  Use it for anything a co-author has asked you not to post.
- `status: Under review` puts a chip under the citation. Only used in `forthcoming.yml`.

**Careful with YAML:** keep the two-space indentation exactly as it is, and if a line
contains a colon, wrap the whole value in `"double quotes"`.

### Other files

- `cv.pdf` — replace it with a new one and the link in section 6 keeps working.
  **Check the phone number is out of it before you upload.**
- `assets/portrait.jpg` — the frontispiece.
- `assets/style.css` — all the design. One file.
- `index.html` — the document itself. Only needed for adding a whole new section.

---

## Publishing it

1. Create a repository on GitHub named exactly **`sanyam-mahajan.github.io`**, public.
2. Upload everything in this folder to it.
3. Settings → Pages → Source: **Deploy from a branch**, branch **main**, folder **/ (root)**.
4. Wait a minute or two. It's live at <https://sanyam-mahajan.github.io>.

Any change you commit after that goes live on its own.

### Later, if you buy a domain

Add a file called `CNAME` containing just the domain, point the domain's DNS at
GitHub, and update `url:` in `_config.yml`. Nothing else changes.

---

## What's built in

Light and dark themes, following the reader's system setting with a toggle that
remembers. Adjustable text size. A print stylesheet, so anyone who prints or PDFs the
page gets a clean black-on-white document with the link URLs spelled out. Structured
data and a share card, so the link renders properly when pasted and Google understands
you're a researcher. A sitemap. A 404 page.

---

## Running it on your own machine (optional, not needed)

GitHub builds this for you, so you never have to. If you ever want a local preview:

```bash
bundle exec jekyll serve
```
