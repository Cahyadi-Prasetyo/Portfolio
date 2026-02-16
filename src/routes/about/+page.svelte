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
        <!-- Intro -->
        <div class="about-intro reveal">
            <div class="intro-photo">
                <img src="/my-self.png" alt="Cahyadi Prasetyo" />
            </div>
            <div class="intro-text">
                <span class="section-label">{t.about.label}</span>
                <h1 class="section-title">{t.about.title}</h1>
                {#each t.about.bio.split("\n\n") as paragraph}
                    <p class="bio-paragraph">{paragraph}</p>
                {/each}
            </div>
        </div>
    </div>

    <!-- Experience -->
    <div class="timeline-section section">
        <div class="container">
            <h2 class="timeline-title reveal">{t.about.experienceLabel}</h2>
            <div class="timeline">
                {#each t.about.experience as exp}
                    <div class="timeline-item reveal">
                        <div class="timeline-period">{exp.period}</div>
                        <div class="timeline-content">
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
    <div class="timeline-section section section-alt">
        <div class="container">
            <h2 class="timeline-title reveal">{t.about.educationLabel}</h2>
            <div class="timeline">
                {#each t.about.education as edu}
                    <div class="timeline-item reveal">
                        <div class="timeline-period">{edu.period}</div>
                        <div class="timeline-content">
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

    /* Intro */
    .about-intro {
        display: grid;
        grid-template-columns: auto 1fr;
        gap: var(--space-3xl);
        align-items: start;
        margin-bottom: var(--space-3xl);
    }

    .intro-photo img {
        width: 220px;
        border-radius: var(--radius-xl);
        box-shadow: var(--shadow-lg);
        object-fit: cover;
        aspect-ratio: 3/4;
    }

    .bio-paragraph {
        font-size: var(--text-base);
        color: var(--color-text-muted);
        line-height: 1.8;
        margin-bottom: var(--space-md);
    }

    /* Timeline */
    .timeline-section {
        border-top: 1px solid var(--color-border);
    }

    .timeline-title {
        font-size: var(--text-xl);
        margin-bottom: var(--space-2xl);
    }

    .timeline {
        max-width: 700px;
    }

    .timeline-item {
        display: grid;
        grid-template-columns: 160px 1fr;
        gap: var(--space-xl);
        padding-bottom: var(--space-2xl);
        margin-bottom: var(--space-2xl);
        border-bottom: 1px solid var(--color-border);
    }

    .timeline-item:last-child {
        border-bottom: none;
        margin-bottom: 0;
        padding-bottom: 0;
    }

    .timeline-period {
        font-size: var(--text-sm);
        font-weight: 600;
        color: var(--color-accent);
        white-space: nowrap;
    }

    .timeline-role {
        font-size: var(--text-base);
        font-weight: 600;
        margin-bottom: var(--space-xs);
    }

    .timeline-company {
        font-size: var(--text-sm);
        color: var(--color-text-muted);
        margin-bottom: var(--space-sm);
    }

    .timeline-desc {
        font-size: var(--text-sm);
        color: var(--color-text-light);
        line-height: 1.7;
    }

    @media (max-width: 768px) {
        .about-intro {
            grid-template-columns: 1fr;
            text-align: center;
        }

        .intro-photo {
            display: flex;
            justify-content: center;
        }

        .intro-photo img {
            width: 180px;
        }

        .timeline-item {
            grid-template-columns: 1fr;
            gap: var(--space-sm);
        }
    }
</style>
