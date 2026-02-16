<script lang="ts">
    import { t } from "$lib/i18n";

    let openIndex = $state<number | null>(null);

    function toggle(index: number) {
        openIndex = openIndex === index ? null : index;
    }
</script>

<section class="faq section-light section-padding">
    <div class="container">
        <div class="faq-header reveal">
            <span class="section-label section-label-light">{$t.faq.label}</span
            >
        </div>

        <div class="faq-list">
            {#each $t.faq.items as item, i}
                <div class="faq-item reveal" class:open={openIndex === i}>
                    <button class="faq-question" onclick={() => toggle(i)}>
                        <span>{item.question}</span>
                        <span class="faq-icon">
                            <svg
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <line x1="12" y1="5" x2="12" y2="19" />
                                <line x1="5" y1="12" x2="19" y2="12" />
                            </svg>
                        </span>
                    </button>
                    {#if openIndex === i}
                        <div class="faq-answer">
                            <p>{item.answer}</p>
                        </div>
                    {/if}
                </div>
            {/each}
        </div>
    </div>
</section>

<style>
    .faq {
        border-top: 1px solid var(--color-border-light);
    }

    .faq-header {
        margin-bottom: var(--space-2xl);
    }

    .faq-list {
        max-width: 800px;
    }

    .faq-item {
        border-bottom: 1px solid var(--color-border-light);
    }

    .faq-question {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: var(--space-lg);
        padding: var(--space-xl) 0;
        font-size: var(--text-lg);
        font-weight: 500;
        color: var(--color-text-on-light);
        text-align: left;
        transition: color var(--transition-fast);
    }

    .faq-question:hover {
        color: var(--color-muted-on-light);
    }

    .faq-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        transition: transform var(--transition-base);
    }

    .faq-item.open .faq-icon {
        transform: rotate(45deg);
    }

    .faq-answer {
        padding-bottom: var(--space-xl);
        animation: fadeIn 0.3s ease;
    }

    .faq-answer p {
        font-size: var(--text-base);
        color: var(--color-muted-on-light);
        line-height: 1.8;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(-8px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @media (max-width: 768px) {
        .faq-question {
            font-size: var(--text-base);
        }
    }
</style>
