<script lang="ts">
    import { onMount } from "svelte";
    import { page } from "$app/stores";
    import { getTranslations, getCurrentLang, toggleLanguage, initLang } from "$lib/i18n/index.svelte";
    import { getTheme, toggleTheme, initTheme } from "$lib/theme.svelte";

    const t = $derived(getTranslations());
    const currentLang = $derived(getCurrentLang());
    const currentTheme = $derived(getTheme());

    let scrolled = $state(false);
    let mobileOpen = $state(false);
    let mobileMenuRef: HTMLDivElement | undefined = $state();

    $effect(() => {
        if (mobileOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    });

    onMount(() => {
        initLang();
        initTheme();
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && mobileOpen) mobileOpen = false;
        };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    });

    function handleScroll() {
        scrolled = window.scrollY > 20;
    }

    function closeMobile() {
        mobileOpen = false;
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
                <a href={link.href} class="nav-link" class:active={$page.url.pathname === link.href} aria-current={$page.url.pathname === link.href ? 'page' : undefined}>
                    {link.label}
                </a>
            {/each}
        </div>

        <div class="nav-right">
            <button class="nav-icon-btn" onclick={toggleTheme} aria-label="Toggle theme">
                {#if currentTheme === 'dark'}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
                {:else}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
                {/if}
            </button>
            <button class="nav-lang-btn" onclick={toggleLanguage}>
                {currentLang.toUpperCase()}
            </button>
        </div>

        <!-- Mobile hamburger -->
        <button class="mobile-toggle" onclick={() => mobileOpen = !mobileOpen} aria-label={mobileOpen ? 'Close menu' : 'Open menu'} aria-expanded={mobileOpen}>
            <span class="hamburger" class:open={mobileOpen} aria-hidden="true"></span>
        </button>
    </div>
</nav>

<!-- Mobile overlay -->
{#if mobileOpen}
    <div class="mobile-overlay" role="dialog" aria-modal="true" aria-label="Navigation menu" tabindex="-1" bind:this={mobileMenuRef} onclick={(e) => { if (e.target === e.currentTarget) closeMobile(); }}>
        <div class="mobile-menu">
            {#each navLinks as link}
                <a href={link.href} class="mobile-link" onclick={closeMobile}
                   class:active={$page.url.pathname === link.href}
                   aria-current={$page.url.pathname === link.href ? 'page' : undefined}>
                    {link.label}
                </a>
            {/each}

            <div class="mobile-toggles">
                <button class="mobile-link toggle-btn theme-toggle" onclick={toggleTheme} aria-label={currentTheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}>
                    {#if currentTheme === 'dark'}
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
                    {:else}
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
                    {/if}
                </button>
                <button class="mobile-link toggle-btn lang-toggle" onclick={toggleLanguage} aria-label="Toggle language">
                    <span class="lang-label" class:active={currentLang === 'id'}>ID</span>
                    <span class="lang-divider">/</span>
                    <span class="lang-label" class:active={currentLang === 'en'}>EN</span>
                </button>
            </div>
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
        background: var(--color-nav-bg);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        transition: border-color var(--transition-base), background var(--transition-base);
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
        padding: var(--space-md) 0;
        border-bottom: 1px solid var(--color-hairline);
        transition: color var(--transition-fast);
        display: block;
        width: 100%;
    }

    .mobile-link:hover,
    .mobile-link.active {
        color: var(--color-ink);
    }


    /* Right — toggle buttons */
    .nav-right {
        display: flex;
        align-items: center;
        gap: var(--space-xs);
    }

    .nav-icon-btn, .nav-lang-btn {
        background: transparent;
        border: none;
        color: var(--color-mute);
        display: flex;
        align-items: center;
        justify-content: center;
        height: 32px;
        min-width: 32px;
        border-radius: var(--radius-sm);
        transition: color var(--transition-fast), background var(--transition-fast);
        cursor: pointer;
    }

    .nav-lang-btn {
        font-family: var(--font-mono);
        font-size: 12px;
        font-weight: 600;
        padding: 0 var(--space-xs);
    }

    .nav-icon-btn:hover, .nav-lang-btn:hover {
        color: var(--color-ink);
        background: var(--color-canvas-soft-2);
    }

    .mobile-toggles {
        display: flex;
        flex-direction: row;
        gap: var(--space-xs);
        border-top: 1px solid var(--color-hairline);
        margin-top: var(--space-md);
        padding-top: var(--space-md);
    }

    .toggle-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 44px;
        height: 44px;
        background: var(--color-canvas-soft-2);
        border: 1px solid var(--color-hairline);
        border-radius: var(--radius-sm);
        cursor: pointer;
        color: var(--color-body);
        transition: all var(--transition-fast);
        flex-shrink: 0;
    }

    .toggle-btn:hover,
    .toggle-btn:focus-visible {
        color: var(--color-ink);
        border-color: var(--color-mute);
        background: var(--color-canvas);
    }

    .toggle-btn:active {
        transform: scale(0.95);
    }

    .lang-toggle {
        width: auto;
        padding: 0 var(--space-sm);
        gap: 2px;
        font-family: var(--font-mono);
        font-size: 12px;
        font-weight: 600;
        letter-spacing: 0.5px;
    }

    .lang-label {
        color: var(--color-mute);
        transition: color var(--transition-fast);
    }

    .lang-label.active {
        color: var(--color-ink);
    }

    .lang-divider {
        color: var(--color-hairline);
        font-weight: 400;
    }

    /* Media query MUST be last to properly override */
    @media (max-width: 768px) {
        .nav-center,
        .nav-right {
            display: none !important;
        }

        .mobile-toggle {
            display: flex;
            align-items: center;
            justify-content: center;
            min-width: 44px;
            min-height: 44px;
            padding: var(--space-xs);
        }

        .mobile-menu {
            padding: var(--space-lg);
        }
    }
</style>
