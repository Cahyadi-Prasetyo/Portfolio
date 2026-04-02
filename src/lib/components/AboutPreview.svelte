<script lang="ts">
    import { getTranslations } from "$lib/i18n/index.svelte";
    const t = $derived(getTranslations());
</script>

<section class="about-preview reveal">
    <div class="container">
        <hr class="section-divider" />
        <div class="preview-inner">
            <p class="preview-text">
                {t.about.bio.split("\n\n")[0]}
            </p>
            <a href="/about" class="read-more">
                {t.nav.about} →
            </a>
        </div>
    </div>
</section>

<style>
    .about-preview {
        padding: var(--space-3xl) 0;
    }

    .preview-inner {
        padding-top: var(--space-2xl);
    }

    .preview-text {
        font-size: var(--text-lg);
        color: var(--text-secondary);
        line-height: 1.8;
        margin-bottom: var(--space-lg);
    }

    .read-more {
        font-size: var(--text-sm);
        font-weight: 600;
        color: var(--text);
        border-bottom: 1px solid var(--border);
        padding-bottom: 2px;
        transition: border-color var(--transition-fast);
    }

    .read-more:hover {
        border-color: var(--text);
    }
</style>
