<script lang="ts">
    interface Social {
        name: string,
        targetUrl: string,
        faClass: string,
    }

    let { socials }: { socials: Social[] } = $props();
</script>

<div class="w-full flex justify-center gap-3 flex-wrap">
    {#each socials as social}
        <a aria-label={social.name} href={social.targetUrl} class="transition duration-300 ease-in-out border-2 border-white/50 hover:border-white/35 bg-radial from-white from-30% to-white/80 hover:from-white/90 hover:to-white/65 text-[36px] p-6 rounded-3xl shadow-[0_0_16px_rgba(255,255,255,0.20)] hover:shadow-[0_0_8px_rgba(255,255,255,0.10)]" target="_blank">
            <i class={social.faClass}></i>
        </a>
    {/each}
</div>