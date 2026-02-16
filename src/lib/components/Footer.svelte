<script lang="ts">
    import { t } from "$lib/i18n";
</script>

<footer class="footer section-dark">
    <div class="container footer-content">
        <p class="footer-copy">{$t.footer.copyright}</p>
    </div>
</footer>

<style>
    .footer {
        padding: var(--space-xl) 0;
        border-top: 1px solid var(--color-border-dark);
    }

    .footer-content {
        text-align: center;
    }

    .footer-copy {
        font-size: var(--text-sm);
        color: var(--color-muted-on-dark);
    }
</style>
