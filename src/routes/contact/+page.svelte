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
            setTimeout(() => { sent = false; }, 3000);
        }, 500);
    }
</script>

<svelte:head>
    <title>{t.contact.title} • Cahyadi Prasetyo</title>
</svelte:head>

<div class="page">
    <div class="container">
        <section class="header reveal">
            <h1 class="page-title">{t.contact.title}</h1>
            <p class="page-desc">{t.contact.desc}</p>
        </section>

        <div class="contact-layout">
            <form class="contact-form reveal" onsubmit={handleSubmit}>
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
                    <textarea id="message" bind:value={formData.message} placeholder={t.contact.messagePlaceholder} rows="5" required></textarea>
                </div>

                <button type="submit" class="btn btn-primary submit-btn" disabled={sending}>
                    {#if sending}
                        Sending...
                    {:else if sent}
                        ✓ Sent!
                    {:else}
                        {t.contact.send} →
                    {/if}
                </button>
            </form>

            <div class="contact-aside reveal">
                <div class="aside-block">
                    <p class="aside-label">{t.contact.orEmail}</p>
                    <a href="mailto:{t.contact.email}" class="aside-email">{t.contact.email}</a>
                </div>
                <div class="aside-block">
                    <p class="aside-label">Social</p>
                    <div class="aside-links">
                        <a href="https://github.com/Cahyadi-Prasetyo" target="_blank" rel="noopener">GitHub</a>
                        <a href="https://linkedin.com/" target="_blank" rel="noopener">LinkedIn</a>
                        <a href="https://instagram.com/" target="_blank" rel="noopener">Instagram</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .page {
        padding-top: calc(var(--nav-height) + var(--space-3xl));
        padding-bottom: var(--space-4xl);
        min-height: 100vh;
    }

    .page-title {
        font-size: var(--text-4xl);
        font-weight: 800;
        letter-spacing: -0.03em;
        margin-bottom: var(--space-sm);
    }

    .page-desc {
        font-size: var(--text-base);
        color: var(--text-secondary);
        margin-bottom: var(--space-2xl);
    }

    .contact-layout {
        display: grid;
        grid-template-columns: 1fr 280px;
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
        color: var(--text);
    }

    .form-group input,
    .form-group textarea {
        font-family: 'Inter', sans-serif;
        font-size: var(--text-base);
        padding: 12px 16px;
        border: 1px solid var(--border);
        border-radius: var(--radius-md);
        background: var(--white);
        color: var(--text);
        transition: border-color var(--transition-fast);
        outline: none;
        resize: vertical;
    }

    .form-group input::placeholder,
    .form-group textarea::placeholder {
        color: var(--text-muted);
    }

    .form-group input:focus,
    .form-group textarea:focus {
        border-color: var(--text);
    }

    .submit-btn {
        width: 100%;
        justify-content: center;
    }

    .contact-aside {
        display: flex;
        flex-direction: column;
        gap: var(--space-xl);
    }

    .aside-label {
        font-size: var(--text-xs);
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        color: var(--text-muted);
        margin-bottom: var(--space-sm);
    }

    .aside-email {
        font-size: var(--text-sm);
        font-weight: 600;
        color: var(--text);
        word-break: break-all;
    }

    .aside-email:hover {
        opacity: 0.7;
    }

    .aside-links {
        display: flex;
        flex-direction: column;
        gap: var(--space-sm);
    }

    .aside-links a {
        font-size: var(--text-sm);
        font-weight: 500;
        color: var(--text-secondary);
        transition: color var(--transition-fast);
    }

    .aside-links a:hover {
        color: var(--text);
    }

    @media (max-width: 768px) {
        .contact-layout {
            grid-template-columns: 1fr;
            gap: var(--space-2xl);
        }

        .form-row {
            grid-template-columns: 1fr;
        }
    }
</style>
