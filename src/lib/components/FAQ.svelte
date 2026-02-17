<script lang="ts">
    import { getTranslations } from "$lib/i18n/index.svelte";

    const t = $derived(getTranslations());
    let openIndex = $state(-1);

    function toggle(i: number) {
        openIndex = openIndex === i ? -1 : i;
    }
</script>

<section class="faq section reveal">
    <hr class="section-divider" />
    <div class="container">
        <div class="faq-header">
            <span class="section-label">// {t.faq.label}</span>
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
                        <div class="faq-q-left">
                            <span class="faq-num"
                                >{String(i + 1).padStart(2, "0")}</span
                            >
                            <span>{item.q}</span>
                        </div>
                        <span class="faq-icon">
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <line x1="12" y1="5" x2="12" y2="19" />
                                <line x1="5" y1="12" x2="19" y2="12" />
                            </svg>
                        </span>
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
    .faq-header {
        padding-top: var(--space-3xl);
        margin-bottom: var(--space-2xl);
    }

    .faq-list {
        max-width: 750px;
    }

    .faq-item {
        width: 100%;
        text-align: left;
        padding: 0;
        border: none;
        border-bottom: 1px solid var(--color-border);
        background: none;
        cursor: pointer;
        transition: background var(--transition-fast);
    }

    .faq-item:first-child {
        border-top: 1px solid var(--color-border);
    }

    .faq-question {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: var(--space-lg) 0;
        gap: var(--space-lg);
    }

    .faq-q-left {
        display: flex;
        align-items: center;
        gap: var(--space-lg);
    }

    .faq-num {
        font-family: var(--font-mono);
        font-size: var(--text-xs);
        color: var(--color-text-muted);
        flex-shrink: 0;
    }

    .faq-question span:not(.faq-num):not(.faq-icon) {
        font-size: var(--text-base);
        font-weight: 500;
        color: var(--color-text);
    }

    .faq-icon {
        color: var(--color-text-muted);
        flex-shrink: 0;
        transition: transform var(--transition-base);
    }

    .faq-item.open .faq-icon {
        transform: rotate(45deg);
    }

    .faq-answer {
        padding: 0 0 var(--space-lg);
        padding-left: calc(var(--text-xs) + var(--space-lg) + 1.5rem);
        animation: fadeSlide 0.3s ease;
    }

    .faq-answer p {
        font-size: var(--text-sm);
        color: var(--color-text-secondary);
        line-height: 1.8;
    }

    @keyframes fadeSlide {
        from {
            opacity: 0;
            transform: translateY(-6px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
</style>
