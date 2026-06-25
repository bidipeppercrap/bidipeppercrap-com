import { z } from "zod";

/**
 * Canonical content schema — the single source of truth shared by the web
 * app (and, in Phase 2, the console + api). Everything is camelCase here;
 * the API layer is responsible for mapping to/from its storage shape.
 */

/**
 * Semantic social platform keys, decoupled from any icon library. Store the
 * key in data; map key -> icon at render time. This means we can swap icon
 * libraries (e.g. FontAwesome -> inlined Iconify SVGs) without a data migration.
 */
export const SOCIAL_PLATFORMS = [
  "github",
  "instagram",
  "artstation",
  "twitter",
  "bluesky",
  "youtube",
  "twitch",
  "mastodon",
  "linkedin",
  "tiktok",
  "discord",
  "email",
  "website",
] as const;

export const socialPlatformSchema = z.enum(SOCIAL_PLATFORMS);
export type SocialPlatform = z.infer<typeof socialPlatformSchema>;

export const projectSchema = z.object({
  id: z.number().int().optional(),
  name: z.string().min(1),
  /** Optional: when absent the card renders as a non-clickable tile. */
  targetUrl: z.string().url().nullable().default(null),
  logoUrl: z.string().min(1),
  /** Lower sorts first. Lets you control ordering from the console. */
  sortOrder: z.number().int().default(0),
  /** Hide without deleting. */
  published: z.boolean().default(true),
});
export type Project = z.infer<typeof projectSchema>;
/** Editing shape: fields with defaults (targetUrl, sortOrder, published) may be omitted. */
export type ProjectInput = z.input<typeof projectSchema>;

export const socialSchema = z.object({
  id: z.number().int().optional(),
  name: z.string().min(1),
  targetUrl: z.string().url(),
  platform: socialPlatformSchema,
  sortOrder: z.number().int().default(0),
  published: z.boolean().default(true),
});
export type Social = z.infer<typeof socialSchema>;
/** Editing shape: fields with defaults (sortOrder, published) may be omitted. */
export type SocialInput = z.input<typeof socialSchema>;

export const projectsSchema = z.array(projectSchema);
export const socialsSchema = z.array(socialSchema);
