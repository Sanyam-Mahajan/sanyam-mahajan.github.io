# sanyam-mahajan.github.io

A one-page professional record, laid out as a field researcher's ruled register.
Plain HTML, CSS and a little JavaScript. No build step, nothing to install.

---

## How to change things

Everything on the page lives in **`index.html`**, written out in plain view. You can
edit it on github.com, even from a phone: open the file, click the pencil icon, make
the change, then **Commit changes**. The live site updates in about a minute.

Each entry is one row, and every row has the same shape:

```html
<li class="e">
  <span class="when">Aug 2026–</span>
  <div>
    <b>Research Executive</b>
    <span class="org">Centre for Social Impact, Indian School of Development Management</span>
    <p>One or two sentences on what you did.</p>
  </div>
</li>
```

- **To add a job, fellowship, certificate or award:** copy a row in the right section,
  paste it at the top of that list, and change the words. Newest goes first.
- **Publications** use `<span class="t">` for the title (wrap it in a link if there is
  one) and `<span class="stamp">` for a status such as *Under review*.
- **The empty ruled rows** under Experience (`<li class="ghost">`) are decoration.
  Leave them.
- **When you change anything**, update "Updated November 2026" in the footer and the
  `lastmod` date in `sitemap.xml`.

If you change your title or role, also change it in the `<head>` at the top of
`index.html` (the title, description, `og:` and `twitter:` lines, and the JSON block
under "Person"). That is what Google and link previews show.

### Other files

| File | What it is |
|---|---|
| `cv.pdf` | Your CV. Replace it and the link keeps working. **Check the phone number is out first.** |
| `assets/style.css` | All of the design, in one file. Colours are at the top. |
| `assets/site.js` | The spotlight, the section menu, the theme and text-size buttons. |
| `assets/share-card.png` | The picture shown when the link is pasted into WhatsApp, LinkedIn and so on. |
| `assets/favicon.svg` | The browser-tab icon. |
| `404.html` | The page shown for a broken link. |
| `.nojekyll` | Tells GitHub to serve the files as they are. Keep it. |

---

## What's built in

- Dark by default. A **Light theme** button and **A− / A+** text size in the footer,
  both remembered on that device.
- Motion throughout (the following spotlight, rows inking in, the highlighter on
  hover), switched off for anyone whose device asks for reduced motion.
- A print stylesheet: printing or saving as PDF gives clean black on white with link
  URLs spelled out.
- Structured data and a share card, so the link previews properly and search engines
  understand who the page is about. A sitemap and a 404 page.

## Publishing

The repository is **`sanyam-mahajan.github.io`**, served by GitHub Pages from the
`main` branch, root folder. Anything committed there goes live on its own.

`PRODUCT.md`, `design/` and `.impeccable/` are private working notes and are listed in
`.gitignore`. Keep them out of the repository.

## Previewing on your own machine (optional)

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000>.
