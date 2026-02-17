<script lang="ts">
    import { getTranslations } from "$lib/i18n/index.svelte";

    const t = $derived(getTranslations());

    let formData = $state({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    let sending = $state(false);
    let sent = $state(false);

    function handleSubmit(e: Event) {
        e.preventDefault();
        sending = true;

        const mailto = `mailto:${t.contact.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
        window.open(mailto, "_blank");

        setTimeout(() => {
            sending = false;
            sent = true;
            formData = { name: "", email: "", subject: "", message: "" };
            setTimeout(() => {
                sent = false;
            }, 3000);
        }, 500);
    }
</script>

<svelte:head>
    <title>{t.contact.title} • Cahyadi Prasetyo</title>
</svelte:head>

<div class="page-wrapper">
    <div class="container">
        <div class="page-header reveal">
            <span class="section-label">// {t.contact.label}</span>
            <h1 class="section-title">{t.contact.title}</h1>
            <p class="section-desc">{t.contact.desc}</p>
        </div>

        <div class="contact-layout">
            <form class="contact-form reveal" onsubmit={handleSubmit}>
                <div class="form-row">
                    <div class="form-group">
                        <label for="name">{t.contact.nameLabel}</label>
                        <input
                            type="text"
                            id="name"
                            bind:value={formData.name}
                            placeholder={t.contact.namePlaceholder}
                            required
                        />
                    </div>
                    <div class="form-group">
                        <label for="email">{t.contact.emailLabel}</label>
                        <input
                            type="email"
                            id="email"
                            bind:value={formData.email}
                            placeholder={t.contact.emailPlaceholder}
                            required
                        />
                    </div>
                </div>

                <div class="form-group">
                    <label for="subject">{t.contact.subjectLabel}</label>
                    <input
                        type="text"
                        id="subject"
                        bind:value={formData.subject}
                        placeholder={t.contact.subjectPlaceholder}
                        required
                    />
                </div>

                <div class="form-group">
                    <label for="message">{t.contact.messageLabel}</label>
                    <textarea
                        id="message"
                        bind:value={formData.message}
                        placeholder={t.contact.messagePlaceholder}
                        rows="5"
                        required
                    ></textarea>
                </div>

                <button
                    type="submit"
                    class="btn btn-primary btn-full"
                    disabled={sending}
                >
                    {#if sending}
                        Sending...
                    {:else if sent}
                        ✓ Sent!
                    {:else}
                        {t.contact.send}
                        <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            ><path d="M5 12h14" /><path
                                d="m12 5 7 7-7 7"
                            /></svg
                        >
                    {/if}
                </button>
            </form>

            <div class="contact-aside reveal-right">
                <div class="aside-card card">
                    <p class="aside-label">{t.contact.orEmail}</p>
                    <a href="mailto:{t.contact.email}" class="aside-email"
                        >{t.contact.email}</a
                    >
                </div>

                <div class="aside-socials">
                    <a
                        href="https://github.com/"
                        target="_blank"
                        rel="noopener"
                        class="social-link"
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
                        <span>GitHub</span>
                    </a>
                    <a
                        href="https://linkedin.com/"
                        target="_blank"
                        rel="noopener"
                        class="social-link"
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
                        <span>LinkedIn</span>
                    </a>
                    <a
                        href="https://instagram.com/"
                        target="_blank"
                        rel="noopener"
                        class="social-link"
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
                            /><line
                                x1="17.5"
                                y1="6.5"
                                x2="17.51"
                                y2="6.5"
                            /></svg
                        >
                        <span>Instagram</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .page-wrapper {
        padding-top: calc(var(--nav-height) + var(--space-3xl));
        padding-bottom: var(--space-5xl);
        min-height: 100vh;
    }

    .page-header {
        margin-bottom: var(--space-2xl);
    }

    .contact-layout {
        display: grid;
        grid-template-columns: 1.3fr 0.7fr;
        gap: var(--space-4xl);
        align-items: start;
    }

    .contact-form {
        display: flex;
        flex-direction: column;
        gap: var(--space-lg);
    }

    .form-row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: var(--space-lg);
    }

    .form-group {
        display: flex;
        flex-direction: column;
        gap: 6px;
    }

    .form-group label {
        font-size: var(--text-sm);
        font-weight: 500;
        color: var(--color-text);
    }

    .form-group input,
    .form-group textarea {
        font-family: var(--font-body);
        font-size: var(--text-base);
        padding: 12px 16px;
        border: 1px solid var(--color-border);
        border-radius: var(--radius-md);
        background: var(--color-white);
        color: var(--color-text);
        transition: all var(--transition-base);
        outline: none;
        resize: vertical;
    }

    .form-group input::placeholder,
    .form-group textarea::placeholder {
        color: var(--color-text-muted);
    }

    .form-group input:focus,
    .form-group textarea:focus {
        border-color: var(--color-text);
        box-shadow: 0 0 0 3px rgba(10, 10, 10, 0.06);
    }

    :global(.btn-full) {
        width: 100%;
        justify-content: center;
    }

    /* Aside */
    .contact-aside {
        display: flex;
        flex-direction: column;
        gap: var(--space-xl);
    }

    .aside-card {
        padding: var(--space-xl);
    }

    .aside-label {
        font-size: var(--text-sm);
        color: var(--color-text-muted);
        margin-bottom: var(--space-sm);
    }

    .aside-email {
        font-size: var(--text-base);
        font-weight: 600;
        color: var(--color-text);
        word-break: break-all;
        transition: opacity var(--transition-fast);
    }

    .aside-email:hover {
        opacity: 0.7;
    }

    .aside-socials {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .social-link {
        display: flex;
        align-items: center;
        gap: var(--space-md);
        padding: var(--space-md) var(--space-lg);
        border-radius: var(--radius-md);
        border: 1px solid var(--color-border);
        background: var(--color-white);
        color: var(--color-text-secondary);
        font-size: var(--text-sm);
        font-weight: 500;
        transition: all var(--transition-base);
    }

    .social-link:hover {
        border-color: var(--color-text);
        color: var(--color-text);
        transform: translateX(4px);
    }

    @media (max-width: 768px) {
        .contact-layout {
            grid-template-columns: 1fr;
        }
        .form-row {
            grid-template-columns: 1fr;
        }
    }
</style>
