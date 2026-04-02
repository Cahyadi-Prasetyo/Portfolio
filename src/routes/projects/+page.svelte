<script lang="ts">
    import { getTranslations, getCurrentLang } from "$lib/i18n/index.svelte";
    import { getProjectsByCategory, type Project } from "$lib/data/projects";
    import FooterCTA from "$lib/components/FooterCTA.svelte";

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

<div class="page">
    <div class="container">
        <section class="header reveal">
            <h1 class="page-title">{t.projects.title}</h1>
            <p class="page-desc">{t.projects.desc}</p>
        </section>

        <div class="filters reveal">
            <button class="filter" class:active={activeFilter === "all"} onclick={() => setFilter("all")}>
                {t.projects.filterAll}
            </button>
            <button class="filter" class:active={activeFilter === "web"} onclick={() => setFilter("web")}>
                {t.projects.filterWeb}
            </button>
            <button class="filter" class:active={activeFilter === "mobile"} onclick={() => setFilter("mobile")}>
                {t.projects.filterMobile}
            </button>
        </div>

        <div class="projects-grid">
            {#each filteredProjects as project (project.slug)}
                <a href="/projects/{project.slug}" class="project-card reveal">
                    <div class="project-image">
                        <img src={project.imageUrl} alt={project.title} loading="lazy" />
                        <div class="project-overlay">
                            <span class="project-view">View Project →</span>
                        </div>
                    </div>
                    <div class="project-body">
                        <div class="project-meta-row">
                            <span class="project-cat">{project.category}</span>
                        </div>
                        <h3 class="project-title">{project.title}</h3>
                        <p class="project-desc">
                            {currentLang === "id" ? project.shortDesc.id : project.shortDesc.en}
                        </p>
                        <div class="project-tags">
                            {#each project.tech.slice(0, 4) as tech}
                                <span class="tag">{tech}</span>
                            {/each}
                        </div>
                    </div>
                </a>
            {/each}
        </div>
    </div>

    <FooterCTA />
</div>

<style>
    .page {
        padding-top: calc(var(--nav-height) + var(--space-3xl));
        padding-bottom: var(--space-2xl);
        min-height: 100vh;
    }

    .page-title {
        font-size: var(--text-4xl);
        font-weight: 800;
        letter-spacing: -0.03em;
        margin-bottom: var(--space-sm);
    }

    .page-desc {
        font-size: var(--text-base);
        color: var(--text-secondary);
        margin-bottom: var(--space-2xl);
    }

    .filters {
        display: flex;
        gap: var(--space-sm);
        margin-bottom: var(--space-2xl);
    }

    .filter {
        padding: 8px 18px;
        font-size: var(--text-sm);
        font-weight: 500;
        color: var(--text-muted);
        border: 1px solid var(--border);
        border-radius: var(--radius-full);
        background: transparent;
        transition: all var(--transition-fast);
    }

    .filter:hover {
        color: var(--text);
        border-color: var(--text);
    }

    .filter.active {
        background: var(--text);
        color: var(--white);
        border-color: var(--text);
    }

    /* Projects Grid */
    .projects-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: var(--space-xl);
    }

    .project-card {
        text-decoration: none;
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        overflow: hidden;
        transition: all var(--transition-base);
        background: var(--white);
    }

    .project-card:hover {
        border-color: var(--text-muted);
        transform: translateY(-2px);
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
    }

    .project-image {
        position: relative;
        width: 100%;
        aspect-ratio: 16 / 10;
        overflow: hidden;
        background: var(--bg-alt);
    }

    .project-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform var(--transition-base);
    }

    .project-card:hover .project-image img {
        transform: scale(1.03);
    }

    .project-overlay {
        position: absolute;
        inset: 0;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: opacity var(--transition-base);
    }

    .project-card:hover .project-overlay {
        opacity: 1;
    }

    .project-view {
        font-size: var(--text-sm);
        font-weight: 600;
        color: var(--white);
        padding: 10px 20px;
        border: 1px solid rgba(255, 255, 255, 0.6);
        border-radius: var(--radius-full);
    }

    .project-body {
        padding: var(--space-lg);
    }

    .project-meta-row {
        margin-bottom: var(--space-sm);
    }

    .project-cat {
        font-size: var(--text-xs);
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: var(--text-muted);
    }

    .project-title {
        font-size: var(--text-lg);
        font-weight: 700;
        color: var(--text);
        margin-bottom: var(--space-xs);
    }

    .project-desc {
        font-size: var(--text-sm);
        color: var(--text-secondary);
        line-height: 1.6;
        margin-bottom: var(--space-md);
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }

    .project-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 4px;
    }

    @media (max-width: 768px) {
        .projects-grid {
            grid-template-columns: 1fr;
        }
    }
</style>
