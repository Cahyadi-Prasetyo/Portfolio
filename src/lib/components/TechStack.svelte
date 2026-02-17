<script lang="ts">
    import { getTranslations } from "$lib/i18n/index.svelte";

    const t = $derived(getTranslations());

    const categories = [
        { key: "frontend", icon: "🎨" },
        { key: "backend", icon: "⚙️" },
        { key: "database", icon: "💾" },
        { key: "tools", icon: "🛠️" },
    ] as const;
</script>

<section class="tech-stack section">
    <hr class="section-divider" />
    <div class="container">
        <div class="tech-header">
            <span class="section-label">// {t.about.techStackLabel}</span>
        </div>

        <div class="tech-grid">
            {#each categories as cat, i}
                <div
                    class="tech-category card reveal"
                    style="transition-delay: {i * 100}ms"
                >
                    <div class="category-header">
                        <span class="category-icon">{cat.icon}</span>
                        <h3 class="category-title">
                            {t.about.techStack[cat.key].label}
                        </h3>
                    </div>
                    <div class="category-items">
                        {#each t.about.techStack[cat.key].items as item}
                            <span class="tech-tag">{item}</span>
                        {/each}
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>

<style>
    .tech-header {
        padding-top: var(--space-2xl);
        margin-bottom: var(--space-xl);
    }

    .tech-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: var(--space-lg);
    }

    .tech-category {
        padding: var(--space-xl);
        display: flex;
        flex-direction: column;
        gap: var(--space-lg);
        height: 100%;
    }

    .category-header {
        display: flex;
        align-items: center;
        gap: var(--space-md);
        padding-bottom: var(--space-md);
        border-bottom: 1px solid var(--color-border);
    }

    .category-icon {
        font-size: var(--text-xl);
    }

    .category-title {
        font-size: var(--text-lg);
        font-weight: 700;
        letter-spacing: -0.02em;
    }

    .category-items {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
    }

    .tech-tag {
        font-family: var(--font-mono);
        font-size: var(--text-xs);
        font-weight: 500;
        padding: 6px 14px;
        border-radius: var(--radius-full);
        background: var(--color-bg);
        border: 1px solid var(--color-border);
        color: var(--color-text-secondary);
        transition: all var(--transition-fast);
        cursor: default;
    }

    .tech-tag:hover {
        border-color: var(--color-text);
        color: var(--color-text);
        transform: translateY(-1px);
    }

    @media (max-width: 640px) {
        .tech-grid {
            grid-template-columns: 1fr;
        }

        .tech-category {
            padding: var(--space-lg);
        }
    }
</style>
