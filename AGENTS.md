# AGENTS.md

## Rules

- **Agent files** (skills, AGENTS.md, configs, code documentation) must be written in **English**.
- **Communication with the user** (me, Oscar): messages, comments in code, and any user-facing text must be in **Spanish**.
- **Document new code**: always add clear comments (in Spanish) explaining the purpose of new functions, components, and non-obvious logic.

## Commands

```bash
npm run dev      # start dev server (Vite HMR)
npm run build    # typecheck then bundle (tsc && vite build)
npm run lint     # ESLint, max warnings 0
npm run preview  # serve built dist
npm run analize  # source-map-explorer on dist JS
```

## Architecture

- **React 18 + TypeScript + Vite** single-page portfolio (no SSR).
- **HashRouter** is used (not BrowserRouter) — required for static hosting without server-side redirects.
- Routes defined in `src/Components/Container Page/RoutesApp.tsx`:
  - `/` → `pages/Inicio`
  - `/projects` → `pages/Projects`
  - `/*` → `pages/404`
- Blog routes (`/blog`, `/blog/view_blog/:id`) are **commented out** in `RoutesApp.tsx` but the service code in `src/services/` still exists and points to a live API. Remove or keep both halves together if re-enabling.

## i18n

- `i18next` + `react-i18next`, two languages: `en` and `es`.
- Translation JSONs are **statically imported** in `src/main.tsx` (not lazy-loaded).
- Chosen language stored in `localStorage` under key `"lang"`, default is `"en"`.
- Translation files live in `src/data/translations/{en,es}/`.

## Code style

- **Prettier**: `tabWidth: 3`, `singleQuote: true`, `semi: false`. These are unusual — do not revert to defaults.
- **ESLint**: `react-hooks/recommended` + `react-refresh` plugin. All lint warnings are errors (`--max-warnings 0`).

## Tailwind

- Custom colors: `primary` (#7E00FC), `secondary` (#21D6EF), `third` (#ea4f18), `darkMode` (#191E1D).
- Extended color scales: `pri-50` through `pri-950`, `sec-50` through `sec-950`.
- Custom fonts: `lora`, `roboto`, `siliguri`, `inter` — loaded from Google Fonts in `index.html`.
- Custom max-width: `max-w-720p` (1200px) used for the `.container` utility.
- The `.container` class is **redefined** in `src/index.css` — this overrides Tailwind's default container.

## Build & typecheck

- `npm run build` runs `tsc` before `vite build`. Type errors block the build.
- `tsconfig.json` has `strict: true`, `noUnusedLocals: true`, `noUnusedParameters: true`. The build will fail on unused variables.

## Context

- `AppContext` (`src/context/appContext.tsx`) provides `menuMovile` (boolean) and `handlerMenuMovile` — used by the mobile menu toggle. Wrap new pages inside `AppProvider` if they need it (already done at root in `App.tsx`).

## Lockfiles

Both `package-lock.json` and `pnpm-lock.yaml` exist. If adding/removing dependencies, use **npm** (there's no pnpm workspace config) and update both lockfiles.

## Skills

Custom skills are installed in `.opencode/skills/`. Each contains a `SKILL.md` with instructions for the agent. Available skills:

| Skill | Purpose |
|---|---|
| `accessibility` | WCAG 2.2 a11y audits and fixes |
| `caveman` | Simplify code to minimal, readable form |
| `composition-patterns` | React composition over inheritance |
| `diagnose` | Diagnostic framework for debugging |
| `frontend-design` | Frontend UI/UX design patterns |
| `grill-me` | Deep review mode with structured questions |
| `grill-with-docs` | Review mode using official docs as reference |
| `improve-codebase-architecture` | Refactor and architectural improvements |
| `nodejs-backend-patterns` | Node.js backend design patterns |
| `nodejs-best-practices` | Node.js production best practices |
| `react-best-practices` | React patterns and performance |
| `seo` | SEO analysis and recommendations |
| `setup-matt-pocock-skills` | Installer for Matt Pocock's skills |
| `tailwind-css-patterns` | Tailwind v4 patterns and best practices |
| `tdd` | Test-Driven Development workflow |
| `to-issues` | Convert notes/reports to GitHub issues |
| `to-prd` | Convert ideas to structured PRDs |
| `triage` | Issue/incident triage framework |
| `typescript-advanced-types` | Advanced TypeScript type patterns |
| `vite` | Vite build tooling and config |
| `write-a-skill` | Guide for creating new skills |
| `zoom-out` | High-level architecture perspective |
