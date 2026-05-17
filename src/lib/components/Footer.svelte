<script lang="ts">
    import { getTranslations } from "$lib/i18n/index.svelte";
    const t = $derived(getTranslations());
</script>

<footer class="footer">
    <div class="container">
        <div class="footer-inner">
            <div class="footer-left">
                <!-- <span class="footer-logo">▲ CP</span> -->
                <p class="footer-copy">{t.footer.copy}</p>
            </div>
            <div class="footer-links">
                <div class="footer-column">
                    <span class="footer-column-label">Social</span>
                    <a href="https://github.com/Cahyadi-Prasetyo" target="_blank" rel="noopener">GitHub</a>
                    <a href="https://www.linkedin.com/in/cahyadiprasetyo/" target="_blank" rel="noopener">LinkedIn</a>
                    <a href="https://instagram.com/cahyadi_p24" target="_blank" rel="noopener">Instagram</a>
                </div>
                <div class="footer-column">
                    <span class="footer-column-label">Pages</span>
                    <a href="/">Home</a>
                    <a href="/projects">Projects</a>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                </div>
            </div>
        </div>
    </div>
</footer>

<style>
    .footer {
        padding: var(--space-4xl) 0 var(--space-xl);
        border-top: 1px solid var(--color-hairline);
        background: var(--color-canvas);
    }

    .footer-inner {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
    }

    .footer-left {
        display: flex;
        flex-direction: column;
        gap: var(--space-xs);
    }

    .footer-logo {
        font-size: var(--body-sm);
        font-weight: 600;
        color: var(--color-ink);
        letter-spacing: -0.28px;
    }

    .footer-copy {
        font-size: var(--caption);
        color: var(--color-mute);
        line-height: 16px;
    }

    .footer-links {
        display: flex;
        gap: var(--space-4xl);
    }

    .footer-column {
        display: flex;
        flex-direction: column;
        gap: var(--space-xs);
    }

    /* Column label — caption-mono uppercase mono */
    .footer-column-label {
        font-family: var(--font-mono);
        font-size: var(--caption);
        font-weight: 400;
        line-height: 16px;
        color: var(--color-mute);
        margin-bottom: var(--space-xs);
    }

    .footer-column a {
        font-size: var(--body-sm);
        font-weight: 400;
        color: var(--color-body);
        letter-spacing: -0.28px;
        transition: color var(--transition-fast);
    }

    .footer-column a:hover {
        color: var(--color-ink);
    }

    @media (max-width: 600px) {
        .footer-inner {
            flex-direction: column;
            gap: var(--space-xl);
        }

        .footer-links {
            gap: var(--space-3xl);
        }
    }
</style>
