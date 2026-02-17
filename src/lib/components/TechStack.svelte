<script lang="ts">
    import { getTranslations } from "$lib/i18n/index.svelte";

    const t = $derived(getTranslations());

    // Grouping for layout
    const webCategories = [
        { key: "frontend" },
        { key: "backend" },
        { key: "database" },
        { key: "devops" },
    ] as const;

    const dataCategories = [{ key: "data_ai" }] as const;

    // Soft skills separate
    const softSkills = { key: "soft_skills" } as const;

    const iconMap: Record<string, string> = {
        "Tailwind CSS":
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
        Bootstrap:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
        TypeScript:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        React: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        "Vue.js":
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
        Svelte: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg",
        JavaScript:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        HTML5: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        CSS3: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        "Next.js":
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",

        PHP: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
        Laravel:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
        CodeIgniter:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg",
        "Node.js":
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        Python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",

        MySQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        PostgreSQL:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        Prisma: "https://cdn.worldvectorlogo.com/logos/prisma-3.svg",

        Git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        GitHub: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        Docker: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        Nginx: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
        Redis: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
        "VS Code":
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",

        "Power BI": "https://cdn.worldvectorlogo.com/logos/power-bi-1.svg",
        Pandas: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
        Matplotlib:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg",
        "Google Looker": "https://cdn.simpleicons.org/looker",
        Metabase:
            "https://www.vectorlogo.zone/logos/metabase/metabase-icon.svg",
        "Microsoft Excel": "https://cdn.worldvectorlogo.com/logos/excel-4.svg",
        // Actually utilize better excel icon

        "Google Sheets":
            "https://upload.wikimedia.org/wikipedia/commons/3/30/Google_Sheets_logo_%282014-2020%29.svg",

        "C++": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
        C: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
    };

    // Fix Excel Icon - Removed override as we set it above

    function getIcon(name: string) {
        return iconMap[name] || "";
    }

    const softData = $derived((t.about.techStack as any)[softSkills.key]);
</script>

<div class="tech-stack-container reveal">
    <!-- Section 1: Web Development -->
    <div class="domain-section">
        <h3 class="domain-title">Web Development</h3>
        <div class="domain-grid">
            {#each webCategories as cat, i}
                {@const categoryData = (t.about.techStack as any)[cat.key]}
                {#if categoryData}
                    <div
                        class="tech-category"
                        style="transition-delay: {i * 50}ms"
                    >
                        <h4 class="category-label">{categoryData.label}</h4>
                        <div class="tech-items">
                            {#each categoryData.items as item}
                                <div class="tech-chip">
                                    {#if getIcon(item)}
                                        <img
                                            src={getIcon(item)}
                                            alt={item}
                                            class="tech-icon"
                                            loading="lazy"
                                        />
                                    {/if}
                                    <span>{item}</span>
                                </div>
                            {/each}
                        </div>
                    </div>
                {/if}
            {/each}
        </div>
    </div>

    <!-- Section 2: Data & Analytics -->
    <div class="domain-section">
        <h3 class="domain-title text-accent">Data Visualization & Analytics</h3>
        <div class="domain-grid">
            {#each dataCategories as cat, i}
                {@const categoryData = (t.about.techStack as any)[cat.key]}
                {#if categoryData}
                    <div
                        class="tech-category"
                        style="transition-delay: {(i + 4) * 50}ms"
                    >
                        <!-- Label hidden or styled differently as it's the main focus here -->
                        <div class="tech-items prominent">
                            {#each categoryData.items as item}
                                <div class="tech-chip large">
                                    {#if getIcon(item)}
                                        <img
                                            src={getIcon(item)}
                                            alt={item}
                                            class="tech-icon large-icon"
                                            loading="lazy"
                                        />
                                    {/if}
                                    <span>{item}</span>
                                </div>
                            {/each}
                        </div>
                    </div>
                {/if}
            {/each}
        </div>
    </div>

    <!-- Section 3: Soft Skills -->
    <div class="domain-section soft-skills-section">
        {#if softData}
            <h4 class="category-label">{softData.label}</h4>
            <div class="soft-skills-list">
                {softData.items.join(" • ")}
            </div>
        {/if}
    </div>
</div>

<style>
    .tech-stack-container {
        display: flex;
        flex-direction: column;
        gap: var(--space-4xl);
        margin-top: var(--space-xl);
    }

    .domain-title {
        font-family: var(--font-heading);
        font-size: var(--text-xl);
        font-weight: 700;
        margin-bottom: var(--space-xl);
        color: var(--color-text);
        border-left: 4px solid var(--color-primary);
        padding-left: var(--space-md);
    }

    .text-accent {
        border-color: var(--color-accent);
    }

    .domain-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: var(--space-2xl);
    }

    .tech-category {
        display: flex;
        flex-direction: column;
        gap: var(--space-md);
    }

    .category-label {
        font-family: var(--font-mono);
        font-size: var(--text-xs);
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: var(--color-text-muted);
        font-weight: 600;
    }

    .tech-items {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
    }

    .tech-chip {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 6px 0;
        font-size: var(--text-sm);
        font-weight: 500;
        color: var(--color-text);
        /* No border/bg as requested "Jangan dalam bentuk card" */
    }

    .tech-icon {
        width: 20px;
        height: 20px;
        object-fit: contain;
    }

    /* Styles for Data Section to make it pop */
    .prominent .tech-chip {
        /* font-size: var(--text-base); */
        margin-right: var(--space-lg);
    }

    .tech-chip.large {
        font-weight: 600;
    }

    .large-icon {
        width: 24px;
        height: 24px;
    }

    .soft-skills-section {
        border-top: 1px dashed var(--color-border);
        padding-top: var(--space-xl);
    }

    .soft-skills-list {
        font-size: var(--text-base);
        color: var(--color-text-secondary);
        line-height: 1.8;
    }

    @media (max-width: 640px) {
        .domain-grid {
            grid-template-columns: 1fr;
            gap: var(--space-xl);
        }
    }
</style>
