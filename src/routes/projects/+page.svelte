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
            <span class="section-label">// {t.projects.label}</span>
            <h1 class="section-title">{t.projects.title}</h1>
            <p class="section-desc">{t.projects.desc}</p>
        </div>

        <div class="filters reveal">
            <button
                class="filter-pill"
                class:active={activeFilter === "all"}
                onclick={() => setFilter("all")}
            >
                {t.projects.filterAll}
            </button>
            <button
                class="filter-pill"
                class:active={activeFilter === "web"}
                onclick={() => setFilter("web")}
            >
                {t.projects.filterWeb}
            </button>
            <button
                class="filter-pill"
                class:active={activeFilter === "mobile"}
                onclick={() => setFilter("mobile")}
            >
                {t.projects.filterMobile}
            </button>
        </div>

        <div class="projects-grid reveal-stagger">
            {#each filteredProjects as project, i (project.slug)}
                <a
                    href="/projects/{project.slug}"
                    class="project-card card reveal"
                >
                    <div class="card-image">
                        <img
                            src={project.imageUrl}
                            alt={project.title}
                            loading="lazy"
                        />
                    </div>
                    <div class="card-header">
                        <span class="card-number"
                            >DEV.{String(i + 1).padStart(3, "0")}</span
                        >
                        <span class="card-arrow">
                            <svg
                                width="18"
                                height="18"
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
                        </span>
                    </div>
                    <div class="card-body">
                        <h3 class="card-title">{project.title}</h3>
                        <p class="card-desc">
                            {currentLang === "id"
                                ? project.shortDesc.id
                                : project.shortDesc.en}
                        </p>
                        <div class="card-tags">
                            {#each project.tech.slice(0, 4) as tech}
                                <span class="tag">{tech}</span>
                            {/each}
                        </div>
                    </div>
                </a>
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

    .filters {
        display: flex;
        gap: var(--space-sm);
        margin-bottom: var(--space-2xl);
    }

    .filter-pill {
        padding: 8px 20px;
        font-size: var(--text-sm);
        font-weight: 500;
        color: var(--color-text-secondary);
        border: 1px solid var(--color-border);
        border-radius: var(--radius-full);
        background: var(--color-white);
        transition: all var(--transition-base);
        cursor: pointer;
    }

    .filter-pill:hover {
        border-color: var(--color-text);
        color: var(--color-text);
    }

    .filter-pill.active {
        background: var(--color-text);
        color: var(--color-white);
        border-color: var(--color-text);
    }

    .projects-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: var(--space-lg);
    }

    .project-card {
        text-decoration: none;
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }

    .card-image {
        width: 100%;
        height: 220px; /* Increased height */
        overflow: hidden;
        border-bottom: 1px solid var(--color-border);
    }

    .card-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform var(--transition-slow);
    }

    .project-card:hover .card-image img {
        transform: scale(1.05);
    }

    .card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: var(--space-lg) var(--space-lg) 0;
    }

    .card-number {
        font-family: var(--font-mono);
        font-size: var(--text-xs);
        font-weight: 500;
        color: var(--color-text-muted);
    }

    .card-arrow {
        color: var(--color-text-muted);
        transition: all var(--transition-base);
    }

    .project-card:hover .card-arrow {
        color: var(--color-text);
        transform: translate(2px, -2px);
    }

    .card-body {
        padding: var(--space-md) var(--space-lg) var(--space-lg);
        flex: 1;
        display: flex;
        flex-direction: column;
    }

    .card-title {
        font-size: var(--text-xl);
        font-weight: 700;
        margin-bottom: var(--space-sm);
        color: var(--color-text);
    }

    .card-desc {
        font-size: var(--text-sm);
        color: var(--color-text-secondary);
        line-height: 1.6;
        margin-bottom: var(--space-lg);
        flex: 1;
    }

    .card-tags {
        display: flex;
        gap: 6px;
        flex-wrap: wrap;
    }

    @media (max-width: 1024px) {
        .projects-grid {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media (max-width: 768px) {
        .projects-grid {
            grid-template-columns: 1fr;
        }
    }
</style>
