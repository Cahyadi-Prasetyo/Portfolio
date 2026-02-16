<script lang="ts">
    import { getTranslations, getCurrentLang } from "$lib/i18n/index.svelte";
    import { getProjectsByCategory, type Project } from "$lib/data/projects";

    const t = $derived(getTranslations());
    const currentLang = $derived(getCurrentLang());

    let activeFilter = $state<"all" | "web" | "mobile">("all");
    let filteredProjects = $state<Project[]>(getProjectsByCategory("all"));

    function setFilter(filter: "all" | "web" | "mobile") {
        activeFilter = filter;
        filteredProjects = getProjectsByCategory(filter);
    }
</script>

<svelte:head>
    <title>{t.projects.title} • Cahyadi Prasetyo</title>
</svelte:head>

<div class="page-wrapper">
    <div class="container">
        <div class="page-header reveal">
            <span class="section-label">{t.projects.label}</span>
            <h1 class="section-title">{t.projects.title}</h1>
            <p class="section-desc">{t.projects.desc}</p>
        </div>

        <!-- Filter Tabs -->
        <div class="filters reveal">
            <button
                class="filter-tab"
                class:active={activeFilter === "all"}
                onclick={() => setFilter("all")}
            >
                {t.projects.filterAll}
            </button>
            <button
                class="filter-tab"
                class:active={activeFilter === "web"}
                onclick={() => setFilter("web")}
            >
                {t.projects.filterWeb}
            </button>
            <button
                class="filter-tab"
                class:active={activeFilter === "mobile"}
                onclick={() => setFilter("mobile")}
            >
                {t.projects.filterMobile}
            </button>
        </div>

        <!-- Projects Grid -->
        <div class="projects-grid">
            {#each filteredProjects as project (project.slug)}
                <div class="project-card card reveal">
                    <div class="card-img">
                        <span class="card-initial"
                            >{project.title.charAt(0)}</span
                        >
                    </div>
                    <div class="card-body">
                        <h3 class="card-title">{project.title}</h3>
                        <p class="card-desc">
                            {currentLang === "id"
                                ? project.shortDesc.id
                                : project.shortDesc.en}
                        </p>
                        <div class="card-tags">
                            {#each project.tech.slice(0, 3) as tech}
                                <span class="tag">{tech}</span>
                            {/each}
                        </div>
                        <div class="card-actions">
                            <a
                                href="/projects/{project.slug}"
                                class="btn btn-primary btn-sm"
                            >
                                {t.projects.viewProject}
                            </a>
                            {#if project.liveUrl}
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener"
                                    class="btn btn-outline btn-sm"
                                >
                                    {t.projects.liveDemo}
                                </a>
                            {/if}
                            {#if project.githubUrl}
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener"
                                    class="icon-link"
                                    aria-label="GitHub"
                                >
                                    <svg
                                        width="18"
                                        height="18"
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
                </div>
            {/each}
        </div>
    </div>
</div>

<style>
    .page-wrapper {
        padding-top: calc(var(--nav-height) + var(--space-3xl));
        padding-bottom: var(--space-5xl);
        min-height: 100vh;
    }

    .page-header {
        margin-bottom: var(--space-2xl);
    }

    /* Filters */
    .filters {
        display: flex;
        gap: var(--space-sm);
        margin-bottom: var(--space-2xl);
    }

    .filter-tab {
        padding: 8px 20px;
        font-size: var(--text-sm);
        font-weight: 500;
        color: var(--color-text-muted);
        border: 1px solid var(--color-border);
        border-radius: var(--radius-full);
        transition: all var(--transition-fast);
    }

    .filter-tab:hover {
        border-color: var(--color-accent);
        color: var(--color-accent);
    }

    .filter-tab.active {
        background: var(--color-accent);
        color: var(--color-white);
        border-color: var(--color-accent);
    }

    /* Grid */
    .projects-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: var(--space-xl);
    }

    .project-card {
        text-decoration: none;
    }

    .card-img {
        height: 200px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(
            135deg,
            var(--color-bg-alt),
            var(--color-border)
        );
    }

    .card-initial {
        font-family: var(--font-heading);
        font-size: 3.5rem;
        font-weight: 700;
        color: var(--color-accent);
        opacity: 0.3;
    }

    .card-body {
        padding: var(--space-lg);
    }

    .card-title {
        font-size: var(--text-lg);
        font-weight: 600;
        margin-bottom: var(--space-sm);
    }

    .card-desc {
        font-size: var(--text-sm);
        color: var(--color-text-muted);
        margin-bottom: var(--space-md);
        line-height: 1.6;
    }

    .card-tags {
        display: flex;
        gap: 4px;
        flex-wrap: wrap;
        margin-bottom: var(--space-lg);
    }

    .card-actions {
        display: flex;
        align-items: center;
        gap: var(--space-sm);
    }

    :global(.btn-sm) {
        padding: 6px 14px;
        font-size: var(--text-xs);
    }

    .icon-link {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 34px;
        height: 34px;
        border: 1px solid var(--color-border);
        border-radius: var(--radius-sm);
        color: var(--color-text-muted);
        transition: all var(--transition-fast);
    }

    .icon-link:hover {
        color: var(--color-accent);
        border-color: var(--color-accent);
    }

    @media (max-width: 768px) {
        .projects-grid {
            grid-template-columns: 1fr;
        }
    }
</style>
