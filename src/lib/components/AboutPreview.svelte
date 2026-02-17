<script lang="ts">
    import { getTranslations } from "$lib/i18n/index.svelte";

    const t = $derived(getTranslations());
</script>

<section class="about-preview section reveal">
    <hr class="section-divider" />
    <div class="container preview-inner">
        <span class="section-label">// {t.aboutPreview.label}</span>

        <div class="preview-grid">
            <div class="preview-content">
                <h2 class="preview-title">{t.aboutPreview.title}</h2>
                {#each t.about.bio.split("\n\n") as paragraph}
                    <p class="about-paragraph">{paragraph}</p>
                {/each}

                <a href="/about" class="about-link group">
                    Selengkapnya <span class="arrow group-hover:translate-x-1"
                        >→</span
                    >
                </a>
            </div>

            <div class="preview-sidebar reveal-stagger">
                <div class="about-stats-vertical">
                    <div class="stat-card">
                        <span class="stat-value">2+</span>
                        <span class="stat-label">Years Experience</span>
                    </div>
                    <div class="stat-card">
                        <span class="stat-value">15+</span>
                        <span class="stat-label">Projects Completed</span>
                    </div>
                    <div class="stat-card">
                        <span class="stat-value">5+</span>
                        <span class="stat-label">Clients & Partners</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    .preview-grid {
        display: grid;
        grid-template-columns: 1.5fr 1fr;
        gap: var(--space-4xl);
        align-items: center; /* Center vertically */
    }

    .preview-title {
        font-size: var(--text-4xl); /* Larger title */
        font-weight: 800;
        margin-bottom: var(--space-xl);
        letter-spacing: -0.03em;
    }

    .about-paragraph {
        font-size: var(--text-lg);
        color: var(--color-text-secondary);
        line-height: 1.8;
        margin-bottom: var(--space-lg);
    }

    .about-link {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        font-weight: 600;
        color: var(--color-text);
        margin-top: var(--space-md);
        padding-bottom: 2px;
        border-bottom: 1px solid var(--color-border);
        transition: all var(--transition-fast);
    }

    .about-link:hover {
        color: var(--color-accent);
        border-color: var(--color-accent);
    }

    .arrow {
        transition: transform var(--transition-fast);
        display: inline-block;
    }

    .about-stats-vertical {
        display: flex;
        flex-direction: column;
        gap: var(--space-lg);
    }

    /* Card Style for Stats */
    .stat-card {
        display: flex;
        flex-direction: column;
        padding: var(--space-lg) var(--space-xl);
        border: 1px solid var(--color-border);
        border-radius: var(--radius-lg);
        transition: all var(--transition-base);
        background: var(--color-bg-white);
    }

    .stat-card:hover {
        border-color: var(--color-border-hover);
        box-shadow: var(--shadow-sm);
        transform: translateY(-2px);
    }

    .stat-value {
        font-size: var(--text-4xl);
        font-weight: 800;
        color: var(--color-text);
        line-height: 1;
        margin-bottom: var(--space-xs);
    }

    .stat-label {
        font-family: var(--font-mono);
        font-size: var(--text-xs);
        color: var(--color-text-secondary);
        text-transform: uppercase;
        letter-spacing: 0.05em;
    }

    @media (max-width: 900px) {
        .preview-grid {
            grid-template-columns: 1fr;
            gap: var(--space-2xl);
        }

        .about-stats-vertical {
            flex-direction: row;
            justify-content: space-between;
        }

        .stat-card {
            flex: 1;
            padding: var(--space-md);
        }
    }

    @media (max-width: 600px) {
        .about-stats-vertical {
            flex-direction: column;
            gap: var(--space-md);
        }
    }
</style>
