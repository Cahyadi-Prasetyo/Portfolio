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

            <div class="hero-tags reveal">
                {#each t.hero.tags as tag}
                    <span class="tag">{tag}</span>
                {/each}
            </div>
        </div>

        <div class="hero-visual reveal-right">
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

    .hero-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
    }

    /* Photo */
    .photo-wrapper {
        position: relative;
    }

    .photo-wrapper img {
        width: 100%;
        max-width: 420px;
        border-radius: var(--radius-2xl);
        object-fit: cover;
        aspect-ratio: 3/4;
        border: 1px solid var(--color-border);
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
            display: flex;
            justify-content: center;
        }

        .photo-wrapper img {
            max-width: 280px;
        }

        .hero-name {
            font-size: clamp(2.5rem, 10vw, 4rem);
        }

        .hero-actions {
            flex-direction: column;
            align-items: flex-start;
        }
    }
</style>
