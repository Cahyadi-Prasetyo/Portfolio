<script lang="ts">
    import { getTranslations } from "$lib/i18n/index.svelte";
    const t = $derived(getTranslations());
</script>

<section class="cta reveal">
    <div class="container">
        <hr class="section-divider" />
        <div class="cta-inner">
            <h2 class="cta-title">{t.footerCta.title}</h2>
            <p class="cta-desc">{t.footerCta.desc}</p>
            <a href="/contact" class="btn btn-primary">
                {t.footerCta.button}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
        </div>
    </div>
</section>

<style>
    .cta-inner {
        padding: var(--space-3xl) 0;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .cta-title {
        font-size: var(--text-2xl);
        font-weight: 800;
        margin-bottom: var(--space-sm);
    }

    .cta-desc {
        font-size: var(--text-base);
        color: var(--text-secondary);
        margin-bottom: var(--space-xl);
    }
</style>
