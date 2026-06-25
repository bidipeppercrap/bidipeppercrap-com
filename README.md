# bidipeppercrap.com

Personal site — a static Astro app hosted on Cloudflare Workers. Content lives in
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
- **Cloudflare Workers** (static assets) — hosting (auto-deploys on every push to `main`)

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

## Deploy (Cloudflare Workers — static assets)

Deployed as a **Workers Static Assets** project (server-less: just the built
HTML/CSS in `apps/web/dist`, no Worker entrypoint). Config lives in
[`apps/web/wrangler.jsonc`](apps/web/wrangler.jsonc).

The tricky part is the bun monorepo: **install/build must run at the repo
root** (the single `bun.lock` lives there — that's how Cloudflare detects bun
instead of falling back to npm, which can't parse `workspace:*`), while
**`wrangler deploy` must run inside `apps/web`** (run at the repo root it sees
the `workspaces` field and aborts with _"application detection logic has been
run in the root of a workspace"_).

### Option 1 — Git integration (recommended)

1. Push this repo to GitHub.
2. Cloudflare dashboard → **Workers & Pages → Create → Workers → Connect to a
   repository**, pick the repo.
3. Build settings:
   - **Root directory:** leave **blank** (= repo root; do _not_ type `/`, which
     is read as a path and rejected with _"root directory not found"_). This is
     what lets Cloudflare find `bun.lock` and use bun.
   - **Build command:** `bun run build`
   - **Deploy command:** `cd apps/web && npx wrangler deploy`
   - Optionally pin bun with a `BUN_VERSION` environment variable (e.g. `1.3.14`).
4. Save & deploy. `bun install` (at root) resolves the `@bidipeppercrap/schema`
   workspace package, `bun run build` emits to `apps/web/dist`, then
   `wrangler deploy` (inside `apps/web`) uploads `dist`. Every push to `main`
   redeploys.

### Option 2 — Manual deploy with Wrangler

```sh
bun run build                       # from repo root
cd apps/web && bunx wrangler deploy # deploy from the app dir
```

### Updating content

Content lives in the repo, so updating the site is just a push:

```sh
# edit apps/web/src/data/content.data.ts
# (add any new logos to apps/web/public/logos/)
git commit -am "update content"
git push
```

Cloudflare rebuilds and deploys automatically on every push to `main`
(~30s). No manual deploy step.

### Custom domain

Worker → **Settings → Domains & Routes** → add `bidipeppercrap.com`. Since DNS
is already on Cloudflare, this is a one-click setup.

## Regenerate the OG image

`apps/web/public/og.png` (used for link previews) is generated from the logo:

```sh
cd apps/web && bun run og
```
