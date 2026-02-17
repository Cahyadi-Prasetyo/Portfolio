<script lang="ts">
    import { getTranslations } from "$lib/i18n/index.svelte";

    const t = $derived(getTranslations());
</script>

<section class="hero">
    <div class="container hero-inner">
        <div class="hero-content">
            <p class="hero-greeting reveal">{t.hero.greeting}</p>
            <h1 class="hero-name reveal">
                {t.hero.name.split(" ")[0]}<br />
                <span class="hero-name-last"
                    >{t.hero.name.split(" ").slice(1).join(" ")}</span
                >
            </h1>
            <p class="hero-role reveal">{t.hero.role}</p>
            <p class="hero-bio reveal">{t.hero.bio}</p>

            <div class="hero-actions reveal">
                <a href="/contact" class="btn btn-primary">
                    {t.hero.cta}
                    <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        ><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg
                    >
                </a>
                <a
                    href="mailto:hello@cahyadiprasetyo.com"
                    class="btn btn-outline"
                >
                    hello@cahyadiprasetyo.com
                </a>
            </div>
        </div>

        <div class="hero-visual reveal-right">
            <div class="photo-glow"></div>
            <div class="photo-ring"></div>
            <div class="photo-wrapper">
                <img src="/my-self.png" alt="Cahyadi Prasetyo" />
            </div>
        </div>
    </div>
</section>

<style>
    .hero {
        padding-top: calc(var(--nav-height) + var(--space-5xl));
        padding-bottom: var(--space-5xl);
        position: relative;
    }

    .hero-inner {
        display: grid;
        grid-template-columns: 1.2fr 0.8fr;
        gap: var(--space-3xl);
        align-items: center;
    }

    .hero-greeting {
        font-family: var(--font-mono);
        font-size: var(--text-sm);
        font-weight: 500;
        color: var(--color-text-muted);
        letter-spacing: 0.1em;
        text-transform: uppercase;
        margin-bottom: var(--space-lg);
    }

    .hero-name {
        font-size: clamp(3rem, 7vw, var(--text-7xl));
        font-weight: 800;
        line-height: 0.95;
        letter-spacing: -0.05em;
        margin-bottom: var(--space-xl);
    }

    .hero-name-last {
        color: var(--color-text-secondary);
    }

    .hero-role {
        font-size: var(--text-lg);
        font-weight: 500;
        color: var(--color-text-secondary);
        margin-bottom: var(--space-md);
    }

    .hero-bio {
        font-size: var(--text-base);
        color: var(--color-text-muted);
        line-height: 1.7;
        max-width: 460px;
        margin-bottom: var(--space-2xl);
    }

    .hero-actions {
        display: flex;
        align-items: center;
        gap: var(--space-md);
        margin-bottom: var(--space-2xl);
    }

    /* Premium Photo Styling */
    .hero-visual {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .photo-wrapper {
        position: relative;
        z-index: 2;
        border-radius: var(--radius-2xl);
        overflow: hidden;
        border: 1px solid var(--color-white);
        box-shadow: var(--shadow-xl);
    }

    .photo-wrapper img {
        width: 100%;
        max-width: 400px;
        display: block;
        object-fit: cover;
        aspect-ratio: 3/4;
        transition: transform var(--transition-slow);
    }

    .photo-wrapper:hover img {
        transform: scale(1.03);
    }

    /* Animated Ring */
    .photo-ring {
        position: absolute;
        width: 110%;
        height: 105%;
        border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
        border: 1px solid var(--color-border);
        z-index: 1;
        animation: spin-slow 20s linear infinite;
    }

    .photo-ring::before {
        content: "";
        position: absolute;
        inset: -10px;
        border-radius: inherit;
        border: 1px solid var(--color-accent-light);
        opacity: 0.3;
        animation: spin-slow 25s linear infinite reverse;
    }

    /* Back Glow */
    .photo-glow {
        position: absolute;
        width: 80%;
        height: 80%;
        background: radial-gradient(
            circle,
            var(--color-accent-light) 0%,
            transparent 70%
        );
        filter: blur(60px);
        opacity: 0.2;
        z-index: 0;
        top: 10%;
        right: 10%;
    }

    @keyframes spin-slow {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    @media (max-width: 768px) {
        .hero {
            padding-top: calc(var(--nav-height) + var(--space-2xl));
            padding-bottom: var(--space-3xl);
        }

        .hero-inner {
            grid-template-columns: 1fr;
        }

        .hero-visual {
            order: -1;
            margin-bottom: var(--space-xl);
        }

        .photo-wrapper img {
            max-width: 280px;
        }
    }
</style>
