<script lang="ts">
    import { getTranslations } from "$lib/i18n/index.svelte";

    const t = $derived(getTranslations());
</script>

<section class="about-preview section reveal">
    <hr class="section-divider" />
    <div class="container preview-inner">
        <span class="section-label">// {t.aboutPreview.label}</span>
        <div class="preview-layout">
            <p class="about-text">{t.aboutPreview.text}</p>
            <a href="/about" class="read-more-link">
                {t.aboutPreview.readMore}
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
        </div>
    </div>
</section>

<style>
    .preview-inner {
        padding-top: var(--space-3xl);
    }

    .preview-layout {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        gap: var(--space-3xl);
    }

    .about-text {
        font-size: var(--text-2xl);
        font-weight: 500;
        color: var(--color-text);
        line-height: 1.5;
        max-width: 700px;
        letter-spacing: -0.02em;
    }

    .read-more-link {
        display: inline-flex;
        align-items: center;
        gap: var(--space-sm);
        font-size: var(--text-sm);
        font-weight: 600;
        color: var(--color-text);
        white-space: nowrap;
        padding: 10px 20px;
        border: 1px solid var(--color-border);
        border-radius: var(--radius-full);
        background: var(--color-white);
        transition: all var(--transition-base);
        flex-shrink: 0;
    }

    .read-more-link:hover {
        border-color: var(--color-text);
        transform: translateY(-1px);
        box-shadow: var(--shadow-sm);
    }

    @media (max-width: 768px) {
        .preview-layout {
            flex-direction: column;
            gap: var(--space-xl);
        }

        .about-text {
            font-size: var(--text-xl);
        }
    }
</style>
