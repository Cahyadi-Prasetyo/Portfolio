<script lang="ts">
    import { getTranslations } from "$lib/i18n/index.svelte";
    import FAQ from "$lib/components/FAQ.svelte";
    import FooterCTA from "$lib/components/FooterCTA.svelte";
    import TechStack from "$lib/components/TechStack.svelte";

    const t = $derived(getTranslations());
</script>

<svelte:head>
    <title>{t.about.title} • Cahyadi Prasetyo</title>
</svelte:head>

<div class="page-wrapper">
    <div class="container">
        <div class="about-grid">
            <!-- Left Sidebar (Photo & Info) -->
            <aside class="about-sidebar reveal">
                <div class="profile-card">
                    <div class="profile-photo">
                        <img src="/my-self.png" alt="Cahyadi Prasetyo" />
                    </div>

                    <div class="sidebar-details">
                        <div class="detail-group">
                            <span class="detail-label">Status</span>
                            <span class="detail-value status-available">
                                <span class="status-dot"></span>
                                Available for Freelance
                            </span>
                        </div>
                        <div class="detail-group">
                            <span class="detail-label">Email</span>
                            <a
                                href="mailto:hello@cahyadiprasetyo.com"
                                class="detail-link"
                            >
                                hello@cahyadiprasetyo.com
                            </a>
                        </div>
                        <div class="detail-group">
                            <span class="detail-label">Socials</span>
                            <div class="detail-socials">
                                <a
                                    href="https://github.com/Cahyadi-Prasetyo"
                                    target="_blank">GitHub</a
                                >
                                <span class="sep">/</span>
                                <a href="https://instagram.com" target="_blank"
                                    >Instagram</a
                                >
                                <span class="sep">/</span>
                                <a href="https://linkedin.com" target="_blank"
                                    >LinkedIn</a
                                >
                            </div>
                        </div>
                    </div>
                </div>
            </aside>

            <!-- Right Content (Bio, Stack, Timeline) -->
            <div class="about-content">
                <!-- Bio -->
                <section class="bio-section reveal-right">
                    <h1 class="page-title">{t.about.title}</h1>
                    <div class="bio-text">
                        {#each t.about.bio.split("\n\n") as paragraph}
                            <p>{paragraph}</p>
                        {/each}
                    </div>
                </section>

                <hr class="divider" />

                <!-- Tech Stack -->
                <section
                    class="stack-section reveal-right"
                    style="transition-delay: 100ms"
                >
                    <h2 class="section-title">{t.about.techStackLabel}</h2>
                    <TechStack />
                </section>

                <hr class="divider" />

                <!-- Experience -->
                <section
                    class="timeline-section reveal-right"
                    style="transition-delay: 200ms"
                >
                    <h2 class="section-title">{t.about.titleExp}</h2>
                    <div class="timeline">
                        {#each t.about.experience as item, i}
                            <div class="timeline-item">
                                <div class="timeline-left">
                                    <span class="timeline-period"
                                        >{item.period}</span
                                    >
                                </div>
                                <div class="timeline-right">
                                    <h3 class="timeline-role">{item.role}</h3>
                                    <h4 class="timeline-company">
                                        {item.company}
                                    </h4>
                                    <p class="timeline-desc">{item.desc}</p>
                                </div>
                            </div>
                        {/each}
                    </div>
                </section>

                <hr class="divider" />

                <!-- Education -->
                <section
                    class="education-section reveal-right"
                    style="transition-delay: 300ms"
                >
                    <h2 class="section-title">{t.about.titleEdu}</h2>
                    <div class="education-grid">
                        {#each t.about.education as item, i}
                            <div
                                class="edu-card"
                                style="transition-delay: {i * 100}ms"
                            >
                                <div class="edu-icon">🎓</div>
                                <div class="edu-content">
                                    <span class="edu-period">{item.period}</span
                                    >
                                    <h3 class="edu-degree">{item.degree}</h3>
                                    <h4 class="edu-school">{item.school}</h4>
                                    <p class="edu-desc">{item.desc}</p>
                                </div>
                            </div>
                        {/each}
                    </div>
                </section>
            </div>
        </div>
    </div>

    <FAQ />
    <FooterCTA />
</div>

<style>
    .page-wrapper {
        padding-top: calc(var(--nav-height) + var(--space-3xl));
        padding-bottom: var(--space-4xl);
        min-height: 100vh;
    }

    .about-grid {
        display: grid;
        grid-template-columns: 320px 1fr;
        gap: var(--space-4xl);
        align-items: start;
        margin-bottom: var(--space-4xl);
    }

    /* Sidebar */
    .about-sidebar {
        position: sticky;
        top: calc(var(--nav-height) + var(--space-xl));
    }

    .profile-card {
        padding: var(--space-xl);
        background: var(--color-bg);
        border: 1px solid var(--color-border);
        border-radius: var(--radius-xl);
    }

    .profile-photo img {
        width: 100%;
        aspect-ratio: 1/1;
        object-fit: cover;
        object-position: top;
        border-radius: var(--radius-lg);
        margin-bottom: var(--space-xl);
        background: var(--color-bg-alt);
    }

    .sidebar-details {
        display: flex;
        flex-direction: column;
        gap: var(--space-lg);
    }

    .detail-group {
        display: flex;
        flex-direction: column;
        gap: 4px;
    }

    .detail-label {
        font-family: var(--font-mono);
        font-size: var(--text-xs);
        color: var(--color-text-muted);
        text-transform: uppercase;
        letter-spacing: 0.05em;
    }

    .detail-value {
        font-size: var(--text-sm);
        font-weight: 600;
        color: var(--color-text);
        line-height: 1.4;
    }

    .detail-link,
    .detail-socials a {
        font-size: var(--text-sm);
        font-weight: 600;
        color: var(--color-text);
        text-decoration: none;
        transition: color var(--transition-fast);
    }

    .detail-link:hover,
    .detail-socials a:hover {
        color: var(--color-primary);
    }

    .status-available {
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .status-dot {
        width: 8px;
        height: 8px;
        background-color: #22c55e;
        border-radius: 50%;
        box-shadow: 0 0 0 2px rgba(34, 197, 94, 0.2);
    }

    .detail-socials {
        display: flex;
        gap: 8px;
    }

    .sep {
        color: var(--color-border);
    }

    /* Content */
    .about-content {
        display: flex;
        flex-direction: column;
        gap: var(--space-3xl);
    }

    .page-title {
        font-family: var(--font-heading);
        font-size: var(--text-3xl);
        font-weight: 800;
        margin-bottom: var(--space-xl);
        letter-spacing: -0.03em;
    }

    .bio-text {
        font-size: var(--text-lg);
        color: var(--color-text-secondary);
        line-height: 1.8;
        display: flex;
        flex-direction: column;
        gap: var(--space-lg);
    }

    .divider {
        border: none;
        border-top: 1px dashed var(--color-border);
        margin: 0;
    }

    .section-title {
        font-family: var(--font-heading);
        font-size: var(--text-xl);
        font-weight: 700;
        margin-bottom: var(--space-xl);
        display: flex;
        align-items: center;
        gap: var(--space-sm);
    }

    .section-title::before {
        content: "#";
        color: var(--color-accent);
        font-family: var(--font-mono);
    }

    /* Timeline */
    .timeline {
        display: flex;
        flex-direction: column;
        gap: var(--space-xl);
    }

    .timeline-item {
        display: grid;
        grid-template-columns: 140px 1fr;
        gap: var(--space-xl);
    }

    .timeline-period {
        font-family: var(--font-mono);
        font-size: var(--text-xs);
        font-weight: 600;
        color: var(--color-text-muted);
        padding-top: 4px;
        display: block;
    }

    .timeline-role {
        font-size: var(--text-lg);
        font-weight: 700;
        color: var(--color-text);
        margin-bottom: 4px;
    }

    .timeline-company {
        font-size: var(--text-base);
        font-weight: 500;
        color: var(--color-primary);
        margin-bottom: var(--space-sm);
    }

    .timeline-desc {
        font-size: var(--text-base);
        color: var(--color-text-secondary);
        line-height: 1.6;
    }

    @media (max-width: 900px) {
        .about-grid {
            grid-template-columns: 1fr;
            gap: var(--space-2xl);
        }

        .about-sidebar {
            position: relative;
            top: 0;
        }

        .profile-photo img {
            max-width: 200px;
        }

        .timeline-item {
            grid-template-columns: 1fr;
            gap: var(--space-xs);
        }
    }

    /* Education Grid */
    .education-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: var(--space-lg);
    }

    .edu-card {
        padding: var(--space-xl);
        border: 1px solid var(--color-border);
        border-radius: var(--radius-xl);
        background: var(--color-bg);
        transition: all var(--transition-normal);
        display: flex;
        gap: var(--space-lg);
        align-items: flex-start;
    }

    .edu-card:hover {
        border-color: var(--color-text);
        box-shadow: var(--shadow-md);
        transform: translateY(-2px);
    }

    .edu-icon {
        font-size: var(--text-2xl);
        background: var(--color-bg-alt);
        padding: var(--space-md);
        border-radius: var(--radius-lg);
        line-height: 1;
    }

    .edu-content {
        display: flex;
        flex-direction: column;
        gap: var(--space-xs);
    }

    .edu-period {
        font-family: var(--font-mono);
        font-size: var(--text-xs);
        color: var(--color-text-muted);
        margin-bottom: var(--space-xs);
    }

    .edu-degree {
        font-size: var(--text-lg);
        font-weight: 700;
        color: var(--color-text);
        line-height: 1.3;
    }

    .edu-school {
        font-size: var(--text-sm);
        font-weight: 500;
        color: var(--color-text-muted);
    }

    .edu-desc {
        font-size: var(--text-sm);
        color: var(--color-text-secondary);
        margin-top: var(--space-sm);
        line-height: 1.6;
    }

    @media (max-width: 640px) {
        .education-grid {
            grid-template-columns: 1fr;
        }

        .edu-card {
            flex-direction: column;
            gap: var(--space-md);
        }
    }
</style>
