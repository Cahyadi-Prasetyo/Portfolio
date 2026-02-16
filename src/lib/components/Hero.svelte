<script lang="ts">
    import { getTranslations } from "$lib/i18n/index.svelte";

    const t = $derived(getTranslations());
</script>

<section class="hero">
    <div class="container hero-inner">
        <div class="hero-photo">
            <img src="/my-self.png" alt="Cahyadi Prasetyo" />
        </div>
        <div class="hero-text">
            <p class="hero-greeting">{t.hero.greeting}</p>
            <h1 class="hero-name">{t.hero.name}</h1>
            <p class="hero-role">{t.hero.role}</p>
            <p class="hero-bio">{t.hero.bio}</p>

            <div class="hero-tags">
                {#each t.hero.tags as tag}
                    <span class="tag">{tag}</span>
                {/each}
            </div>

            <div class="hero-actions">
                <a href="/contact" class="btn btn-primary">
                    {t.hero.cta}
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        ><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg
                    >
                </a>
                <div class="hero-socials">
                    <a
                        href="https://github.com/"
                        target="_blank"
                        rel="noopener"
                        aria-label="GitHub"
                    >
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            ><path
                                d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                            /></svg
                        >
                    </a>
                    <a
                        href="https://linkedin.com/"
                        target="_blank"
                        rel="noopener"
                        aria-label="LinkedIn"
                    >
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            ><path
                                d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                            /><rect x="2" y="9" width="4" height="12" /><circle
                                cx="4"
                                cy="4"
                                r="2"
                            /></svg
                        >
                    </a>
                    <a
                        href="https://instagram.com/"
                        target="_blank"
                        rel="noopener"
                        aria-label="Instagram"
                    >
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            ><rect
                                x="2"
                                y="2"
                                width="20"
                                height="20"
                                rx="5"
                                ry="5"
                            /><path
                                d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
                            /><line
                                x1="17.5"
                                y1="6.5"
                                x2="17.51"
                                y2="6.5"
                            /></svg
                        >
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    .hero {
        padding-top: calc(var(--nav-height) + var(--space-4xl));
        padding-bottom: var(--space-5xl);
    }

    .hero-inner {
        display: grid;
        grid-template-columns: auto 1fr;
        gap: var(--space-4xl);
        align-items: center;
    }

    .hero-photo img {
        width: 280px;
        border-radius: var(--radius-xl);
        box-shadow: var(--shadow-lg);
        object-fit: cover;
        aspect-ratio: 3/4;
    }

    .hero-greeting {
        font-size: var(--text-sm);
        font-weight: 500;
        color: var(--color-accent);
        letter-spacing: 0.05em;
        text-transform: uppercase;
        margin-bottom: var(--space-sm);
    }

    .hero-name {
        font-size: clamp(2.5rem, 5vw, 3.5rem);
        line-height: 1.1;
        margin-bottom: var(--space-sm);
    }

    .hero-role {
        font-size: var(--text-xl);
        color: var(--color-text-muted);
        margin-bottom: var(--space-lg);
    }

    .hero-bio {
        font-size: var(--text-base);
        color: var(--color-text-muted);
        line-height: 1.8;
        max-width: 500px;
        margin-bottom: var(--space-xl);
    }

    .hero-tags {
        display: flex;
        flex-wrap: wrap;
        gap: var(--space-sm);
        margin-bottom: var(--space-xl);
    }

    .hero-actions {
        display: flex;
        align-items: center;
        gap: var(--space-xl);
    }

    .hero-socials {
        display: flex;
        gap: var(--space-md);
    }

    .hero-socials a {
        color: var(--color-text-light);
        transition: color var(--transition-fast);
    }

    .hero-socials a:hover {
        color: var(--color-accent);
    }

    @media (max-width: 768px) {
        .hero-inner {
            grid-template-columns: 1fr;
            text-align: center;
        }

        .hero-photo {
            display: flex;
            justify-content: center;
        }

        .hero-photo img {
            width: 200px;
        }

        .hero-tags {
            justify-content: center;
        }

        .hero-actions {
            flex-direction: column;
        }
    }
</style>
