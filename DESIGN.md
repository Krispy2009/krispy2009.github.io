---
name: kristi.cy
description: A desk scrapbook by day, a chalkboard at night. Clean, legible type with handwritten asides and paper objects pinned to dotted paper.
colors:
  ink-violet: "#7444dd"
  margin-blue: "#2f7fc4"
  ledger-green: "#2c9467"
  highlighter-lilac: "#e6dcff"
  dot-paper: "#fbfbfd"
  paper-dots: "#e7eaf2"
  card-white: "#ffffff"
  night-ink: "#1d1f33"
  pencil-grey: "#545a72"
  running-orange: "#c0632d"
  note-blue: "#dcecfb"
  note-lilac: "#ece4ff"
  note-green: "#ddf3e6"
  note-yellow: "#fff1c2"
  chalkboard: "#253029"
  chalk-white: "#eef2ea"
  chalk-dust: "#b9c4ba"
  chalk-violet: "#c9b6ff"
  chalk-blue: "#a3d0f7"
  chalk-green: "#a6e5c3"
typography:
  display:
    fontFamily: "Atkinson Hyperlegible, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 6vw, 4rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Atkinson Hyperlegible, system-ui, sans-serif"
    fontSize: "1.75rem"
    fontWeight: 700
    letterSpacing: "-0.01em"
  lead:
    fontFamily: "Atkinson Hyperlegible, system-ui, sans-serif"
    fontSize: "clamp(1.25rem, 2.4vw, 1.5rem)"
    fontWeight: 400
    lineHeight: 1.45
  title:
    fontFamily: "Atkinson Hyperlegible, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.25
  stat:
    fontFamily: "Atkinson Hyperlegible, system-ui, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 700
    lineHeight: 1
  body:
    fontFamily: "Atkinson Hyperlegible, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: "Atkinson Hyperlegible, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Atkinson Hyperlegible, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 700
    letterSpacing: "0.04em"
  hand-label:
    fontFamily: "Caveat, cursive"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.1
  hand-scribble:
    fontFamily: "Caveat, cursive"
    fontSize: "1.6rem"
    fontWeight: 500
    lineHeight: 1.15
  hand-numeral:
    fontFamily: "Caveat, cursive"
    fontSize: "3rem"
    fontWeight: 700
    lineHeight: 1
rounded:
  tape: "4px"
  button: "0.6rem"
  card: "1rem"
  pill: "999px"
  round: "50%"
spacing:
  xs: "0.4rem"
  sm: "0.75rem"
  md: "1.25rem"
  lg: "1.5rem"
  xl: "2.5rem"
  section: "3.5rem"
  gutter: "1.5rem"
  container: "62rem"
components:
  button-nav:
    backgroundColor: "{colors.night-ink}"
    textColor: "{colors.card-white}"
    rounded: "{rounded.button}"
    padding: "0.5rem 1.1rem"
  button-cta:
    backgroundColor: "{colors.ink-violet}"
    textColor: "{colors.card-white}"
    rounded: "{rounded.pill}"
    padding: "0.8rem 1.6rem"
  button-cta-outline:
    backgroundColor: "transparent"
    textColor: "{colors.night-ink}"
    rounded: "{rounded.pill}"
    padding: "calc(0.8rem - 2px) calc(1.6rem - 2px)"
  theme-toggle:
    backgroundColor: "transparent"
    textColor: "{colors.night-ink}"
    rounded: "{rounded.round}"
    size: "2.4rem"
  sticky-note:
    backgroundColor: "{colors.note-blue}"
    textColor: "{colors.night-ink}"
    rounded: "{rounded.tape}"
    padding: "1.25rem 1.25rem 1.5rem"
  stat-card:
    backgroundColor: "{colors.card-white}"
    textColor: "{colors.night-ink}"
    rounded: "{rounded.card}"
    padding: "1.1rem 1.5rem 1.5rem"
  chip:
    backgroundColor: "{colors.card-white}"
    textColor: "{colors.night-ink}"
    rounded: "{rounded.pill}"
    padding: "0.4rem 1rem"
  polaroid:
    backgroundColor: "{colors.card-white}"
    textColor: "{colors.night-ink}"
    padding: "0.8rem 0.8rem 1.1rem"
---

# Design System: kristi.cy

## Overview

**Creative North Star: "The Desk Scrapbook"**

By day the site is a desk: dotted notebook paper with things pinned and taped to it. There are pastel sticky notes held on with translucent tape, polaroids of side projects, bold-outlined index cards with numbers on them, and blue pencil scribbles in the margin pointing at what matters. By night the same desk becomes a chalkboard. The paper turns dark green, the ink turns to chalk with a faint glow, and the cards become chalk outlines with slightly uneven corners. The objects and layout stay the same. Only the material changes.

The backbone is clean and legible. Atkinson Hyperlegible carries every heading, paragraph and number, set large and comfortable. Caveat handwriting, tilted paper and doodles are layered on top as seasoning: labels, asides, one scribble per view. The voice is warm and playful because of what is said and the handwritten touches around it, never at the cost of readability. Page density is low: a single centred column (max 62rem), generous section spacing, and few elements per row.

The system deliberately rejects corporate or SaaS polish: no gradient heroes, glassmorphism, stock "tech" illustration or generic dark-mode dashboards. It also uses no personal photography. The person comes through in voice, handwriting and objects, not a headshot.

**Key Characteristics:**
- Dotted notebook paper (light) and a smudged chalkboard (dark) as the ground.
- Paper objects (sticky notes, polaroids) are tilted between about -1.5° and 1.6°, and they cast real shadows.
- Ink objects (stat cards, chips, outline buttons) are flat with 2px outlines.
- Atkinson Hyperlegible for everything that must be read, and Caveat only for short handwritten accents.
- One violet "ink" accent, with margin blue and ledger green as supporting pencil colours.
- A braille signature in the footer: accessibility shown as a visible detail, not just stated.

## Colors

The palette is a stationery cupboard: a violet pen, a blue pencil, a green marker, pastel sticky notes, and dark ink on near-white paper. At night, everything turns to pastel chalk on a green board.

### Primary
- **Ink Violet** (`ink-violet`): the signature pen. It is used for the brand wordmark, the emphasised sentence in the hero, the main CTA fill, step numerals, handwritten asides beside headings, lit braille dots, the focus ring and list checkmarks. At night it becomes **Chalk Violet** (`chalk-violet`), and the CTA text switches to Night Ink.

### Secondary
- **Margin Blue** (`margin-blue`): the pencil scribble. It is used for the hero's availability note and its arrow, and as the first index card's accent. At night it becomes **Chalk Blue** (`chalk-blue`).

### Tertiary
- **Ledger Green** (`ledger-green`): used only as the third index card's accent. At night it becomes **Chalk Green** (`chalk-green`).
- **Running Orange** (`running-orange`): a single-purpose accent for the dotted running route doodle on the "off the clock" note. It is not a general accent.

### Neutral
- **Dot Paper** (`dot-paper`): the page background, overlaid with a 22px grid of 1.2px **Paper Dots** (`paper-dots`).
- **Night Ink** (`night-ink`): all body text, card outlines, the nav button fill, and text on sticky notes in both themes.
- **Pencil Grey** (`pencil-grey`): secondary text such as step descriptions, section notes, footer sub-lines, and polaroid captions. Never used for facts a visitor screens for (company names, role, availability).
- **Card White** (`card-white`): stat card, chip and polaroid surfaces, and text on violet.
- **Highlighter Lilac** (`highlighter-lilac`): the highlighter stroke behind the key phrase in each h1. It covers the 55% to 92% band of the line and wraps cleanly across line breaks.
- **Sticky note pastels**: **Note Blue**, **Note Lilac**, **Note Green** and **Note Yellow** (`note-blue`, `note-lilac`, `note-green`, `note-yellow`), cycled in that order.
- **Chalkboard** (`chalkboard`), **Chalk White** (`chalk-white`), **Chalk Dust** (`chalk-dust`): the dark theme's ground, main text and secondary text.

### Named Rules
**The One Pen Rule.** Ink Violet is the only colour that means "this matters" or "act here". Blue and green are decoration or data. They are never used for CTAs or links.

**The Sticky Notes Stay Paper Rule.** Sticky notes and polaroids keep their pastel or white fill and Night Ink text in the chalkboard theme. They are real paper stuck on a board, and they are never inverted. Their inks come from the theme-fixed `--paper-*` custom properties, never from the theme-switching ones.

**The Ink-to-Chalk Rule.** Every colour token has a chalk counterpart. A new colour needs both a light-paper value and a chalk value before it ships.

## Typography

**Display Font:** Atkinson Hyperlegible (fallback: system-ui, sans-serif)
**Body Font:** Atkinson Hyperlegible (fallback: system-ui, sans-serif)
**Hand Font:** Caveat (fallback: cursive)

**Character:** Atkinson is a typeface designed for legibility, set heavy and slightly tight at display sizes. That makes the site's accessibility stance visible in the letterforms themselves. Caveat is the quick handwriting beside it, loose and warm, and always short.

### Hierarchy
- **Display** (700, clamp 2.5–4rem, lh 1.1, -0.02em): one h1 per page, at most 42rem wide, with a Highlighter Lilac mark on the closing phrase.
- **Lead** (400, clamp 1.25–1.5rem, lh 1.45): the hero paragraph under the h1, max 36rem. Its strong phrase is set in Ink Violet.
- **Headline** (700, 1.75rem, -0.01em): section h2s. Each sits on a baseline row with an optional Caveat aside.
- **Title** (700, 1.25rem, lh 1.25): card, note, step and polaroid h3s.
- **Stat** (700, 2.25rem, lh 1): headline numbers on stat cards.
- **Body** (400, 1.125rem, lh 1.6): base paragraph text. Text inside cards and notes uses **Body-sm** (1rem), and list items inside notes use 0.9375rem.
- **Label** (700, 1rem, +0.04em): company names on the header line of each index card.
- **Hand Label** (Caveat 700, 1.5rem, lh 1.1): sticky note headers and h2 asides. Asides are rotated -2°.
- **Hand Scribble** (Caveat 500, 1.6rem, lh 1.15): margin notes, rotated about 4°.
- **Hand Numeral** (Caveat 700, 3rem): numerals for numbered steps.

### Named Rules
**The Seasoning Rule.** Caveat never sets a sentence the visitor must read to understand the page. The one exception is the margin scribble, which carries availability; it stays short, high-contrast and readable by screen readers. Handwriting is capped at about six words per instance, and at most one free-floating scribble per viewport. Everything essential is set in Atkinson.

**The No-Small-Hand Rule.** Caveat is never smaller than 1.25rem. Below that size, handwriting stops being legible.

## Layout

The layout is a single centred column, max 62rem wide, with 1.5rem side gutters. Sections are separated by headings with a 3.5rem top margin, and the footer sits 4.5rem below the last section. Content groups are grids:

- **Sticky notes:** 4 columns (3 for the "what I'm looking for" variant), 1.25rem gap.
- **Index (stat) cards:** 3 columns, 1.5rem gap, top-aligned so each card is as tall as its content (ragged bottoms are intentional).
- **Polaroids:** 2 columns, 2.5rem gap, with a 0.5rem inset so tilted corners don't clip.
- **Steps:** 3 columns, 2rem gap.
- **Chips:** a wrapping row with a 0.6rem gap.

Headings use `text-wrap: balance` and paragraphs and list items use `text-wrap: pretty`, so no line ends on a stranded word. The hero scribble is absolutely positioned in the top-right margin of the hero on wide screens. It feels like a note in the margin, not part of the text flow.

**Responsive:** at 860px and below, the scribble moves into the flow below the hero text and loses its arrow, sticky notes go to 2 columns, and the 3-column notes and the steps stack. At 560px and below, everything is a single column, nav text links hide (only the button and toggle remain), and h2 asides wrap under the heading.

## Elevation & Depth

Depth comes from the material each object is made of. Paper objects lift off the desk with soft, cool shadows, and they rotate slightly as if placed by hand. Ink objects (stat cards, chips, outline buttons) are drawn onto the page: flat, outlined, with no shadow. On the chalkboard, shadows are irrelevant. Chalk headings and handwriting get a faint glow instead.

### Shadow Vocabulary
- **Sticky note** (`box-shadow: 0 6px 16px rgb(30 30 60 / 0.1)`): resting lift for notes.
- **Tape strip** (`box-shadow: 0 1px 2px rgb(0 0 0 / 0.08)`): the translucent white tape (`rgb(255 255 255 / 0.6)`, 4rem × 1.2rem, rotated -3°) centred on the top edge of each note.
- **Polaroid** (`box-shadow: 0 10px 28px rgb(0 0 0 / 0.14)`): a heavier lift for photo prints.
- **Chalk glow** (`text-shadow: 0 0 1px rgb(255 255 255 / 0.45), 0 0 8px rgb(255 255 255 / 0.08)`): dark theme only, on h1, h2, Caveat text and step numerals.

### Named Rules
**The Paper-or-Ink Rule.** Every new element is either paper (it gets a shadow and may tilt) or ink (it gets an outline and stays straight). Never both, never neither.

**The Gentle Tilt Rule.** Tilts stay within ±2° for objects and ±4° for scribbles. Adjacent objects tilt in alternating directions. Hover straightens the object (rotate 0, scale 1.02) and never adds more tilt.

## Shapes

Paper has near-square corners: sticky notes use 4px, polaroids use 0. Ink cards have friendly 1rem corners. In the chalkboard theme those corners go slightly uneven (1rem 0.8rem 1.1rem 0.9rem), as if hand-drawn. Interactive elements are rounder: the primary CTA and chips are full pills, the nav button is a soft rectangle (0.6rem), and the theme toggle is a circle. Outlines are always 2px, in Night Ink or 75% Chalk White. Doodles (scribble arrow, running route) are stroked SVGs with round caps at 2.5px and use `currentColor`.

## Components

### Buttons
Buttons are confident and solid, with heavy text and no decoration.
- **Nav button:** Night Ink fill, white 700 text, 0.6rem radius, padding 0.5rem 1.1rem. In the chalkboard theme it inverts (Chalk White fill, Chalkboard text). Used for the single top-right action.
- **CTA (primary):** Ink Violet pill, white 700 text, padding 0.8rem 1.6rem. Used for the main "Work with me" or "Email me" action in the hero and footer.
- **CTA outline:** a transparent pill with a 2px Night Ink outline and Night Ink text. Used for a secondary action placed next to a primary CTA.
- **Focus:** a global 3px Ink Violet outline with a 3px offset on every focusable element.
- **Theme toggle:** a 2.4rem circle with a 2px ink outline, showing 🌙 or ☀️. Its label describes "light and chalkboard mode".

### Chips
- **Style:** Card White pill with a 2px ink outline, 1rem text, padding 0.4rem 1rem. These are ink objects: flat, with no hover state. They are a static list of skills, not filters.

### Cards / Containers
- **Index card (ink, for stats):** Card White surface, transparent on the chalkboard. 2px Night Ink outline, 1rem radius, padding 1.1rem 1.5rem 1.5rem. Each card sets one `--accent` (blue → violet → green). The company name is an h3 on the header line, ruled underneath with a 2px accent line like an index card's top rule. Below it come the accent-coloured headline number, a 1rem description, and optionally a short list of secondary metrics: a dashed divider, then 700-weight items each bulleted with a braille-sized 0.4rem accent dot. One number per card; secondary metrics go in the list, never packed into the sentence. A symbolic number (like "0 → 1") is hidden from screen readers and paired with visually hidden words ("Zero to one").
- **Sticky note (paper):** pastel fill rotating through blue → lilac → green → yellow, 4px radius, tape strip on top, sticky note shadow, and a tilt that alternates -1.5°/1°/-0.8°/1.6°. Header in Caveat Hand Label, usually starting with an emoji. Text is Body-sm. An optional checklist sits below a 2px dashed divider, with Ink Violet ✓ marks.

### External Links
Links that open a new tab get a small hand-drawn ↗ arrow (an SVG mask in `currentColor` at 60% opacity, 0.6em) and a visually hidden "(opens in a new tab)". Pill CTAs carry only the hidden text; polaroids put the arrow after their title.

### Navigation
The Caveat wordmark "kristi.cy" in Ink Violet sits on the left (shown as "← kristi.cy" on inner pages). On the right are plain text links (underlined on hover with a 4px offset), the nav button, and the theme toggle, spaced 1.5rem apart. On mobile the text links hide and the gap tightens to 0.75rem.

### Polaroid
A link card for side projects. It has a white frame (padding 0.8rem 0.8rem 1.1rem) holding a 1200×630 screenshot cropped from the top, with a title and a grey caption in the bottom margin. It tilts ±1.5° alternately and straightens and grows 2% on hover over 0.2s. The frame stays white in both themes.

### Highlighter Mark
A linear-gradient band of Highlighter Lilac covering the 55% to 92% band of the line, behind the closing phrase of each h1. It uses `box-decoration-break: clone` so it wraps cleanly across lines. Use it once per page.

### Margin Scribble
Caveat Hand Scribble text in Margin Blue, rotated about 4°, with a hand-drawn SVG arrow pointing back toward the content. It holds the single most important timely fact (availability). Use one per page.

### Braille Signature
"kristi" rendered as six braille cells in a 2×3 grid of 0.4rem dots. Raised dots are filled Ink Violet and unraised dots are faint outlines. A Caveat caption ("that's "kristi" in braille ✨") fades in on hover, and is always visible on touch devices (`hover: none`). It is exposed to screen readers as one image labelled "Signed Kristi, in braille", not as a focus stop. This is the system's signature, and it closes every page.

### Numbered Steps
A 3-column ordered list. Each step has a large Caveat Ink Violet numeral, a Title heading starting with an emoji, and a Pencil Grey description.

## Do's and Don'ts

### Do:
- **Do** decide whether every new element is paper (shadow, slight tilt) or ink (2px outline, straight). See the Paper-or-Ink Rule.
- **Do** give every new colour a chalkboard counterpart, and check both themes.
- **Do** keep Ink Violet as the only action colour. Violet pills are reserved for the page's one main action (the footer on Home; the hero and footer on Work with me).
- **Do** set all essential reading in Atkinson Hyperlegible at 1rem or larger, with body text at 1.125rem and line height 1.6.
- **Do** keep the global 3px Ink Violet focus ring, the skip link and reduced-motion handling. When reduced motion is requested, all animation and transitions stop.
- **Do** close every page with the braille signature.
- **Do** put company names, roles and metrics in Atkinson at full ink, never in Pencil Grey.

### Don't:
- **Don't** add corporate or SaaS polish: gradient heroes, glassmorphism, stock "tech" illustration or generic dark dashboards.
- **Don't** use a headshot or personal photography. Imagery is limited to product screenshots inside polaroids.
- **Don't** set paragraphs, CTAs or essential facts in Caveat (the availability scribble is the one exception), or set Caveat below 1.25rem.
- **Don't** tilt ink objects, or tilt anything more than ±2° (±4° for scribbles).
- **Don't** invert sticky notes in the chalkboard theme. They stay pastel paper with Night Ink text.
- **Don't** add motion beyond the one-time wave, the polaroid hover straighten, and the 0.2–0.3s colour and opacity fades.
