<script lang="ts">
    import { page } from "$app/state";
    import { getTranslations, getCurrentLang } from "$lib/i18n/index.svelte";
    import { getProjectBySlug } from "$lib/data/projects";

    const t = $derived(getTranslations());
    const currentLang = $derived(getCurrentLang());
    const slug = $derived(page.params.slug ?? "");
    const project = $derived(getProjectBySlug(slug));
</script>

<svelte:head>
    <title>{project ? project.title : "Project"} • Cahyadi Prasetyo</title>
</svelte:head>

<div class="page-wrapper">
    <div class="container">
        {#if project}
            <!-- Back -->
            <a href="/projects" class="back-link reveal">
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    ><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></svg
                >
                {t.projects.backToProjects}
            </a>

            <!-- Hero Image -->
            <div class="project-hero reveal">
                <span class="hero-initial">{project.title.charAt(0)}</span>
            </div>

            <!-- Title + Actions -->
            <div class="project-header reveal">
                <h1 class="project-title">{project.title}</h1>
                <div class="project-actions">
                    {#if project.liveUrl}
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener"
                            class="btn btn-primary"
                        >
                            {t.projects.liveDemo}
                            <svg
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                ><line x1="7" y1="17" x2="17" y2="7" /><polyline
                                    points="7 7 17 7 17 17"
                                /></svg
                            >
                        </a>
                    {/if}
                    {#if project.githubUrl}
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener"
                            class="btn btn-outline"
                        >
                            {t.projects.sourceCode}
                            <svg
                                width="14"
                                height="14"
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
                    {/if}
                </div>
            </div>

            <hr class="divider" />

            <!-- Description first -->
            <div class="project-section reveal">
                <h2 class="detail-label">{t.projects.description}</h2>
                <p class="detail-text">
                    {currentLang === "id"
                        ? project.description.id
                        : project.description.en}
                </p>
            </div>

            <!-- Tech Stack second -->
            <div class="project-section reveal">
                <h2 class="detail-label">{t.projects.techStack}</h2>
                <div class="tech-grid">
                    {#each project.tech as tech}
                        <span class="tech-item">{tech}</span>
                    {/each}
                </div>
            </div>
        {:else}
            <div class="not-found">
                <h1>Project not found</h1>
                <a href="/projects" class="btn btn-primary"
                    >{t.projects.backToProjects}</a
                >
            </div>
        {/if}
    </div>
</div>

<style>
    .page-wrapper {
        padding-top: calc(var(--nav-height) + var(--space-2xl));
        padding-bottom: var(--space-5xl);
        min-height: 100vh;
    }

    .back-link {
        display: inline-flex;
        align-items: center;
        gap: var(--space-sm);
        font-size: var(--text-sm);
        font-weight: 500;
        color: var(--color-text-muted);
        margin-bottom: var(--space-2xl);
        transition: color var(--transition-fast);
    }

    .back-link:hover {
        color: var(--color-accent);
    }

    .project-hero {
        width: 100%;
        height: 350px;
        border-radius: var(--radius-lg);
        background: linear-gradient(
            135deg,
            var(--color-bg-alt),
            var(--color-border)
        );
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: var(--space-2xl);
        overflow: hidden;
    }

    .hero-initial {
        font-family: var(--font-heading);
        font-size: 6rem;
        font-weight: 700;
        color: var(--color-accent);
        opacity: 0.15;
    }

    .project-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        gap: var(--space-xl);
        margin-bottom: var(--space-xl);
    }

    .project-title {
        font-size: var(--text-4xl);
    }

    .project-actions {
        display: flex;
        gap: var(--space-sm);
        flex-shrink: 0;
    }

    .divider {
        margin-bottom: var(--space-2xl);
    }

    .project-section {
        margin-bottom: var(--space-2xl);
    }

    .detail-label {
        font-size: var(--text-sm);
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        color: var(--color-text-muted);
        margin-bottom: var(--space-md);
    }

    .detail-text {
        font-size: var(--text-lg);
        line-height: 1.9;
        color: var(--color-text-muted);
        max-width: 750px;
    }

    .tech-grid {
        display: flex;
        flex-wrap: wrap;
        gap: var(--space-sm);
    }

    .tech-item {
        display: inline-flex;
        align-items: center;
        padding: 8px 18px;
        font-size: var(--text-sm);
        font-weight: 500;
        color: var(--color-accent);
        background: var(--color-accent-light);
        border: 1px solid var(--color-accent-border);
        border-radius: var(--radius-md);
    }

    .not-found {
        text-align: center;
        padding: var(--space-5xl) 0;
    }

    .not-found h1 {
        margin-bottom: var(--space-xl);
    }

    @media (max-width: 768px) {
        .project-header {
            flex-direction: column;
        }

        .project-title {
            font-size: var(--text-3xl);
        }

        .project-hero {
            height: 220px;
        }
    }
</style>
