<script lang="ts">
    import type { Project } from "./models/project";

    let { projects }: { projects: Project[] } = $props();
</script>

<div class="w-full flex justify-center gap-8 flex-wrap">
    {#each projects as project}
        {#if project.targetUrl}
            <a href={project.targetUrl} class="bg-gradient-to-r from-gray-300 from-0% via-white via-60% to-gray-300 to-100% transition duration-300 ease-in-out hover:from-gray-300/85 hover:via-white/85 hover:to-gray-300/85 border-2 border-white/75 hover:border-white/25 shadow-[0_0_24px_rgba(255,255,255,0.30)] hover:shadow-[0_0_16px_rgba(255,255,255,0.20)] h-24 basis-[50vw] md:basis-[25vw] flex-1 p-8 rounded-3xl flex justify-center" target="_blank">
                <img src={project.logoUrl} alt={project.name}>
            </a>
        {:else}
            <div class="basis-[50vw] md:basis-[25vw] flex-1 h-24 p-8 rounded-3xl bg-white flex justify-center">
                <img src={project.logoUrl} alt={project.name}>
            </div>
        {/if}
    {/each}
</div>