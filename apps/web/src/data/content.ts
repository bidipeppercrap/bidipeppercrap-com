import {
  projectsSchema,
  socialsSchema,
  type Project,
  type Social,
} from "@bidipeppercrap/schema";
import { projects as localProjects, socials as localSocials } from "./content.data";

/**
 * Page content comes from `content.data.ts` (edit, commit, push to deploy).
 * It's parsed through the shared schema so malformed data fails the build,
 * then filtered to published entries and sorted for display.
 */

const byOrder = (a: { sortOrder: number }, b: { sortOrder: number }) =>
  a.sortOrder - b.sortOrder;

export function getProjects(): Project[] {
  return projectsSchema
    .parse(localProjects)
    .filter((p) => p.published)
    .sort(byOrder);
}

export function getSocials(): Social[] {
  return socialsSchema
    .parse(localSocials)
    .filter((s) => s.published)
    .sort(byOrder);
}
