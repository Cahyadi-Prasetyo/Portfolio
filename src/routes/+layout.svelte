<script lang="ts">
    import { onMount } from "svelte";
    import { afterNavigate } from "$app/navigation";
    import { getCurrentLang } from "$lib/i18n/index.svelte";
    import { getTranslations } from "$lib/i18n/index.svelte";
    import Navbar from "$lib/components/Navbar.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import "../app.css";

    const t = $derived(getTranslations());
    let { children } = $props();

    let observer: IntersectionObserver;
    let showBackToTop = $state(false);

    function updateLang() {
        const lang = getCurrentLang();
        document.documentElement.lang = lang;
        document.documentElement.setAttribute('data-lang', lang);
    }

    function observeRevealElements() {
        document.querySelectorAll(".reveal:not(.visible)").forEach((el) => {
            observer.observe(el);
        });
    }

    function handleScroll() {
        showBackToTop = window.scrollY > 300;
    }

    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    $effect(() => {
        getCurrentLang();
        updateLang();
    });

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
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            observer.disconnect();
            window.removeEventListener('scroll', handleScroll);
        };
    });

    afterNavigate(() => {
        setTimeout(observeRevealElements, 50);
        window.scrollTo({ top: 0, behavior: 'instant' });
    });
</script>

<a href="#main-content" class="skip-link">Skip to content</a>
<Navbar />
<main id="main-content">
    {@render children()}
</main>
<Footer />

{#if showBackToTop}
<button class="back-to-top" onclick={scrollToTop} aria-label={t.footer.backToTop}>
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m18 15-6-6-6 6"/></svg>
</button>
{/if}

<style>
    .back-to-top {
        position: fixed;
        bottom: var(--space-xl);
        right: var(--space-lg);
        z-index: 90;
        width: 44px;
        height: 44px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--color-canvas);
        border: 1px solid var(--color-hairline);
        border-radius: 50%;
        box-shadow: var(--shadow-level-3);
        color: var(--color-ink);
        cursor: pointer;
        transition: all var(--transition-fast);
        animation: slideUp 0.3s ease both;
    }

    .back-to-top:hover {
        transform: translateY(-2px);
        box-shadow: var(--shadow-level-4);
    }

    .back-to-top:active {
        transform: translateY(0);
    }

    @keyframes slideUp {
        from {
            opacity: 0;
            transform: translateY(16px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @media (max-width: 768px) {
        .back-to-top {
            bottom: var(--space-lg);
            right: var(--space-md);
        }
    }
</style>
