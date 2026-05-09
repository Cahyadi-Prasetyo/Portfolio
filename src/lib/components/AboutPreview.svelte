<script lang="ts">
    import { getTranslations } from "$lib/i18n/index.svelte";
    const t = $derived(getTranslations());
</script>

<section class="about-preview">
    <div class="container">
        <hr class="section-divider reveal" />
        <div class="preview-split">
            <div class="split-left reveal delay-1">
                <h2 class="text-massive" style="font-size: clamp(2rem, 6vw, 4.5rem);">SIAPA AKU?</h2>
            </div>
            <div class="split-right reveal delay-2">
                <p class="preview-text">
                    {t.about.bio.split("\n\n")[0]}
                </p>
                <a href="/about" class="read-more">
                    {t.nav.about} →
                </a>
            </div>
        </div>
    </div>
</section>

<style>
    .about-preview {
        padding: var(--space-4xl) 0;
    }

    .preview-split {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: var(--space-4xl);
        padding-top: var(--space-3xl);
        align-items: start;
    }

    .split-left {
        position: sticky;
        top: 100px;
    }

    .split-left h2 {
        line-height: 1;
        color: var(--text);
        letter-spacing: -0.04em;
    }

    .preview-text {
        font-size: var(--text-lg);
        color: var(--text-secondary);
        line-height: 1.8;
        margin-bottom: var(--space-xl);
    }

    .read-more {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        font-size: var(--text-base);
        font-weight: 700;
        color: var(--text);
        border-bottom: 2px solid var(--text);
        padding-bottom: 4px;
        transition: opacity var(--transition-fast);
        text-transform: uppercase;
    }

    .read-more:hover {
        opacity: 0.7;
    }

    @media (max-width: 900px) {
        .preview-split {
            grid-template-columns: 1fr;
            gap: var(--space-2xl);
        }
        
        .split-left {
            position: relative;
            top: 0;
        }
    }
</style>
