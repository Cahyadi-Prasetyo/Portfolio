<script lang="ts">
    import { getTranslations } from "$lib/i18n/index.svelte";

    const t = $derived(getTranslations());
</script>

<footer class="footer">
    <div class="container footer-inner">
        <a href="/" class="footer-logo">CP<span>/&gt;</span></a>
        <p class="footer-copy">{t.footer.copy}</p>
    </div>
</footer>

<style>
    .footer {
        border-top: 1px solid var(--color-border);
        padding: var(--space-xl) 0;
    }

    .footer-inner {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .footer-logo {
        font-family: var(--font-heading);
        font-size: var(--text-base);
        font-weight: 700;
        color: var(--color-text);
    }

    .footer-logo span {
        color: var(--color-accent);
    }

    .footer-copy {
        font-size: var(--text-xs);
        color: var(--color-text-light);
    }
</style>
