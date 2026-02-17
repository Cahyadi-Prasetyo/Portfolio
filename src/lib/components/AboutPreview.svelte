<script lang="ts">
    import { getTranslations } from "$lib/i18n/index.svelte";

    const t = $derived(getTranslations());
</script>

<section class="about-preview section reveal">
    <hr class="section-divider" />
    <div class="container preview-inner">
        <span class="section-label">// {t.aboutPreview.label}</span>

        <div class="preview-content">
            <h2 class="preview-title">{t.aboutPreview.title}</h2>
            {#each t.about.bio.split("\n\n") as paragraph}
                <p class="about-paragraph">{paragraph}</p>
            {/each}
        </div>
    </div>
</section>

<style>
    .preview-inner {
        padding-top: var(--space-3xl);
    }

    .preview-title {
        font-size: var(--text-3xl);
        font-weight: 800;
        margin-bottom: var(--space-xl);
        letter-spacing: -0.03em;
    }

    .preview-content {
        max-width: 800px;
    }

    .about-paragraph {
        font-size: var(--text-lg);
        color: var(--color-text-secondary);
        line-height: 1.8;
        margin-bottom: var(--space-lg);
    }
</style>
