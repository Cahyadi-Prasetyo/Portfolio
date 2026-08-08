<script lang="ts">
    import { getTranslations } from "$lib/i18n/index.svelte";
    const t = $derived(getTranslations());

    const roles = $derived(t.hero.roles || [
        "Full-Stack Developer.",
        "IT Mentor & Lab Assistant.",
        "Data Enthusiast."
    ]);

    let currentRoleIndex = $state(0);
    let currentText = $state("");
    let isDeleting = $state(false);

    $effect(() => {
        let timer: ReturnType<typeof setTimeout>;
        const roleList = roles;

        function type() {
            const safeIndex = currentRoleIndex % roleList.length;
            const fullText = roleList[safeIndex] || "";

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
                currentRoleIndex = (currentRoleIndex + 1) % roleList.length;
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
                <!-- Eyebrow Bar: Badge "Available for new projects" + Chip "Spesialis Web & Data" -->
                <div class="hero-eyebrow reveal">
                    <span class="status-dot"></span>
                    <span class="eyebrow-text">{t.hero.status}</span>
                    <span class="eyebrow-divider" aria-hidden="true">•</span>
                    <span class="eyebrow-badge">{t.hero.specialty}</span>
                </div>

                <!-- Layer 1: Nama "Cahyadi Prasetyo" (Ukuran sedang, muted dark grey) -->
                <p class="hero-name reveal delay-1">{t.hero.name}</p>

                <!-- Layer 2: Main Headline Value Proposition (Giant bold text-gradient) -->
                <h1 class="hero-headline reveal delay-2 text-gradient">{t.hero.value}</h1>

                <!-- Layer 3: Typewriter sub-headline (roles) -->
                <div class="hero-typewriter reveal delay-3">
                    <span class="dynamic-text">{currentText}</span
                    ><span
                        class="cursor"
                        class:blink={currentText === roles[currentRoleIndex % roles.length]}
                        >|</span
                    >
                </div>

                <p class="hero-body reveal delay-4">
                    {t.hero.bio}
                </p>

                <div class="hero-actions reveal delay-5">
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
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                        {t.hero.cvVisual}
                    </a>
                </div>
            </div>

            <div class="hero-photo reveal delay-1">
                <img src="/images.webp" alt="Cahyadi Prasetyo" loading="lazy" />
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
        padding: calc(var(--nav-height) + var(--space-2xl)) 0 var(--space-2xl);
        background: transparent;
        position: relative;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: auto;
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
            transparent 70%
        );
        filter: blur(60px);
        z-index: 1;
        pointer-events: none;
    }

    .hero-layout {
        display: grid;
        grid-template-columns: 1fr 320px;
        gap: var(--space-3xl);
        align-items: center;
    }

    .hero-content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .hero-eyebrow {
        display: inline-flex;
        align-items: center;
        gap: var(--space-xs);
        padding: 5px 12px;
        background: var(--color-canvas);
        border-radius: var(--radius-full);
        margin-bottom: var(--space-md);
        box-shadow: 0 0 0 1px var(--color-hairline);
        flex-wrap: wrap;
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
            box-shadow: 0 0 0 0 color-mix(in srgb, var(--color-success) 40%, transparent);
        }
        70% {
            box-shadow: 0 0 0 6px color-mix(in srgb, var(--color-success) 0%, transparent);
        }
        100% {
            box-shadow: 0 0 0 0 color-mix(in srgb, var(--color-success) 0%, transparent);
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

    .eyebrow-divider {
        color: var(--color-hairline-strong);
        font-size: 10px;
    }

    .eyebrow-badge {
        font-family: var(--font-mono);
        font-size: 11px;
        font-weight: 500;
        letter-spacing: 0.5px;
        color: var(--color-ink);
        text-transform: uppercase;
    }

    .hero-name {
        font-size: clamp(18px, 2.2vw, 24px);
        font-weight: 500;
        line-height: 1.3;
        letter-spacing: -0.6px;
        color: var(--color-body);
        margin-bottom: 4px;
    }

    .hero-headline {
        font-size: clamp(30px, 4.2vw, 50px);
        font-weight: 600;
        line-height: 1.12;
        letter-spacing: -2px;
        margin-bottom: var(--space-sm);
    }

    .hero-typewriter {
        font-size: clamp(18px, 2.4vw, 26px);
        font-weight: 600;
        line-height: 1.2;
        letter-spacing: -0.8px;
        color: var(--color-body);
        margin-bottom: var(--space-md);
        min-height: 1.2em; /* Prevents layout jump when empty */
        overflow-wrap: break-word;
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
        font-size: clamp(14px, 1.2vw, 17px);
        font-weight: 400;
        line-height: 1.55;
        color: var(--color-body);
        max-width: 580px;
        margin-bottom: var(--space-xl);
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
        box-shadow: var(--shadow-level-3);
        transform: translateY(-1px);
    }

    /* Photo visual treatment */
    .hero-photo {
        flex-shrink: 0;
        width: 250px;
        height: 310px;
        border-radius: var(--radius-lg);
        overflow: hidden;
        background: var(--color-canvas-soft-2);
        border: 1px solid var(--color-hairline);
        box-shadow: var(--shadow-level-2);
        position: relative;
        transition: border-color var(--transition-base), box-shadow var(--transition-base), transform var(--transition-base);
    }

    .hero-photo:hover {
        border-color: var(--color-hairline-strong);
        box-shadow: var(--shadow-level-4);
        transform: translateY(-2px);
    }

    .hero-photo::after {
        content: "";
        position: absolute;
        inset: 0;
        border-radius: var(--radius-lg);
        box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.1);
        pointer-events: none;
    }

    .hero-photo img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: 30% 25%;
        filter: grayscale(75%) contrast(1.05) brightness(0.98);
        transition: filter var(--transition-base);
    }

    .hero-photo:hover img {
        filter: grayscale(0%) contrast(1) brightness(1);
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
            padding: calc(var(--nav-height) + var(--space-3xl)) 0
                var(--space-2xl);
            min-height: auto;
        }

        .hero-layout {
            flex-direction: column-reverse;
            gap: var(--space-xl);
            align-items: center;
            text-align: center;
        }

        .hero-content {
            align-items: center;
        }

        .hero-photo {
            width: 140px;
            height: 140px;
            border-radius: 50%;
            align-self: center;
            box-shadow: 0 0 0 4px var(--color-canvas), 0 0 0 5px var(--color-hairline);
        }

        .hero-photo::after {
            border-radius: 50%;
        }

        .hero-headline {
            font-size: clamp(36px, 10vw, 48px);
            letter-spacing: -2px;
        }

        .hero-typewriter {
            font-size: clamp(22px, 6vw, 32px);
            letter-spacing: -1px;
            min-height: 1.3em;
        }

        .hero-body {
            font-size: 15px;
            line-height: 1.6;
            text-align: center;
        }

        .hero-actions {
            flex-direction: column;
            width: 100%;
            gap: var(--space-sm);
        }

        .hero-actions .btn {
            width: 100%;
            justify-content: center;
            font-size: 14px;
            height: 44px;
        }

        .trust-list {
            gap: var(--space-lg);
            flex-direction: column;
            align-items: center;
        }

        .trust-name {
            font-size: var(--body-md);
        }
    }

    @media (max-width: 400px) {
        .hero-photo {
            width: 120px;
            height: 120px;
        }

        .hero-headline {
            font-size: 32px;
        }

        .hero-typewriter {
            font-size: 20px;
        }

        .trust-list {
            gap: var(--space-md);
        }

        .trust-name {
            font-size: var(--body-sm);
        }
    }
</style>
