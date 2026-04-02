<script lang="ts">
    import { onMount } from "svelte";
    import { afterNavigate } from "$app/navigation";
    import Navbar from "$lib/components/Navbar.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import "../app.css";

    let { children } = $props();

    let observer: IntersectionObserver;

    function observeRevealElements() {
        document.querySelectorAll(".reveal:not(.visible)").forEach((el) => {
            observer.observe(el);
        });
    }

    onMount(() => {
        observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                    }
                });
            },
            { threshold: 0.05, rootMargin: "0px 0px -20px 0px" }
        );

        observeRevealElements();

        return () => observer.disconnect();
    });

    afterNavigate(() => {
        // Small delay to let new page DOM render
        setTimeout(observeRevealElements, 50);
        // Scroll to top on navigation
        window.scrollTo(0, 0);
    });
</script>

<Navbar />
<main>
    {@render children()}
</main>
<Footer />
