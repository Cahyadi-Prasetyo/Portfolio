<script lang="ts">
    import { t } from "$lib/i18n";
</script>

<footer class="footer">
    <div class="container footer-content">
        <p class="footer-copy">
            {$t.footer.copyright} <span class="heart">♥</span> & Svelte. {$t
                .footer.allRights}
        </p>
    </div>
</footer>

<style>
    .footer {
        padding: var(--space-2xl) 0;
        border-top: 1px solid var(--color-border-light);
    }

    .footer-content {
        text-align: center;
    }

    .footer-copy {
        font-size: var(--text-sm);
        color: var(--color-text-light);
    }

    .heart {
        color: #ef4444;
    }
</style>
