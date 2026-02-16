<script lang="ts">
    import { t } from "$lib/i18n";
</script>

<section id="projects" class="projects section-light section-padding">
    <div class="container">
        <div class="projects-header reveal">
            <span class="section-label section-label-light"
                >{$t.projects.label}</span
            >
        </div>

        <div class="projects-grid reveal-stagger">
            {#each $t.projects.items as project, i}
                <a href={project.liveUrl} class="project-card reveal">
                    <!-- Card Header -->
                    <div class="card-header">
                        <span class="card-name">{project.title}</span>
                        <span class="card-tag">DEV.</span>
                    </div>

                    <!-- Card Image Area -->
                    <div class="card-image">
                        <span class="card-number"
                            >{String(i + 1).padStart(3, "0")}</span
                        >
                    </div>

                    <!-- Card Footer -->
                    <div class="card-footer">
                        <div class="card-tech">
                            {#each project.tech as tech}
                                <span class="tech-tag">{tech}</span>
                            {/each}
                        </div>
                        <span class="card-view">
                            {$t.projects.viewProject}
                            <svg
                                width="12"
                                height="12"
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
                        </span>
                    </div>
                </a>
            {/each}
        </div>
    </div>
</section>

<style>
    .projects-header {
        margin-bottom: var(--space-2xl);
    }

    .projects-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1px;
        border: 1px solid var(--color-border-light);
    }

    .project-card {
        display: flex;
        flex-direction: column;
        border: 0.5px solid var(--color-border-light);
        padding: var(--space-xl);
        transition: all var(--transition-base);
        color: var(--color-text-on-light);
        text-decoration: none;
        background: var(--color-bg-light);
    }

    .project-card:hover {
        background: #f9f9f9;
    }

    .project-card:hover .card-view {
        color: var(--color-black);
    }

    .card-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: var(--space-xl);
    }

    .card-name {
        font-family: var(--font-heading);
        font-size: var(--text-sm);
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.05em;
    }

    .card-tag {
        font-family: var(--font-heading);
        font-size: var(--text-xs);
        font-weight: 700;
        color: var(--color-muted-on-light);
        letter-spacing: 0.05em;
    }

    .card-image {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 200px;
        margin-bottom: var(--space-xl);
        background: linear-gradient(135deg, #f5f5f5, #ebebeb);
        border-radius: var(--radius-sm);
    }

    .card-number {
        font-family: var(--font-heading);
        font-size: 5rem;
        font-weight: 700;
        color: rgba(0, 0, 0, 0.06);
        letter-spacing: -0.04em;
    }

    .card-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .card-tech {
        display: flex;
        gap: 6px;
        flex-wrap: wrap;
    }

    .tech-tag {
        font-size: 10px;
        font-weight: 500;
        color: var(--color-muted-on-light);
        padding: 2px 8px;
        border: 1px solid var(--color-border-light);
        border-radius: var(--radius-sm);
    }

    .card-view {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        font-size: var(--text-xs);
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        color: var(--color-muted-on-light);
        transition: color var(--transition-fast);
    }

    @media (max-width: 768px) {
        .projects-grid {
            grid-template-columns: 1fr;
        }

        .card-image {
            min-height: 160px;
        }

        .card-number {
            font-size: 3.5rem;
        }
    }
</style>
