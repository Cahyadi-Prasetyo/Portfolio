<script lang="ts">
    import { getTranslations } from "$lib/i18n/index.svelte";
    const t = $derived(getTranslations());
</script>

<footer class="footer">
    <div class="container">
        <div class="footer-inner">
            <p class="footer-copy">{t.footer.copy}</p>
            <div class="footer-socials">
                <a href="https://github.com/Cahyadi-Prasetyo" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://www.linkedin.com/in/cahyadiprasetyo/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://instagram.com/cahyadi_p24" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
        </div>
    </div>
</footer>

<style>
    .footer {
        padding: var(--space-3xl) 0 var(--space-xl);
        border-top: 1px solid var(--color-hairline);
        background: var(--color-canvas);
    }

    .footer-inner {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: var(--space-md);
    }

    .footer-socials {
        display: flex;
        align-items: center;
        gap: var(--space-md);
    }

    .footer-socials a {
        font-size: var(--body-sm);
        font-weight: 400;
        color: var(--color-body);
        letter-spacing: -0.28px;
        transition: color var(--transition-fast);
        padding: var(--space-xs) 0;
    }

    .footer-socials a:hover {
        color: var(--color-ink);
    }

    .footer-copy {
        font-size: var(--caption);
        color: var(--color-mute);
        line-height: 16px;
        margin: 0;
    }

    @media (max-width: 600px) {
        .footer {
            padding: var(--space-xl) 0 var(--space-lg);
        }

        .footer-inner {
            flex-direction: column;
            gap: var(--space-sm);
            text-align: center;
        }

        .footer-socials {
            gap: var(--space-lg);
        }

        .footer-socials a {
            font-size: var(--body-md);
            padding: var(--space-sm) 0;
        }
    }
</style>
