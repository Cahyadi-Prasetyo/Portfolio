<script lang="ts">
    import { getTranslations } from "$lib/i18n/index.svelte";
    const t = $derived(getTranslations());
</script>

<footer class="footer">
    <div class="container">
        <div class="footer-inner">
            <p class="footer-copy">{t.footer.copy}</p>
            <div class="footer-links">
                <a href="https://github.com/Cahyadi-Prasetyo" target="_blank" rel="noopener">GitHub</a>
                <a href="https://linkedin.com/" target="_blank" rel="noopener">LinkedIn</a>
                <a href="https://instagram.com/" target="_blank" rel="noopener">Instagram</a>
            </div>
        </div>
    </div>
</footer>

<style>
    .footer {
        padding: var(--space-xl) 0;
        border-top: 1px solid var(--border);
    }

    .footer-inner {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .footer-copy {
        font-size: var(--text-xs);
        color: var(--text-muted);
    }

    .footer-links {
        display: flex;
        gap: var(--space-lg);
    }

    .footer-links a {
        font-size: var(--text-xs);
        font-weight: 500;
        color: var(--text-muted);
        transition: color var(--transition-fast);
    }

    .footer-links a:hover {
        color: var(--text);
    }

    @media (max-width: 640px) {
        .footer-inner {
            flex-direction: column;
            gap: var(--space-md);
        }
    }
</style>
