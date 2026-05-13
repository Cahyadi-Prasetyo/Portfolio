<script lang="ts">
    import { page } from "$app/stores";
    import { getTranslations, getCurrentLang, toggleLanguage } from "$lib/i18n/index.svelte";

    const t = $derived(getTranslations());
    const currentLang = $derived(getCurrentLang());

    let scrolled = $state(false);
    let mobileOpen = $state(false);

    function handleScroll() {
        scrolled = window.scrollY > 20;
    }

    const navLinks = $derived([
        { href: "/", label: t.nav.home },
        { href: "/projects", label: t.nav.projects },
        { href: "/about", label: t.nav.about },
        { href: "/contact", label: t.nav.contact },
    ]);
</script>

<svelte:window onscroll={handleScroll} />

<nav class="nav" class:scrolled>
    <div class="container nav-inner">
        <a href="/" class="nav-logo">
            <!-- <span class="logo-mark">▲</span> -->
            <span class="logo-text">CP</span>
        </a>

        <div class="nav-center">
            {#each navLinks as link}
                <a href={link.href} class="nav-link" class:active={$page.url.pathname === link.href}>
                    {link.label}
                </a>
            {/each}
        </div>

        <div class="nav-right">
            <!-- <a href="/contact" class="nav-cta">
                {t.nav.contact}
            </a> -->
        </div>

        <!-- Mobile hamburger -->
        <button class="mobile-toggle" onclick={() => mobileOpen = !mobileOpen} aria-label="Menu">
            <span class="hamburger" class:open={mobileOpen}></span>
        </button>
    </div>
</nav>

<!-- Mobile overlay -->
{#if mobileOpen}
    <div class="mobile-overlay" role="dialog">
        <div class="mobile-menu">
            {#each navLinks as link}
                <a href={link.href} class="mobile-link" onclick={() => mobileOpen = false}
                   class:active={$page.url.pathname === link.href}>
                    {link.label}
                </a>
            {/each}
            <a href="/contact" class="btn btn-primary mobile-cta" onclick={() => mobileOpen = false}>
                {t.nav.contact}
            </a>
        </div>
    </div>
{/if}

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
        background: rgba(250, 250, 250, 0.8);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        transition: border-color var(--transition-base);
        border-bottom: 1px solid transparent;
    }

    .nav.scrolled {
        border-bottom-color: var(--color-hairline);
    }

    .nav-inner {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }

    /* Logo — Vercel triangle + monogram */
    .nav-logo {
        display: flex;
        align-items: center;
        gap: 6px;
        text-decoration: none;
    }

    .logo-mark {
        font-size: 18px;
        color: var(--color-ink);
        line-height: 1;
    }

    .logo-text {
        font-size: var(--body-sm);
        font-weight: 600;
        color: var(--color-ink);
        letter-spacing: -0.28px;
    }

    /* Center nav links */
    .nav-center {
        display: flex;
        gap: var(--space-xs);
    }

    .nav-link {
        font-size: var(--body-sm);
        font-weight: 400;
        color: var(--color-body);
        padding: var(--space-xs) var(--space-sm);
        border-radius: var(--radius-full);
        transition: color var(--transition-fast), background var(--transition-fast);
        letter-spacing: -0.28px;
    }

    .nav-link:hover {
        color: var(--color-ink);
        background: var(--color-canvas-soft-2);
    }

    .nav-link.active {
        color: var(--color-ink);
        font-weight: 500;
    }

    /* Right CTA — nav-cta-signup style */
    .nav-right {
        display: flex;
        align-items: center;
    }

    .nav-cta {
        font-size: var(--body-sm);
        font-weight: 500;
        color: var(--color-on-primary);
        background: var(--color-ink);
        padding: 0 var(--space-xs);
        height: 28px;
        display: inline-flex;
        align-items: center;
        border-radius: var(--radius-sm);
        letter-spacing: -0.28px;
        transition: background var(--transition-fast);
    }

    .nav-cta:hover {
        background: #2b2b2b;
    }

    /* Mobile toggle */
    .mobile-toggle {
        display: none;
        background: none;
        border: none;
        padding: var(--space-xs);
        cursor: pointer;
    }

    .hamburger {
        display: block;
        width: 18px;
        height: 2px;
        background: var(--color-ink);
        position: relative;
        transition: background var(--transition-fast);
    }

    .hamburger::before,
    .hamburger::after {
        content: '';
        position: absolute;
        left: 0;
        width: 18px;
        height: 2px;
        background: var(--color-ink);
        transition: transform var(--transition-fast);
    }

    .hamburger::before { top: -6px; }
    .hamburger::after { top: 6px; }

    .hamburger.open {
        background: transparent;
    }

    .hamburger.open::before {
        transform: translateY(6px) rotate(45deg);
    }

    .hamburger.open::after {
        transform: translateY(-6px) rotate(-45deg);
    }

    /* Mobile overlay */
    .mobile-overlay {
        position: fixed;
        inset: 0;
        z-index: 99;
        background: var(--color-canvas);
        padding-top: var(--nav-height);
    }

    .mobile-menu {
        display: flex;
        flex-direction: column;
        padding: var(--space-xl) var(--space-lg);
        gap: var(--space-xxs);
    }

    .mobile-link {
        font-size: var(--body-lg);
        font-weight: 400;
        color: var(--color-body);
        padding: var(--space-sm) 0;
        border-bottom: 1px solid var(--color-hairline);
        transition: color var(--transition-fast);
    }

    .mobile-link:hover,
    .mobile-link.active {
        color: var(--color-ink);
    }

    .mobile-cta {
        margin-top: var(--space-lg);
        width: 100%;
        justify-content: center;
    }

    @media (max-width: 600px) {
        .nav-center,
        .nav-right {
            display: none;
        }

        .mobile-toggle {
            display: block;
        }
    }
</style>
