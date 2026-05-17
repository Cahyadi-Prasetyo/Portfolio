<script lang="ts">
    import { getTranslations } from "$lib/i18n/index.svelte";
    const t = $derived(getTranslations());

    let roles = [
        "Full-Stack Developer.",
        "Svelte Enthusiast.",
        "UI/UX Designer.",
        "Problem Solver.",
    ];
    let currentRoleIndex = $state(0);
    let currentText = $state("");
    let isDeleting = $state(false);

    $effect(() => {
        let timer: ReturnType<typeof setTimeout>;

        function type() {
            const fullText = roles[currentRoleIndex];

            if (isDeleting) {
                currentText = fullText.substring(0, currentText.length - 1);
            } else {
                currentText = fullText.substring(0, currentText.length + 1);
            }

            let typeSpeed = isDeleting ? 40 : 100;

            if (!isDeleting && currentText === fullText) {
                typeSpeed = 2500; // Pause when fully typed
                isDeleting = true;
            } else if (isDeleting && currentText === "") {
                isDeleting = false;
                currentRoleIndex = (currentRoleIndex + 1) % roles.length;
                typeSpeed = 400; // Pause before typing new word
            }

            timer = setTimeout(type, typeSpeed);
        }

        timer = setTimeout(type, 800); // Initial delay

        return () => clearTimeout(timer);
    });
</script>

<section class="hero">
    <div class="bg-grid"></div>
    <div class="glow-orb"></div>
    <div class="container relative-z">
        <div class="hero-layout">
            <div class="hero-content">
                <div class="hero-eyebrow reveal">
                    <span class="status-dot"></span>
                    <span class="eyebrow-text">Available for new projects</span>
                </div>

                <h1 class="hero-headline reveal delay-1">Cahyadi Prasetyo</h1>

                <div class="hero-typewriter reveal delay-2">
                    <span class="dynamic-text text-gradient">{currentText}</span
                    ><span
                        class="cursor"
                        class:blink={currentText === roles[currentRoleIndex]}
                        >|</span
                    >
                </div>

                <p class="hero-body reveal delay-3">
                    {t.hero.bio}
                </p>

                <div class="hero-actions reveal delay-4">
                    <a href="#work" class="btn btn-primary primary-glow">
                        {t.hero.cta}
                        <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            ><path d="M5 12h14" /><path
                                d="m12 5 7 7-7 7"
                            /></svg
                        >
                    </a>
                    <a href="/contact" class="btn btn-outline"
                        >{t.hero.ctaSecondary}</a
                    >
                    <a href="/cv-visual.pdf" download="CV-Cahyadi-Prasetyo.pdf" class="btn btn-outline" title={t.hero.cvVisual}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                        Download CV
                    </a>
                </div>
            </div>

            <div class="hero-photo reveal delay-1">
                <img src="/my.webp" alt="Cahyadi Prasetyo" />
            </div>
        </div>
    </div>
</section>

<!-- Trust bar — minimal borderless style -->
<section class="trust reveal delay-5">
    <div class="container">
        <p class="trust-label">{t.trust.label}</p>
        <div class="trust-list">
            {#each t.trust.orgs as org}
                <div class="trust-item">
                    <span class="trust-name">{org.name}</span>
                </div>
            {/each}
        </div>
    </div>
</section>

<style>
    .hero {
        padding: calc(var(--nav-height) + var(--space-6xl)) 0 var(--space-5xl);
        background: transparent;
        position: relative;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 85vh;
    }

    .relative-z {
        position: relative;
        z-index: 10;
        width: 100%;
    }

    .glow-orb {
        position: absolute;
        top: 20%;
        left: 50%;
        transform: translateX(-50%);
        width: 60vw;
        height: 60vw;
        max-width: 800px;
        max-height: 800px;
        background: radial-gradient(
            circle,
            rgba(23, 23, 23, 0.04) 0%,
            rgba(255, 255, 255, 0) 70%
        );
        border-radius: 50%;
        z-index: 0;
        pointer-events: none;
    }

    .hero-layout {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: var(--space-4xl);
        text-align: left;
        max-width: 1000px;
        margin: 0 auto;
    }

    .hero-content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        flex: 1;
    }

    .hero-eyebrow {
        display: inline-flex;
        align-items: center;
        gap: var(--space-xs);
        padding: 6px 12px;
        background: var(--color-canvas);
        border-radius: var(--radius-full);
        margin-bottom: var(--space-xl);
        box-shadow: 0 0 0 1px var(--color-hairline);
    }

    .status-dot {
        width: 6px;
        height: 6px;
        background: var(--color-success);
        border-radius: 50%;
        flex-shrink: 0;
        box-shadow: 0 0 8px var(--color-success);
        animation: pulse 2s infinite;
    }

    @keyframes pulse {
        0% {
            box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.4);
        }
        70% {
            box-shadow: 0 0 0 6px rgba(16, 185, 129, 0);
        }
        100% {
            box-shadow: 0 0 0 0 rgba(16, 185, 129, 0);
        }
    }

    .eyebrow-text {
        font-family: var(--font-mono);
        font-size: 11px;
        font-weight: 500;
        letter-spacing: 0.5px;
        color: var(--color-mute);
        text-transform: uppercase;
    }

    .hero-headline {
        font-size: clamp(48px, 8vw, 80px);
        font-weight: 600;
        line-height: 1.05;
        letter-spacing: -3.5px;
        color: var(--color-ink);
        margin-bottom: var(--space-xs);
    }

    .hero-typewriter {
        font-size: clamp(32px, 5vw, 56px);
        font-weight: 600;
        line-height: 1.1;
        letter-spacing: -2px;
        margin-bottom: var(--space-2xl);
        min-height: 1.2em; /* Prevents layout jump when empty */
    }

    .dynamic-text {
        color: var(--color-ink);
    }

    .cursor {
        color: var(--color-mute);
        font-weight: 300;
        margin-left: 2px;
    }

    .cursor.blink {
        animation: blink 1s step-end infinite;
    }

    @keyframes blink {
        0%,
        100% {
            opacity: 1;
        }
        50% {
            opacity: 0;
        }
    }

    .hero-body {
        font-size: clamp(16px, 2vw, 20px);
        font-weight: 400;
        line-height: 1.6;
        color: var(--color-body);
        max-width: 600px;
        margin-bottom: var(--space-3xl);
        text-align: justify;
    }

    .hero-actions {
        display: flex;
        align-items: center;
        gap: var(--space-md);
        justify-content: flex-start;
        flex-wrap: wrap;
    }

    .primary-glow {
        transition: all var(--transition-base);
    }

    .primary-glow:hover {
        box-shadow: 0 4px 14px 0 rgba(0, 0, 0, 0.2);
        transform: translateY(-1px);
    }

    /* Photo */
    .hero-photo {
        flex-shrink: 0;
        width: 280px;
        height: 350px;
        border-radius: var(--radius-lg);
        overflow: hidden;
        box-shadow: var(--shadow-level-2);
        position: relative;
    }

    .hero-photo::after {
        content: "";
        position: absolute;
        inset: 0;
        border-radius: var(--radius-lg);
        box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.05);
        pointer-events: none;
    }

    .hero-photo img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: 30% 25%;
    }

    /* Trust bar */
    .trust {
        padding: var(--space-3xl) 0;
        background: transparent;
        text-align: center;
    }

    .trust-label {
        font-family: var(--font-mono);
        font-size: var(--caption);
        font-weight: 400;
        color: var(--color-mute);
        margin-bottom: var(--space-lg);
    }

    .trust-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: var(--space-4xl);
        opacity: 0.6;
        filter: grayscale(100%);
        transition:
            opacity var(--transition-base),
            filter var(--transition-base);
    }

    .trust-list:hover {
        opacity: 1;
        filter: grayscale(0%);
    }

    .trust-item {
        display: flex;
        align-items: center;
    }

    .trust-name {
        font-family: var(--font-sans);
        font-size: var(--body-lg);
        font-weight: 600;
        letter-spacing: -0.5px;
        color: var(--color-ink);
    }

    @media (max-width: 768px) {
        .hero {
            padding: calc(var(--nav-height) + var(--space-4xl)) 0
                var(--space-2xl);
            min-height: auto;
        }

        .hero-layout {
            flex-direction: column-reverse;
            gap: var(--space-xl);
            align-items: flex-start;
            text-align: left;
        }

        .hero-content {
            align-items: flex-start;
        }

        .hero-photo {
            width: 180px;
            height: 220px;
            align-self: flex-start;
        }

        .hero-headline {
            letter-spacing: -2px;
        }

        .hero-typewriter {
            letter-spacing: -1.5px;
        }

        .hero-actions {
            flex-direction: column;
            width: 100%;
        }

        .hero-actions .btn {
            width: 100%;
            justify-content: center;
        }

        .trust-list {
            gap: var(--space-xl);
            flex-direction: column;
        }
    }
</style>
