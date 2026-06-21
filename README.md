# bidipeppercrap.com

Personal site — a static Astro app hosted on Cloudflare Pages. Content lives in
the repo, so updating the site is just a `git push`. No backend, no database.

## Layout

```
apps/
  web/          # Astro — public page. Static, 0 JS. Deploys to Cloudflare Pages.
packages/
  schema/       # types + Zod for Project / Social
```

## Stack

- **bun** — package manager / workspaces
- **Astro + Tailwind 4** — static public site, zero client JS
- **astro-icon** (Iconify) — inlined SVG social icons, no FontAwesome
- **Cloudflare Pages** — hosting (auto-deploys on every push to `main`)

## Develop

```sh
bun install
bun run dev       # web dev server
bun run build     # static build -> apps/web/dist
bun run preview   # preview the build
```

## Content

Projects and socials live in `apps/web/src/data/content.data.ts`, validated
against the shared schema at build time. Logos go in `apps/web/public/logos/`.
To update the site: edit that file, commit, and push (see Deploy below).

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

### Updating content

Content lives in the repo, so updating the site is just a push:

```sh
# edit apps/web/src/data/content.data.ts
# (add any new logos to apps/web/public/logos/)
git commit -am "update content"
git push
```

Cloudflare Pages rebuilds and deploys automatically on every push to `main`
(~30s). No manual deploy step.

### Custom domain

Pages project → **Custom domains** → add `bidipeppercrap.com`. Since DNS is
already on Cloudflare, this is a one-click setup.

## Regenerate the OG image

`apps/web/public/og.png` (used for link previews) is generated from the logo:

```sh
cd apps/web && bun run og
```
