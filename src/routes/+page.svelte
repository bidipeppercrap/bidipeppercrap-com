<script>
    import "../app.css";
    import "@fortawesome/fontawesome-free/css/all.min.css"
    import MainHeader from "$lib/MainHeader.svelte";
    import ProjectList from "$lib/ProjectList.svelte";
    import SocialList from "$lib/SocialList.svelte";

    const projects = [
        { name: "spelltest", logoUrl: "/spelltest.svg", targetUrl: "https://spelltest.bidipeppercrap.com" },
        { name: "takkat", logoUrl: "/takkat.svg" },
    ];

    const socials = [
        { targetUrl: "https://facebook.com/bidipeppercrap", name: "fb", faClass: "fa-brands fa-facebook" },
        { targetUrl: "https://instagram.com/_bidipeppercrap", name: "ig", faClass: "fa-brands fa-instagram" },
        { name: "artstation", faClass: "fa-brands fa-artstation", targetUrl: "https://artstation.com/bidipeppercrap" }
    ]
</script>

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