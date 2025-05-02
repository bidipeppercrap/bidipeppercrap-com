import { fetchUrl } from "../bindings";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch }) => {
    const projectRes = await fetch(`${fetchUrl}/project`);
    const socialRes = await fetch(`${fetchUrl}/social`);

    const projects = await projectRes.json();
    const socials = await socialRes.json();

    return {
        projects,
        socials
    }
}