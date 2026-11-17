# Design System Master File: Cahyadi Portfolio

> **SOURCE OF TRUTH:** Strict monochromatic engineering design system.
> Zero purple gradients. Zero glowing blur orbs. Zero glassmorphism. Zero emojis. Zero twin cards. Zero robotic copy.

---

## 1. Core Principles & Strict Guardrails

1. **Strict Monochromatic Palette + Single Solid Accent:**
   - Base palette is strictly monochromatic (ink, slate, hairline, pure canvas).
   - Exactly **one** solid accent color across the entire interface: **Solid Electric Blue** (`#0066FF` on Light, `#3B82F6` on Dark).
   - **Banned:** Text gradients (`.text-gradient`), glowing blur orbs (`.glow-orb`), purple/AI gradients, heavy `backdrop-filter` glassmorphism.
   - Surfaces are crisp, solid, and separated by precise 1px hairline borders (`#E2E8F0` / `#1E293B`).

2. **Asymmetric 12-Column Grid & Generous Whitespace (>=40%):**
   - **Banned:** Symmetrical 3-column identical cards ("card kembar").
   - Layouts are composed on a **12-column grid** with asymmetric spans (e.g. 8 + 4, 7 + 5, 5 + 7).
   - At least 40% of the viewport is dedicated to intentional negative space (whitespace) for mental breathing room and scannability.

3. **Human & Engineering-First Copywriting:**
   - **Banned:** Robotic welcome greetings ("Welcome to my digital world", "Passionate developer crafting digital wonders", etc.).
   - Tone is concise, direct, grounded in technical reality, metrics, and business/academic outcomes.

4. **Clean Code Separation: Layout vs. Surface:**
   - **Structure:** Handled by grid & layout primitives (`.grid-12`, `.col-span-8`, `.col-span-4`, `.layout-split`, `.whitespace-pad`).
   - **Surface & Visuals:** Handled by tokenized utilities (`.surface-card`, `.hairline-border`, `.badge-mono`).
   - **State & Logic:** Idiomatic Svelte 5 runes (`$state`, `$derived`, `$props`, `$effect`).

---

## 2. Color Tokens (Dual Mode)

| Role | Light Theme Token | Dark Theme Token | Purpose |
| :--- | :--- | :--- | :--- |
| **Canvas** | `#FFFFFF` | `#090D16` | Main page background |
| **Canvas Sub** | `#F8FAFC` | `#0F1420` | Secondary / contrasting section background |
| **Surface Card** | `#FFFFFF` | `#131927` | Solid card container background (NO glassmorphism) |
| **Ink Primary** | `#0F172A` | `#F8FAFC` | Headings, primary text (High contrast >= 10:1) |
| **Ink Secondary** | `#475569` | `#94A3B8` | Body text, descriptions (Contrast >= 4.5:1) |
| **Ink Muted** | `#64748B` | `#64748B` | Captions, metadata, dates |
| **Hairline Border**| `#E2E8F0` | `#1E293B` | Crisp 1px structural dividers |
| **Hairline Strong**| `#CBD5E1` | `#334155` | Hover & active state borders |
| **Accent Solid** | `#0066FF` | `#3B82F6` | Single solid accent for CTAs, active pills, indicators |
| **Accent On** | `#FFFFFF` | `#090D16` | Text on solid accent |
| **Status Ready** | `#16A34A` | `#22C55E` | Solid green indicator dot (no blur) |

---

## 3. Typography Hierarchy

- **Display & Headings:** `Inter` (alternatively `Space Grotesk`) with weight `600`, letter-spacing `-0.03em`, strictly solid text color (NO gradient fills).
- **Body:** `Inter` or system sans-serif with weight `400` / `500`, line-height `1.6`, max measure `65ch`.
- **Technical & Metadata:** `JetBrains Mono` with weight `400` / `500`, uppercase tracking `0.05em`, size `11px` to `13px`.

```css
/* Typography Tokens */
--font-sans: 'Inter', system-ui, -apple-system, sans-serif;
--font-mono: 'JetBrains Mono', ui-monospace, monospace;

--text-display: clamp(2.5rem, 5vw, 4.25rem); /* Line height: 1.1, Letter spacing: -0.035em */
--text-title: clamp(1.75rem, 3vw, 2.5rem);    /* Line height: 1.2, Letter spacing: -0.025em */
--text-subtitle: 1.25rem;                      /* Line height: 1.4 */
--text-body: 1rem;                             /* Line height: 1.6 */
--text-caption: 0.8125rem;                     /* Line height: 1.4 */
--text-mono: 0.75rem;                          /* Line height: 1.4, Monospace */
```

---

## 4. Layout Architecture (12-Column Grid & Whitespace)

```
┌────────────────────────────────────────────────────────────────────────┐
│                        12-COLUMN ASYMMETRIC GRID                       │
├───────────────────────────────────┬────────────────────────────────────┤
│ Col 1-7 (58% width): Major Focus  │ Col 8-12 (42% width): Context      │
│ Primary narrative / Hero app      │ Technical specs / Live metrics     │
└───────────────────────────────────┴────────────────────────────────────┘
```

- **Container:** `max-width: 1240px; margin: 0 auto; padding: 0 32px;`
- **Grid Gap:** `24px` horizontal and vertical.
- **Section Spacing:** Generous `120px` to `160px` vertical margins to guarantee >=40% screen whitespace.
- **Bento Composition:**
  - **Feature 01 (Span 8 cols, 2 rows):** Hero project (e.g. *Smart Task* — High-performance Go backend + Flutter, architecture diagram & live metrics).
  - **Feature 02 (Span 4 cols, 1 row):** Data visualization (e.g. *BPS Kepri* — 8 economic indicators, national census 2026).
  - **Feature 03 (Span 4 cols, 1 row):** Real-time monitoring / Systems (e.g. *Aero Price Scraping* or *Raylib C Engine*).
  - **Each card has unique internal anatomy and hierarchy.**

---

## 5. Micro-Interactions & Tactile Feedback

- **Hover States:** Crisp 150ms transition. Border changes from `--color-hairline` to `--color-hairline-strong`.
- **Card Lift:** Subtle `-2px` translateY with restrained sharp shadow (no colored neon halos).
- **Tactile Active:** `scale(0.98)` or `-1px translateY` on `:active`.
- **Reduced Motion:** When `prefers-reduced-motion: reduce` is active, remove all translations and delays immediately.

---

## 6. Pre-Delivery Checklist (ui-ux-pro-max standard)

- [ ] Zero emojis across markup and copy (use Phosphor/SVG vector icons only).
- [ ] Zero text gradients (`.text-gradient` eliminated).
- [ ] Zero glowing blur orbs (`.glow-orb` eliminated).
- [ ] Zero glassmorphism (`backdrop-filter` removed from cards; solid surfaces used).
- [ ] No symmetrical 3-column twin cards.
- [ ] 12-column asymmetric grid with >=40% negative space.
- [ ] All interactive touch targets >= 44px.
- [ ] Contrast ratio >= 4.5:1 for all text.
- [ ] Full Svelte 5 runes compliance (`$state`, `$derived`, `$props`).
