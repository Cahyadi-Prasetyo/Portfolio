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
        <ul class="nav-links">
            {#each navItems as item}
                <li>
                    <button class="nav-link" onclick={() => scrollTo(item)}>
                        {$t.nav[item]}
                    </button>
                </li>
            {/each}
        </ul>

        <!-- Right side: Lang toggle -->
        <div class="nav-right">
            <button class="lang-toggle" onclick={toggleLanguage}>
                {$currentLang === "id" ? "EN" : "ID"}
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
                <span></span>
            </button>
        </div>
    </div>

    <!-- Mobile Menu -->
    {#if mobileOpen}
        <div class="mobile-menu">
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
        background: rgba(255, 255, 255, 0.92);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        border-bottom: 1px solid var(--color-border-light);
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
        color: var(--color-text);
        letter-spacing: -0.03em;
    }

    .nav-logo:hover {
        color: var(--color-text);
    }

    .logo-dot {
        color: var(--color-accent);
    }

    .nav-links {
        display: flex;
        gap: var(--space-xl);
    }

    .nav-link {
        font-size: var(--text-sm);
        font-weight: 450;
        color: var(--color-text-muted);
        transition: color var(--transition-fast);
        padding: var(--space-xs) 0;
        position: relative;
    }

    .nav-link::after {
        content: "";
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 0;
        height: 1.5px;
        background: var(--color-accent);
        transition: width var(--transition-base);
    }

    .nav-link:hover {
        color: var(--color-text);
    }

    .nav-link:hover::after {
        width: 100%;
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
        color: var(--color-text-muted);
        padding: 6px 14px;
        border: 1.5px solid var(--color-border);
        border-radius: var(--radius-full);
        transition: all var(--transition-fast);
    }

    .lang-toggle:hover {
        color: var(--color-text);
        border-color: var(--color-text);
    }

    /* Hamburger */
    .hamburger {
        display: none;
        flex-direction: column;
        gap: 5px;
        padding: 4px;
    }

    .hamburger span {
        display: block;
        width: 22px;
        height: 2px;
        background: var(--color-text);
        border-radius: 2px;
        transition: all var(--transition-base);
        transform-origin: center;
    }

    .hamburger.active span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }

    .hamburger.active span:nth-child(2) {
        opacity: 0;
    }

    .hamburger.active span:nth-child(3) {
        transform: rotate(-45deg) translate(5px, -5px);
    }

    /* Mobile Menu */
    .mobile-menu {
        display: none;
        position: absolute;
        top: var(--nav-height);
        left: 0;
        right: 0;
        background: rgba(255, 255, 255, 0.98);
        backdrop-filter: blur(16px);
        border-bottom: 1px solid var(--color-border-light);
        padding: var(--space-lg) 0;
    }

    .mobile-menu ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--space-sm);
    }

    .mobile-link {
        font-size: var(--text-lg);
        font-weight: 450;
        color: var(--color-text-muted);
        padding: var(--space-sm) var(--space-xl);
        transition: color var(--transition-fast);
    }

    .mobile-link:hover {
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
