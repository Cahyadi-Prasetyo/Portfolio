<script lang="ts">
    import { getTranslations } from "$lib/i18n/index.svelte";
    const t = $derived(getTranslations());
</script>

<section class="about-preview">
    <div class="container">
        <hr class="section-divider" />
        <div class="preview-layout">
            <div class="preview-left reveal delay-1">
                <span class="section-label">{t.nav.about}</span>
                <h2 class="preview-heading">{t.about.whoAmI}</h2>
            </div>
            <div class="preview-right reveal delay-2">
                <p class="preview-text">
                    {t.about.bio.split("\n\n")[0]}
                </p>
                <a href="/about" class="preview-link">
                    {t.about.readMore}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </a>
            </div>
        </div>
    </div>
</section>

<style>
    .about-preview {
        padding: var(--space-5xl) 0;
        background: var(--color-canvas-soft);
    }

    .preview-layout {
        display: grid;
        grid-template-columns: 1fr 1.5fr;
        gap: var(--space-4xl);
        padding-top: var(--space-3xl);
        align-items: start;
    }

    .preview-left {
        position: sticky;
        top: 100px;
    }

    /* Sentence-case, period-terminated — Vercel headline voice */
    .preview-heading {
        font-size: var(--display-lg);
        font-weight: 600;
        line-height: 40px;
        letter-spacing: -1.28px;
        color: var(--color-ink);
    }

    .preview-text {
        font-size: var(--body-lg);
        font-weight: 400;
        color: var(--color-body);
        line-height: 28px;
        margin-bottom: var(--space-xl);
        text-align: justify;
    }

    .preview-link {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        font-size: var(--body-sm);
        font-weight: 500;
        color: var(--color-link);
        transition: color var(--transition-fast);
        letter-spacing: -0.28px;
    }

    .preview-link:hover {
        color: var(--color-link-deep);
    }

    @media (max-width: 768px) {
        .about-preview {
            padding: var(--space-4xl) 0;
        }

        .preview-layout {
            grid-template-columns: 1fr;
            gap: var(--space-xl);
        }

        .preview-left {
            position: relative;
            top: 0;
        }
    }
</style>
