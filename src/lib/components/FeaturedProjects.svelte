<script lang="ts">
    import { getTranslations, getCurrentLang } from "$lib/i18n/index.svelte";
    import { getFeaturedProjects } from "$lib/data/projects";

    const t = $derived(getTranslations());
    const currentLang = $derived(getCurrentLang());
    const featured = getFeaturedProjects().slice(0, 3);
</script>

<section class="work" id="work">
    <div class="container">
        <hr class="section-divider" />
        <div class="work-header reveal">
            <span class="section-label">{t.selectedWork.label}</span>
            <h2 class="section-title">{t.selectedWork.title}</h2>
        </div>

        <div class="project-list">
            {#each featured as project, i}
                <a href="/projects/{project.slug}" class="project-row reveal delay-{i + 1}">
                    <div class="row-thumb">
                        <img src={project.imageUrl} alt={project.title} loading="lazy" />
                    </div>
                    <div class="row-content">
                        <div class="row-header">
                            <h3 class="row-title">{project.title}</h3>
                            <span class="row-cat">{project.category}</span>
                            <span class="row-status status-{project.status}">{project.status.replace('-', ' ')}</span>
                        </div>
                        <p class="row-desc">
                            {currentLang === "id" ? project.shortDesc.id : project.shortDesc.en}
                        </p>
                        <div class="row-tech">
                            {#each project.tech as tech}
                                <span class="tag">{tech}</span>
                            {/each}
                        </div>
                    </div>
                    <div class="row-action">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                    </div>
                </a>
            {/each}
        </div>

        <div class="work-footer reveal delay-4">
            <a href="/projects" class="btn btn-outline">
                {t.selectedWork.viewAll}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
        </div>
    </div>
</section>

<style>
    .work {
        padding: var(--space-3xl) 0 var(--space-5xl);
        background: transparent;
    }

    .section-divider {
        margin-bottom: var(--space-4xl);
    }

    .work-header {
        margin-bottom: var(--space-3xl);
    }

    /* List Layout (Shared styling concept with /projects) */
    .project-list {
        display: flex;
        flex-direction: column;
        border-top: 1px solid var(--color-hairline);
    }

    .project-row {
        display: flex;
        align-items: center;
        gap: var(--space-2xl);
        padding: var(--space-2xl) 0;
        border-bottom: 1px solid var(--color-hairline);
        text-decoration: none;
        transition: background var(--transition-fast);
    }

    .project-row:hover {
        background: var(--color-canvas-soft-2);
        margin: 0 calc(var(--space-md) * -1);
        padding: var(--space-2xl) var(--space-md);
        border-radius: var(--radius-md);
        border-bottom-color: transparent;
    }

    .row-thumb {
        width: 120px;
        height: 120px;
        flex-shrink: 0;
        border-radius: var(--radius-md);
        overflow: hidden;
        background: var(--color-canvas-soft-2);
        box-shadow: var(--shadow-level-1);
        transition: transform var(--transition-base), box-shadow var(--transition-base);
    }

    .project-row:hover .row-thumb {
        transform: scale(1.05);
        box-shadow: var(--shadow-level-2);
    }

    .row-thumb img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .row-content {
        flex: 1;
        min-width: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .row-header {
        display: flex;
        align-items: center;
        gap: var(--space-sm);
        margin-bottom: var(--space-xs);
        flex-wrap: wrap;
    }

    .row-title {
        font-size: var(--body-lg);
        font-weight: 500;
        color: var(--color-ink);
        line-height: 28px;
        letter-spacing: -0.28px;
    }

    .row-cat {
        font-family: var(--font-mono);
        font-size: 11px;
        font-weight: 500;
        color: var(--color-mute);
        text-transform: uppercase;
        letter-spacing: 0.5px;
        padding: 2px 6px;
        background: var(--color-canvas);
        border: 1px solid var(--color-hairline);
        border-radius: 4px;
    }

    .row-status {
        font-family: var(--font-mono);
        font-size: 11px;
        font-weight: 500;
        text-transform: capitalize;
        padding: 2px 6px;
        border-radius: 4px;
        border: 1px solid transparent;
    }

    .status-concept {
        color: var(--color-warning);
        background: color-mix(in srgb, var(--color-warning) 12%, transparent);
        border-color: color-mix(in srgb, var(--color-warning) 25%, transparent);
    }

    .status-in-progress {
        color: var(--color-info);
        background: color-mix(in srgb, var(--color-info) 12%, transparent);
        border-color: color-mix(in srgb, var(--color-info) 25%, transparent);
    }

    .status-shipped {
        color: var(--color-success);
        background: color-mix(in srgb, var(--color-success) 12%, transparent);
        border-color: color-mix(in srgb, var(--color-success) 25%, transparent);
    }

    .row-desc {
        font-size: var(--body-sm);
        color: var(--color-body);
        line-height: 24px;
        margin-bottom: var(--space-md);
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }

    .row-tech {
        display: flex;
        flex-wrap: wrap;
        gap: var(--space-xs);
    }

    .row-action {
        color: var(--color-mute);
        transition: transform var(--transition-base), color var(--transition-base);
    }

    .project-row:hover .row-action {
        color: var(--color-ink);
        transform: translateX(4px);
    }

    .work-footer {
        margin-top: var(--space-2xl);
        display: flex;
        justify-content: center;
    }

    @media (max-width: 768px) {
        .project-row {
            flex-direction: column;
            align-items: flex-start;
            gap: var(--space-md);
            padding: var(--space-lg) 0;
        }

        .project-row:hover {
            margin: 0;
            padding: var(--space-lg) 0;
            background: transparent;
            border-bottom-color: var(--color-hairline);
            border-radius: 0;
        }

        .row-thumb {
            width: 100%;
            height: 150px;
            border-radius: var(--radius-md);
        }

        .row-header {
            gap: var(--space-xs);
        }

        .row-title {
            font-size: var(--body-md);
        }

        .row-desc {
            font-size: 14px;
            line-height: 22px;
            -webkit-line-clamp: 3;
        }

        .row-action {
            display: none;
        }

        .work-footer {
            margin-top: var(--space-xl);
        }
    }
</style>
