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
                            <div class="faq-answer fade-in">
                                <p>{item.a}</p>
                            </div>
                        {/if}
                    </button>
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

    .faq-item {
        width: 100%;
        text-align: left;
        padding: 0;
        border: none;
        border-bottom: 1px solid var(--color-hairline);
        background: none;
        cursor: pointer;
    }

    .faq-item:first-child {
        border-top: 1px solid var(--color-hairline);
    }

    .faq-question {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: var(--space-lg) 0;
        gap: var(--space-lg);
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

    @media (max-width: 768px) {
        .faq-layout {
            grid-template-columns: 1fr;
            gap: var(--space-2xl);
        }
        
        .faq-header {
            position: relative;
            top: 0;
        }
    }
</style>
