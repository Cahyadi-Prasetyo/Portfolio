<script lang="ts">
    import { getTranslations } from "$lib/i18n/index.svelte";
    const t = $derived(getTranslations());
</script>

<!-- Showcase-band-dark — polarity flip to ink -->
<section class="cta-band reveal">
    <div class="container">
        <div class="cta-inner">
            <span class="cta-eyebrow">Let's connect</span>
            <h2 class="cta-title">{t.footerCta.title}</h2>
            <p class="cta-desc">{t.footerCta.desc}</p>
            <a href="/contact" class="cta-button">
                {t.footerCta.button}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
        </div>
    </div>
</section>
<style>
    /* Showcase-band-dark: polarity-flipped to ink primary */
    .cta-band {
        background: var(--color-ink);
        padding: var(--space-5xl) 0;
        border-top: 1px solid var(--color-hairline);
    }

    .cta-inner {
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .cta-eyebrow {
        font-family: var(--font-mono);
        font-size: var(--caption);
        font-weight: 400;
        line-height: 16px;
        color: var(--color-canvas);
        opacity: 0.7;
        margin-bottom: var(--space-lg);
    }

    .cta-title {
        font-size: clamp(24px, 4vw, 32px);
        font-weight: 600;
        line-height: 40px;
        letter-spacing: -1.28px;
        color: var(--color-canvas);
        margin-bottom: var(--space-sm);
    }

    .cta-desc {
        font-size: var(--body-md);
        font-weight: 400;
        color: var(--color-canvas);
        opacity: 0.8;
        line-height: 24px;
        margin-bottom: var(--space-xl);
        max-width: 480px;
    }

    /* CTA button — inverted pill */
    .cta-button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        font-family: var(--font-sans);
        font-size: var(--body-md);
        font-weight: 500;
        line-height: 24px;
        height: 40px;
        padding: 0 var(--space-lg);
        background: var(--color-canvas);
        color: var(--color-ink);
        border: none;
        border-radius: var(--radius-pill);
        text-decoration: none;
        transition: transform var(--transition-fast), background var(--transition-fast);
    }

    .cta-button:hover {
        background: var(--color-canvas);
        transform: translateY(-2px);
        box-shadow: var(--shadow-level-2);
    }

    @media (max-width: 768px) {
        .cta-band {
            padding: var(--space-4xl) 0;
        }

        .cta-title {
            font-size: clamp(20px, 5vw, 28px);
            line-height: 1.3;
        }

        .cta-desc {
            font-size: 14px;
            line-height: 22px;
            padding: 0 var(--space-sm);
        }
    }
</style>
