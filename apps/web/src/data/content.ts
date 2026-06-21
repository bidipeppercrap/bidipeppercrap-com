import {
  projectsSchema,
  socialsSchema,
  type Project,
  type Social,
} from "@bidipeppercrap/schema";
import { projects as localProjects, socials as localSocials } from "./content.data";

/**
 * Single seam for page content.
 *
 * Phase 1 (now): reads from the local data file `content.data.ts`.
 * Phase 2: replace the bodies below with a build-time fetch from the API —
 *   e.g. `const res = await fetch(`${import.meta.env.PUBLIC_API_URL}/project`)`
 *   then validate the JSON with `projectsSchema` — keeping these signatures
 *   identical so nothing downstream changes.
 *
 * Both functions are async on purpose so the Phase 2 fetch is a drop-in.
 */

const byOrder = (a: { sortOrder: number }, b: { sortOrder: number }) =>
  a.sortOrder - b.sortOrder;

export async function getProjects(): Promise<Project[]> {
  return projectsSchema
    .parse(localProjects)
    .filter((p) => p.published)
    .sort(byOrder);
}

export async function getSocials(): Promise<Social[]> {
  return socialsSchema
    .parse(localSocials)
    .filter((s) => s.published)
    .sort(byOrder);
}
