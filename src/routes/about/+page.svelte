<script lang="ts">
    import { getTranslations } from "$lib/i18n/index.svelte";
    import FAQ from "$lib/components/FAQ.svelte";
    import FooterCTA from "$lib/components/FooterCTA.svelte";

    const t = $derived(getTranslations());
</script>

<svelte:head>
    <title>{t.about.title} • Cahyadi Prasetyo</title>
</svelte:head>

<div class="page-wrapper">
    <div class="container">
        <div class="about-intro">
            <div class="intro-text reveal">
                <span class="section-label">// {t.about.label}</span>
                <h1 class="about-title">{t.about.title}</h1>
                {#each t.about.bio.split("\n\n") as paragraph}
                    <p class="bio-paragraph">{paragraph}</p>
                {/each}
            </div>
            <div class="intro-photo reveal-right">
                <img src="/my-self.png" alt="Cahyadi Prasetyo" />
            </div>
        </div>
    </div>

    <!-- Experience -->
    <div class="timeline-section section">
        <hr class="section-divider" />
        <div class="container">
            <div class="timeline-header">
                <span class="section-label">// {t.about.experienceLabel}</span>
            </div>
            <div class="timeline">
                {#each t.about.experience as exp, i}
                    <div
                        class="timeline-item reveal"
                        style="transition-delay: {i * 80}ms"
                    >
                        <div class="timeline-left">
                            <span class="timeline-period">{exp.period}</span>
                        </div>
                        <div class="timeline-right card">
                            <h3 class="timeline-role">{exp.role}</h3>
                            <p class="timeline-company">{exp.company}</p>
                            <p class="timeline-desc">{exp.desc}</p>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </div>

    <!-- Education -->
    <div class="timeline-section section">
        <hr class="section-divider" />
        <div class="container">
            <div class="timeline-header">
                <span class="section-label">// {t.about.educationLabel}</span>
            </div>
            <div class="timeline">
                {#each t.about.education as edu, i}
                    <div
                        class="timeline-item reveal"
                        style="transition-delay: {i * 80}ms"
                    >
                        <div class="timeline-left">
                            <span class="timeline-period">{edu.period}</span>
                        </div>
                        <div class="timeline-right card">
                            <h3 class="timeline-role">{edu.degree}</h3>
                            <p class="timeline-company">{edu.school}</p>
                            <p class="timeline-desc">{edu.desc}</p>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </div>

    <FAQ />
    <FooterCTA />
</div>

<style>
    .page-wrapper {
        padding-top: calc(var(--nav-height) + var(--space-3xl));
    }

    .about-intro {
        display: grid;
        grid-template-columns: 1.2fr 0.8fr;
        gap: var(--space-3xl);
        align-items: start;
        margin-bottom: var(--space-2xl);
    }

    .about-title {
        font-size: var(--text-4xl);
        font-weight: 800;
        margin-bottom: var(--space-xl);
    }

    .bio-paragraph {
        font-size: var(--text-base);
        color: var(--color-text-secondary);
        line-height: 1.8;
        margin-bottom: var(--space-md);
    }

    .intro-photo img {
        width: 100%;
        max-width: 380px;
        border-radius: var(--radius-2xl);
        object-fit: cover;
        aspect-ratio: 3/4;
        border: 1px solid var(--color-border);
    }

    /* Timeline */
    .timeline-header {
        padding-top: var(--space-2xl);
        margin-bottom: var(--space-xl);
    }

    .timeline {
        display: flex;
        flex-direction: column;
        gap: var(--space-md);
    }

    .timeline-item {
        display: grid;
        grid-template-columns: 160px 1fr;
        gap: var(--space-xl);
    }

    .timeline-left {
        padding-top: var(--space-lg);
    }

    .timeline-period {
        font-family: var(--font-mono);
        font-size: var(--text-xs);
        font-weight: 500;
        color: var(--color-text-muted);
    }

    .timeline-right {
        padding: var(--space-lg);
    }

    .timeline-role {
        font-size: var(--text-base);
        font-weight: 600;
        margin-bottom: 2px;
    }

    .timeline-company {
        font-size: var(--text-sm);
        color: var(--color-text-muted);
        margin-bottom: var(--space-sm);
    }

    .timeline-desc {
        font-size: var(--text-sm);
        color: var(--color-text-secondary);
        line-height: 1.7;
    }

    @media (max-width: 768px) {
        .about-intro {
            grid-template-columns: 1fr;
        }

        .intro-photo {
            order: -1;
            display: flex;
            justify-content: center;
        }

        .intro-photo img {
            max-width: 260px;
        }

        .timeline-item {
            grid-template-columns: 1fr;
            gap: var(--space-sm);
        }

        .timeline-left {
            padding-top: 0;
        }
    }
</style>
