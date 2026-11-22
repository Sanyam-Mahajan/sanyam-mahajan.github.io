---
name: The Field Register
description: A field researcher's ruled register at night, with an amber margin rule and highlighter.
colors:
  ground: "#070d1c"
  ink: "#eef1f8"
  soft: "#a3aec6"
  amber: "#f6b555"
  rule: "rgba(238,241,248,.045)"
  row: "rgba(238,241,248,.075)"
  highlight: "rgba(246,181,85,.17)"
  margin: "rgba(246,181,85,.24)"
  light-ground: "#eef1f6"
  light-ink: "#121a2b"
  light-soft: "#4a5670"
  light-amber: "#c98418"
  light-amber-ink: "#8a5200"
typography:
  name:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "2.6rem (phone) / 4rem (laptop)"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "-0.02em"
  section:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "1.4rem"
    fontWeight: 400
    fontStyle: italic
  paper-title:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "1.1rem"
    fontWeight: 500
  body:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  data:
    fontFamily: "Geist Mono, ui-monospace, monospace"
    fontSize: "0.8rem"
    fontWeight: 400
rounded:
  stamp: "3px"
  button: "6px"
spacing:
  ruling: "2.125rem"
  row-pad: "0.9rem 0.75rem"
  section-gap: "3rem"
components:
  row:
    padding: "{spacing.row-pad}"
  stamp:
    textColor: "{colors.amber}"
    typography: "{typography.data}"
    rounded: "{rounded.stamp}"
    padding: "0.3rem 0.45rem"
  pref-button:
    textColor: "{colors.soft}"
    rounded: "{rounded.button}"
    height: "2.75rem"
---

## Overview

One page that reads as a ruled register kept by a field researcher, at night. The
record is the content; the interface recedes. Dark is the identity. Light theme and
text size are reader options, not part of the look.

## Colors

Night-navy ground, near-white ink, a cool grey for secondary text, and **one accent:
amber**, used only for the margin rule, the section rules, the highlighter, focus rings,
selection and stamps. Never a second accent. The light theme is a pale paper-blue
ground with a darker amber so stamps stay readable as text.

## Typography

Newsreader (serif) for the name, section headings (italic) and paper titles. Geist for
all reading text. Geist Mono only for data: dates, stamps, the email address. Never use
mono for prose or headings.

## Layout

- **Phone (default):** one scroll. Intro, then sections. Each row is a two-column grid:
  date (5.5rem) and entry. The amber margin rule runs down the date gutter of the rows.
- **Laptop (60rem and up):** intro fixed on the left (27.5rem; 22rem below 75rem) with
  a section menu; the record scrolls on the right. One full-height amber margin rule sits
  in the gap between the two.
- The ground is ruled every 2.125rem. A few empty ruled rows close the Experience list.

## Elevation & Depth

Flat. Depth comes only from the amber spotlight (a soft radial glow that follows the
pointer, and drifts on its own when idle) and the highlighter stroke. No shadows, no
cards, no glass.

## Shapes

Hairlines everywhere: 1px row rules, 1px margin rule, 1px stamp borders. Corners
3px on stamps and 6px on the footer buttons; nothing else is rounded.

## Components

- **Row (`.e`):** date, bold title, soft organisation line, one-to-two sentence note.
  On hover (pointer devices only) the row gets an amber highlighter stroke sweeping in
  from the left and its siblings dim to half. Keyboard focus inside a row does the same.
- **Stamp (`.stamp`):** amber mono label in a thin amber box, for paper status and
  recognitions ("Under review", "Runner-up, Best Paper").
- **Section menu (`.toc`, laptop):** a line before each label grows and turns amber for
  the section in view.
- **Footer preferences:** Light/Dark theme and A−/A+ text size (14–22px), 44px targets,
  saved per device.

## Do's and Don'ts

- Do keep motion on everywhere, and keep the reduced-motion fallback working.
- Do start every animation from a visible state; content must never depend on JS to
  appear.
- Don't add counts or tallies ("9 roles", "4 awards"), a photo, or reader numbers.
- Don't add a second accent colour, gradients on text, eyebrow labels over headings,
  magnetic buttons, tickers or text scrambles.
- Don't make awards prominent; they sit last, as plain rows.
