<script lang="ts">
    import { getTranslations } from "$lib/i18n/index.svelte";

    const t = $derived(getTranslations());
</script>

<section class="about-preview section reveal">
    <div class="container">
        <span class="section-label">{t.aboutPreview.label}</span>
        <h2 class="section-title">{t.aboutPreview.title}</h2>
        <p class="about-text">{t.aboutPreview.text}</p>
        <a href="/about" class="read-more">
            {t.aboutPreview.readMore}
            <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                ><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg
            >
        </a>
    </div>
</section>

<style>
    .about-text {
        font-size: var(--text-lg);
        color: var(--color-text-muted);
        line-height: 1.8;
        max-width: 650px;
        margin-bottom: var(--space-lg);
    }

    .read-more {
        display: inline-flex;
        align-items: center;
        gap: var(--space-sm);
        font-size: var(--text-sm);
        font-weight: 600;
        color: var(--color-accent);
        transition: gap var(--transition-fast);
    }

    .read-more:hover {
        gap: var(--space-md);
    }
</style>
