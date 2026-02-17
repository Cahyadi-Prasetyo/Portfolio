<script lang="ts">
    import { getTranslations, getCurrentLang } from "$lib/i18n/index.svelte";
    import { getFeaturedProjects } from "$lib/data/projects";

    const t = $derived(getTranslations());
    const currentLang = $derived(getCurrentLang());
    const featured = getFeaturedProjects();
</script>

<section class="featured section reveal">
    <hr class="section-divider" />
    <div class="container">
        <div class="section-header">
            <div>
                <span class="section-label">// {t.featured.label}</span>
                <h2 class="section-title">{t.featured.title}</h2>
            </div>
            <a href="/projects" class="btn btn-outline">
                {t.featured.viewAll}
                <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    ><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg
                >
            </a>
        </div>

        <div class="featured-grid reveal-stagger">
            {#each featured as project, i}
                <a
                    href="/projects/{project.slug}"
                    class="project-card card reveal"
                >
                    <div class="card-header">
                        <span class="card-number"
                            >DEV.{String(i + 1).padStart(3, "0")}</span
                        >
                    </div>
                    <div class="card-body">
                        <h3 class="card-title">{project.title}</h3>
                        <p class="card-desc">
                            {currentLang === "id"
                                ? project.shortDesc.id
                                : project.shortDesc.en}
                        </p>
                        <div class="card-footer">
                            <div class="card-tags">
                                {#each project.tech.slice(0, 3) as tech}
                                    <span class="tag">{tech}</span>
                                {/each}
                            </div>
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
                                    ><line
                                        x1="7"
                                        y1="17"
                                        x2="17"
                                        y2="7"
                                    /><polyline points="7 7 17 7 17 17" /></svg
                                >
                            </span>
                        </div>
                    </div>
                </a>
            {/each}
        </div>
    </div>
</section>

<style>
    .section-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        margin-bottom: var(--space-2xl);
        padding-top: var(--space-3xl);
    }

    .featured-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: var(--space-lg);
    }

    .project-card {
        text-decoration: none;
        display: flex;
        flex-direction: column;
    }

    .card-header {
        padding: var(--space-lg) var(--space-lg) 0;
    }

    .card-number {
        font-family: var(--font-mono);
        font-size: var(--text-xs);
        font-weight: 500;
        color: var(--color-text-muted);
        letter-spacing: 0.05em;
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

    .card-footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .card-tags {
        display: flex;
        gap: 6px;
        flex-wrap: wrap;
    }

    .card-arrow {
        color: var(--color-text-muted);
        transition: all var(--transition-base);
    }

    .project-card:hover .card-arrow {
        color: var(--color-text);
        transform: translate(2px, -2px);
    }

    @media (max-width: 768px) {
        .section-header {
            flex-direction: column;
            align-items: flex-start;
            gap: var(--space-lg);
        }

        .featured-grid {
            grid-template-columns: 1fr;
        }
    }
</style>
