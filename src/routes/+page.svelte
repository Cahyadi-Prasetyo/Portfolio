<script lang="ts">
    import { onMount } from "svelte";
    import Hero from "$lib/components/Hero.svelte";
    import About from "$lib/components/About.svelte";
    import Projects from "$lib/components/Projects.svelte";
    import Contact from "$lib/components/Contact.svelte";

    onMount(() => {
        // Scroll reveal animation
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                    }
                });
            },
            { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
        );

        document.querySelectorAll(".reveal").forEach((el) => {
            observer.observe(el);
        });

        return () => observer.disconnect();
    });
</script>

<svelte:head>
    <title>Cahyadi Prasetyo — Full-Stack Developer</title>
    <meta
        name="description"
        content="Portfolio of Cahyadi Prasetyo — Full-Stack Developer building clean, modern, & impactful digital experiences."
    />
</svelte:head>

<Hero />
<About />
<Projects />
<Contact />
