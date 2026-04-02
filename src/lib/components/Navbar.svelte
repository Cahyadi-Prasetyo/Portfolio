<script lang="ts">
    import { page } from "$app/stores";
    import { getTranslations, getCurrentLang, toggleLanguage } from "$lib/i18n/index.svelte";

    const t = $derived(getTranslations());
    const currentLang = $derived(getCurrentLang());

    let scrolled = $state(false);

    function handleScroll() {
        scrolled = window.scrollY > 20;
    }

    const navLinks = $derived([
        { href: "/", label: t.nav.home },
        { href: "/about", label: t.nav.about },
        { href: "/projects", label: t.nav.projects },
        { href: "/contact", label: t.nav.contact },
    ]);
</script>

<svelte:window onscroll={handleScroll} />

<nav class="nav" class:scrolled>
    <div class="container-wide nav-inner">
        <a href="/" class="nav-logo">CP</a>
        <div class="nav-center">
            {#each navLinks as link}
                <a href={link.href} class="nav-link" class:active={$page.url.pathname === link.href}>
                    {link.label}
                </a>
            {/each}
        </div>
        <button class="lang-toggle" onclick={() => toggleLanguage()}>
            {currentLang === "id" ? "EN" : "ID"}
        </button>
    </div>
</nav>

<style>
    .nav {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 100;
        height: var(--nav-height);
        display: flex;
        align-items: center;
        background: rgba(255, 255, 255, 0.9);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        transition: border-color var(--transition-base);
        border-bottom: 1px solid transparent;
    }

    .nav.scrolled {
        border-bottom-color: var(--border);
    }

    .nav-inner {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }

    .nav-logo {
        font-size: var(--text-base);
        font-weight: 800;
        color: var(--text);
        letter-spacing: -0.04em;
    }

    .nav-center {
        display: flex;
        gap: var(--space-xl);
    }

    .nav-link {
        font-size: var(--text-sm);
        font-weight: 500;
        color: var(--text-muted);
        transition: color var(--transition-fast);
    }

    .nav-link:hover,
    .nav-link.active {
        color: var(--text);
    }

    .lang-toggle {
        font-size: var(--text-xs);
        font-weight: 600;
        padding: 6px 14px;
        border: 1px solid var(--border);
        border-radius: var(--radius-full);
        background: transparent;
        color: var(--text-secondary);
        transition: all var(--transition-fast);
    }

    .lang-toggle:hover {
        border-color: var(--text);
        color: var(--text);
    }

    @media (max-width: 640px) {
        .nav-center {
            gap: var(--space-md);
        }

        .nav-link {
            font-size: var(--text-xs);
        }
    }
</style>
