<script lang="ts">
    import { t } from "$lib/i18n";

    const techStack = [
        "JavaScript",
        "TypeScript",
        "Svelte",
        "React",
        "Node.js",
        "Python",
        "PostgreSQL",
        "Git",
        "TailwindCSS",
        "Docker",
        "Supabase",
        "Figma",
    ];

    function scrollTo(id: string) {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    }
</script>

<section id="home" class="hero section-dark glow-effect">
    <div class="container hero-content">
        <!-- Top row: status badge -->
        <div class="hero-top reveal">
            <div class="status-badge">
                <span class="status-dot"></span>
                {$t.hero.status}
            </div>
        </div>

        <!-- Big Name -->
        <div class="hero-name-wrapper reveal">
            <h1 class="hero-name">{$t.hero.firstName}</h1>
            <h1 class="hero-name">{$t.hero.lastName}</h1>
        </div>

        <!-- Role -->
        <p class="hero-role reveal">{$t.hero.role}</p>

        <!-- Bottom row: email left, tech right -->
        <div class="hero-bottom reveal">
            <div class="hero-bottom-left">
                <button
                    class="btn btn-white"
                    onclick={() => scrollTo("contact")}
                >
                    {$t.hero.cta}
                    <!-- Arrow icon -->
                    <svg
                        width="14"
                        height="14"
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
                </button>
                <a href="mailto:{$t.hero.email}" class="hero-email"
                    >{$t.hero.email}</a
                >
            </div>

            <div class="hero-tech">
                {#each techStack as tech}
                    <span class="tag tag-dark">{tech}</span>
                {/each}
            </div>
        </div>
    </div>
</section>

<style>
    .hero {
        min-height: 100vh;
        display: flex;
        align-items: center;
        overflow: hidden;
    }

    .hero::before {
        top: 70% !important;
        left: 30% !important;
        width: 800px !important;
        height: 800px !important;
    }

    .hero-content {
        position: relative;
        z-index: 1;
        padding-top: calc(var(--nav-height) + var(--space-3xl));
        padding-bottom: var(--space-3xl);
        width: 100%;
    }

    .hero-top {
        margin-bottom: var(--space-3xl);
    }

    .status-badge {
        display: inline-flex;
        align-items: center;
        gap: var(--space-sm);
        padding: 8px 18px;
        font-size: var(--text-sm);
        font-weight: 500;
        color: var(--color-green);
        border: 1px solid rgba(34, 197, 94, 0.25);
        border-radius: var(--radius-full);
        background: rgba(34, 197, 94, 0.06);
    }

    .status-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: var(--color-green);
        animation: pulse-green 2s ease-in-out infinite;
    }

    @keyframes pulse-green {
        0%,
        100% {
            opacity: 1;
            box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4);
        }
        50% {
            opacity: 0.8;
            box-shadow: 0 0 0 8px rgba(34, 197, 94, 0);
        }
    }

    .hero-name-wrapper {
        margin-bottom: var(--space-lg);
    }

    .hero-name {
        font-size: var(--text-hero);
        font-weight: 700;
        line-height: 0.95;
        letter-spacing: -0.04em;
        color: var(--color-white);
    }

    .hero-role {
        font-size: var(--text-sm);
        font-weight: 600;
        letter-spacing: 0.2em;
        text-transform: uppercase;
        color: var(--color-muted-on-dark);
        margin-bottom: var(--space-4xl);
    }

    .hero-bottom {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        gap: var(--space-2xl);
        padding-top: var(--space-2xl);
        border-top: 1px solid var(--color-border-dark);
    }

    .hero-bottom-left {
        display: flex;
        flex-direction: column;
        gap: var(--space-md);
    }

    .hero-email {
        font-size: var(--text-sm);
        color: var(--color-muted-on-dark);
        transition: color var(--transition-fast);
    }

    .hero-email:hover {
        color: var(--color-white);
    }

    .hero-tech {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        max-width: 450px;
        justify-content: flex-end;
    }

    @media (max-width: 768px) {
        .hero-name {
            font-size: clamp(2.5rem, 12vw, 5rem);
        }

        .hero-bottom {
            flex-direction: column;
            align-items: flex-start;
        }

        .hero-tech {
            justify-content: flex-start;
            max-width: 100%;
        }
    }
</style>
