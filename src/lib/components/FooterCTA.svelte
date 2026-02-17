<script lang="ts">
    import { getTranslations } from "$lib/i18n/index.svelte";

    const t = $derived(getTranslations());
</script>

<section class="cta-section reveal">
    <hr class="section-divider" />
    <div class="container cta-inner">
        <h2 class="cta-title">{t.footerCta.title}</h2>
        <div class="cta-actions">
            <a href="/contact" class="btn btn-primary btn-lg">
                {t.footerCta.button}
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
            <a href="mailto:{t.contact.email}" class="cta-email"
                >{t.contact.email}</a
            >
        </div>
    </div>
</section>

<style>
    .cta-section {
        padding: var(--space-5xl) 0;
    }

    .cta-inner {
        text-align: center;
        padding-top: var(--space-4xl);
    }

    .cta-title {
        font-size: clamp(2rem, 5vw, var(--text-5xl));
        font-weight: 800;
        letter-spacing: -0.04em;
        margin-bottom: var(--space-2xl);
        max-width: 700px;
        margin-left: auto;
        margin-right: auto;
    }

    .cta-actions {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: var(--space-xl);
    }

    :global(.btn-lg) {
        padding: 1rem 2.5rem;
        font-size: var(--text-base);
    }

    .cta-email {
        font-size: var(--text-sm);
        font-weight: 500;
        color: var(--color-text-secondary);
        padding: 1rem 2rem;
        border: 1px solid var(--color-border);
        border-radius: var(--radius-full);
        background: var(--color-white);
        transition: all var(--transition-base);
    }

    .cta-email:hover {
        border-color: var(--color-text);
        color: var(--color-text);
    }

    @media (max-width: 768px) {
        .cta-actions {
            flex-direction: column;
        }
    }
</style>
