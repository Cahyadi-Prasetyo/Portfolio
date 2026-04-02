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
        <div class="work-header">
            <span class="section-label">{t.selectedWork.label}</span>
            <h2 class="section-title">{t.selectedWork.title}</h2>
        </div>

        <div class="work-grid">
            {#each featured as project, i}
                <a href="/projects/{project.slug}" class="work-card reveal">
                    <div class="work-image">
                        <img src={project.imageUrl} alt={project.title} loading="lazy" />
                    </div>
                    <div class="work-body">
                        <div class="work-tags">
                            {#each project.tech.slice(0, 3) as tech}
                                <span class="tag">{tech}</span>
                            {/each}
                        </div>
                        <h3 class="work-title">{project.title}</h3>
                        <p class="work-desc">
                            {currentLang === "id"
                                ? project.shortDesc.id
                                : project.shortDesc.en}
                        </p>
                    </div>
                </a>
            {/each}
        </div>

        <div class="work-footer">
            <a href="/projects" class="btn btn-outline">
                {t.selectedWork.viewAll}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
        </div>
    </div>
</section>

<style>
    .work {
        padding: var(--space-3xl) 0;
    }

    .work-header {
        margin: var(--space-2xl) 0;
    }

    .work-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: var(--space-lg);
    }

    .work-card {
        text-decoration: none;
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        overflow: hidden;
        transition: all var(--transition-base);
        background: var(--white);
    }

    .work-card:hover {
        border-color: var(--text-muted);
        transform: translateY(-3px);
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
    }

    .work-image {
        width: 100%;
        aspect-ratio: 16 / 10;
        overflow: hidden;
        background: var(--bg-alt);
    }

    .work-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform var(--transition-base);
    }

    .work-card:hover .work-image img {
        transform: scale(1.03);
    }

    .work-body {
        padding: var(--space-md);
    }

    .work-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 4px;
        margin-bottom: var(--space-sm);
    }

    .work-title {
        font-size: var(--text-base);
        font-weight: 700;
        color: var(--text);
        margin-bottom: var(--space-xs);
    }

    .work-desc {
        font-size: var(--text-sm);
        color: var(--text-secondary);
        line-height: 1.5;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }

    .work-footer {
        margin-top: var(--space-xl);
    }

    @media (max-width: 768px) {
        .work-grid {
            grid-template-columns: 1fr;
        }
    }
</style>
