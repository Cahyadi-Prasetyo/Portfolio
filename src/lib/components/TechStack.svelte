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

<div class="skills-list">
    {#each categories as cat}
        {@const data = (t.about.techStack as any)[cat.key]}
        {#if data}
            <div class="skill-row">
                <div class="skill-label">{data.label}:</div>
                <div class="skill-items">
                    {#each data.items as item, idx}
                        <span class="skill-item">
                            {#if localIcons[item]}
                                <span class="icon-wrap local">
                                    <img src="/tech-icons/{localIcons[item]}.svg" width="18" height="18" alt={item} />
                                </span>
                            {:else if techIcons[item]}
                                <span class="icon-wrap iconify">
                                    <Icon icon={techIcons[item]} width="18" />
                                </span>
                            {/if}
                            <span class="item-text">{item}</span>
                        </span>{#if idx < data.items.length - 1}<span class="comma">, </span>{/if}
                  {/each}
                </div>
            </div>
        {/if}
    {/each}
</div>

<style>
    .skills-list {
        display: flex;
        flex-direction: column;
        gap: var(--space-lg);
    }

    .skill-row {
        display: grid;
        grid-template-columns: 160px 1fr;
        gap: var(--space-xl);
        align-items: start;
    }

    .skill-label {
        font-size: var(--text-base);
        color: var(--text-muted);
        padding-top: 4px; /* Align visually with inline icons */
    }

    .skill-items {
        line-height: 1.8;
        font-size: var(--text-base);
        color: var(--text-secondary);
    }

    .skill-item {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        color: var(--text);
        font-weight: 500;
        white-space: nowrap;
    }

    .icon-wrap {
        display: flex;
        align-items: center;
    }

    .comma {
        color: var(--text-secondary);
        margin-right: 6px;
    }

    @media (max-width: 640px) {
        .skill-row {
            grid-template-columns: 1fr;
            gap: var(--space-xs);
        }

        .skill-label {
            padding-top: 0;
            margin-bottom: var(--space-xs);
        }
    }
</style>
