<script lang="ts">
    export let className: string = "";
    export let title: string = "";
    export let colSpan: string = "col-span-1";
    export let rowSpan: string = "row-span-1";
    export let href: string | undefined = undefined;

    // Base classes for the card
    const baseClasses =
        "bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col relative overflow-hidden group";

    // Combine all classes
    $: finalClass = `${baseClasses} ${colSpan} ${rowSpan} ${className}`;
</script>

{#if href}
    <a {href} class={finalClass} target="_blank" rel="noopener noreferrer">
        {#if title}
            <h3
                class="text-sm font-semibold text-slate-500 mb-2 uppercase tracking-wider"
            >
                {title}
            </h3>
        {/if}
        <slot />
    </a>
{:else}
    <div class={finalClass}>
        {#if title}
            <h3
                class="text-sm font-semibold text-slate-500 mb-2 uppercase tracking-wider"
            >
                {title}
            </h3>
        {/if}
        <slot />
    </div>
{/if}

<style>
    /* Optional: Add specific local styles if Tailwind isn't enough */
</style>
