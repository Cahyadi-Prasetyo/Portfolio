<script lang="ts">
    import { getTranslations } from "$lib/i18n/index.svelte";

    const t = $derived(getTranslations());
    let openIndex = $state(-1);

    function toggle(i: number) {
        openIndex = openIndex === i ? -1 : i;
    }
</script>

<section class="faq reveal">
    <div class="container">
        <hr class="section-divider" />
        <div class="faq-header">
            <span class="section-label">{t.faq.label}</span>
            <h2 class="section-title">{t.faq.title}</h2>
        </div>

        <div class="faq-list">
            {#each t.faq.items as item, i}
                <button
                    class="faq-item"
                    class:open={openIndex === i}
                    onclick={() => toggle(i)}
                >
                    <div class="faq-question">
                        <span class="faq-text">{item.q}</span>
                        <span class="faq-icon">{openIndex === i ? '−' : '+'}</span>
                    </div>
                    {#if openIndex === i}
                        <div class="faq-answer">
                            <p>{item.a}</p>
                        </div>
                    {/if}
                </button>
            {/each}
        </div>
    </div>
</section>

<style>
    .faq {
        padding: var(--space-3xl) 0;
    }

    .faq-header {
        margin: var(--space-2xl) 0;
    }

    .faq-item {
        width: 100%;
        text-align: left;
        padding: 0;
        border: none;
        border-bottom: 1px solid var(--border);
        background: none;
        cursor: pointer;
    }

    .faq-item:first-child {
        border-top: 1px solid var(--border);
    }

    .faq-question {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: var(--space-lg) 0;
        gap: var(--space-lg);
    }

    .faq-text {
        font-size: var(--text-base);
        font-weight: 600;
        color: var(--text);
    }

    .faq-icon {
        font-size: var(--text-xl);
        color: var(--text-muted);
        flex-shrink: 0;
        width: 24px;
        text-align: center;
    }

    .faq-answer {
        padding: 0 0 var(--space-lg);
        animation: fadeIn 0.2s ease;
    }

    .faq-answer p {
        font-size: var(--text-sm);
        color: var(--text-secondary);
        line-height: 1.7;
    }

    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
</style>
