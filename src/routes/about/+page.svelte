<script lang="ts">
    import { getTranslations } from "$lib/i18n/index.svelte";
    import TechStack from "$lib/components/TechStack.svelte";
    import FooterCTA from "$lib/components/FooterCTA.svelte";

    const t = $derived(getTranslations());

    let expandedExp = $state<number>(-1);

    function toggleExp(i: number) {
        expandedExp = expandedExp === i ? -1 : i;
    }
</script>

<svelte:head>
    <title>{t.about.title} • Cahyadi Prasetyo</title>
</svelte:head>

<div class="page">
    <div class="container">
        <!-- Bio -->
        <section class="bio-section reveal">
            <h1 class="page-title">{t.about.title}</h1>
            <div class="bio-layout">
                <img src="/my-self.png" alt="Cahyadi Prasetyo" class="bio-photo" />
                <div class="bio-text">
                    {#each t.about.bio.split("\n\n") as paragraph}
                        <p>{paragraph}</p>
                    {/each}
                </div>
            </div>
        </section>

        <hr class="section-divider" />

        <!-- Tech Stack (moved up) -->
        <section class="stack-section reveal">
            <h2 class="section-heading">{t.about.techStackLabel}</h2>
            <TechStack />
        </section>

        <hr class="section-divider" />

        <!-- Experience -->
        <section class="exp-section reveal">
            <h2 class="section-heading">{t.about.titleExp}</h2>
            <div class="exp-list">
                {#each t.about.experience as exp, i}
                    <div class="exp-item" class:expanded={expandedExp === i}>
                        <button class="exp-header" onclick={() => toggleExp(i)}>
                            <div class="exp-logo-wrap">
                                {#if exp.logo}
                                    <img src={exp.logo} alt={exp.company} class="exp-logo" />
                                {:else}
                                    <div class="exp-logo-placeholder"></div>
                                {/if}
                            </div>
                            <div class="exp-info">
                                <h3 class="exp-role">{exp.role}</h3>
                                <p class="exp-company">{exp.company}</p>
                                <p class="exp-period">{exp.period}</p>
                            </div>
                            <span class="exp-toggle">{expandedExp === i ? '−' : '+'}</span>
                        </button>

                        {#if expandedExp === i}
                            <div class="exp-details">
                                {#if exp.points}
                                    <ul class="exp-points">
                                        {#each exp.points as point}
                                            <li>{point}</li>
                                        {/each}
                                    </ul>
                                {/if}
                                {#if exp.skills}
                                    <div class="exp-skills">
                                        <strong>Skills:</strong> {exp.skills}
                                    </div>
                                {/if}
                            </div>
                        {/if}
                    </div>
                {/each}
            </div>
        </section>

        <hr class="section-divider" />

        <!-- Education -->
        <section class="edu-section reveal">
            <h2 class="section-heading">{t.about.titleEdu}</h2>
            <div class="edu-list">
                {#each t.about.education as edu}
                    <div class="edu-item">
                        <div class="edu-logo-wrap">
                            {#if edu.logo}
                                <img src={edu.logo} alt={edu.school} class="edu-logo" />
                            {:else}
                                <div class="edu-logo-placeholder"></div>
                            {/if}
                        </div>
                        <div class="edu-info">
                            <h3 class="edu-degree">{edu.degree}</h3>
                            <p class="edu-school">{edu.school}</p>
                            <p class="edu-period">{edu.period}</p>
                            <p class="edu-desc">{edu.desc}</p>
                        </div>
                    </div>
                {/each}
            </div>
        </section>
    </div>

    <FooterCTA />
</div>

<style>
    .page {
        padding-top: calc(var(--nav-height) + var(--space-3xl));
        padding-bottom: var(--space-2xl);
    }

    .page-title {
        font-size: var(--text-4xl);
        font-weight: 800;
        letter-spacing: -0.03em;
        margin-bottom: var(--space-xl);
    }

    .bio-layout {
        display: grid;
        grid-template-columns: 160px 1fr;
        gap: var(--space-2xl);
        align-items: start;
    }

    .bio-photo {
        width: 160px;
        height: 200px;
        object-fit: cover;
        border-radius: var(--radius-lg);
        border: 1px solid var(--border);
    }

    .bio-text {
        display: flex;
        flex-direction: column;
        gap: var(--space-md);
    }

    .bio-text p {
        font-size: var(--text-base);
        color: var(--text-secondary);
        line-height: 1.8;
    }

    .section-heading {
        font-size: var(--text-xl);
        font-weight: 700;
        margin-bottom: var(--space-xl);
        padding-top: var(--space-xl);
    }

    /* Experience */
    .exp-list {
        display: flex;
        flex-direction: column;
    }

    .exp-item {
        border-bottom: 1px solid var(--border);
    }

    .exp-item:first-child {
        border-top: 1px solid var(--border);
    }

    .exp-header {
        width: 100%;
        display: flex;
        align-items: center;
        gap: var(--space-lg);
        padding: var(--space-lg) 0;
        text-align: left;
        background: none;
        border: none;
        cursor: pointer;
        transition: background var(--transition-fast);
    }

    .exp-header:hover {
        background: var(--bg-alt);
    }

    .exp-logo-wrap {
        flex-shrink: 0;
        width: 48px;
        height: 48px;
        border-radius: var(--radius-md);
        overflow: hidden;
        border: 1px solid var(--border);
        background: var(--white);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .exp-logo {
        width: 100%;
        height: 100%;
        object-fit: contain;
        padding: 4px;
    }

    .exp-logo-placeholder {
        width: 100%;
        height: 100%;
        background: var(--bg-alt);
    }

    .exp-info {
        flex: 1;
        min-width: 0;
    }

    .exp-role {
        font-size: var(--text-base);
        font-weight: 600;
        color: var(--text);
        margin-bottom: 2px;
    }

    .exp-company {
        font-size: var(--text-sm);
        color: var(--text-secondary);
        margin-bottom: 2px;
    }

    .exp-period {
        font-size: var(--text-xs);
        color: var(--text-muted);
    }

    .exp-toggle {
        font-size: var(--text-xl);
        color: var(--text-muted);
        width: 24px;
        text-align: center;
        flex-shrink: 0;
    }

    .exp-details {
        padding: 0 0 var(--space-xl) 0;
        padding-left: calc(48px + var(--space-lg));
        display: flex;
        flex-direction: column;
        gap: var(--space-lg);
        animation: fadeIn 0.25s ease;
    }

    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(-4px); }
        to { opacity: 1; transform: translateY(0); }
    }

    .exp-points {
        list-style-type: disc;
        padding-left: var(--space-xl);
        display: flex;
        flex-direction: column;
        gap: var(--space-sm);
        margin-bottom: var(--space-lg);
    }

    .exp-points li {
        font-size: var(--text-sm);
        color: var(--text-secondary);
        line-height: 1.7;
    }

    .exp-points li::marker {
        color: var(--text-muted);
    }

    .exp-skills {
        font-size: var(--text-sm);
        color: var(--text-secondary);
        background: var(--bg-alt);
        padding: var(--space-md) var(--space-lg);
        border-radius: var(--radius-md);
        display: inline-block;
        width: 100%;
        line-height: 1.6;
    }

    .exp-skills strong {
        color: var(--text);
        font-weight: 600;
        margin-right: 4px;
    }

    /* Education */
    .edu-list {
        display: flex;
        flex-direction: column;
    }

    .edu-item {
        display: flex;
        align-items: center;
        gap: var(--space-lg);
        padding: var(--space-lg) 0;
        border-bottom: 1px solid var(--border);
    }

    .edu-item:first-child {
        border-top: 1px solid var(--border);
    }

    .edu-logo-wrap {
        flex-shrink: 0;
        width: 48px;
        height: 48px;
        border-radius: var(--radius-md);
        overflow: hidden;
        border: 1px solid var(--border);
        background: var(--white);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .edu-logo {
        width: 100%;
        height: 100%;
        object-fit: contain;
        padding: 4px;
    }

    .edu-logo-placeholder {
        width: 100%;
        height: 100%;
        background: var(--bg-alt);
    }

    .edu-info {
        flex: 1;
        min-width: 0;
    }

    .edu-degree {
        font-size: var(--text-base);
        font-weight: 600;
        color: var(--text);
        margin-bottom: 2px;
    }

    .edu-school {
        font-size: var(--text-sm);
        color: var(--text-secondary);
        margin-bottom: 2px;
    }

    .edu-period {
        font-size: var(--text-xs);
        color: var(--text-muted);
        margin-bottom: var(--space-xs);
    }

    .edu-desc {
        font-size: var(--text-sm);
        color: var(--text-muted);
    }

    /* Responsive */
    @media (max-width: 768px) {
        .bio-layout {
            grid-template-columns: 1fr;
        }

        .bio-photo {
            width: 120px;
            height: 150px;
        }

        .exp-details {
            padding-left: var(--space-lg);
        }
    }
</style>
