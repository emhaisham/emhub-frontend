---
name: EM HUB
description: Internal operations platform for an events company (HR, equipment, payroll, events).
colors:
  accent:           "#1e40af"
  accent-bg:        "#eff6ff"
  accent-bd:        "#bfdbfe"
  accent-hover:     "#1648c0"
  green:            "#059669"
  green-bg:         "#ecfdf5"
  green-bd:         "#a7f3d0"
  red:              "#dc2626"
  red-bg:           "#fef2f2"
  red-bd:           "#fecaca"
  amber:            "#d97706"
  amber-bg:         "#fffbeb"
  amber-bd:         "#fde68a"
  purple:           "#7c3aed"
  purple-bg:        "#f5f3ff"
  hub-charcoal:     "#111827"
  hub-charcoal-2:   "#1f2937"
  hub-charcoal-3:   "#374151"
  text:             "#111827"
  text-2:           "#374151"
  text-3:           "#9ca3af"
  bg:               "#f4f5f7"
  surface:          "#f8f9fa"
  white:            "#ffffff"
  border:           "#e8eaed"
  border-2:         "#d0d3d9"
typography:
  display:
    fontFamily: "Inter, sans-serif"
    fontSize: "26px"
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: "-0.5px"
  page-title:
    fontFamily: "Inter, sans-serif"
    fontSize: "21px"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.4px"
  card-title:
    fontFamily: "Inter, sans-serif"
    fontSize: "14px"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "normal"
  body:
    fontFamily: "Inter, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  label:
    fontFamily: "Inter, sans-serif"
    fontSize: "11.5px"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "0.03em"
  uppercase-label:
    fontFamily: "Inter, sans-serif"
    fontSize: "11px"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "0.06em"
  mono-numeric:
    fontFamily: "Inter, sans-serif"
    fontSize: "13px"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "normal"
    fontFeature: "tabular-nums"
rounded:
  pill:  "20px"
  lg:    "12px"
  md:    "10px"
  sm:    "7px"
  xs:    "4px"
spacing:
  page-pad:  "28px 32px"
  card-pad:  "20px"
  row-pad:   "10px 14px"
  btn-pad:   "8px 16px"
  field-gap: "16px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.white}"
    rounded: "{rounded.sm}"
    padding: "8px 16px"
  button-primary-hover:
    backgroundColor: "{colors.accent-hover}"
    textColor: "{colors.white}"
  button-ghost:
    backgroundColor: "{colors.white}"
    textColor: "{colors.text-2}"
    rounded: "{rounded.sm}"
    padding: "8px 16px"
  button-ghost-hover:
    backgroundColor: "{colors.accent-bg}"
    textColor: "{colors.accent}"
  button-green:
    backgroundColor: "{colors.green-bg}"
    textColor: "{colors.green}"
    rounded: "{rounded.sm}"
    padding: "8px 16px"
  button-red:
    backgroundColor: "{colors.white}"
    textColor: "{colors.text-3}"
    rounded: "{rounded.sm}"
    padding: "8px 16px"
  card:
    backgroundColor: "{colors.white}"
    rounded: "{rounded.md}"
    padding: "{spacing.card-pad}"
  input:
    backgroundColor: "{colors.white}"
    textColor: "{colors.text}"
    rounded: "{rounded.sm}"
    padding: "8px 11px"
  badge-blue:
    backgroundColor: "{colors.accent-bg}"
    textColor: "{colors.accent}"
    rounded: "{rounded.pill}"
    padding: "4px 10px"
  badge-green:
    backgroundColor: "{colors.green-bg}"
    textColor: "{colors.green}"
    rounded: "{rounded.pill}"
    padding: "4px 10px"
  badge-amber:
    backgroundColor: "{colors.amber-bg}"
    textColor: "{colors.amber}"
    rounded: "{rounded.pill}"
    padding: "4px 10px"
  badge-red:
    backgroundColor: "{colors.red-bg}"
    textColor: "{colors.red}"
    rounded: "{rounded.pill}"
    padding: "4px 10px"
---

# Design System: EM HUB

## 1. Overview

**Creative North Star: "The Operations Console"**

EM HUB is a console, not a canvas. The interface exists to make a busy operations team faster and more correct, not to impress. Aesthetically it sits in the space of utility-first software (Linear's restraint, Stripe Dashboard's tabular precision, Notion's quiet borders) and is deliberately distant from anything that reads as marketing surface, decoration, or trend. The dominant impression should be *competent silence*: a tool the user stops noticing because it is doing its job.

The system uses tinted neutrals on a near-white page background, with a single deep blue accent doing all the work of indicating active state, primary action, and current selection. Information has hierarchy through scale and weight, not through colour or chrome. Numerical data uses tabular numerals and is right-aligned in tables. Status uses a fixed four-colour vocabulary (blue / green / amber / red) consistently across modules; nothing else gets to be coloured.

This system explicitly rejects: SaaS landing-page aesthetics, decorative gradients, glassmorphism, neon glows, emoji-as-icons, gratuitous motion, the hero-metric template, and identical-card grids as a default layout.

**Key Characteristics:**

- Tinted-neutral surfaces with one deep-blue accent (Restrained palette).
- Inter throughout; system-font fallback. No display font, no editorial pairing.
- Density that follows the data: dense tables, breathing empty states.
- Tabular numerals everywhere money or time appears.
- Light + dark both first-class; dark slate, never near-black.
- Status badges are pill-shaped, tinted, and bordered (low chroma, never neon).
- Motion is feedback, not choreography. 120-250ms, ease-out, transform/opacity only.

## 2. Colors

A Restrained palette: a near-white page, tinted-neutral surfaces, one deep blue accent, and a four-colour state vocabulary (blue / green / amber / red, with a fifth purple reserved for non-state taxonomy like compensation chips).

### Primary

- **Deep Operational Blue** (`#1e40af` light / `#3b82f6` dark): The single brand accent. Used on the primary CTA, active sidebar item, current tab, focus ring, selected row, and the running-status dot in the topbar logo. Carries no decorative role.

### Neutral

- **Page Background** (`#f4f5f7` light / `#0f172a` dark): The canvas. Faintly cool, never pure.
- **Surface** (`#f8f9fa` light / `#162032` dark): Inside cards, list rows, and table headers — one step tinted off the page so containers read without a shadow.
- **White** (`#ffffff` light / `#1e293b` dark): The elevated layer — cards, modals, the sidebar. Reads as paper on the page background.
- **Border** (`#e8eaed` light / `#2d3f55` dark): The default 1px line between any two surfaces.
- **Border 2** (`#d0d3d9` light / `#3d5068` dark): A heavier line, used on form inputs and on hover-emphasised rows.
- **Text** (`#111827` light / `#f1f5f9` dark): Body copy and headlines.
- **Text 2** (`#374151` light / `#cbd5e1` dark): Form labels, secondary labels.
- **Text 3** (`#9ca3af` light / `#64748b` dark): Metadata, placeholder copy, helper text.
- **Hub Charcoal** (`#111827` family): The topbar and login background. Always dark, regardless of theme — the topbar is a fixed frame, not a themed surface.

### Tertiary (state)

- **Green** (`#059669` / bg `#ecfdf5` / bd `#a7f3d0`): Approved, applied, completed, working, on-track. Tinted, never saturated.
- **Amber** (`#d97706` / bg `#fffbeb` / bd `#fde68a`): Pending, expiring, attention-needed, soon-to-overdue.
- **Red** (`#dc2626` / bg `#fef2f2` / bd `#fecaca`): Rejected, overdue, expired, fault, destructive action.
- **Purple** (`#7c3aed` / bg `#f5f3ff`): Reserved for non-state taxonomy that needs distinguishing from the four state colours. Currently used on the compensation-override chip on CrewPay; no other role.

### Named Rules

**The One Accent Rule.** Deep Operational Blue is the *only* colour used decoratively on chrome (the topbar logo dot, active sidebar, focus ring, primary button). All other colour is reserved for state. Hover and selection share the same accent — there is no separate "interactive" hue.

**The Tinted Neutral Rule.** Every neutral is tinted toward the cool/blue family (chroma is low but present). `#000` and `#fff` are forbidden as background or text values. The page background in light mode (`#f4f5f7`) is faintly cool; in dark mode (`#0f172a`) is slate, never near-black.

**The Status Quadrant Rule.** Every status fits into exactly one of four buckets: green (good), amber (warning), red (bad), blue (informational / in-progress). Purple is reserved; it is not a state. No additional state colours may be introduced without first removing one.

## 3. Typography

**Display Font:** Inter (with system-ui, sans-serif fallback).
**Body Font:** Inter.
**Label / Mono Font:** Inter, tabular-numeric variant for any numeric column.

**Character:** A single workhorse sans across everything. The system deliberately does not pair a display face with a body face: a console doesn't have headlines, it has labels and data. Inter's tabular numerals are the reason it stays; nothing else in the project is asked to be expressive.

### Hierarchy

- **Display** (800, 26px, line-height 1.15, letter-spacing -0.5px): The Home Launcher title and the login logo wordmark. Single instance per screen.
- **Page Title** (700, 21px, -0.4px): Top of every page inside a module.
- **Card Title** (600, 14px): The header of any `.card` container.
- **Body** (400, 13px, line-height 1.5): All running text. Tables run at 13px; metadata at 12px.
- **Label** (600, 11.5px, 0.03em): Form-field labels. Sits above the input.
- **Uppercase Label** (700, 11px, 0.06em, uppercase): Section dividers, table column headers, bucket-group headers (the urgency bands on Expiring Documents / Probation).
- **Mono-Numeric** (600, 13px, tabular-nums feature on): Every currency value, every count, every timestamp. The class `.td-mono` enforces this in tables.

### Named Rules

**The Tabular Numerals Rule.** Any column that holds a number — monetary value, count, duration, ID — uses `font-variant-numeric: tabular-nums`. Numbers align to the decimal in tables. No exception.

**The 65ch Rule.** Body copy is capped at ~65 characters wide. Data tables and dense panels are exempt; prose is not.

**The One Family Rule.** Inter does everything. Adding a display face, monospace face, or serif companion is a design failure unless it serves a specific job no Inter cut can do.

## 4. Elevation

The system is **mostly flat with one tier of soft elevation**. Depth communicates a real layer change (a card lifted off the page background, a modal floating above content), never decoration.

Three elevation tiers exist:

- **Page** (no shadow): the canvas itself.
- **Card / sidebar** (`shadow-sm`): a 1px hairline shadow that registers a paper-on-paper relationship. Most surfaces sit here.
- **Modal / drawer** (`shadow-lg`): a deeper diffuse shadow on the centred modal and the mobile slide-in sidebar.

Hover does not add shadow on most components; it shifts border colour. The module-launcher cards are the one exception — they lift on hover (`translateY(-2px)` plus a deeper accent-tinted shadow) because they are intentionally inviting selection.

### Shadow Vocabulary

- **shadow-sm** (`0 1px 2px rgba(0,0,0,.05)` light / heavier in dark): Cards, the sidebar, the rate banner. Default elevation for any surface that needs to register without lifting.
- **shadow** (`0 1px 3px rgba(0,0,0,.08), 0 1px 2px rgba(0,0,0,.06)`): Hovered list rows on the event cards.
- **shadow-md** (`0 4px 6px rgba(0,0,0,.07), 0 2px 4px rgba(0,0,0,.06)`): Active profile tab pill.
- **shadow-lg** (`0 10px 15px rgba(0,0,0,.08), 0 4px 6px rgba(0,0,0,.05)`): Modal backdrops, mobile drawer.

### Named Rules

**The Hairline Rule.** Default cards lift off the page with `shadow-sm` and a 1px border together. The border carries most of the boundary; the shadow only confirms layer. Removing either alone makes the surface read flat or floating.

**The Mode-Aware Shadow Rule.** Dark-mode shadows are recalibrated, not just inherited; the alpha is heavier (0.3–0.5) to compensate for the smaller luminance gap between surface and background.

## 5. Components

### Buttons

- **Shape:** Rounded rectangle, 7px radius (`{rounded.sm}`).
- **Primary** (`.btn-primary`): Deep Operational Blue background, white text, `8px 16px` padding, a soft accent-tinted shadow (`0 1px 4px rgba(26,86,219,.25)`). One per page maximum.
- **Hover:** Background darkens to `#1648c0`, lifts 1px (`translateY(-1px)`).
- **Active:** Press-down feedback (`translateY(1px) scale(.98)`) — tactile, restrained.
- **Focus:** 2px accent outline with 2px offset (`:focus-visible`).
- **Ghost** (`.btn-ghost`): White background, 1px border, secondary text. On hover, border + text recolour to accent and background fills `accent-bg`. The workhorse secondary.
- **Green / Red / Amber** (state buttons): Tinted background, tinted border, semantic text colour. Used for approve / reject / warn actions only — never as plain CTAs.
- **Sizes:** `btn-sm` (5x11px / 12px), `btn-xs` (3x8px / 11.5px). Used in dense table rows; the default `.btn` is the page-level CTA.

### Badges

- **Shape:** Pill (20px radius), `4px 10px` padding, 12px font, 500 weight.
- **Style:** Each badge variant pairs background (`*-bg`), text (the saturated colour), and border (`*-bd`). The border is intentional — it stops the badge from blending into a hover surface.
- **Variants:** blue / green / amber / red / purple (see Colors → Status Quadrant Rule).
- **Usage:** Status only. Never decorative. The label inside is always a precise state word ("Approved", "Stage 2 — Awaiting Final", "Expired 3d ago"), never a category word.

### Cards / Containers

- **Corner Style:** 10px radius (`{rounded.md}`).
- **Background:** White (the elevated layer), 1px border in `--border`, shadow-sm.
- **Internal Padding:** 20px body, 14×20px header.
- **Header:** Optional `.card-hdr` with an icon tile (32px, accent-tinted) on the left, title + sub on the right.
- **Use sparingly.** Cards are reserved for genuine grouping (the rate banner, the dashboard widgets, the payroll card per employee). List rows are NOT cards — they use `.pay-group-row` (10px×14px padding, surface background, hairline border) and stack tightly.

### List Rows (`.pay-group-row`)

The system's most-used non-card pattern. A flex row with a leading info block (name + detail line) and a trailing action cluster. Used across Expiring Documents, Probation, Salary Revisions, Training, Staff Requests. Hairline border, surface background, tight 8px vertical gap between rows. Hover shifts the border to `--border-2`; no shadow, no lift. The information density goal is "scannable list of 30 items" not "card per item".

### Inputs / Fields

- **Style:** White background, 1px `--border-2` outline, 7px radius, 8×11 padding, 13.5px Inter.
- **Focus:** Border shifts to accent, 3px accent-tinted glow (`0 0 0 3px rgba(26,86,219,.1)`). No animation; instant.
- **Label:** Sits above the input (`.field-label`), 11.5px / 600 / 0.03em tracking.
- **Helper text:** Below the input, 11px text-3.
- **iOS safe sizing:** All input/select/textarea forced to 16px on phone breakpoints to prevent zoom-on-focus.

### Navigation — Topbar

- **Always Hub-Charcoal** (`#111827`) regardless of theme. 52px tall. The wordmark, a tabular module nav, a notification bell, and the user pill.
- **Tabs:** 13px / 500, 7px radius, hover lifts to 7% white tint, active to 12%. The current module's accent is the only colour in the bar; everything else is shades of white-on-charcoal.
- **Wordmark:** "EM" white, "HUB" in accent. The dot in the brand mark mirrors the sidebar dot.

### Navigation — Sidebar

- **Width:** 216px desktop, 260px in the slide-in mobile drawer.
- **Style:** White surface, 1px right border. Brand block at top (group dot + name + sub), groups via 9.5px uppercase labels, items 13px / 500.
- **Active item:** `accent-bg` background, accent text, 2px accent left border. The left-border is the one place in the system where a single-side border is allowed (it is functional, not decorative, and reads as a "you are here" rail).
- **Mobile:** Slides in from the left as a fixed drawer with a 4px black `shadow-lg`, summoned by a hamburger.

### Modals

- **Backdrop:** Full-screen `rgba(0,0,0,.5)` overlay, flex-centred.
- **Container:** White, 10–12px radius, no shadow-lg by default (already lifted by the dark backdrop). Two width variants: `.modal` (default) and `.modal-sm` (420px).
- **Header:** 18×24 padding, hairline bottom border, 16px / 700 title left, 16px close ×.
- **Form spacing:** Modal scope overrides the default `.field` to 16px gap with 6px below label — modals breathe more than inline forms.

### Bucket Headers (signature)

A pattern unique to this system. Used on Expiring Documents / Probation / Training / Salary Revisions to break a list into urgency groups. A 12.5px uppercase label coloured by urgency (red / amber / blue / grey), preceded by a 3×14px coloured pill. The red variant has a slow opacity pulse on the pill so live-status reads as such. 22px breathing room between groups.

## 6. Do's and Don'ts

### Do:

- **Do** use the four-colour state vocabulary (green / amber / red / blue) consistently across every module. A "pending" badge on Leave should look identical to a "pending" badge on Salary Revisions.
- **Do** use tabular numerals on every numeric column. Money, counts, days-remaining, IDs.
- **Do** lead the primary action with the one Deep Operational Blue button. One per page.
- **Do** use the `.pay-group-row` list pattern for any "many items, scan and act" surface. Cards are for *grouping*, rows are for *scanning*.
- **Do** keep dark mode and light mode visually equivalent. Test both before shipping.
- **Do** respect `prefers-reduced-motion`. The staggered row reveals, urgency pulses, and skeleton shimmers stop under the OS preference.
- **Do** size text inputs at 16px+ on mobile (already enforced globally).
- **Do** keep the topbar dark in both themes. It is a frame, not a surface.
- **Do** use inline SVG icons from the established `ICON.*` library. 14px, stroke 1.75, currentColor.

### Don't:

- **Don't** use emojis anywhere user-facing. The taste pass purged them; any new emoji is a regression.
- **Don't** use a left or right colored stripe greater than 1px on a card, alert, callout, or list item. The one allowed exception is the active sidebar nav item (functional, not decorative).
- **Don't** use gradients on text (`background-clip: text` plus a gradient background). Emphasis comes from weight, not iridescence.
- **Don't** introduce glassmorphism, backdrop-blur, neon glow, or pure-black-and-white anywhere. All four are AI-tells the project specifically rejects.
- **Don't** use the hero-metric template (big number, small label, small supporting stats, decorative chip). Reports & Analytics shows what an acceptable headline-tile cluster looks like — six equal-weight tiles, no decoration, no celebration.
- **Don't** introduce a second font family. Inter does everything. A monospace can be considered if a real terminal/code use-case emerges; that hasn't happened.
- **Don't** wrap individual list items in cards. Rows go in `.pay-group-row`, not nested `.card` containers.
- **Don't** use modals as the first reach. Inline expansion, dedicated pages, or progressive disclosure all come first; modals are for short focused workflows (Approve / Reject / Confirm).
- **Don't** introduce a new accent or state colour. Five colours total (blue, green, amber, red, purple) — and purple is already at full allocation.
- **Don't** animate `width`, `height`, `top`, `left`, or any layout property. Use `transform` and `opacity` exclusively.
- **Don't** spin a spinner in the middle of content while loading a list. Use `.skeleton` / `.skeleton-row` placeholders instead.
- **Don't** use cute illustrations or friendly mascots in empty states. The voice is operational; "Inbox is empty" beats "Nothing here yet! 🎉".
