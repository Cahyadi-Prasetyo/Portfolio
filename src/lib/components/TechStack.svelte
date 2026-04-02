<script lang="ts">
    import { getTranslations } from "$lib/i18n/index.svelte";

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

    // Simple colored dot icons for each tech
    const techColors: Record<string, string> = {
        'React': '#61DAFB',
        'Vue.js': '#4FC08D',
        'Svelte': '#FF3E00',
        'Next.js': '#000000',
        'TypeScript': '#3178C6',
        'Tailwind CSS': '#06B6D4',
        'HTML/CSS': '#E34F26',
        'JavaScript': '#F7DF1E',
        'Node.js': '#339933',
        'PHP': '#777BB4',
        'Laravel': '#FF2D20',
        'CodeIgniter': '#DD4814',
        'Python': '#3776AB',
        'PostgreSQL': '#4169E1',
        'MySQL': '#4479A1',
        'Prisma': '#2D3748',
        'Git': '#F05032',
        'GitHub': '#181717',
        'Docker': '#2496ED',
        'Nginx': '#009639',
        'VS Code': '#007ACC',
        'Linux Server': '#FCC624',
        'Figma': '#F24E1E',
        'Canva': '#00C4CC',
        'Looker Studio': '#4285F4',
        'Pandas': '#150458',
        'Metabase': '#509EE3',
        'Google Sheets': '#34A853',
    };
</script>

<div class="skills">
    {#each categories as cat}
        {@const data = (t.about.techStack as any)[cat.key]}
        {#if data}
            <div class="skill-row">
                <span class="skill-label">{data.label}:</span>
                <div class="skill-items">
                    {#each data.items as item}
                        <span class="skill-item">
                            <span class="skill-dot" style="background: {techColors[item] || '#6b7280'}"></span>
                            {item}
                        </span>
                    {/each}
                </div>
            </div>
        {/if}
    {/each}
</div>

<style>
    .skills {
        display: flex;
        flex-direction: column;
        gap: 0;
        border: 1px solid var(--border);
        border-radius: var(--radius-lg);
        overflow: hidden;
    }

    .skill-row {
        display: flex;
        align-items: baseline;
        gap: var(--space-xl);
        padding: var(--space-md) var(--space-lg);
        border-bottom: 1px solid var(--border);
    }

    .skill-row:last-child {
        border-bottom: none;
    }

    .skill-label {
        flex-shrink: 0;
        width: 120px;
        font-size: var(--text-xs);
        font-weight: 500;
        color: var(--text-muted);
        text-transform: capitalize;
    }

    .skill-items {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        flex: 1;
    }

    .skill-item {
        display: inline-flex;
        align-items: center;
        gap: 5px;
        font-size: var(--text-sm);
        font-weight: 500;
        color: var(--text-secondary);
        padding: 3px 10px;
        border-radius: var(--radius-full);
        background: var(--bg-alt);
        transition: color var(--transition-fast);
    }

    .skill-item:hover {
        color: var(--text);
    }

    .skill-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        flex-shrink: 0;
    }

    @media (max-width: 640px) {
        .skill-row {
            flex-direction: column;
            gap: var(--space-sm);
        }

        .skill-label {
            width: auto;
        }
    }
</style>
