<script lang="ts">
    let { images = [], fallback = "" } = $props<{
        images?: string[];
        fallback?: string;
    }>();

    let displayImages = $derived(
        images && images.length > 0 ? images : fallback ? [fallback] : [],
    );

    let currentIndex = $state(0);
    let isPaused = $state(false);

    // Auto-slide effect
    $effect(() => {
        if (displayImages.length <= 1 || isPaused) return;

        const interval = setInterval(() => {
            currentIndex = (currentIndex + 1) % displayImages.length;
        }, 4000);

        return () => clearInterval(interval);
    });

    function goToSlide(index: number) {
        currentIndex = index;
    }

    function next(e: Event) {
        e.stopPropagation();
        currentIndex = (currentIndex + 1) % displayImages.length;
    }

    function prev(e: Event) {
        e.stopPropagation();
        currentIndex =
            (currentIndex - 1 + displayImages.length) % displayImages.length;
    }
</script>

<div
    class="carousel-container"
    onmouseenter={() => (isPaused = true)}
    onmouseleave={() => (isPaused = false)}
>
    {#if displayImages.length > 0}
        <div
            class="carousel-track"
            style="transform: translateX(-{currentIndex * 100}%)"
        >
            {#each displayImages as src, i}
                <div class="carousel-slide">
                    <img
                        {src}
                        alt="Project Slide {i + 1}"
                        loading={i === 0 ? "eager" : "lazy"}
                    />
                </div>
            {/each}
        </div>

        {#if displayImages.length > 1}
            <!-- Navigation Arrows -->
            <button
                class="nav-btn prev"
                onclick={prev}
                aria-label="Previous image"
            >
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"><path d="m15 18-6-6 6-6" /></svg
                >
            </button>
            <button class="nav-btn next" onclick={next} aria-label="Next image">
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg
                >
            </button>

            <!-- Pagination Dots -->
            <div class="pagination">
                {#each displayImages as _, i}
                    <button
                        class="dot"
                        class:active={currentIndex === i}
                        onclick={() => goToSlide(i)}
                        aria-label="Go to slide {i + 1}"
                    ></button>
                {/each}
            </div>
        {/if}
    {:else}
        <div class="carousel-empty">No Image Available</div>
    {/if}
</div>

<style>
    .carousel-container {
        position: relative;
        width: 100%;
        border-radius: var(--radius-lg);
        overflow: hidden;
        background: var(--color-canvas-soft-2);
        box-shadow: var(--shadow-level-2);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .carousel-container::after {
        content: "";
        position: absolute;
        inset: 0;
        box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.05);
        pointer-events: none;
        z-index: 10;
    }

    .carousel-track {
        display: flex;
        width: 100%;
        height: 100%;
        transition: transform 0.6s cubic-bezier(0.2, 1, 0.3, 1);
    }

    .carousel-slide {
        flex: 0 0 100%;
        width: 100%;
        height: auto;
    }

    .carousel-slide img {
        width: 100%;
        height: auto;
        display: block;
    }

    /* Navigation Buttons */
    .nav-btn {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.9);
        border: 1px solid var(--color-hairline);
        color: #171717; /* Always dark for contrast against image */
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        opacity: 0;
        transition:
            opacity var(--transition-base),
            transform var(--transition-base);
        z-index: 20;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }

    .carousel-container:hover .nav-btn {
        opacity: 1;
    }

    .nav-btn:hover {
        transform: translateY(-50%) scale(1.05);
        background: #ffffff;
    }

    .nav-btn.prev {
        left: var(--space-md);
    }

    .nav-btn.next {
        right: var(--space-md);
    }

    /* Pagination Dots */
    .pagination {
        position: absolute;
        bottom: var(--space-md);
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        gap: 8px;
        z-index: 20;
        background: rgba(0, 0, 0, 0.3);
        padding: 6px 10px;
        border-radius: 20px;
        backdrop-filter: blur(4px);
    }

    .dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.5);
        border: none;
        padding: 0;
        cursor: pointer;
        transition: all var(--transition-base);
    }

    .dot:hover {
        background: rgba(255, 255, 255, 0.8);
    }

    .dot.active {
        background: #ffffff;
        transform: scale(1.2);
    }

    .carousel-empty {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--color-mute);
        font-family: var(--font-mono);
        font-size: var(--caption);
    }
</style>
