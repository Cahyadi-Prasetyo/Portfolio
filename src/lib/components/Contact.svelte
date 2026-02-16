<script lang="ts">
    import { t } from "$lib/i18n";
</script>

<section id="contact" class="contact section-dark section-padding glow-effect">
    <div class="container">
        <div class="contact-content reveal">
            <span class="section-label section-label-dark"
                >{$t.contact.label}</span
            >

            <h2 class="contact-title">
                {#each $t.contact.title.split("\n") as line}
                    <span class="title-line">{line}</span>
                {/each}
            </h2>

            <div class="contact-actions">
                <a href="mailto:{$t.contact.email}" class="btn btn-white">
                    {$t.contact.cta}
                    <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        ><line x1="7" y1="17" x2="17" y2="7" /><polyline
                            points="7 7 17 7 17 17"
                        /></svg
                    >
                </a>
                <a href="mailto:{$t.contact.email}" class="contact-email"
                    >{$t.contact.email}</a
                >
            </div>

            <div class="social-links">
                <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener"
                    class="social-link"
                    aria-label="GitHub"
                >
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        ><path
                            d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                        /></svg
                    >
                </a>
                <a
                    href="https://linkedin.com/"
                    target="_blank"
                    rel="noopener"
                    class="social-link"
                    aria-label="LinkedIn"
                >
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        ><path
                            d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                        /><rect x="2" y="9" width="4" height="12" /><circle
                            cx="4"
                            cy="4"
                            r="2"
                        /></svg
                    >
                </a>
                <a
                    href="https://instagram.com/"
                    target="_blank"
                    rel="noopener"
                    class="social-link"
                    aria-label="Instagram"
                >
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        ><rect
                            x="2"
                            y="2"
                            width="20"
                            height="20"
                            rx="5"
                            ry="5"
                        /><path
                            d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
                        /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg
                    >
                </a>
            </div>
        </div>
    </div>
</section>

<style>
    .contact {
        overflow: hidden;
        border-top: 1px solid var(--color-border-dark);
    }

    .contact::before {
        top: 40% !important;
        left: 60% !important;
        width: 700px !important;
        height: 700px !important;
    }

    .contact-content {
        position: relative;
        z-index: 1;
        text-align: left;
    }

    .contact-title {
        font-size: clamp(2.5rem, 7vw, 5.5rem);
        font-weight: 700;
        line-height: 1.05;
        letter-spacing: -0.04em;
        color: var(--color-white);
        margin-bottom: var(--space-2xl);
    }

    .title-line {
        display: block;
    }

    .contact-actions {
        display: flex;
        align-items: center;
        gap: var(--space-xl);
        margin-bottom: var(--space-3xl);
    }

    .contact-email {
        font-size: var(--text-sm);
        color: var(--color-muted-on-dark);
        transition: color var(--transition-fast);
    }

    .contact-email:hover {
        color: var(--color-white);
    }

    .social-links {
        display: flex;
        gap: var(--space-md);
        padding-top: var(--space-2xl);
        border-top: 1px solid var(--color-border-dark);
    }

    .social-link {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 42px;
        height: 42px;
        border: 1px solid var(--color-border-dark);
        border-radius: var(--radius-sm);
        color: var(--color-muted-on-dark);
        transition: all var(--transition-base);
    }

    .social-link:hover {
        color: var(--color-white);
        border-color: rgba(255, 255, 255, 0.3);
        transform: translateY(-2px);
    }

    @media (max-width: 768px) {
        .contact-actions {
            flex-direction: column;
            align-items: flex-start;
        }
    }
</style>
