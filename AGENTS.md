# AGENTS.md

## Cursor Cloud specific instructions

This is an **Astro v5** static blog site (no backend, no database, no external services).

### Quick reference

| Task | Command |
|------|---------|
| Install deps | `npm install` |
| Dev server | `npm run dev` (serves at `localhost:4321`) |
| Build | `npm run build` (outputs to `./dist/`) |
| Preview build | `npm run preview` |
| Type check | `npx astro check` |

### Notes

- There are no lint, test, or format scripts configured in `package.json`. Use `npx astro check` for TypeScript diagnostics.
- The `astro.config.mjs` reads a font file from `node_modules/@fontsource/roboto/` at build/dev time for OpenGraph image generation. If `npm install` hasn't been run, the dev server and build will fail.
- No `.env` files or secrets are needed. The site URL is hardcoded in `astro.config.mjs`.
- Blog content lives as Markdown files in `src/pages/posts/`.
