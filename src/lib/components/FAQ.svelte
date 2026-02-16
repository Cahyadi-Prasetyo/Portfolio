<script lang="ts">
    import { getTranslations } from "$lib/i18n/index.svelte";

    const t = $derived(getTranslations());
    let openIndex = $state(-1);

    function toggle(i: number) {
        openIndex = openIndex === i ? -1 : i;
    }
</script>

<section class="faq section section-alt reveal">
    <div class="container">
        <span class="section-label">{t.faq.label}</span>
        <h2 class="section-title">{t.faq.title}</h2>

        <div class="faq-list">
            {#each t.faq.items as item, i}
                <div class="faq-item" class:open={openIndex === i}>
                    <button class="faq-question" onclick={() => toggle(i)}>
                        <span>{item.q}</span>
                        <span class="faq-icon"
                            >{openIndex === i ? "✕" : "+"}</span
                        >
                    </button>
                    {#if openIndex === i}
                        <div class="faq-answer">
                            <p>{item.a}</p>
                        </div>
                    {/if}
                </div>
            {/each}
        </div>
    </div>
</section>

<style>
    .faq-list {
        max-width: 700px;
    }

    .faq-item {
        border-bottom: 1px solid var(--color-border);
    }

    .faq-question {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: var(--space-lg) 0;
        font-size: var(--text-base);
        font-weight: 500;
        color: var(--color-text);
        text-align: left;
        cursor: pointer;
        transition: color var(--transition-fast);
    }

    .faq-question:hover {
        color: var(--color-accent);
    }

    .faq-icon {
        font-size: var(--text-lg);
        color: var(--color-accent);
        transition: transform var(--transition-base);
    }

    .faq-item.open .faq-icon {
        transform: rotate(90deg);
    }

    .faq-answer {
        padding-bottom: var(--space-lg);
        animation: fadeIn 0.25s ease;
    }

    .faq-answer p {
        font-size: var(--text-sm);
        color: var(--color-text-muted);
        line-height: 1.8;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(-4px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
</style>
