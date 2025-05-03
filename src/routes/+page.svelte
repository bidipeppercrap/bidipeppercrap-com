<script lang="ts">
    import "../app.css";
    import "@fortawesome/fontawesome-free/css/all.min.css";
    import type { Project } from "$lib/models/project";
    import type { Social } from "$lib/models/social";
    import MainHeader from "$lib/MainHeader.svelte";
    import ProjectList from "$lib/ProjectList.svelte";
    import SocialList from "$lib/SocialList.svelte";

    let { data } = $props();

    const { projects: rawProjects, socials: rawSocials } = data;
    const projects: Project[] = rawProjects.map((p: { name: any; target_url: any; logo_url: any; }) => {
        return {
            name: p.name,
            targetUrl: p.target_url,
            logoUrl: p.logo_url
        }
    });
    const socials: Social[] = rawSocials.map((s: { name: any; target_url: any; fa_class: any; }) => {
        return {
            name: s.name,
            targetUrl: s.target_url,
            faClass: s.fa_class
        }
    });
</script>

<svelte:head>
	<title>bidipeppercrap</title>
</svelte:head>

<main class="p-8 grid gap-8">
    <MainHeader />
    <ProjectList {projects} />
    {#if socials.length > 0}
        <h1 class="
            text-white m-auto text-5xl font-black
            drop-shadow-[0_0_8px_rgba(255,255,255,0.25)]
        ">Progress & Artwork</h1>
        <SocialList {socials} />
    {/if}
</main>

<style>
    :root {
        background-color: black;
    }
</style>