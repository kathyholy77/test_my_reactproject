## Project snapshot

- Framework: React + TypeScript (Vite)
- Entry: `src/main.tsx` (referenced from `index.html`)
- Build output: `dist/` (contains compiled `src` tree in this repo copy)
- Deployed to GitHub Pages using `gh-pages` (script: `npm run deploy` -> runs `predeploy` -> `build`)

## Quick commands (exact)
- npm install
- npm run dev        # start Vite dev server
- npm run build      # build for production (output -> `dist/`)
- npm run preview    # serve the built `dist` locally
- npm run deploy     # uses `gh-pages` to publish `dist` to GitHub Pages

## Important repo-specific details for an AI agent

- Vite base path: `vite.config.ts` sets `base: "/test_my_reactproject/"`. If you change the repo name or deploy path, update this value before building for GitHub Pages.
- Local state storage: the app persists data to `localStorage` under the key `myAppData` (see `src` code in `dist/src/app.tsx`). When reasoning about data, expect ephemeral local-only storage rather than a remote API.
- Routing: uses `react-router-dom` (v7) with routes declared in `App` (`/` -> main page, `/new-page` -> `NewPage`). When creating or modifying pages, register them in the `Routes` in `App`.
- Icons & components: small component tree with imports like `./components/icons/icons`. Keep path resolution in mind when moving files.
- CSS: `index.html` links `/styles.css`, and components import `./index.css` — styles may be split between global and component-scoped files.

## TypeScript & path mapping

- `tsconfig.json` sets `paths` mapping `@/*` -> `./*`. Agents should respect this alias when modifying imports.
- `jsx` is `react-jsx` and `noEmit` is true — builds are run with Vite, not tsc emit. Avoid adding code that relies on tsc emit artifacts.

## Environment / secrets

- README mentions `GEMINI_API_KEY` in `.env.local`. If injecting AI model keys or other secrets, follow repo's pattern: add `.env.local` (not committed) and reference env vars via Vite conventions.

## Build & debug notes for agents

- Development: use `npm run dev` (Vite). This serves the app at localhost and supports HMR. When reproducing runtime bugs, prefer dev server to see console errors and component stack traces.
- Production preview: run `npm run build` then `npm run preview` to validate production behavior (this uses Vite's preview to serve `dist`).
- Deployment: `npm run deploy` runs `vite build` and then `gh-pages` to push `dist` to the `gh-pages` branch. Ensure `base` in `vite.config.ts` matches the repo path.

## Conventions & patterns discovered (concrete examples)

- Single-page dashboard that seeds data into `localStorage` (see `MainPage` in `dist/src/app.tsx`). Expect logic that reads `myAppData` on load and writes on state change.
- UI patterns: modal overlay for create flow (`CreateItemModal`), card components wrapped in `Link` for navigation (`ItemCard`), and a `Navbar` that controls active category.
- Accessibility: components pass ARIA attributes (`role="dialog"`, `aria-labelledby`, `aria-current`) — maintain or extend these attributes when editing UI.

## What to avoid / watch for

- Don't assume a backend: current code reads/writes only to `localStorage`. Adding a networked backend needs explicit integration points and new env variables.
- Be careful when renaming the repo or the `base` path: GitHub Pages assets will 404 unless `vite.config.ts` base is updated.

## Files to inspect when making changes

- `vite.config.ts` — base path and plugin config
- `package.json` — scripts (`dev`, `build`, `preview`, `deploy`) and dependencies
- `tsconfig.json` — path aliases and JSX settings
- `index.html` — root element and global CSS includes
- `src/*` (or `dist/src/*` for the built copy) — component structure, routing, and localStorage usage

If anything above is unclear or you'd like more examples (for instance, the `src` source files rather than the built `dist/src` tree), tell me which area to expand and I will update this file. 
