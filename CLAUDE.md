# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Dev Commands

```bash
# Dev server (default port 5173)
bun run dev
bun run dev -- --open

# Production build & preview
bun run build
bun run preview

# Type-check + svelte-check
bun run check
bun run check:watch
```

Package manager: **bun** (enforced via `.npmrc` `engine-strict=true`). Do not introduce `package-lock.json` or `yarn.lock` alongside `bun.lock`.

## Tech Stack

- **SvelteKit 2** (pages router — `src/routes/**/+page.svelte`, NOT app-router `src/routes/(group)`)
- **Svelte 5** with **runes** (`$state`, `$derived`, `$effect`, `$props`). Class stores are not used here.
- **TypeScript strict** (`tsconfig.json` sets `"strict": true`, `moduleResolution: "bundler"`, `rewriteRelativeImportExtensions: true`)
- **Vite 7** + `@sveltejs/vite-plugin-svelte`
- Runtime deps: `@emailjs/browser`, `@iconify/svelte`, `tech-stack-icons`, `@iconify-json/logos`

## Architecture

### File conventions

- Every route directory has a `+page.svelte` (e.g. `src/routes/projects/[slug]/+page.svelte`). No `page.server.ts` — all data is static or client-fetched.
- Shared UI lives in `src/lib/components/` (pascal-case `*.svelte`). Data/content in `src/lib/data/`.
- Reactive singletons (`$state` at module scope + `initX()` bootstrap called from `onMount`) in `$lib/i18n/index.svelte.ts` and `$lib/theme.svelte.ts`. These are **not** Svelte stores — they are runes-based module state.
- Types/interfaces use `interface` (convention in this project), not `type`, for data shapes (see `Project`, `Experience` in `src/lib/data/projects.ts` and `i18n/index.svelte.ts`).

### Design System

The entire visual language is in **`src/app.css`** as CSS custom properties (no Tailwind, no CSS framework):
- Color tokens: `--color-ink`, `--color-body`, `--color-mute`, `--color-hairline`, `--color-canvas`, etc. The `:root.dark` block toggles the dark palette.
- Type scale: `--display-xl` down to `--caption` + `--font-sans` (Inter), `--font-mono` (JetBrains Mono).
- Spacing: 4px base unit, `--space-xxs` through `--space-section`.
- Shadows: `--shadow-level-1` (hairline inset) through `--shadow-level-4` — same pattern in light/dark.
- `.reveal` + `.delay-N` classes implement the scroll-triggered fade-in; an `IntersectionObserver` is wired in `src/routes/+layout.svelte`.
- `.container`, `.btn-*`, `.tag`, `.text-gradient`, `.bg-grid` are the reusable utility classes here. Reuse them before introducing new CSS.

### Routing & pages

- `/` — homepage sections (Hero, AboutPreview, FeaturedProjects, FAQ, FooterCTA)
- `/projects` — list with filter pills (`all | web | mobile | ai | game`) AND a view-mode toggle (list vs. kanban). Filter state = client state; kanban/list preference persists to `localStorage('portfolio-view-mode')`.
- `/projects/[slug]` — detail page. Lookups `getProjectBySlug(slug)` from static `projects` array. 404 fallback inline (no `+error.svelte`).
- `/about` — bio, TechStack component, accordion experience list (single-open), education, certifications.
- `/contact` — EmailJS form + contact aside. Status states: `sending`, `sent`, `error` (each with 5s auto-reset timeout).

### i18n

- Two languages: `id` (default) and `en`. Stored in `localStorage('portfolio-lang')`.
- `getTranslations()` returns the full object for the current language — used in every page/component via `$derived(getTranslations())`.
- `translations.ts` has parallel `id`/`en` trees. **Both languages must keep identical keys** — adding a string to `id` without `en` (or vice versa) will produce `undefined` at runtime.
- Current language also accessible via `getCurrentLang()` (used for per-field switching like `project.description.id` vs `.en`).

### Theme

- `localStorage('portfolio-theme')` + inline `<script>` in `app.html` applies `.dark` on `<html>` before first paint (prevents FOUC).
- Toggle via `toggleTheme()` in `$lib/theme.svelte.ts`; Navbar exposes the button.

### Data shape (Project)

Defined in `src/lib/data/projects.ts`: `{ slug, title, description: {id,en}, shortDesc: {id,en}, tech: string[], category: 'web'|'mobile'|'ai'|'game', liveUrl?, githubUrl?, featured, imageUrl, images?, status: 'concept'|'in-progress'|'shipped', role: {id,en}, duration: {id,en} }`.

### Static assets

- Images and PDFs (CV, certificates) go in `static/` — referenced with absolute paths like `/images.webp`.
- Tech badge SVGs are in `static/tech-icons/` and referenced from `TechStack.svelte`'s `localIcons` map. Add new badges there rather than importing.

## Project-specific conventions

- React-style `onclick={handler}` works in Svelte, but this codebase prefers `onclick={handler}` (not `on:click`) — consistent with Svelte 5.
- Each page imports `../app.css` once at the top of the `<script>` block (no `<style src="...">`), and uses **scoped CSS only** (per-file `<style>` blocks). Do not add global styles outside `src/app.css`.
- Hero typewriter effect in `Hero.svelte` uses manual `$effect` + `setTimeout` loops, not a library — keep that pattern in mind if editing animation logic.
- EmailJS keys (`service_fl7u44p`, `template_rirdhx8`, public key `KXoqgAMa8sSw9FOWr`) are committed — these are standard client-side EmailJS credentials that are public by design, not secrets.
- `email` field in the `en` translations has a trailing space (`'chdprasetyo@gmail.com '`), which would cause a broken `mailto:` link in English. Verified as a minor existing bug.

## Common gotchas

- `$state` arrays/objects are **shallowly** reactive — replacing a field on a `$state` object does not notify if you mutate a nested field without reassignment. Reassign the whole object when updating form fields (as `handleSubmit` does).
- `+layout.svelte` wraps every page with Navbar + Footer + IntersectionObserver. Adding layout-affecting CSS elsewhere (e.g. another `IntersectionObserver`) will double-fire reveals.
- The `.reveal` animation depends on the element already having `opacity: 0` at mount. SSR'd SvelteKit HTML therefore flashes unstyled content for one frame before `onMount` adds `.visible` — this is a known trade-off of the current implementation.

## Notes for maintainers

- There is no test suite. `svelte-check` is the only automated gate.
- Adapter is `@sveltejs/adapter-auto` — works on Vercel/Netlify/Cloudflare. Static prerender is the default (no `export const prerender = 'true'` because adapter-auto + no server routes = fully static).
- `src/app.d.ts` is intentionally empty — do not delete it; it is required by SvelteKit for module resolution.
