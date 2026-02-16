<script lang="ts">
    import { t } from "$lib/i18n";

    function scrollTo(id: string) {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    }
</script>

<section id="home" class="hero">
    <div class="container hero-content">
        <p class="hero-greeting reveal">{$t.hero.greeting}</p>
        <h1 class="hero-name reveal">{$t.hero.name}</h1>
        <p class="hero-role reveal">{$t.hero.role}</p>
        <p class="hero-tagline reveal">{$t.hero.tagline}</p>

        <div class="hero-actions reveal">
            <button
                class="btn btn-primary"
                onclick={() => scrollTo("projects")}
            >
                {$t.hero.cta}
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    ><line x1="5" y1="12" x2="19" y2="12" /><polyline
                        points="12 5 19 12 12 19"
                    /></svg
                >
            </button>
            <button class="btn btn-outline" onclick={() => scrollTo("contact")}>
                {$t.hero.contact}
            </button>
        </div>

        <!-- Scroll indicator -->
        <div class="scroll-indicator">
            <div class="scroll-line"></div>
        </div>
    </div>
</section>

<style>
    .hero {
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
    }

    .hero-content {
        text-align: center;
        padding-top: var(--nav-height);
    }

    .hero-greeting {
        font-size: var(--text-lg);
        color: var(--color-text-muted);
        margin-bottom: var(--space-sm);
        font-weight: 400;
    }

    .hero-name {
        font-size: var(--text-hero);
        font-weight: 700;
        letter-spacing: -0.04em;
        margin-bottom: var(--space-sm);
        background: linear-gradient(
            135deg,
            var(--color-text) 0%,
            var(--color-text-muted) 100%
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }

    .hero-role {
        font-family: var(--font-heading);
        font-size: var(--text-xl);
        font-weight: 500;
        color: var(--color-accent);
        margin-bottom: var(--space-lg);
    }

    .hero-tagline {
        font-size: var(--text-lg);
        color: var(--color-text-muted);
        max-width: 520px;
        margin: 0 auto var(--space-2xl);
        line-height: 1.8;
    }

    .hero-actions {
        display: flex;
        gap: var(--space-md);
        justify-content: center;
        flex-wrap: wrap;
    }

    /* Scroll Indicator */
    .scroll-indicator {
        position: absolute;
        bottom: 40px;
        left: 50%;
        transform: translateX(-50%);
    }

    .scroll-line {
        width: 1px;
        height: 48px;
        background: linear-gradient(
            to bottom,
            var(--color-border),
            transparent
        );
        position: relative;
        overflow: hidden;
    }

    .scroll-line::after {
        content: "";
        position: absolute;
        top: -48px;
        left: 0;
        width: 100%;
        height: 48px;
        background: var(--color-accent);
        animation: scrollDown 2s ease-in-out infinite;
    }

    @keyframes scrollDown {
        0% {
            transform: translateY(0);
        }
        100% {
            transform: translateY(96px);
        }
    }

    @media (max-width: 768px) {
        .hero-tagline {
            font-size: var(--text-base);
        }

        .scroll-indicator {
            bottom: 24px;
        }
    }
</style>
