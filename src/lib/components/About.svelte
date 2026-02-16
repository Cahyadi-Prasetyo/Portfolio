<script lang="ts">
    import { t } from "$lib/i18n";
</script>

<section id="about" class="about section-dark section-padding">
    <div class="container">
        <div class="about-content reveal">
            <h2 class="about-label">{$t.about.label}</h2>
            <p class="about-bio">{$t.about.bio}</p>
        </div>
    </div>
</section>

<style>
    .about {
        border-top: 1px solid var(--color-border-dark);
    }

    .about-content {
        max-width: 800px;
        margin: 0 auto;
        text-align: center;
    }

    .about-label {
        font-size: var(--text-2xl);
        font-weight: 600;
        margin-bottom: var(--space-2xl);
        color: var(--color-white);
    }

    .about-bio {
        font-size: var(--text-lg);
        line-height: 1.9;
        color: var(--color-muted-on-dark);
    }

    @media (max-width: 768px) {
        .about-bio {
            font-size: var(--text-base);
        }
    }
</style>
