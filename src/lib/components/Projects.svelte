<script lang="ts">
    import { t } from "$lib/i18n";
</script>

<section id="projects" class="projects section">
    <div class="container">
        <div class="projects-header reveal">
            <span class="section-label">{$t.projects.label}</span>
            <h2 class="section-title">{$t.projects.title}</h2>
            <p class="section-description">{$t.projects.description}</p>
        </div>

        <div class="projects-list">
            {#each $t.projects.items as project, i}
                <div class="project-card reveal" class:reverse={i % 2 !== 0}>
                    <!-- Project Image -->
                    <div class="project-image">
                        <div class="project-image-placeholder">
                            <span class="project-number">0{i + 1}</span>
                        </div>
                    </div>

                    <!-- Project Info -->
                    <div class="project-info">
                        <h3 class="project-title">{project.title}</h3>
                        <p class="project-description">{project.description}</p>

                        <div class="project-tech">
                            {#each project.tech as tech}
                                <span class="tag">{tech}</span>
                            {/each}
                        </div>

                        <div class="project-links">
                            <a
                                href={project.liveUrl}
                                class="btn btn-primary btn-sm"
                                target="_blank"
                                rel="noopener"
                            >
                                {$t.projects.viewProject}
                                <svg
                                    width="14"
                                    height="14"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    ><path
                                        d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                                    /><polyline points="15 3 21 3 21 9" /><line
                                        x1="10"
                                        y1="14"
                                        x2="21"
                                        y2="3"
                                    /></svg
                                >
                            </a>
                            <a
                                href={project.githubUrl}
                                class="btn btn-outline btn-sm"
                                target="_blank"
                                rel="noopener"
                            >
                                {$t.projects.viewCode}
                                <svg
                                    width="14"
                                    height="14"
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
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>

<style>
    .projects-header {
        margin-bottom: var(--space-4xl);
    }

    .projects-list {
        display: flex;
        flex-direction: column;
        gap: var(--space-5xl);
    }

    .project-card {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: var(--space-3xl);
        align-items: center;
    }

    .project-card.reverse {
        direction: rtl;
    }

    .project-card.reverse > * {
        direction: ltr;
    }

    .project-image-placeholder {
        aspect-ratio: 16 / 10;
        background: linear-gradient(
            135deg,
            var(--color-bg-alt),
            var(--color-border-light)
        );
        border-radius: var(--radius-lg);
        border: 1px solid var(--color-border-light);
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        transition: all var(--transition-base);
    }

    .project-card:hover .project-image-placeholder {
        transform: translateY(-4px);
        box-shadow: var(--shadow-lg);
    }

    .project-number {
        font-family: var(--font-heading);
        font-size: var(--text-6xl);
        font-weight: 700;
        color: var(--color-border);
        letter-spacing: -0.04em;
    }

    .project-title {
        font-size: var(--text-2xl);
        margin-bottom: var(--space-md);
    }

    .project-description {
        font-size: var(--text-base);
        color: var(--color-text-muted);
        line-height: 1.8;
        margin-bottom: var(--space-lg);
    }

    .project-tech {
        display: flex;
        flex-wrap: wrap;
        gap: var(--space-sm);
        margin-bottom: var(--space-xl);
    }

    .project-links {
        display: flex;
        gap: var(--space-md);
    }

    .btn-sm {
        padding: 0.5rem 1.2rem;
        font-size: var(--text-xs);
    }

    @media (max-width: 768px) {
        .project-card {
            grid-template-columns: 1fr;
            gap: var(--space-xl);
        }

        .project-card.reverse {
            direction: ltr;
        }

        .projects-list {
            gap: var(--space-3xl);
        }
    }
</style>
