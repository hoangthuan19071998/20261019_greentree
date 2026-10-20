---
name: Green Tree Agency
description: A Da Nang growth studio's single-page site, grown patiently from the roots up.
colors:
  heartwood: "#14261E"
  canopy: "#1F3A2E"
  moss: "#3E6B52"
  lichen: "#C9D8B0"
  linen: "#F2F1EA"
  ink: "#1A1F1C"
  bark: "#3E4740"
  stone: "#5B635D"
  mist: "#CDD3CB"
  sage-dim: "#A9BBA6"
  pith: "#FCFBF7"
  fern-wash: "#E4E5DA"
  dry-grass: "#D6DCC8"
  husk: "#ECEBE2"
  rule-light: "#C9CBBE"
  rule-dark: "#3B5E4C"
  rule-deep: "#2E4D3E"
  ring-mid: "#4A6E5A"
typography:
  display:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "132px"
    fontWeight: 400
    lineHeight: 0.94
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "72px"
    fontWeight: 400
    lineHeight: 0.98
  title:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "48px"
    fontWeight: 400
    lineHeight: 1
  body:
    fontFamily: "Manrope, system-ui, -apple-system, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "Manrope, system-ui, -apple-system, sans-serif"
    fontSize: "12px"
    fontWeight: 400
    letterSpacing: "0.24em"
  display-xl:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "140px"
    fontWeight: 400
    lineHeight: 0.92
  headline-lg:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "88px"
    fontWeight: 400
    lineHeight: 0.95
  headline-md:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "68px"
    fontWeight: 400
    lineHeight: 1.06
  headline-sm:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "64px"
    fontWeight: 400
    lineHeight: 1.1
  title-lg:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "40px"
    fontWeight: 400
    lineHeight: 1.12
  title-sm:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "34px"
    fontWeight: 400
    lineHeight: 1.15
  contact-link:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "24px"
    fontWeight: 400
    lineHeight: 1.2
  body-lead:
    fontFamily: "Manrope, system-ui, -apple-system, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.7
  body-lg:
    fontFamily: "Manrope, system-ui, -apple-system, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.75
  body-sm:
    fontFamily: "Manrope, system-ui, -apple-system, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.65
  label-md:
    fontFamily: "Manrope, system-ui, -apple-system, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.04em"
  button:
    fontFamily: "Manrope, system-ui, -apple-system, sans-serif"
    fontSize: "14px"
    fontWeight: 600
    letterSpacing: "0.03em"
rounded:
  card: "6px"
  pill: "999px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "32px"
  lg: "48px"
  gutter: "56px"
  section: "140px"
components:
  button-light:
    backgroundColor: "{colors.linen}"
    textColor: "{colors.heartwood}"
    rounded: "{rounded.pill}"
    padding: "0 8px 0 24px"
    height: "52px"
  button-light-hover:
    backgroundColor: "{colors.canopy}"
    textColor: "{colors.linen}"
  button-dark:
    backgroundColor: "{colors.canopy}"
    textColor: "{colors.linen}"
    rounded: "{rounded.pill}"
    padding: "0 8px 0 24px"
    height: "52px"
  button-dark-hover:
    backgroundColor: "{colors.lichen}"
    textColor: "{colors.heartwood}"
  chip-tag:
    textColor: "{colors.heartwood}"
    rounded: "{rounded.pill}"
    padding: "7px 14px"
  card-service:
    backgroundColor: "{colors.fern-wash}"
    textColor: "{colors.heartwood}"
    rounded: "{rounded.card}"
    padding: "36px 40px 40px"
  card-process:
    textColor: "{colors.linen}"
    rounded: "{rounded.card}"
    padding: "32px 28px"
  nav-bar:
    backgroundColor: "{colors.heartwood}"
    textColor: "{colors.linen}"
    height: "80px"
    padding: "0 56px"
  input-field:
    backgroundColor: "{colors.pith}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "10px 16px"
---

# Design System: Green Tree Agency

## Overview

**Creative North Star: "The Patient Arborist"**

The site behaves like someone who tends trees for a living: unhurried, exact, and quietly confident that compounding care beats spectacle. Every surface is either the dark heartwood of the forest or the pale linen of a field notebook, and the page alternates between them like rings in a cross-section. Growth rings are the one recurring motif. They appear as the hero's slowly rotating cross-section, as the icon inside every button, as the cursor, and as the parallax lines over service imagery.

Density is low and generous. Headlines are set large in a classical serif, a single italic word is picked out in a lighter green to carry the botanical metaphor ("patiently, from the roots up", "What we *grow*", "Let's plant *something.*"), and the supporting copy stays small, airy and sans-serif. Motion is slow and deliberate: one shared ease curve, long durations (0.45–1.1s), rings that draw themselves and rotate on hover. Nothing bounces, flashes or competes for attention.

Depth comes from tonal layering, not shadow. The sections step through heartwood → linen → canopy → linen → heartwood, and service cards cycle through five green-and-straw tones. Components feel calm and hand-tended: pill buttons with a ring icon that fills the button from the inside out, hairline rules instead of boxes, and squared-off 6px cards.

**Key Characteristics:**
- Two-world palette: Heartwood/Canopy dark sections against Linen paper, with Lichen as the only accent on dark and Moss as the only accent on light.
- Cormorant Garamond display at 64–140px with one italic accent word; Manrope body at 15–17px.
- The growth-ring symbol (`#gt-ring`) is the system's signature, reused at every scale from 22px icon to 980px hero.
- Flat by default; depth is tone, hairlines, and slow motion.
- One easing curve, `cubic-bezier(.2, .7, .1, 1)`, for everything that moves.

## Colors

A restrained forest palette: two deep greens, one paper cream, and a single pale lichen accent, with straw-tinted neutrals in between.

### Primary
- **Heartwood** (heartwood): The darkest green and the site's anchor. Sticky header, hero, horizontal-journey progress bar, contact/footer, and dark text on light cards. Also the inner disc of the light button.
- **Canopy** (canopy): One step lighter. Background of the G.R.E.E.N. process section, the dark button, base anchor colour, and the fill that floods the light button on hover.

### Secondary
- **Lichen** (lichen): The only accent on dark surfaces. Italic accent words, eyebrow labels, the reading-progress line, nav-link hover and underline, the logo disc, process letterforms, and the dark-button hover fill. 10.5:1 on Heartwood.
- **Moss** (moss): The only accent on light surfaces. Italic accent words in headlines on Linen, the "Selected work" eyebrow and dot, and the hover border on work cards. 5.4:1 on Linen, so it is safe for text.

### Neutral
- **Linen** (linen): Page background and text on dark. Also the light-button face.
- **Ink** (ink): Default body text on Linen (14.8:1).
- **Bark** (bark): Long-form paragraph text on Linen (8.5:1).
- **Stone** (stone): Eyebrow labels, captions and quieter secondary copy on Linen (5.5:1). The lightest grey allowed for text on Linen.
- **Mist** (mist): Paragraph text on Heartwood and Canopy.
- **Sage Dim** (sage-dim): Step labels, footer text and the progress-bar captions on dark (7.8:1 on Heartwood).
- **Pith** (pith): The near-white face of Selected Work cards, one step brighter than Linen.
- **Fern Wash / Dry Grass / Husk** (fern-wash, dry-grass, husk): The pale tones of the service cards, cycled with Canopy and Heartwood so that five cards read as five rings.
- **Light Rule / Dark Rule / Deep Rule** (rule-light, rule-dark, rule-deep): 1px hairlines. Light Rule separates blocks on Linen; Dark Rule outlines process cards and divides the contact row; Deep Rule sits under the footer and in the progress-bar track.
- **Ring Mid** (ring-mid): The mid-tone stroke of the growth rings on dark surfaces.

### Named Rules
**The One Accent Per Ground Rule.** Lichen is the accent on dark, Moss is the accent on light. Never put Lichen on Linen or Moss on Heartwood, and never introduce a third accent hue.

**The No New Greens Rule.** Every green in the UI comes from this list. Ad-hoc values like `#5FB88C`, `#24543B`, `#2A6546` or `#0D2118` are drift and should be mapped back to Moss, Canopy or Heartwood.

## Typography

**Display Font:** Cormorant Garamond (with Georgia, serif), weights 400/500/700 with italics
**Body Font:** Manrope (with system-ui, -apple-system, sans-serif), weights 400–700

**Character:** A literary, high-contrast serif carries the voice and the metaphor, while a clean geometric sans does the explaining. The serif is always set light (400) and large; the sans is always set small and spacious.

### Hierarchy
- **Display** (400, 132px, 0.94, -0.01em): The hero G.R.E.E.N. acrostic and the 140px "Let's plant something." Drops to 68px (hero) and 40px (contact) below 760px.
- **Headline** (400, 64–88px, 0.95–1.1): Section titles: "What we grow" (88px), "The G.R.E.E.N. process" (72px), "Who we are" statement (68px), the philosophy quote (64px), "Selected work" (`clamp(40px, 5vw, 64px)`).
- **Title** (400, 34–48px, 1–1.15): Service card names (48px), process step names (34px), the hero tagline (40px italic), contact links (36px).
- **Body** (400, 15–17px, 1.65–1.75): Paragraphs, capped at roughly 360–580px wide (about 45–70ch). 17px for lead copy, 16px standard, 15px inside process cards.
- **Label** (400–600, 12–13px, 0.14–0.24em, uppercase): Section eyebrows ("01 — Who we are"), card kickers, the progress-bar captions, scroll cue. 0.24em for eyebrows, 0.14–0.2em for in-card metadata.

### Named Rules
**The One Italic Word Rule.** Each headline gets at most one italic phrase, coloured with the ground's accent (Lichen or Moss). The italic carries the botanical verb or noun; the rest of the line stays roman.

**The Serif Stays Light Rule.** Cormorant is set at 400. Bold serif (as on the current work-card client names) is drift.

## Layout

A single-page vertical narrative with one horizontal chapter. Content sits in a 1440px max-width container with 56px side gutters (16px below 760px). The 80px sticky header carries a 2px Lichen reading-progress line.

Section rhythm is generous: 120–160px vertical padding on major sections (`section` spacing token, 140px), 48–64px between a section's header and its content, 16–32px inside groups. The hero is at least 820px tall, on a 1.4fr / 1fr two-column grid aligned to the bottom.

At viewport widths of at least 1101px and heights of at least 800px, the "Who we are + Services" chapter is pinned (`position: sticky; top: 80px`) and scrolls horizontally: a full-width About panel, a 520px intro panel, then five 760px service cards, with a 56px Heartwood progress bar underneath. Smaller or shorter viewports, and reduced motion, use a natural vertical sequence with full-width panels. Pinned About content uses tighter spacing and a smaller headline at viewport heights up to 900px.

Process uses a five-column grid with 16px gaps (two columns at 761–1100px, one column below). Selected Work is a 3/2/1-up carousel (≥1120 / ≥640 / <640px) with 24/20/16px gaps. Each card stacks its channel and website, then presents two metrics above a full-width Moss growth outcome so labels remain readable at every card width.

Breakpoints in use: 640px, 760px, 1100px, 1120px.

## Elevation & Depth

The system is flat at rest. Depth comes from alternating Heartwood/Canopy and Linen grounds, from the five-tone service cards, and from 1px hairlines. The hero ring explicitly forces `box-shadow: none`. Shadows appear only as a response to interaction, and only as a soft, Heartwood-tinted glow.

### Shadow Vocabulary
- **Lift on hover** (`box-shadow: 0 20px 35px -10px rgba(20, 38, 30, 0.12)`): Selected Work cards on hover, paired with a −8px translate.
- **Framed image** (`box-shadow: 0 16px 36px -8px rgba(20, 38, 30, 0.14)`): The About studio photograph. The only shadow at rest, kept because it is a photograph, not a surface.
- **Glass badge** (`box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2)` with `backdrop-filter: blur(8px)` on 85% Heartwood): Small captions laid over photography.

### Named Rules
**The Flat-By-Default Rule.** Surfaces are flat at rest. A shadow is a state, not a style, and it is always tinted with Heartwood, never neutral black, except over photography.

## Shapes

Two shapes do almost all the work: the full pill (999px) and the near-square card (6px). Pills are for things you press or tag (buttons, tags, badges); 6px is for things that contain content (service cards, process cards). Circles are the third form, reserved for the growth-ring motif, the button's inner ring disc (38px), the logo disc, and the carousel arrows (48px).

Borders are 1px hairlines in the rule colours, or `1px solid currentColor` at 0.8 opacity for tags so they inherit the card's foreground.

### Named Rules
**The Pill Or Six Rule.** Interactive elements are pills, containers are 6px. The 12px About image and 16px Selected Work cards are drift and should come back to 6px.

## Components

### Buttons
Calm and hand-tended: a pill with a growth ring at its right end that floods the button with colour from the inside out.
- **Shape:** Full pill (999px), 52px minimum height, padding 0 8px 0 24px, 14px Manrope 600 at 0.03em.
- **Light (on dark grounds):** Linen face, Heartwood text, Heartwood ring disc with a Linen ring icon. Used in the header and contact ("Book a call"; on Zalo: "Book a call on Zalo").
- **Dark (on light grounds):** Canopy face, Linen text, Linen ring disc with a Heartwood ring icon. Used in the About panel.
- **Hover:** A 20px circle behind the ring scales ×20 over 0.7s (Canopy for light, Lichen for dark); the text colour cross-fades over 0.45s; the ring icon rotates 220° and redraws its stroke over 1.1s.
- **Zalo CTA (primary conversion):** The Light button on Heartwood, labelled "Book a call on Zalo" (56px tall on phones), with a 13px Sage Dim line "Opens Zalo in a new tab" beneath. Email and phone sit beside it as secondary 24px serif links (22px on phones).
- **One label rule:** every booking CTA reads "Book a call" and points to `#contact`.

### Chips
- **Style:** Transparent, 1px border in `currentColor`, 13px Manrope, 7px 14px padding, pill radius, 0.8 opacity. Inherits the card's foreground so it works on all five service tones.
- **State:** Static labels; no selected state.

### Cards / Containers
- **Corner Style:** 6px.
- **Background:** Service cards cycle Fern Wash, Canopy, Dry Grass, Heartwood, Husk. Process cards are transparent on Canopy with a Dark Rule border.
- **Shadow Strategy:** None at rest (see Elevation).
- **Border:** Process cards 1px Dark Rule; service cards none.
- **Internal Padding:** 36px 40px 40px (service body), 32px 28px (process). Service cards carry an image well with a Heartwood gradient overlay (60% → 15% → 0) and parallax ring lines on top.

### Inputs / Fields
The site has no live form. When one is added, it should sit on the main palette, not the unused modal's off-system greens.
- **Style:** Pith face, 1px Light Rule border, 6px radius, 10px 16px padding, 14px Manrope Ink text, Stone placeholder.
- **Focus:** Border shifts to Moss; transition 0.3s.
- **Error / Disabled:** Not yet established.

### Navigation
- **Style:** Sticky 80px Heartwood bar, max-width 1440px, logo lockup (36px Lichen disc + 26px "Green Tree" serif + 11px "AGENCY" label at 0.22em in Lichen).
- **Links:** 14px Manrope at 0.04em in Linen, 36px apart. On hover the text turns Lichen and a 1px Lichen underline grows from the centre over 0.5s.
- **Responsive navigation:** At 1100px and below, the desktop links and full button are replaced by a 44px menu control and a compact "Book a call" pill. The high-contrast Lichen menu includes the Company Profile PDF and scrolls within the available viewport height. At 480px and below the Agency label is hidden and the wordmark uses 22px; below 360px the wordmark is hidden so the logo, menu, and CTA retain safe spacing.

### Growth-Ring Cursor (signature)
On fine pointers the native cursor is replaced by a 46px ring plus a 6px dot, both Linen with `mix-blend-mode: difference`, so they invert on every ground. The ring spins slowly (14s) and scales ×1.9 on interactive targets. On touch devices a 96px Lichen ring ripples out from each tap instead.

## Do's and Don'ts

### Do:
- **Do** alternate dark (Heartwood/Canopy) and light (Linen) sections so the page reads like rings in a cross-section.
- **Do** set headlines in Cormorant Garamond 400 and pick out one italic word in Lichen (on dark) or Moss (on light).
- **Do** use the `#gt-ring` symbol for any new icon-like affordance before reaching for a generic icon set.
- **Do** animate with `cubic-bezier(.2, .7, .1, 1)` at 0.45–1.1s, and give every new animation a `prefers-reduced-motion` fallback.
- **Do** keep eyebrow labels at 12px, uppercase, 0.24em, numbered ("03 — How we work").
- **Do** keep text on Linen no lighter than Stone (#5B635D, 5.5:1).

### Don't:
- **Don't** add new greens or greys. `#5FB88C`, `#0B2117`, `#24543B`, `#2A6546`, `#0D2118`, `#4E5650` and `#69726A` already crept in and should be mapped back to the palette.
- **Don't** put shadows on surfaces at rest; depth is tone and hairlines.
- **Don't** set Cormorant in bold, and don't use more than one italic phrase per headline.
- **Don't** use rounded-xl/2xl (12–16px) containers; containers are 6px, interactive elements are pills.
- **Don't** use monospace for labels; labels are Manrope with wide tracking.
- **Don't** use bouncing or springy motion (such as `animate-bounce`); the arborist doesn't bounce.
