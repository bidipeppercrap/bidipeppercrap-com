import type { Project, Social } from "@bidipeppercrap/schema";

/**
 * Real content, pulled from the live site (api.bidipeppercrap.com) on 2026-06-21.
 * Logos were downloaded into `public/logos/` so the site has no runtime
 * dependency on the old API/R2.
 *
 * In Phase 2 this file goes away and content comes from the API at build time.
 */

export const projects: Project[] = [
  {
    name: "spell test",
    targetUrl: "https://instagram.com/_bidipeppercrap",
    logoUrl: "/logos/spell-test.svg",
    sortOrder: 0,
    published: true,
  },
  {
    name: "takkat",
    targetUrl: null, // was "" in the API — renders as a non-clickable tile
    logoUrl: "/logos/takkat.svg",
    sortOrder: 1,
    published: true,
  },
];

export const socials: Social[] = [
  {
    name: "Instagram",
    targetUrl: "https://instagram.com/_bidipeppercrap",
    platform: "instagram",
    sortOrder: 0,
    published: true,
  },
  {
    name: "ArtStation",
    targetUrl: "https://artstation.com/bidipeppercrap",
    platform: "artstation",
    sortOrder: 1,
    published: true,
  },
  {
    name: "Bluesky",
    targetUrl: "https://bsky.app/profile/bidipeppercrap.com",
    platform: "bluesky",
    sortOrder: 2,
    published: true,
  },
];
