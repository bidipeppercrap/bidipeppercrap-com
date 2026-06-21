# bidipeppercrap.com

Personal site, rebuilt as a Cloudflare-hosted monorepo.

## Layout

```
apps/
  web/          # Astro — public page. Static, 0 JS. Deploys to Cloudflare Pages.
  console/      # (Phase 2) SvelteKit admin — migrate from bidipeppercrap-console
  api/          # (Phase 2) Hono + Drizzle + D1 backend — migrate from bidipeppercrap-api
packages/
  schema/       # shared types + Zod for Project / Social (single source of truth)
```

## Stack

- **bun** — package manager / workspaces
- **Astro + Tailwind 4** — static public site, zero client JS
- **astro-icon** (Iconify) — inlined SVG social icons, no FontAwesome
- **Cloudflare Pages** — hosting (deploy hook triggers rebuild on content change)

## Develop

```sh
bun install
bun run dev       # web dev server
bun run build     # static build -> apps/web/dist
bun run preview   # preview the build
```

## Data flow (Option A — static, rebuild on change)

Content (projects / socials) changes ~twice a year, so the site is fully
static. Phase 1 reads content from a local data file. Phase 2 will fetch it
from the API at build time and have the console fire a Cloudflare deploy hook
on save, so the site rebuilds automatically. The seam lives in
`apps/web/src/data/content.ts` — only its internals change between phases.

## Deploy (Cloudflare Pages)

The web app builds to static files (`apps/web/dist`) — no server needed.

### Option 1 — Git integration (recommended)

1. Push this repo to GitHub.
2. Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git**, pick the repo.
3. Build settings:
   - **Framework preset:** Astro
   - **Build command:** `bun run build`
   - **Build output directory:** `apps/web/dist`
   - **Root directory:** `/` (repo root)
4. Pages detects `bun.lock` and uses bun automatically; optionally set a
   `BUN_VERSION` environment variable to pin it.
5. Save & deploy. Every push to `main` redeploys.

### Option 2 — Manual deploy with Wrangler

```sh
bun run build
bunx wrangler pages deploy apps/web/dist --project-name=bidipeppercrap-com
```

### Rebuild on content change (Option A)

Content is baked in at build time, so updating it requires a rebuild:

1. In the Pages project → **Settings → Builds & deployments → Deploy hooks**,
   create a hook. You get a unique URL.
2. POST to it to trigger a rebuild:
   ```sh
   curl -X POST "<your-deploy-hook-url>"
   ```
3. Phase 2: the API will POST this hook automatically after a content save, so
   editing in the console rebuilds the site with no manual step.

### Custom domain

Pages project → **Custom domains** → add `bidipeppercrap.com`. Since DNS is
already on Cloudflare, this is a one-click setup.

## Regenerate the OG image

`apps/web/public/og.png` (used for link previews) is generated from the logo:

```sh
cd apps/web && bun run og
```
