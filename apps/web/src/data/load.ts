import {
  projectsSchema,
  socialsSchema,
  type Project,
  type Social,
} from "@bidipeppercrap/schema";
import { projects, socials } from "../../content";

/**
 * Loads the page content from `content.ts` (the file you edit). Parsing through
 * the shared schema applies defaults and fails the build on malformed data,
 * then we drop unpublished entries and sort for display. You don't normally
 * edit this file — edit `content.ts` at the app root.
 */

const byOrder = (a: { sortOrder: number }, b: { sortOrder: number }) =>
  a.sortOrder - b.sortOrder;

export function getProjects(): Project[] {
  return projectsSchema
    .parse(projects)
    .filter((p) => p.published)
    .sort(byOrder);
}

export function getSocials(): Social[] {
  return socialsSchema
    .parse(socials)
    .filter((s) => s.published)
    .sort(byOrder);
}
