<script lang="ts">
    import { getTranslations } from "$lib/i18n/index.svelte";
    import Icon from "@iconify/svelte";

    const t = $derived(getTranslations());

    const categories = [
        { key: "frontend" },
        { key: "backend" },
        { key: "database" },
        { key: "devops" },
        { key: "design" },
        { key: "vcs" },
        { key: "data_ai" },
    ] as const;

    const localIcons: Record<string, string> = {
        React: "react",
        "Next.js": "nextjs",
        TypeScript: "typescript",
        "Tailwind CSS": "tailwindcss",
        JavaScript: "js",
        "Node.js": "nodejs",
        PHP: "php",
        Laravel: "laravel",
        PostgreSQL: "postgresql",
        MySQL: "mysql",
        Docker: "docker",
        Nginx: "nginx",
        "Linux Server": "linux",
        Figma: "figma",
        Canva: "canva",
        Git: "git",
        GitHub: "github",
        Pandas: "pandas",
        Flutter: "flutter",
        Dart: "dart",
        Go: "go",
    };

    const techIcons: Record<string, string> = {
        "Vue.js": "logos:vue",
        Svelte: "logos:svelte-icon",
        "HTML/CSS": "logos:html-5",
        CodeIgniter: "logos:codeigniter-icon",
        Python: "logos:python",
        Prisma: "logos:prisma",
        "Looker Studio": "logos:google-looker",
        Metabase: "logos:metabase-icon",
        "Google Sheets": "logos:google-sheets",
    };
</script>

<div class="tech-stack">
    {#each categories as cat}
        {@const data = (t.about.techStack as any)[cat.key]}
        {#if data}
            <div class="stack-row">
                <div class="stack-label">{data.label}</div>
                <div class="stack-items">
                    {#each data.items as item}
                        <span class="stack-badge">
                            {#if localIcons[item]}
                                <span class="badge-icon">
                                    <img src="/tech-icons/{localIcons[item]}.svg" width="14" height="14" alt={item} />
                                </span>
                            {:else if techIcons[item]}
                                <span class="badge-icon">
                                    <Icon icon={techIcons[item]} width="14" />
                                </span>
                            {/if}
                            <span class="badge-text">{item}</span>
                        </span>
                    {/each}
                </div>
            </div>
        {/if}
    {/each}
</div>

<style>
    .tech-stack {
        display: flex;
        flex-direction: column;
        gap: var(--space-lg);
    }

    .stack-row {
        display: grid;
        grid-template-columns: 140px 1fr;
        gap: var(--space-xl);
        align-items: start;
    }

    /* Label — caption-mono: technical voice */
    .stack-label {
        font-family: var(--font-mono);
        font-size: var(--caption);
        font-weight: 400;
        line-height: 16px;
        color: var(--color-mute);
        padding-top: 6px;
    }

    .stack-items {
        display: flex;
        flex-wrap: wrap;
        gap: var(--space-xs);
    }

    /* Badge — badge-secondary style */
    .stack-badge {
        display: inline-flex;
        align-items: center;
        gap: 5px;
        font-size: var(--body-sm);
        font-weight: 400;
        color: var(--color-ink);
        background: var(--color-canvas);
        padding: var(--space-xxs) var(--space-xs);
        border-radius: var(--radius-full);
        box-shadow: var(--shadow-level-1);
        letter-spacing: -0.28px;
        line-height: 20px;
    }

    .badge-icon {
        display: flex;
        align-items: center;
        flex-shrink: 0;
    }

    .badge-text {
        white-space: nowrap;
    }

    @media (max-width: 600px) {
        .stack-row {
            grid-template-columns: 1fr;
            gap: var(--space-xs);
        }

        .stack-label {
            padding-top: 0;
        }
    }
</style>
