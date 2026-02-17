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

<div class="tech-stack-list reveal">
    {#each categories as cat, i}
        <div class="tech-category" style="transition-delay: {i * 100}ms">
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

<style>
    .tech-stack-list {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: var(--space-3xl);
        margin-bottom: var(--space-4xl);
        margin-top: var(--space-xl);
    }

    .tech-category {
        display: flex;
        flex-direction: column;
        gap: var(--space-md);
    }

    .category-header {
        display: flex;
        align-items: center;
        gap: var(--space-md);
        padding-bottom: var(--space-md);
        border-bottom: 2px solid var(--color-text); /* Bold line */
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
        gap: 10px;
        padding-top: var(--space-sm);
    }

    .tech-tag {
        font-family: var(--font-mono);
        font-size: var(--text-xs);
        font-weight: 600;
        padding: 6px 0; /* Minimalist: no background, just text? Or minimal pill */
        margin-right: var(--space-md);
        color: var(--color-text-secondary);
        transition: all var(--transition-fast);
        cursor: default;
    }

    /* Option B: Minimalist Text Tags (like code) */
    .tech-tag::before {
        content: "#";
        color: var(--color-accent);
        margin-right: 2px;
    }

    .tech-tag:hover {
        color: var(--color-text);
        transform: translateX(2px);
    }

    @media (max-width: 640px) {
        .tech-stack-list {
            grid-template-columns: 1fr;
            gap: var(--space-xl);
        }
    }
</style>
