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
        <div class="faq-layout">
            <div class="faq-header">
                <span class="section-label">{t.faq.label}</span>
                <h2 class="faq-title">{t.faq.title}</h2>
            </div>

            <div class="faq-list">
                {#each t.faq.items as item, i}
                    <div class="faq-item-wrapper">
                        <button
                            class="faq-item"
                            class:open={openIndex === i}
                            aria-expanded={openIndex === i}
                            aria-controls="faq-answer-{i}"
                            onclick={() => toggle(i)}
                        >
                            <div class="faq-question">
                                <span class="faq-text">{item.q}</span>
                                <span class="faq-icon" aria-hidden="true">{openIndex === i ? '−' : '+'}</span>
                            </div>
                        </button>
                        {#if openIndex === i}
                            <div class="faq-answer fade-in" id="faq-answer-{i}" role="region">
                                <p>{item.a}</p>
                            </div>
                        {/if}
                    </div>
                {/each}
            </div>
        </div>
    </div>
</section>

<style>
    .faq {
        padding: var(--space-5xl) 0;
        background: var(--color-canvas);
    }

    .faq-layout {
        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: var(--space-4xl);
        align-items: start;
        margin-top: var(--space-3xl);
    }

    .faq-header {
        position: sticky;
        top: calc(var(--nav-height) + var(--space-lg));
    }

    .faq-title {
        font-size: var(--display-lg);
        font-weight: 600;
        line-height: 40px;
        letter-spacing: -1.28px;
        color: var(--color-ink);
        margin-top: var(--space-xs);
    }

    .faq-list {
        display: flex;
        flex-direction: column;
    }

    .faq-item-wrapper {
        border-bottom: 1px solid var(--color-hairline);
    }

    .faq-item-wrapper:first-child {
        border-top: 1px solid var(--color-hairline);
    }

    .faq-item {
        width: 100%;
        text-align: left;
        padding: 0;
        border: none;
        background: none;
        cursor: pointer;
        min-height: 48px;
    }

    .faq-question {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: var(--space-lg) 0;
        gap: var(--space-lg);
        min-height: 48px;
    }

    .faq-text {
        font-size: var(--body-md);
        font-weight: 500;
        color: var(--color-ink);
        line-height: 24px;
    }

    .faq-icon {
        font-size: var(--display-sm);
        color: var(--color-mute);
        flex-shrink: 0;
        width: 24px;
        text-align: center;
        font-weight: 300;
    }

    .faq-answer {
        padding: 0 0 var(--space-lg);
    }

    .faq-answer p {
        font-size: var(--body-sm);
        color: var(--color-body);
        line-height: 24px;
        letter-spacing: -0.28px;
    }

    .fade-in {
        animation: fadeIn 0.3s cubic-bezier(0.2, 1, 0.3, 1) both;
    }

    @media (max-width: 768px) {
        .faq-layout {
            grid-template-columns: 1fr;
            gap: var(--space-2xl);
        }

        .faq-header {
            position: relative;
            top: 0;
        }

        .faq-question {
            padding: var(--space-md) 0;
        }

        .faq-text {
            font-size: 15px;
        }

        .faq-icon {
            font-size: 28px;
            width: 32px;
        }

        .faq-answer p {
            font-size: 14px;
        }
    }
</style>
