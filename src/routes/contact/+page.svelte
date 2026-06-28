<script lang="ts">
    import { getTranslations } from "$lib/i18n/index.svelte";
    import emailjs from '@emailjs/browser';

    const t = $derived(getTranslations());

    let formData = $state({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    let sending = $state(false);
    let sent = $state(false);
    let error = $state(false);

    async function handleSubmit(e: Event) {
        e.preventDefault();
        sending = true;
        error = false;

        try {
            await emailjs.send(
                'service_fl7u44p',
                'template_rirdhx8',
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                    to_name: "Cahyadi Prasetyo"
                },
                'KXoqgAMa8sSw9FOWr'
            );
            
            sent = true;
            formData = { name: "", email: "", subject: "", message: "" };
            setTimeout(() => { sent = false; }, 5000);
        } catch (err) {
            console.error("Failed to send email:", err);
            error = true;
            setTimeout(() => { error = false; }, 5000);
        } finally {
            sending = false;
        }
    }
</script>

<svelte:head>
    <title>{t.contact.title} • Cahyadi Prasetyo</title>
</svelte:head>

<div class="page">
    <div class="bg-grid"></div>
    <div class="container">
        <section class="header reveal">
            <span class="page-eyebrow">{t.contact.label}</span>
            <h1 class="page-title text-gradient">{t.contact.title}</h1>
            <p class="page-desc">{t.contact.desc}</p>
        </section>

        <div class="contact-layout">
            <!-- Form card -->
            <div class="form-card reveal">
                <form class="contact-form" onsubmit={handleSubmit} aria-busy={sending} novalidate>
                    <div class="form-row">
                        <div class="form-group">
                            <label for="name">{t.contact.nameLabel}</label>
                            <input type="text" id="name" bind:value={formData.name} placeholder={t.contact.namePlaceholder} required />
                        </div>
                        <div class="form-group">
                            <label for="email">{t.contact.emailLabel}</label>
                            <input type="email" id="email" bind:value={formData.email} placeholder={t.contact.emailPlaceholder} required />
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="subject">{t.contact.subjectLabel}</label>
                        <input type="text" id="subject" bind:value={formData.subject} placeholder={t.contact.subjectPlaceholder} required />
                    </div>

                    <div class="form-group">
                        <label for="message">{t.contact.messageLabel}</label>
                        <textarea id="message" bind:value={formData.message} placeholder={t.contact.messagePlaceholder} rows="4" required></textarea>
                    </div>

                    <button type="submit" class="btn btn-primary submit-btn" disabled={sending}>
                        {#if sending}
                            {t.contact.sending}
                        {:else if sent}
                            {t.contact.success}
                        {:else if error}
                            {t.contact.error}
                        {:else}
                            {t.contact.send}
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                        {/if}
                    </button>
                </form>
                <div class="sr-only" aria-live="polite" role="status">
                    {#if sending}{t.contact.sending}{:else if sent}{t.contact.success}{:else if error}{t.contact.error}{/if}
                </div>
            </div>

            <!-- Aside info -->
            <div class="contact-aside reveal">
                <div class="aside-card">
                    <div class="aside-block">
                        <span class="aside-label">{t.contact.emailLabel}</span>
                        <a href="mailto:{t.contact.email}" class="aside-email">{t.contact.email}</a>
                    </div>
                    <hr class="aside-divider" />
                    <div class="aside-block">
                        <span class="aside-label">{t.contact.socialLabel}</span>
                        <div class="aside-links">
                            <a href="https://github.com/Cahyadi-Prasetyo" target="_blank" rel="noopener noreferrer">
                                GitHub
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
                            </a>
                            <a href="https://www.linkedin.com/in/cahyadiprasetyo/" target="_blank" rel="noopener noreferrer">
                                LinkedIn
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
                            </a>
                            <a href="https://instagram.com/cahyadi_p24" target="_blank" rel="noopener noreferrer">
                                Instagram
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
                            </a>
                        </div>
                    </div>
                    <hr class="aside-divider" />
                    <div class="aside-block">
                        <span class="aside-label">{t.contact.locationLabel}</span>
                        <p class="aside-text">{t.contact.location}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .page {
        padding-top: calc(var(--nav-height) + var(--space-4xl));
        padding-bottom: var(--space-5xl);
        min-height: 100vh;
    }

    .page-eyebrow {
        font-family: var(--font-mono);
        font-size: var(--caption);
        font-weight: 400;
        line-height: 16px;
        color: var(--color-mute);
        display: block;
        margin-bottom: var(--space-sm);
    }

    .page-title {
        font-size: clamp(32px, 5vw, 48px);
        font-weight: 600;
        line-height: 1;
        letter-spacing: -2.4px;
        color: var(--color-ink);
        margin-bottom: var(--space-sm);
    }

    .page-desc {
        font-size: var(--body-lg);
        color: var(--color-body);
        line-height: 28px;
        margin-bottom: var(--space-3xl);
        max-width: 480px;
    }

    .contact-layout {
        display: grid;
        grid-template-columns: 1fr 320px;
        gap: var(--space-3xl);
        align-items: start;
    }

    /* Form card */
    .form-card {
        background: var(--color-canvas);
        border-radius: var(--radius-lg);
        padding: var(--space-xl);
        box-shadow: var(--shadow-level-2);
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
        font-size: var(--body-sm);
        font-weight: 500;
        color: var(--color-ink);
        letter-spacing: -0.28px;
    }

    /* form-input — Vercel style */
    .form-group input,
    .form-group textarea {
        font-family: var(--font-sans);
        font-size: var(--body-sm);
        padding: 0 var(--space-sm);
        min-height: 44px;
        border: 1px solid var(--color-hairline);
        border-radius: var(--radius-sm);
        background: var(--color-canvas);
        color: var(--color-ink);
        transition: border-color var(--transition-fast);
        outline: none;
        resize: vertical;
        letter-spacing: -0.28px;
        line-height: 20px;
    }

    .form-group textarea {
        height: auto;
        padding: var(--space-sm);
    }

    .form-group input::placeholder,
    .form-group textarea::placeholder {
        color: var(--color-mute);
    }

    .form-group input:focus,
    .form-group textarea:focus {
        border-color: var(--color-ink);
    }

    .submit-btn {
        width: 100%;
        justify-content: center;
    }

    /* Aside card */
    .aside-card {
        background: var(--color-canvas);
        border-radius: var(--radius-lg);
        padding: var(--space-xl);
        box-shadow: var(--shadow-level-1);
    }

    .aside-divider {
        border: none;
        border-top: 1px solid var(--color-hairline);
        margin: var(--space-md) 0;
    }

    .aside-block {
        display: flex;
        flex-direction: column;
        gap: var(--space-xs);
    }

    .aside-label {
        font-family: var(--font-mono);
        font-size: var(--caption);
        font-weight: 400;
        line-height: 16px;
        color: var(--color-mute);
    }

    .aside-email {
        font-size: var(--body-md);
        font-weight: 500;
        color: var(--color-ink);
        word-break: break-all;
        letter-spacing: -0.28px;
        transition: color var(--transition-fast);
        display: inline-block;
        padding: var(--space-xxs) 0;
    }

    .aside-email:hover {
        color: var(--color-link);
    }

    .aside-text {
        font-size: var(--body-sm);
        color: var(--color-body);
        letter-spacing: -0.28px;
    }

    .aside-links {
        display: flex;
        flex-direction: column;
        gap: 2px;
    }

    .aside-links a {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        font-size: var(--body-md);
        font-weight: 400;
        color: var(--color-body);
        letter-spacing: -0.28px;
        transition: color var(--transition-fast);
        padding: 10px 0;
        min-height: 44px;
    }

    .aside-links a:hover {
        color: var(--color-ink);
    }

    @media (max-width: 768px) {
        .page {
            padding-top: calc(var(--nav-height) + var(--space-3xl));
        }

        .page-title {
            font-size: clamp(28px, 6vw, 36px);
        }

        .page-desc {
            font-size: 15px;
            line-height: 24px;
        }

        .contact-layout {
            grid-template-columns: 1fr;
            gap: var(--space-xl);
        }

        .form-row {
            grid-template-columns: 1fr;
        }

        .form-card {
            padding: var(--space-lg);
        }

        .submit-btn {
            width: 100%;
            height: 44px;
        }

        .aside-card {
            padding: var(--space-lg);
        }
    }
</style>
