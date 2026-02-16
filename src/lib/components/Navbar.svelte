<script lang="ts">
    import { t, currentLang, toggleLanguage } from "$lib/i18n";

    let scrolled = $state(false);
    let mobileOpen = $state(false);

    const navItems = ["home", "about", "projects", "contact"] as const;

    function handleScroll() {
        scrolled = window.scrollY > 20;
    }

    function scrollTo(id: string) {
        mobileOpen = false;
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    }

    $effect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });
</script>

<nav class="navbar" class:scrolled>
    <div class="nav-container container">
        <!-- Logo -->
        <a
            href="/"
            class="nav-logo"
            onclick={(e) => {
                e.preventDefault();
                scrollTo("home");
            }}
        >
            CP<span class="logo-dot">.</span>
        </a>

        <!-- Desktop Nav -->
        <div class="nav-center">
            <ul class="nav-links">
                {#each navItems as item}
                    <li>
                        <button class="nav-link" onclick={() => scrollTo(item)}>
                            {$t.nav[item]}
                        </button>
                    </li>
                {/each}
            </ul>
        </div>

        <!-- Right side: Lang toggle -->
        <div class="nav-right">
            <button class="lang-toggle" onclick={toggleLanguage}>
                <span class="lang-option" class:active={$currentLang === "id"}
                    >ID</span
                >
                <span class="lang-divider">/</span>
                <span class="lang-option" class:active={$currentLang === "en"}
                    >EN</span
                >
            </button>

            <!-- Mobile hamburger -->
            <button
                class="hamburger"
                class:active={mobileOpen}
                onclick={() => (mobileOpen = !mobileOpen)}
                aria-label="Toggle menu"
            >
                <span></span>
                <span></span>
            </button>
        </div>
    </div>

    <!-- Mobile Menu -->
    {#if mobileOpen}
        <div class="mobile-menu">
            <div class="mobile-menu-inner">
                <ul>
                    {#each navItems as item}
                        <li>
                            <button
                                class="mobile-link"
                                onclick={() => scrollTo(item)}
                            >
                                {$t.nav[item]}
                            </button>
                        </li>
                    {/each}
                </ul>
            </div>
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
        background: transparent;
    }

    .navbar.scrolled {
        background: rgba(0, 0, 0, 0.85);
        backdrop-filter: blur(16px);
        -webkit-backdrop-filter: blur(16px);
        border-bottom: 1px solid var(--color-border-dark);
    }

    .nav-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 100%;
    }

    .nav-logo {
        font-family: var(--font-heading);
        font-size: var(--text-xl);
        font-weight: 700;
        color: var(--color-white);
        letter-spacing: -0.03em;
    }

    .logo-dot {
        color: var(--color-accent);
    }

    .nav-center {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }

    .nav-links {
        display: flex;
        gap: var(--space-xs);
        background: rgba(255, 255, 255, 0.06);
        border: 1px solid var(--color-border-dark);
        border-radius: var(--radius-full);
        padding: 4px;
    }

    .nav-link {
        font-size: var(--text-sm);
        font-weight: 450;
        color: var(--color-muted-on-dark);
        padding: 6px 16px;
        border-radius: var(--radius-full);
        transition: all var(--transition-fast);
    }

    .nav-link:hover {
        color: var(--color-white);
        background: rgba(255, 255, 255, 0.08);
    }

    .nav-right {
        display: flex;
        align-items: center;
        gap: var(--space-md);
    }

    .lang-toggle {
        font-size: var(--text-xs);
        font-weight: 600;
        letter-spacing: 0.08em;
        display: flex;
        align-items: center;
        gap: 4px;
        padding: 6px 14px;
        border: 1px solid var(--color-border-dark);
        border-radius: var(--radius-sm);
        transition: all var(--transition-fast);
    }

    .lang-option {
        color: var(--color-muted-on-dark);
        transition: color var(--transition-fast);
    }

    .lang-option.active {
        color: var(--color-white);
    }

    .lang-divider {
        color: var(--color-border-dark);
    }

    .lang-toggle:hover {
        border-color: rgba(255, 255, 255, 0.3);
    }

    /* Hamburger — two lines */
    .hamburger {
        display: none;
        flex-direction: column;
        gap: 6px;
        padding: 8px;
        border: 1px solid var(--color-border-dark);
        border-radius: var(--radius-sm);
    }

    .hamburger span {
        display: block;
        width: 18px;
        height: 1.5px;
        background: var(--color-white);
        transition: all var(--transition-base);
        transform-origin: center;
    }

    .hamburger.active span:nth-child(1) {
        transform: rotate(45deg) translate(2.5px, 2.5px);
    }

    .hamburger.active span:nth-child(2) {
        transform: rotate(-45deg) translate(2.5px, -2.5px);
    }

    /* Mobile Menu */
    .mobile-menu {
        display: none;
        position: absolute;
        top: var(--nav-height);
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.95);
        backdrop-filter: blur(20px);
        border-bottom: 1px solid var(--color-border-dark);
    }

    .mobile-menu-inner {
        padding: var(--space-xl);
    }

    .mobile-menu ul {
        display: flex;
        flex-direction: column;
        gap: var(--space-sm);
    }

    .mobile-link {
        font-size: var(--text-lg);
        font-weight: 500;
        color: var(--color-muted-on-dark);
        padding: var(--space-sm) 0;
        transition: color var(--transition-fast);
        text-align: left;
        width: 100%;
        border-bottom: 1px solid var(--color-border-dark);
    }

    .mobile-link:hover {
        color: var(--color-white);
    }

    @media (max-width: 768px) {
        .nav-center {
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
