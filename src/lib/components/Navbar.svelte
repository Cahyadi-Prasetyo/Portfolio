<script lang="ts">
    import { page } from "$app/state";
    import {
        getTranslations,
        getCurrentLang,
        toggleLanguage,
    } from "$lib/i18n/index.svelte";

    let mobileOpen = $state(false);
    let scrolled = $state(false);

    const t = $derived(getTranslations());
    const currentLang = $derived(getCurrentLang());

    const navItems = [
        { key: "home" as const, href: "/" },
        { key: "about" as const, href: "/about" },
        { key: "projects" as const, href: "/projects" },
        { key: "contact" as const, href: "/contact" },
    ];

    function handleScroll() {
        scrolled = window.scrollY > 20;
    }

    function closeMobile() {
        mobileOpen = false;
    }

    $effect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    });
</script>

<nav class="navbar" class:scrolled>
    <div class="nav-inner container">
        <a href="/" class="logo">
            <span class="logo-mark">CP</span>
        </a>

        <ul class="nav-links">
            {#each navItems as item}
                {@const isActive =
                    page.url.pathname === item.href ||
                    (item.href !== "/" &&
                        page.url.pathname.startsWith(item.href))}
                <li>
                    <a
                        href={item.href}
                        class="nav-link"
                        class:active={isActive}
                    >
                        {t.nav[item.key]}
                    </a>
                </li>
            {/each}
        </ul>

        <div class="nav-right">
            <button class="lang-btn" onclick={toggleLanguage}>
                <span class="lang-opt" class:active={currentLang === "id"}
                    >ID</span
                >
                <span class="lang-sep">/</span>
                <span class="lang-opt" class:active={currentLang === "en"}
                    >EN</span
                >
            </button>

            <button
                class="hamburger"
                class:open={mobileOpen}
                onclick={() => (mobileOpen = !mobileOpen)}
                aria-label="Menu"
            >
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </button>
        </div>
    </div>

    {#if mobileOpen}
        <div class="mobile-menu">
            <ul>
                {#each navItems as item}
                    {@const isActive =
                        page.url.pathname === item.href ||
                        (item.href !== "/" &&
                            page.url.pathname.startsWith(item.href))}
                    <li>
                        <a
                            href={item.href}
                            class="mobile-link"
                            class:active={isActive}
                            onclick={closeMobile}
                        >
                            {t.nav[item.key]}
                        </a>
                    </li>
                {/each}
            </ul>
        </div>
    {/if}
</nav>

<style>
    .navbar {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1000;
        height: var(--nav-height);
        display: flex;
        align-items: center;
        transition: all var(--transition-base);
    }

    .navbar.scrolled {
        background: rgba(250, 250, 250, 0.8);
        backdrop-filter: blur(16px) saturate(1.5);
        -webkit-backdrop-filter: blur(16px) saturate(1.5);
        border-bottom: 1px solid var(--color-border-light);
    }

    .nav-inner {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }

    .logo {
        font-family: var(--font-heading);
        font-size: var(--text-lg);
        font-weight: 800;
        color: var(--color-text);
        letter-spacing: -0.04em;
    }

    .nav-links {
        display: flex;
        gap: 2px;
        background: var(--color-white);
        border: 1px solid var(--color-border);
        border-radius: var(--radius-full);
        padding: 4px;
    }

    .nav-link {
        font-size: var(--text-sm);
        font-weight: 500;
        color: var(--color-text-secondary);
        padding: 8px 18px;
        border-radius: var(--radius-full);
        transition: all var(--transition-base);
    }

    .nav-link:hover {
        color: var(--color-text);
    }

    .nav-link.active {
        color: var(--color-white);
        background: var(--color-text);
    }

    .nav-right {
        display: flex;
        align-items: center;
        gap: var(--space-md);
    }

    .lang-btn {
        font-size: var(--text-xs);
        font-weight: 600;
        letter-spacing: 0.05em;
        display: flex;
        align-items: center;
        gap: 4px;
        padding: 8px 14px;
        border: 1px solid var(--color-border);
        border-radius: var(--radius-full);
        background: var(--color-white);
        transition: all var(--transition-fast);
    }

    .lang-btn:hover {
        border-color: var(--color-text);
    }

    .lang-opt {
        color: var(--color-text-muted);
        transition: color var(--transition-fast);
    }

    .lang-opt.active {
        color: var(--color-text);
    }

    .lang-sep {
        color: var(--color-border);
    }

    .hamburger {
        display: none;
        flex-direction: column;
        justify-content: center;
        gap: 5px;
        width: 36px;
        height: 36px;
        padding: 6px;
    }

    .bar {
        display: block;
        width: 100%;
        height: 2px;
        background: var(--color-text);
        border-radius: 2px;
        transition: all var(--transition-base);
        transform-origin: center;
    }

    .hamburger.open .bar:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }
    .hamburger.open .bar:nth-child(2) {
        opacity: 0;
    }
    .hamburger.open .bar:nth-child(3) {
        transform: rotate(-45deg) translate(5px, -5px);
    }

    .mobile-menu {
        display: none;
        position: absolute;
        top: var(--nav-height);
        left: 0;
        right: 0;
        background: rgba(250, 250, 250, 0.95);
        backdrop-filter: blur(16px);
        border-bottom: 1px solid var(--color-border);
        padding: var(--space-lg) var(--space-xl);
    }

    .mobile-menu ul {
        display: flex;
        flex-direction: column;
        gap: var(--space-xs);
    }

    .mobile-link {
        display: block;
        font-size: var(--text-base);
        font-weight: 500;
        color: var(--color-text-secondary);
        padding: var(--space-md) 0;
        border-bottom: 1px solid var(--color-border-light);
        transition: color var(--transition-fast);
    }

    .mobile-link:hover,
    .mobile-link.active {
        color: var(--color-text);
    }

    @media (max-width: 768px) {
        .nav-links {
            display: none;
        }
        .hamburger {
            display: flex;
        }
        .mobile-menu {
            display: block;
        }
    }
</style>
