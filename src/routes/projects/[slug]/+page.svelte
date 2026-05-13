<script lang="ts">
    import { page } from "$app/state";
    import { getTranslations, getCurrentLang } from "$lib/i18n/index.svelte";
    import { getProjectBySlug } from "$lib/data/projects";
    import ImageCarousel from "$lib/components/ImageCarousel.svelte";

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
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></svg>
                {t.projects.backToProjects}
            </a>

            <div class="project-header reveal">
                <span class="project-eyebrow">
                    {project.category === "web" ? "Web App" : project.category === "mobile" ? "Mobile App" : "AI Project"}
                </span>
                <h1 class="project-title text-gradient">{project.title}</h1>
            </div>

            <div class="project-actions reveal">
                {#if project.liveUrl}
                    <a href={project.liveUrl} target="_blank" rel="noopener" class="btn btn-primary primary-glow">
                        {t.projects.liveDemo}
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
                    </a>
                {/if}
                {#if project.githubUrl}
                    <a href={project.githubUrl} target="_blank" rel="noopener" class="btn btn-outline">
                        {t.projects.sourceCode}
                    </a>
                {/if}
            </div>

            <div class="project-hero-image reveal delay-1">
                <ImageCarousel images={project.images} fallback={project.imageUrl} />
            </div>

            <hr class="section-divider" />

            <div class="detail-layout">
                <main class="detail-main reveal">
                    <span class="detail-label">About this project</span>
                    <p class="detail-text">
                        {currentLang === "id" ? project.description.id : project.description.en}
                    </p>
                </main>

                <aside class="detail-sidebar reveal delay-1">
                    {#if project.role}
                        <div class="meta-block">
                            <span class="detail-label">Role</span>
                            <span class="meta-value">{currentLang === "id" ? project.role.id : project.role.en}</span>
                        </div>
                    {/if}
                    
                    {#if project.duration}
                        <div class="meta-block">
                            <span class="detail-label">Timeline</span>
                            <span class="meta-value">{currentLang === "id" ? project.duration.id : project.duration.en}</span>
                        </div>
                    {/if}

                    <div class="meta-block">
                        <span class="detail-label">Tech Stack</span>
                        <div class="tech-list">
                            {#each project.tech as tech}
                                <span class="tag">{tech}</span>
                            {/each}
                        </div>
                    </div>
                </aside>
            </div>
        {:else}
            <div class="not-found">
                <h1>Project not found.</h1>
                <a href="/projects" class="btn btn-primary">{t.projects.backToProjects}</a>
            </div>
        {/if}
    </div>
</div>

<style>
    .page-wrapper {
        padding-top: calc(var(--nav-height) + var(--space-3xl));
        padding-bottom: var(--space-5xl);
        min-height: 100vh;
    }

    .back-link {
        display: inline-flex;
        align-items: center;
        gap: var(--space-xs);
        font-size: var(--body-sm);
        font-weight: 400;
        color: var(--color-mute);
        margin-bottom: var(--space-3xl);
        transition: color var(--transition-fast);
        letter-spacing: -0.28px;
    }

    .back-link:hover {
        color: var(--color-ink);
    }

    .project-header {
        margin-bottom: var(--space-xl);
    }

    .project-eyebrow {
        font-family: var(--font-mono);
        font-size: var(--caption);
        font-weight: 400;
        line-height: 16px;
        color: var(--color-mute);
        display: block;
        margin-bottom: var(--space-sm);
    }

    .project-title {
        font-size: clamp(32px, 5vw, 48px);
        font-weight: 600;
        line-height: 1.1;
        letter-spacing: -2.4px;
        margin-bottom: var(--space-sm);
    }

    .project-actions {
        display: flex;
        gap: var(--space-sm);
        margin-bottom: var(--space-3xl);
    }

    .primary-glow {
        transition: all var(--transition-base);
    }

    .primary-glow:hover {
        box-shadow: 0 4px 14px 0 rgba(0,0,0,0.2);
        transform: translateY(-1px);
    }

    .project-hero-image {
        width: 100%;
        margin-bottom: var(--space-4xl);
    }

    .detail-layout {
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: var(--space-5xl);
        padding-top: var(--space-3xl);
    }

    .detail-label {
        font-family: var(--font-mono);
        font-size: var(--caption);
        font-weight: 400;
        line-height: 16px;
        color: var(--color-mute);
        display: block;
        margin-bottom: var(--space-sm);
    }

    .detail-text {
        font-size: var(--body-lg);
        line-height: 28px;
        color: var(--color-body);
    }

    .detail-sidebar {
        display: flex;
        flex-direction: column;
        gap: var(--space-2xl);
    }

    .meta-block {
        display: flex;
        flex-direction: column;
    }

    .meta-value {
        font-size: var(--body-md);
        font-weight: 500;
        color: var(--color-ink);
        line-height: 24px;
    }

    .tech-list {
        display: flex;
        flex-wrap: wrap;
        gap: var(--space-xs);
    }

    .not-found {
        text-align: center;
        padding: var(--space-5xl) 0;
    }

    .not-found h1 {
        margin-bottom: var(--space-xl);
    }

    @media (max-width: 960px) {
        .detail-layout {
            grid-template-columns: 1.5fr 1fr;
            gap: var(--space-3xl);
        }
    }

    @media (max-width: 768px) {
        .detail-layout {
            grid-template-columns: 1fr;
            gap: var(--space-3xl);
        }
    }
</style>
