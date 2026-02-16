<script lang="ts">
    import Hero from "$lib/components/Hero.svelte";
    import AboutPreview from "$lib/components/AboutPreview.svelte";
    import FeaturedProjects from "$lib/components/FeaturedProjects.svelte";
    import FAQ from "$lib/components/FAQ.svelte";
    import FooterCTA from "$lib/components/FooterCTA.svelte";
</script>

<svelte:head>
    <title>Cahyadi Prasetyo • Full-Stack Developer</title>
    <meta
        name="description"
        content="Portfolio of Cahyadi Prasetyo — Full-Stack Web Developer building clean, modern, and impactful digital experiences."
    />
</svelte:head>

<Hero />
<AboutPreview />
<FeaturedProjects />
<FAQ />
<FooterCTA />
