<script lang="ts">
    import { getTranslations } from "$lib/i18n/index.svelte";
    const t = $derived(getTranslations());
</script>

<section class="hero">
    <div class="container">
        <div class="hero-top">
            <div class="hero-content">
                <div class="hero-intro">
                    <span class="status-dot"></span>
                    <p class="hero-greeting">{t.hero.greeting}</p>
                </div>
                <h1 class="hero-value">{t.hero.value}</h1>
                <p class="hero-bio">{t.hero.bio}</p>
                <div class="hero-actions">
                    <a href="#work" class="btn btn-primary">
                        {t.hero.cta}
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                    </a>
                    <a href="/contact" class="btn btn-outline">{t.hero.ctaSecondary}</a>
                </div>
            </div>
            <div class="hero-photo">
                <img src="/my-self.png" alt="Cahyadi Prasetyo" />
            </div>
        </div>
    </div>
</section>

<!-- Trust Bar -->
<section class="trust">
    <div class="container">
        <span class="trust-label">{t.trust.label}</span>
        <div class="trust-list">
            {#each t.trust.orgs as org}
                <div class="trust-item">
                    <span class="trust-name">{org.name}</span>
                    <span class="trust-type">{org.type}</span>
                </div>
            {/each}
        </div>
    </div>
</section>

<style>
    .hero {
        padding: calc(var(--nav-height) + var(--space-3xl)) 0 var(--space-3xl);
    }

    .hero-top {
        display: flex;
        align-items: center;
        gap: var(--space-3xl);
    }

    .hero-content {
        flex: 1;
    }

    .hero-intro {
        display: flex;
        align-items: center;
        gap: var(--space-sm);
        margin-bottom: var(--space-md);
    }

    .status-dot {
        width: 8px;
        height: 8px;
        background: #22c55e;
        border-radius: 50%;
        flex-shrink: 0;
    }

    .hero-greeting {
        font-size: var(--text-base);
        font-weight: 500;
        color: var(--text-secondary);
    }

    .hero-value {
        font-size: clamp(1.75rem, 4vw, var(--text-4xl));
        font-weight: 800;
        line-height: 1.15;
        letter-spacing: -0.035em;
        margin-bottom: var(--space-lg);
    }

    .hero-bio {
        font-size: var(--text-sm);
        color: var(--text-secondary);
        line-height: 1.7;
        margin-bottom: var(--space-2xl);
    }

    .hero-actions {
        display: flex;
        align-items: center;
        gap: var(--space-md);
    }

    .hero-photo {
        flex-shrink: 0;
        width: 220px;
        height: 280px;
        border-radius: var(--radius-lg);
        overflow: hidden;
        border: 1px solid var(--border);
    }

    .hero-photo img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    /* Trust Bar */
    .trust {
        padding: var(--space-xl) 0;
        border-top: 1px solid var(--border);
        border-bottom: 1px solid var(--border);
    }

    .trust-label {
        font-size: var(--text-xs);
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        color: var(--text-muted);
        display: block;
        margin-bottom: var(--space-md);
    }

    .trust-list {
        display: flex;
        flex-wrap: wrap;
        gap: var(--space-2xl);
    }

    .trust-item {
        display: flex;
        flex-direction: column;
        gap: 2px;
    }

    .trust-name {
        font-size: var(--text-sm);
        font-weight: 600;
        color: var(--text);
    }

    .trust-type {
        font-size: var(--text-xs);
        color: var(--text-muted);
    }

    @media (max-width: 768px) {
        .hero-top {
            flex-direction: column-reverse;
            gap: var(--space-xl);
        }

        .hero-photo {
            width: 140px;
            height: 180px;
            align-self: flex-start;
        }

        .hero-actions {
            flex-direction: column;
            align-items: flex-start;
        }

        .trust-list {
            gap: var(--space-xl);
        }
    }
</style>
