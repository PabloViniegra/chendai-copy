# chanhdai.com — Personal Clone / Port

A faithful personal clone of [chanhdai.com](https://chanhdai.com) (the portfolio of [Chánh Đại / @iamncdai](https://github.com/ncdai)), built end-to-end as a study of how a "Design Engineer" portfolio is wired under the hood.

## ⚠️ Attribution

This project is a **port/clone of an existing site**, not original work. All credit for the design, content, architecture and code patterns belongs to the original author:

- **Original site:** <https://chanhdai.com>
- **Original repo:** <https://github.com/ncdai/chanhdai.com>
- **Original author:** [Chánh Đại](https://github.com/ncdai) — `@iamncdai`

The code is published under the same [MIT License](./LICENSE) as the original. The copyright notice in the LICENSE file is the original author's, as required by the MIT terms.

> If you're visiting this repo and expected an original portfolio by the user who pushed it: it's not. It's a derivative work. Please go support the [original project](https://github.com/ncdai/chanhdai.com).

## What's in here vs. the original

| Area | Original | This clone |
| --- | --- | --- |
| Stack | Next.js 16 + React 19 + Tailwind 4 + `motion` + kibo-ui + shadcn-registry + Lucide | Next.js 16 + React 19 + Tailwind 4 + `motion` only |
| Hero geometry | Animated isometric monogram (`motion/react`) with sound effect | Same monogram, no sound (skipped to avoid the audio subsystem) |
| Testimonials | `kibo-ui` Marquee + custom registry components + Twemoji + `lucide-react` | Hand-rolled CSS marquee + inline cards |
| Insights | Live OpenPanel API (`unstable_cache`) | Hardcoded dataset from a snapshot |
| Charts | Custom `LineChart` + `Grid` components | Inline SVG `<path>` (no chart library) |
| Icons | `lucide-react` everywhere | Inline SVG only |

The goal was **visual fidelity**, not a 1:1 implementation. Many heavy dependencies from the original were intentionally skipped to keep the codebase small and dependency-light.

## Running it

```bash
pnpm install
pnpm dev
```

Open <http://localhost:3000>.

```bash
pnpm lint   # biome check
pnpm build  # next build
```

## Tech notes

- Tailwind v4 with `@theme inline` and custom utilities (`screen-line-top/bottom`, `screen-dashed-line-*`, `diagonal-stripes`, `stripe-divider`, `animate-marquee-left/right`).
- Dark mode is class-based (`.dark` on `<html>`), toggled via the header button. Inline no-FOUC script reads `localStorage.theme` then `prefers-color-scheme`.
- All decorative SVGs are inlined (no `lucide-react`, no `@tabler/icons-react`).
- Biome handles linting + formatting. ESLint and Prettier are not configured.
- React Compiler is enabled in `next.config.ts`.

## File index

```
src/
├── app/
│   ├── globals.css          # tokens + custom utilities
│   ├── layout.tsx           # shell + theme bootstrap + CommandPalette
│   └── page.tsx             # all sections, in order
├── components/              # all section components + small UI primitives
├── data/                    # static content (projects, awards, blogs, etc.)
└── lib/                     # cn() helper, contributions seed
```

See [`DESIGN.md`](./DESIGN.md) for the design-token reference (colors, typography, spacing).

## License

[MIT](./LICENSE) — Copyright (c) 2026 Chánh Đại. See the LICENSE file for the full text.
