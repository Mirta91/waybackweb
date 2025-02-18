<script lang="ts">
    import { classMap, prefixFilter } from "$utility/utility.ts";
    import { createEventDispatcher } from "svelte";
    export const as = "button";
    export let text: string = "";
    export let hidden: boolean = false;
    export let disabled: boolean = false;
    export let element = null;
    export let hasSlot: boolean = false;
    let className = "";
    export { className as class };
    let buttonProps = prefixFilter($$restProps, "button$");

    const dispatch = createEventDispatcher();
    function onClick() {
        dispatch("click");
    }
</script>

{#if text || (hasSlot && !hidden)}
    <button
        class={classMap({
            "text-sans text-sans border px-4 py-2 text-16 transition-all duration-300 ease-in-out": true,
            [className]: true,
        })}
        type="button"
        on:click={onClick}
        bind:this={element}
        {disabled}
        {...buttonProps}
    >
        {#if hasSlot}
            <slot></slot>
        {:else}
            {@html text}
        {/if}
    </button>
{/if}
