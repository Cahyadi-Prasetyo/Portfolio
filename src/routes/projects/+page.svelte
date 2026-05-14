<script lang="ts">
    import { onMount } from 'svelte';
    import { getTranslations, getCurrentLang } from "$lib/i18n/index.svelte";
    import { getProjectsByCategory, type Project } from "$lib/data/projects";

    const t = $derived(getTranslations());
    const currentLang = $derived(getCurrentLang());

    let activeFilter = $state<"all" | "web" | "mobile" | "ai">("all");
    let viewMode = $state<"list" | "kanban">("kanban");
    let filteredProjects = $derived(getProjectsByCategory(activeFilter));

    onMount(() => {
        const savedMode = localStorage.getItem('portfolio-view-mode');
        if (savedMode === 'list' || savedMode === 'kanban') {
            viewMode = savedMode;
        }
    });

    $effect(() => {
        localStorage.setItem('portfolio-view-mode', viewMode);
    });

    function setFilter(filter: "all" | "web" | "mobile" | "ai") {
        activeFilter = filter;
    }
</script>

<svelte:head>
    <title>{t.projects.title} • Cahyadi Prasetyo</title>
</svelte:head>

<div class="page">
    <div class="bg-grid"></div>
    <div class="container">
        <section class="header reveal">
            <span class="page-eyebrow">Portfolio</span>
            <div class="header-row">
                <h1 class="page-title text-gradient">{t.projects.title}</h1>
                <div class="view-toggle">
                    <button class:active={viewMode === 'list'} onclick={() => viewMode = 'list'} aria-label="List View">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
                    </button>
                    <button class:active={viewMode === 'kanban'} onclick={() => viewMode = 'kanban'} aria-label="Kanban View">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/></svg>
                    </button>
                </div>
            </div>
            <p class="page-desc">{t.projects.desc}</p>
        </section>

        <!-- Filter tabs -->
        <div class="filters reveal">
            <button class="filter-tab" class:active={activeFilter === "all"} onclick={() => setFilter("all")}>
                {t.projects.filterAll}
            </button>
            <button class="filter-tab" class:active={activeFilter === "web"} onclick={() => setFilter("web")}>
                {t.projects.filterWeb}
            </button>
            <button class="filter-tab" class:active={activeFilter === "mobile"} onclick={() => setFilter("mobile")}>
                {t.projects.filterMobile}
            </button>
            <button class="filter-tab" class:active={activeFilter === "ai"} onclick={() => setFilter("ai")}>
                {t.projects.filterAI}
            </button>
        </div>

        {#if filteredProjects.length === 0}
            <div class="empty-state reveal">
                <p>Belum ada proyek di kategori ini.</p>
            </div>
        {:else}
            {#if viewMode === 'list'}
                <!-- Minimalist List View -->
                <div class="project-list">
                    {#each filteredProjects as project, i (project.slug)}
                        <a href="/projects/{project.slug}" class="project-row fade-in" style="animation-delay: {i * 0.05}s">
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
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                            </div>
                        </a>
                    {/each}
                </div>
            {:else}
                <!-- Kanban View -->
                <div class="kanban-board fade-in">
                    {#each filteredProjects as project, i}
                        <a href="/projects/{project.slug}" class="kanban-card" style="animation-delay: {i * 0.07}s">
                            <div class="k-card-image">
                                <img src={project.imageUrl} alt={project.title} loading="lazy" />
                                <span class="k-status status-{project.status}">{project.status.replace('-', ' ')}</span>
                            </div>
                            <div class="k-card-body">
                                <div class="k-card-meta">
                                    <span class="k-cat">{project.category === 'web' ? 'Web App' : project.category === 'mobile' ? 'Mobile App' : 'AI Project'}</span>
                                    <span class="k-role">{currentLang === 'id' ? project.role.id : project.role.en}</span>
                                </div>
                                <h4 class="k-title">{project.title}</h4>
                                <p class="k-desc">{currentLang === "id" ? project.shortDesc.id : project.shortDesc.en}</p>
                                <div class="k-tech">
                                    {#each project.tech.slice(0, 4) as tech}
                                        <span class="tag">{tech}</span>
                                    {/each}
                                    {#if project.tech.length > 4}
                                        <span class="tag tag-more">+{project.tech.length - 4}</span>
                                    {/if}
                                </div>
                                <div class="k-footer">
                                    <span class="k-duration">{currentLang === 'id' ? project.duration.id : project.duration.en}</span>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="k-arrow"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                                </div>
                            </div>
                        </a>
                    {/each}
                </div>
            {/if}
        {/if}
    </div>
</div>

<style>
    .page {
        padding-top: calc(var(--nav-height) + var(--space-4xl));
        padding-bottom: var(--space-5xl);
        min-height: 100vh;
    }

    .header-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: var(--space-sm);
        gap: var(--space-md);
        flex-wrap: wrap;
    }

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
        margin: 0;
    }

    /* View Toggle */
    .view-toggle {
        display: flex;
        gap: 4px;
        background: var(--color-canvas-soft-2);
        padding: 4px;
        border-radius: var(--radius-sm);
    }

    .view-toggle button {
        background: transparent;
        border: none;
        padding: 6px;
        border-radius: 4px;
        color: var(--color-mute);
        cursor: pointer;
        transition: all var(--transition-fast);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .view-toggle button:hover {
        color: var(--color-ink);
    }

    .view-toggle button.active {
        background: var(--color-canvas);
        color: var(--color-ink);
        box-shadow: var(--shadow-level-1);
    }

    .page-desc {
        font-size: var(--body-lg);
        color: var(--color-body);
        line-height: 28px;
        margin-bottom: var(--space-3xl);
        max-width: 560px;
    }

    /* Filters — tab-ghost pills */
    .filters {
        display: flex;
        gap: var(--space-xs);
        margin-bottom: var(--space-3xl);
        padding: var(--space-xxs);
        background: var(--color-canvas-soft-2);
        border-radius: var(--radius-pill-sm);
        width: fit-content;
    }

    .filter-tab {
        padding: var(--space-xs) var(--space-md);
        font-family: var(--font-sans);
        font-size: var(--body-sm);
        font-weight: 400;
        color: var(--color-body);
        border: none;
        border-radius: var(--radius-pill-sm);
        background: transparent;
        cursor: pointer;
        transition: all var(--transition-fast);
        letter-spacing: -0.28px;
    }

    .filter-tab:hover {
        color: var(--color-ink);
    }

    .filter-tab.active {
        background: var(--color-canvas);
        color: var(--color-ink);
        font-weight: 500;
        box-shadow: var(--shadow-level-2);
    }

    /* Project List Layout */
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
        object-position: top center;
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
        color: #f59e0b;
        background: rgba(245, 158, 11, 0.1);
        border-color: rgba(245, 158, 11, 0.2);
    }

    .status-in-progress {
        color: #3b82f6;
        background: rgba(59, 130, 246, 0.1);
        border-color: rgba(59, 130, 246, 0.2);
    }

    .status-shipped {
        color: #10b981;
        background: rgba(16, 185, 129, 0.1);
        border-color: rgba(16, 185, 129, 0.2);
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

    /* Kanban Board Layout */
    .kanban-board {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: var(--space-xl);
    }

    .kanban-card {
        background: var(--color-canvas);
        border: 1px solid var(--color-hairline);
        border-radius: var(--radius-lg);
        overflow: hidden;
        box-shadow: var(--shadow-level-1);
        text-decoration: none;
        transition: transform var(--transition-fast), box-shadow var(--transition-fast);
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    .kanban-card:hover {
        transform: translateY(-4px);
        box-shadow: var(--shadow-level-2);
        border-color: var(--color-mute);
    }

    .k-card-image {
        width: 100%;
        background: var(--color-canvas-soft-2);
        overflow: hidden;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .k-card-image img {
        width: 100%;
        height: auto;
        display: block;
        transition: transform var(--transition-base);
    }

    .kanban-card:hover .k-card-image img {
        transform: scale(1.04);
    }

    .k-status {
        position: absolute;
        top: var(--space-md);
        right: var(--space-md);
        font-family: var(--font-mono);
        font-size: 11px;
        font-weight: 500;
        text-transform: capitalize;
        padding: 3px 8px;
        border-radius: 4px;
        border: 1px solid transparent;
        backdrop-filter: blur(8px);
    }

    .k-card-body {
        padding: var(--space-lg) var(--space-lg) var(--space-md);
        display: flex;
        flex-direction: column;
        gap: var(--space-xs);
        flex: 1;
    }

    .k-card-meta {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: var(--space-sm);
    }

    .k-cat {
        font-family: var(--font-mono);
        font-size: 11px;
        color: var(--color-mute);
        text-transform: uppercase;
        letter-spacing: 0.5px;
        background: var(--color-canvas-soft-2);
        border: 1px solid var(--color-hairline);
        padding: 2px 8px;
        border-radius: 4px;
    }

    .k-role {
        font-size: 11px;
        color: var(--color-mute);
    }

    .k-title {
        font-size: var(--body-md, 1rem);
        font-weight: 600;
        color: var(--color-ink);
        letter-spacing: -0.3px;
        line-height: 1.3;
    }

    .k-desc {
        font-size: 12px;
        color: var(--color-body);
        line-height: 20px;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        flex: 1;
    }

    .k-tech {
        display: flex;
        flex-wrap: wrap;
        gap: var(--space-xs);
        margin-top: var(--space-xs);
    }

    .tag-more {
        color: var(--color-mute);
    }

    .k-footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: auto;
        padding-top: var(--space-md);
        border-top: 1px solid var(--color-hairline);
    }

    .k-duration {
        font-family: var(--font-mono);
        font-size: 11px;
        color: var(--color-mute);
    }

    .k-arrow {
        color: var(--color-mute);
        transition: transform var(--transition-fast), color var(--transition-fast);
    }

    .kanban-card:hover .k-arrow {
        color: var(--color-ink);
        transform: translateX(3px);
    }

    .fade-in {
        animation: cardFadeIn 0.35s ease both;
    }

    @keyframes cardFadeIn {
        from {
            opacity: 0;
            transform: translateY(16px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .empty-state {
        text-align: center;
        padding: var(--space-5xl) 0;
        color: var(--color-mute);
        font-size: var(--body-md);
    }

    @media (max-width: 960px) {
        .kanban-board {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media (max-width: 768px) {
        .header-row {
            flex-direction: column;
            align-items: flex-start;
        }

        .project-row {
            flex-direction: column;
            align-items: flex-start;
            gap: var(--space-lg);
        }

        .project-row:hover {
            margin: 0;
            padding: var(--space-2xl) 0;
            background: transparent;
            border-bottom-color: var(--color-hairline);
        }

        .row-thumb {
            width: 100%;
            height: 200px;
        }

        .row-action {
            display: none;
        }

        .filters {
            flex-wrap: wrap;
        }

        .kanban-board {
            grid-template-columns: 1fr;
        }
    }
</style>
