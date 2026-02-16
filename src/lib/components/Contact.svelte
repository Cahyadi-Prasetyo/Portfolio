<script lang="ts">
    import { t } from "$lib/i18n";
</script>

<section id="contact" class="contact section">
    <div class="container">
        <div class="contact-content reveal">
            <span class="section-label">{$t.contact.label}</span>
            <h2 class="contact-title">{$t.contact.title}</h2>
            <p class="contact-description">{$t.contact.description}</p>

            <a href="mailto:hello@cahyadiprasetyo.com" class="email-btn">
                <span class="email-icon">
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
                            d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                        /><polyline points="22,6 12,13 2,6" /></svg
                    >
                </span>
                {$t.contact.email}
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    ><line x1="5" y1="12" x2="19" y2="12" /><polyline
                        points="12 5 19 12 12 19"
                    /></svg
                >
            </a>

            <p class="contact-or">{$t.contact.or}</p>

            <div class="social-links">
                <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener"
                    class="social-link"
                    aria-label="GitHub"
                >
                    <svg
                        width="22"
                        height="22"
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
                        width="22"
                        height="22"
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
                        width="22"
                        height="22"
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
        background: var(--color-bg-alt);
    }

    .contact-content {
        text-align: center;
        max-width: 600px;
        margin: 0 auto;
    }

    .contact-title {
        font-size: var(--text-4xl);
        margin-bottom: var(--space-lg);
    }

    .contact-description {
        font-size: var(--text-lg);
        color: var(--color-text-muted);
        line-height: 1.8;
        margin-bottom: var(--space-2xl);
    }

    .email-btn {
        display: inline-flex;
        align-items: center;
        gap: var(--space-sm);
        padding: 0.9rem 2rem;
        font-size: var(--text-base);
        font-weight: 500;
        color: #fff;
        background: var(--color-text);
        border-radius: var(--radius-full);
        transition: all var(--transition-base);
    }

    .email-btn:hover {
        background: #333;
        color: #fff;
        transform: translateY(-2px);
        box-shadow: var(--shadow-lg);
    }

    .email-icon {
        display: flex;
    }

    .contact-or {
        font-size: var(--text-sm);
        color: var(--color-text-light);
        margin: var(--space-xl) 0;
    }

    .social-links {
        display: flex;
        justify-content: center;
        gap: var(--space-lg);
    }

    .social-link {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 48px;
        height: 48px;
        border-radius: var(--radius-full);
        border: 1.5px solid var(--color-border);
        color: var(--color-text-muted);
        transition: all var(--transition-base);
    }

    .social-link:hover {
        color: var(--color-text);
        border-color: var(--color-text);
        transform: translateY(-3px);
        box-shadow: var(--shadow-md);
    }

    @media (max-width: 768px) {
        .contact-title {
            font-size: var(--text-3xl);
        }
    }
</style>
