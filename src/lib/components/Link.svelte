<script lang="ts">
    import { classMap } from "$utility/utility.js";
    export let text: string = "";
    export let urlPrefix: string = "";
    export let url: string = "";
    export let hasSlot: boolean = false;
    export let target = "_self";
    export let useDefaultClasses: boolean = true;

    let className = "";
    export { className as class };
</script>

<a
    href={url}
    {target}
    class={classMap({
        "inline-block font-bold text-wb-blue underline underline-offset-4": useDefaultClasses,
        [className]: true,
    })}
>
    {#if hasSlot}
        <slot></slot>
    {:else}
        {text}
    {/if}
</a>
