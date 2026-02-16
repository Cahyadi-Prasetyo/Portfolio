<script lang="ts">
    import { getTranslations, getCurrentLang } from "$lib/i18n/index.svelte";
    import { getFeaturedProjects } from "$lib/data/projects";

    const t = $derived(getTranslations());
    const currentLang = $derived(getCurrentLang());
    const featured = getFeaturedProjects();
</script>

<section class="featured section reveal">
    <div class="container">
        <span class="section-label">{t.featured.label}</span>
        <h2 class="section-title">{t.featured.title}</h2>

        <div class="featured-grid">
            {#each featured as project}
                <a
                    href="/projects/{project.slug}"
                    class="featured-card card reveal"
                >
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
                    </div>
                </a>
            {/each}
        </div>

        <div class="view-all">
            <a href="/projects" class="btn btn-outline">
                {t.featured.viewAll}
                <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    ><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg
                >
            </a>
        </div>
    </div>
</section>

<style>
    .featured-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: var(--space-xl);
        margin-bottom: var(--space-2xl);
    }

    .featured-card {
        text-decoration: none;
        transition: transform var(--transition-base);
    }

    .featured-card:hover {
        transform: translateY(-4px);
    }

    .card-img {
        height: 180px;
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
        font-size: 3rem;
        font-weight: 700;
        color: var(--color-accent);
        opacity: 0.25;
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
        line-height: 1.6;
        margin-bottom: var(--space-md);
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }

    .card-tags {
        display: flex;
        gap: 4px;
        flex-wrap: wrap;
    }

    .view-all {
        text-align: center;
    }

    @media (max-width: 768px) {
        .featured-grid {
            grid-template-columns: 1fr;
        }
    }
</style>
