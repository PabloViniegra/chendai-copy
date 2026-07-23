---
version: alpha
name: Chánh Đại Portfolio
description: A precise, detail-oriented portfolio for a Design Engineer featuring a structured, grid-based layout with high-contrast semantics and subtle interactive cues.
colors:
  primary: "#000000"
  secondary: "#ffffff"
  background: "#ffffff"
  background-dark: "#09090b"
  foreground: "#000000"
  foreground-dark: "#ffffff"
  muted: "#71717a"
  line: "#e4e4e7"
  line-dark: "#27272a"
  accent-muted: "rgba(0, 0, 0, 0.05)"
typography:
  fontFamily: "Geist Sans, Geist Mono, IBM Plex Serif, sans-serif"
  fontSize:
    base: "16px"
    h1: "2rem"
    body-sm: "0.875rem"
    mono-xs: "0.75rem"
  lineHeight: 1.5
  fontWeight:
    regular: 400
    medium: 500
    bold: 700
spacing:
  header: "--header-height"
  badge-height: "--badge-height"
  container-max: "768px"
  gap-sm: "0.5rem"
  gap-md: "1rem"
rounded:
  full: "9999px"
  md: "6px"
components:
  badge:
    backgroundColor: "{colors.accent-muted}"
    borderRadius: "{rounded.full}"
    fontFamily: "{typography.fontFamily}"
    fontSize: "{typography.fontSize.mono-xs}"
  avatar:
    size: "160px"
    borderRadius: "{rounded.full}"
    border: "1px solid {colors.line}"
  card:
    border: "1px solid {colors.line}"
    padding: "1.5rem"
---

## Overview
The visual personality of the Chánh Đại portfolio is rooted in "Design Engineering"—a blend of technical precision and aesthetic restraint. It utilizes a high-density, structural grid system defined by explicit borders and dashed lines that mimic architectural or blueprint documentation. The tone is professional and minimalist, relying on white space and thin lines rather than decorative elements. Motion is subtle, primarily using transition-opacity for theme switching and hover-based background shifts. The layout feels like a well-organized terminal or a technical manual, emphasizing clarity and information hierarchy.

## Colors
The palette is strictly monochromatic with semantic depth. In light mode, the site uses a pure white background (`#ffffff`) with a high-contrast black foreground. In dark mode, it shifts to a deep charcoal (`#09090b`). Borders and separators use a light zinc/gray (`#e4e4e7` in light, `#27272a` in dark) to define the grid without being intrusive. Muted text is handled via a medium gray to distinguish metadata from primary content. A subtle "accent-muted" background is used for hover states and badges to provide depth without introducing hue.

## Typography
The typographic system leverages a modern, clean stack. Geist Sans is used for primary headings and UI labels, providing a contemporary, high-legibility look. Geist Mono is utilized for technical details, versioning, and numbering, reinforcing the engineering theme. IBM Plex Serif is sparingly used for long-form prose or specific textural contrast. Headings use tight tracking and medium weights, while body text remains balanced for readability. There is a strong reliance on mono-spaced fonts for small caps, indices, and secondary metadata.

## Layout
The layout is a single-column container centered on the screen with a maximum width of 768px (`md:max-w-3xl`). It employs a "Screen Line" system—a series of vertical and horizontal borders that define the header, profile sections, and content blocks. Sections are often split into a two-column grid where the left column (approx 25%) houses an index number or category label, and the right column houses the primary content. This creates a rhythm of indentation that aids scanning. Spacing is governed by a strict variable-based system (e.g., `--spacing(8)`), ensuring consistency across component boundaries.

## Elevation & Depth
Depth is achieved through layering and borders rather than heavy shadows. The site feels flat but structured. A "glass" effect is hinted at in sticky headers, but the primary depth cue is the `inset-ring` and `border` treatments. Elevation is semantic: interactive elements like badges and cards use subtle background color shifts (`bg-zinc-50/80`) and thin borders to appear as distinct objects resting on the base surface. The profile avatar uses a ring-offset to create a small visual break from the background.

## Shapes
Shapes follow a dichotomy of geometric precision. Outer containers and section separators are strictly rectangular with sharp corners, following the grid lines. Internal UI components, such as tech stack badges, buttons, and the main profile avatar, use `rounded-full` (pill shapes) or circular treatments. This contrast between the rigid grid and the soft components helps interactive elements stand out as touchable objects.

## Components
- **Header**: A sticky navigation bar with a bottom border and centered container alignment.
- **Avatar Toggle**: A circular image component that transitions between different "lights on/off" states using high-priority webp assets.
- **Tech Badges**: Pill-shaped containers with mono-spaced text and integrated SVGs for brand logos.
- **Lined Section**: A structural component with a vertical border separator on the left and horizontal grid lines above/below.
- **Contribution Graph**: A custom SVG-based heat map using monochromatic green/gray levels to represent activity.
- **Glow Card**: A card component used in grids that features a subtle hover glow effect.

## Do's and Don'ts
### Do's
- Use thin lines (`1px`) for section separators and grid definition.
- Stick to a monochromatic palette unless using specific brand icons.
- Use Geist Mono for any numbers, dates, or technical tags.
- Maintain the left-aligned "category index" pattern for new sections.

### Don'ts
- Do not use heavy drop shadows or large radius corners on layout containers.
- Avoid vibrant accent colors for structural elements.
- Do not break the vertical alignment established by the primary 768px container.
- Avoid complex animations; keep transitions to simple opacity or scale shifts.

## Accessibility
The site maintains high contrast ratios between text and background in both light and dark modes. Focus states are clearly defined with `ring-offset-2` and `ring-1` for keyboard navigability. Semantic HTML is used throughout, including `aria-labelledby` for lists and `aria-hidden` for decorative icons. Image assets include descriptive alt text (e.g., "Avatar with lights on in dark mode"). Target sizes for badges and links are optimized for touch and pointer accuracy. The typography uses rem units to respect user font size preferences.

## Assets
- **Image**: [White Heart Emoji](https://abs-0.twimg.com/emoji/v2/svg/1f90d.svg) — preload link
- **Icon**: [Apple Touch Icon](https://assets.chanhdai.com/images/apple-touch-icon.png) — device icon
- **Image**: [Avatar Dark Off](https://assets.chanhdai.com/images/avatar-dark-off.webp) — dark mode inactive state
- **Image**: [Avatar Dark On](https://assets.chanhdai.com/images/avatar-dark-on.webp) — dark mode active state
- **Image**: [Avatar Light Off](https://assets.chanhdai.com/images/avatar-light-off.webp) — light mode inactive state
- **Image**: [Avatar Light On](https://assets.chanhdai.com/images/avatar-light-on.webp) — light mode active state
- **Icon**: [Favicon Dark](https://assets.chanhdai.com/images/favicon-dark.svg) — dark theme browser icon
- **Icon**: [Favicon Standard](https://assets.chanhdai.com/images/favicon.ico) — standard browser icon
- **Icon**: [Favicon SVG](https://assets.chanhdai.com/images/favicon.svg) — vector browser icon
- **Image**: [OG Image Dark](https://assets.chanhdai.com/images/screenshot-og-image-dark.png?t=1778602757) — social sharing preview
- **Other**: [JS Bundle](https://chanhdai.com/_next/static/chunks/1szpswgee5klm.js) — logic chunk
- **Other**: [CSS Bundle](https://chanhdai.com/_next/static/chunks/294clhn5_s2n9.css) — main styles
- **Font**: [Geist Sans Variable](https://chanhdai.com/_next/static/media/Geist_Variable-s.p.38tal-0yzr82m.woff2) — primary typeface
- **Font**: [Geist Mono Variable](https://chanhdai.com/_next/static/media/GeistMono_Variable.p.42jdkyb02hb3d.woff2) — technical typeface
- **Image**: [OG Width](https://chanhdai.com/1200) — meta dimension reference
- **Image**: [OG Height](https://chanhdai.com/630) — meta dimension reference
- **Image**: [OG Alt](https://chanhdai.com/Ch%C3%A1nh%20%C4%90%E1%BA%A1i) — meta text reference
- **Document**: [Web Manifest](https://chanhdai.com/manifest.webmanifest) — PWA configuration
- **Other**: [EvilRabbit Unavatar](https://unavatar.io/x/evilrabbit_) — profile reference
- **Other**: [JoshPuckett Unavatar](https://unavatar.io/x/joshpuckett) — profile reference
- **Other**: [AhmadAwais Unavatar](https://unavatar.io/x/MrAhmadAwais) — profile reference
- **Other**: [OrcDev Unavatar](https://unavatar.io/x/orcdev) — profile reference
- **Other**: [Rauchg Unavatar](https://unavatar.io/x/rauchg) — profile reference
- **Other**: [Shadcn Unavatar](https://unavatar.io/x/shadcn) — profile reference
- **Other**: [ShadcnCraft Unavatar](https://unavatar.io/x/shadcncraft?v=2) — profile reference
- **Other**: [GTM Script](https://www.googletagmanager.com/gtm.js?id=GTM-N9BWM3TG) — analytics integration