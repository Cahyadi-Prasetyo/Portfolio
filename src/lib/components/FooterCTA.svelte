<script lang="ts">
    import { getTranslations } from "$lib/i18n/index.svelte";

    const t = $derived(getTranslations());
</script>

<section class="cta section reveal">
    <div class="container cta-inner">
        <h2 class="cta-title">{t.footerCta.title}</h2>
        <p class="cta-desc">{t.footerCta.desc}</p>
        <div class="cta-actions">
            <a href="/contact" class="btn btn-primary">
                {t.footerCta.button}
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
            <a href="mailto:{t.contact.email}" class="cta-email"
                >{t.contact.email}</a
            >
        </div>
    </div>
</section>

<style>
    .cta {
        border-top: 1px solid var(--color-border);
    }

    .cta-inner {
        text-align: center;
        max-width: 600px;
        margin: 0 auto;
    }

    .cta-title {
        font-size: var(--text-3xl);
        margin-bottom: var(--space-md);
    }

    .cta-desc {
        font-size: var(--text-base);
        color: var(--color-text-muted);
        margin-bottom: var(--space-xl);
        line-height: 1.7;
    }

    .cta-actions {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--space-md);
    }

    .cta-email {
        font-size: var(--text-sm);
        color: var(--color-accent);
        font-weight: 500;
    }

    .cta-email:hover {
        opacity: 0.8;
    }
</style>
