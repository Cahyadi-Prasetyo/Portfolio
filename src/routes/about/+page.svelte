<script lang="ts">
    import { getTranslations } from "$lib/i18n/index.svelte";
    import TechStack from "$lib/components/TechStack.svelte";

    const t = $derived(getTranslations());

    let expandedExp = $state<number | null>(null);

    function toggleExp(id: number) {
        expandedExp = expandedExp === id ? null : id;
    }
</script>

<svelte:head>
    <title>{t.about.title} • Cahyadi Prasetyo</title>
</svelte:head>

<div class="page">
    <div class="bg-grid"></div>
    <div class="container">
        <!-- Bio -->
        <section class="bio-section reveal">
            <span class="page-eyebrow">About</span>
            <h1 class="page-title text-gradient">{t.about.title}</h1>
            <div class="bio-layout">
                <div class="bio-photo-wrap">
                    <img src="/my.webp" alt="Cahyadi Prasetyo" class="bio-photo" />
                </div>
                <div class="bio-text">
                    {#each t.about.bio.split("\n\n") as paragraph}
                        <p>{paragraph}</p>
                    {/each}
                </div>
            </div>
        </section>

        <hr class="section-divider" />

        <!-- Tech Stack -->
        <section class="stack-section reveal">
            <span class="section-eyebrow">Stack</span>
            <h2 class="section-heading">{t.about.techStackLabel}</h2>
            <TechStack />
        </section>

        <hr class="section-divider" />

        <!-- Experience -->
        <section class="exp-section reveal">
            <span class="section-eyebrow">Career</span>
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
                            <div class="exp-details fade-in">
                                {#if exp.points}
                                    <ul class="exp-points">
                                        {#each exp.points as point}
                                            <li>{point}</li>
                                        {/each}
                                    </ul>
                                {/if}
                                {#if exp.skills}
                                    <div class="exp-skills">
                                        <strong>{t.about.skillsLabel || 'Kemampuan'}</strong> {exp.skills}
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
            <span class="section-eyebrow">Education</span>
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

        <hr class="section-divider" />

        <!-- Certifications -->
        {#if t.about.certifications && t.about.certifications.length > 0}
            <section class="cert-section reveal">
                <span class="section-eyebrow">Certifications</span>
                <h2 class="section-heading">{t.about.titleCert}</h2>
                <div class="edu-list">
                    {#each t.about.certifications as cert}
                        <div class="edu-item">
                            <div class="edu-logo-wrap">
                                {#if cert.logo}
                                    <a href={cert.logo} target="_blank" rel="noopener noreferrer" style="display: block; width: 100%; height: 100%;">
                                        <img src={cert.logo} alt={cert.issuer} class="edu-logo" style="object-fit: cover;" />
                                    </a>
                                {:else}
                                    <div class="edu-logo-placeholder" style="background: var(--bg-alt); display:flex; align-items:center; justify-content:center; color: var(--text-muted); font-size: 10px; font-weight: bold; text-align: center;">CERT</div>
                                {/if}
                            </div>
                            <div class="edu-info">
                                <h3 class="edu-degree">{cert.title}</h3>
                                <p class="edu-school">{cert.issuer}</p>
                                <p class="edu-period">{cert.year}</p>
                                {#if cert.desc}
                                    <p class="edu-desc">{cert.desc}</p>
                                {/if}
                                {#if cert.logo}
                                    <a href={cert.logo} target="_blank" rel="noopener noreferrer" style="font-size: var(--body-sm); color: var(--color-ink); text-decoration: underline; margin-top: 4px; display: inline-block;">Lihat Sertifikat &rarr;</a>
                                {/if}
                            </div>
                        </div>
                    {/each}
                </div>
            </section>
        {/if}
    </div>
</div>

<style>
    .page {
        padding-top: calc(var(--nav-height) + var(--space-4xl));
        padding-bottom: var(--space-2xl);
    }

    /* Page header — Vercel display-xl */
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
        line-height: 1.1;
        letter-spacing: -2.4px;
        margin-bottom: var(--space-3xl);
    }

    /* Bio layout */
    .bio-layout {
        display: grid;
        grid-template-columns: 180px 1fr;
        gap: var(--space-3xl);
        align-items: start;
    }

    .bio-photo-wrap {
        position: sticky;
        top: calc(var(--nav-height) + var(--space-lg));
    }

    .bio-photo {
        width: 180px;
        height: 220px;
        object-fit: cover;
        object-position: 30% 25%;
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-level-2);
    }

    .bio-text {
        display: flex;
        flex-direction: column;
        gap: var(--space-md);
    }

    .bio-text p {
        font-size: var(--body-md);
        color: var(--color-body);
        line-height: 24px;
        text-align: justify;
    }

    /* Section headings */
    .section-eyebrow {
        font-family: var(--font-mono);
        font-size: var(--caption);
        font-weight: 400;
        line-height: 16px;
        color: var(--color-mute);
        display: block;
        margin-bottom: var(--space-xs);
    }

    .section-heading {
        font-size: var(--display-md);
        font-weight: 600;
        line-height: 32px;
        letter-spacing: -0.96px;
        color: var(--color-ink);
        margin-bottom: var(--space-xl);
        padding-top: var(--space-xl);
    }

    /* Experience */
    .exp-list {
        display: flex;
        flex-direction: column;
    }

    .exp-item {
        border-bottom: 1px solid var(--color-hairline);
    }

    .exp-item:first-child {
        border-top: 1px solid var(--color-hairline);
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
        border-radius: var(--radius-sm);
    }

    .exp-header:hover {
        background: var(--color-canvas-soft-2);
    }

    .exp-logo-wrap {
        flex-shrink: 0;
        width: 48px;
        height: 48px;
        border-radius: var(--radius-md);
        overflow: hidden;
        background: var(--color-canvas);
        box-shadow: var(--shadow-level-1);
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
        background: var(--color-canvas-soft-2);
    }

    .exp-info {
        flex: 1;
        min-width: 0;
    }

    .exp-role {
        font-size: var(--body-md);
        font-weight: 500;
        color: var(--color-ink);
        line-height: 24px;
        margin-bottom: 2px;
    }

    .exp-company {
        font-size: var(--body-sm);
        color: var(--color-body);
        letter-spacing: -0.28px;
        margin-bottom: 2px;
    }

    .exp-period {
        font-family: var(--font-mono);
        font-size: var(--caption);
        color: var(--color-mute);
    }

    .exp-toggle {
        font-size: var(--display-sm);
        color: var(--color-mute);
        width: 24px;
        text-align: center;
        flex-shrink: 0;
        font-weight: 300;
    }

    .exp-details {
        padding: 0 0 var(--space-xl) 0;
        padding-left: calc(48px + var(--space-lg));
        display: flex;
        flex-direction: column;
        gap: var(--space-lg);
    }

    .fade-in {
        animation: fadeIn 0.3s cubic-bezier(0.2, 1, 0.3, 1) both;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(-8px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .exp-points {
        list-style-type: disc;
        padding-left: var(--space-xl);
        display: flex;
        flex-direction: column;
        gap: var(--space-sm);
        margin-bottom: var(--space-sm);
    }

    .exp-points li {
        font-size: var(--body-sm);
        color: var(--color-body);
        line-height: 20px;
        letter-spacing: -0.28px;
    }

    .exp-points li::marker {
        color: var(--color-mute);
    }

    .exp-skills {
        font-size: var(--body-sm);
        color: var(--color-body);
        background: var(--color-canvas-soft-2);
        padding: var(--space-md) var(--space-lg);
        border-radius: var(--radius-md);
        display: inline-block;
        width: 100%;
        line-height: 20px;
        letter-spacing: -0.28px;
    }

    .exp-skills strong {
        color: var(--color-ink);
        font-weight: 500;
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
        border-bottom: 1px solid var(--color-hairline);
    }

    .edu-item:first-child {
        border-top: 1px solid var(--color-hairline);
    }

    .edu-logo-wrap {
        flex-shrink: 0;
        width: 48px;
        height: 48px;
        border-radius: var(--radius-md);
        overflow: hidden;
        background: var(--color-canvas);
        box-shadow: var(--shadow-level-1);
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
        background: var(--color-canvas-soft-2);
    }

    .edu-info {
        flex: 1;
        min-width: 0;
    }

    .edu-degree {
        font-size: var(--body-md);
        font-weight: 500;
        color: var(--color-ink);
        line-height: 24px;
        margin-bottom: 2px;
    }

    .edu-school {
        font-size: var(--body-sm);
        color: var(--color-body);
        letter-spacing: -0.28px;
        margin-bottom: 2px;
    }

    .edu-period {
        font-family: var(--font-mono);
        font-size: var(--caption);
        color: var(--color-mute);
        margin-bottom: var(--space-xs);
    }

    .edu-desc {
        font-size: var(--body-sm);
        color: var(--color-mute);
        letter-spacing: -0.28px;
    }

    /* Responsive */
    @media (max-width: 768px) {
        .page {
            padding-top: calc(var(--nav-height) + var(--space-3xl));
        }

        .page-title {
            font-size: clamp(28px, 6vw, 36px);
            margin-bottom: var(--space-2xl);
        }

        .bio-layout {
            grid-template-columns: 1fr;
            gap: var(--space-xl);
        }

        .bio-photo-wrap {
            position: relative;
            top: 0;
        }

        .bio-photo {
            width: 120px;
            height: 150px;
        }

        .bio-text p {
            font-size: 14px;
            line-height: 22px;
        }

        .section-heading {
            font-size: 20px;
            line-height: 28px;
        }

        .exp-header {
            gap: var(--space-md);
        }

        .exp-logo-wrap {
            width: 40px;
            height: 40px;
        }

        .exp-role {
            font-size: 14px;
            line-height: 20px;
        }

        .exp-company {
            font-size: 13px;
        }

        .exp-details {
            padding-left: var(--space-md);
        }

        .exp-points {
            padding-left: var(--space-lg);
        }

        .exp-points li {
            font-size: 13px;
            line-height: 19px;
        }

        .exp-skills {
            font-size: 13px;
            padding: var(--space-sm) var(--space-md);
        }

        .edu-logo-wrap {
            width: 40px;
            height: 40px;
        }

        .edu-degree {
            font-size: 14px;
        }

        .edu-school {
            font-size: 13px;
        }
    }
</style>
