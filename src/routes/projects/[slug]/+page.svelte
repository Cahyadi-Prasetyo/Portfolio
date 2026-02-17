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

            <div class="project-header reveal">
                <h1 class="project-title">{project.title}</h1>
                <div class="project-meta">
                    <span class="meta-cat"
                        >{project.category === "web"
                            ? "Web App"
                            : "Mobile App"}</span
                    >
                </div>
            </div>

            <div class="project-actions reveal">
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
                            stroke-width="2.5"
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
                    </a>
                {/if}
            </div>

            <hr class="section-divider" />

            <div class="detail-grid">
                <div class="detail-section reveal">
                    <h2 class="detail-label">// {t.projects.description}</h2>
                    <p class="detail-text">
                        {currentLang === "id"
                            ? project.description.id
                            : project.description.en}
                    </p>
                </div>

                <div class="detail-section reveal-right">
                    <h2 class="detail-label">// {t.projects.techStack}</h2>
                    <div class="tech-list">
                        {#each project.tech as tech}
                            <span class="tag">{tech}</span>
                        {/each}
                    </div>
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
        transition: all var(--transition-fast);
    }

    .back-link:hover {
        color: var(--color-text);
        gap: var(--space-md);
    }

    .project-header {
        margin-bottom: var(--space-xl);
    }

    .project-title {
        font-size: clamp(2.5rem, 5vw, var(--text-5xl));
        font-weight: 800;
        letter-spacing: -0.05em;
        margin-bottom: var(--space-md);
    }

    .meta-cat {
        font-family: var(--font-mono);
        font-size: var(--text-xs);
        font-weight: 500;
        color: var(--color-text-muted);
        text-transform: uppercase;
        letter-spacing: 0.1em;
    }

    .project-actions {
        display: flex;
        gap: var(--space-md);
        margin-bottom: var(--space-2xl);
    }

    .detail-grid {
        display: grid;
        grid-template-columns: 1.5fr 1fr;
        gap: var(--space-4xl);
        padding-top: var(--space-2xl);
    }

    .detail-label {
        font-family: var(--font-mono);
        font-size: var(--text-xs);
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 0.15em;
        color: var(--color-text-muted);
        margin-bottom: var(--space-lg);
    }

    .detail-text {
        font-size: var(--text-lg);
        line-height: 1.8;
        color: var(--color-text-secondary);
    }

    .tech-list {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
    }

    .not-found {
        text-align: center;
        padding: var(--space-5xl) 0;
    }

    .not-found h1 {
        margin-bottom: var(--space-xl);
    }

    @media (max-width: 768px) {
        .project-title {
            font-size: var(--text-3xl);
        }
        .detail-grid {
            grid-template-columns: 1fr;
        }
    }
</style>
