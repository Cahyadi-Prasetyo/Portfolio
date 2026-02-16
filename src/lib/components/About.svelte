<script lang="ts">
    import { t } from "$lib/i18n";

    const techStack = [
        { name: "JavaScript", icon: "⚡" },
        { name: "TypeScript", icon: "🔷" },
        { name: "Svelte", icon: "🔥" },
        { name: "React", icon: "⚛️" },
        { name: "Node.js", icon: "🟢" },
        { name: "Python", icon: "🐍" },
        { name: "PostgreSQL", icon: "🐘" },
        { name: "Git", icon: "📦" },
    ];
</script>

<section id="about" class="about section">
    <div class="container">
        <div class="about-layout reveal">
            <div class="about-info">
                <span class="section-label">{$t.about.label}</span>
                <h2 class="section-title">{$t.about.title}</h2>
                <p class="about-bio">{$t.about.bio1}</p>
                <p class="about-bio">{$t.about.bio2}</p>
            </div>

            <div class="about-avatar">
                <div class="avatar-placeholder">
                    <span>CP</span>
                </div>
            </div>
        </div>

        <div class="tech-section reveal">
            <h3 class="tech-title">{$t.about.techTitle}</h3>
            <div class="tech-grid">
                {#each techStack as tech}
                    <div class="tech-item">
                        <span class="tech-icon">{tech.icon}</span>
                        <span class="tech-name">{tech.name}</span>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</section>

<style>
    .about {
        background: var(--color-bg-alt);
    }

    .about-layout {
        display: grid;
        grid-template-columns: 1fr auto;
        gap: var(--space-4xl);
        align-items: center;
        margin-bottom: var(--space-4xl);
    }

    .about-bio {
        font-size: var(--text-lg);
        color: var(--color-text-muted);
        margin-bottom: var(--space-lg);
        line-height: 1.8;
    }

    .about-bio:last-child {
        margin-bottom: 0;
    }

    .about-avatar {
        display: flex;
        justify-content: center;
    }

    .avatar-placeholder {
        width: 180px;
        height: 180px;
        border-radius: var(--radius-lg);
        background: linear-gradient(
            135deg,
            var(--color-border-light),
            var(--color-border)
        );
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: var(--font-heading);
        font-size: var(--text-4xl);
        font-weight: 700;
        color: var(--color-text-muted);
        letter-spacing: -0.03em;
    }

    .tech-section {
        border-top: 1px solid var(--color-border);
        padding-top: var(--space-2xl);
    }

    .tech-title {
        font-size: var(--text-sm);
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        color: var(--color-text-muted);
        margin-bottom: var(--space-xl);
    }

    .tech-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
        gap: var(--space-md);
    }

    .tech-item {
        display: flex;
        align-items: center;
        gap: var(--space-sm);
        padding: var(--space-sm) var(--space-md);
        border: 1px solid var(--color-border-light);
        border-radius: var(--radius-md);
        background: var(--color-surface);
        transition: all var(--transition-base);
    }

    .tech-item:hover {
        border-color: var(--color-border);
        transform: translateY(-2px);
        box-shadow: var(--shadow-sm);
    }

    .tech-icon {
        font-size: var(--text-lg);
    }

    .tech-name {
        font-size: var(--text-sm);
        font-weight: 500;
        color: var(--color-text);
    }

    @media (max-width: 768px) {
        .about-layout {
            grid-template-columns: 1fr;
            gap: var(--space-2xl);
        }

        .about-avatar {
            order: -1;
        }

        .avatar-placeholder {
            width: 120px;
            height: 120px;
            font-size: var(--text-3xl);
        }

        .tech-grid {
            grid-template-columns: repeat(2, 1fr);
        }
    }
</style>
