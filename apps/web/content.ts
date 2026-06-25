import type { ProjectInput, SocialInput } from "@bidipeppercrap/schema";

/**
 * Site content — THIS is the file to edit. Add, remove, or reorder entries
 * below, then commit & push; Cloudflare rebuilds and redeploys automatically.
 *
 *   • Order on the page follows the order of these arrays — reorder by moving
 *     lines. (Set `sortOrder` only if you need to override that.)
 *   • Optional fields fall back to defaults: published is true, a project with
 *     no `targetUrl` renders as a non-clickable tile.
 *   • Set `published: false` to hide an entry without deleting it.
 *   • New project logos go in `public/logos/`.
 *
 * Validated against the shared schema at build time, so a bad platform name or
 * malformed URL fails the build instead of shipping. Editors autocomplete the
 * allowed `platform` values.
 */

export const projects = [
  {
    name: "spell test",
    targetUrl: "https://instagram.com/_bidipeppercrap",
    logoUrl: "/logos/spell-test.svg",
  },
  {
    name: "takkat",
    logoUrl: "/logos/takkat.svg",
    // no targetUrl → non-clickable tile
  },
] satisfies ProjectInput[];

export const socials = [
  {
    name: "Instagram",
    platform: "instagram",
    targetUrl: "https://instagram.com/_bidipeppercrap",
  },
  {
    name: "ArtStation",
    platform: "artstation",
    targetUrl: "https://artstation.com/bidipeppercrap",
  },
  {
    name: "Bluesky",
    platform: "bluesky",
    targetUrl: "https://bsky.app/profile/bidipeppercrap.com",
  },
] satisfies SocialInput[];
