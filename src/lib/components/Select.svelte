<script lang="ts">
    import { classMap } from "$utility/utility.js";
    import { Label, Select } from "flowbite-svelte";
    import { createEventDispatcher } from "svelte";

    export let placeholderText: string = "";
    export let labelText: string = "";
    export let selected: string = "";
    export let darkMode: boolean = false;
    export let containerClass: string = "false";
    export { className as class };
    export let hasError: string[] | null;
    export let errorMsg: string = "Invalid input";
    let className = "";

    //remove data when implementing
    export let data: SelectItem[] = [
        { value: "us", name: "United States" },
        { value: "ca", name: "Canada" },
        { value: "fr", name: "France" },
    ];

    interface SelectItem {
        value: string;
        name: string;
    }

    const dispatch = createEventDispatcher();

    function handleChange(e: Event) {
        const target = e.target as HTMLSelectElement;
        selected = target.value;
        setTimeout(() => {
            dispatch("change", selected);
        }, 0);
    }
</script>

<Label class="select-container {hasError ? 'error' : ''} w-full {containerClass}">
    {labelText}
    <Select
        class={classMap({
            "select border-none bg-white !text-14 font-normal text-wb-black ring-[1px] ring-wb-black transition-all duration-300 ease-in-out focus:ring-2 focus:ring-wb-blue": true,
            [className]: true,
        })}
        placeholder={placeholderText}
        bind:value={selected}
        on:change={handleChange}
    >
        {#each data as item}
            <option value={item.value} selected={item.value === selected}>
                {item.name}
            </option>
        {/each}
    </Select>
</Label>
{#if hasError}
    <span
        class="inline-block w-full pl-1 pt-1 text-left text-12 text-wb-red-light"
    >
        {errorMsg}
    </span>
{/if}

<!-- <style lang="scss">
    .select {
        -webkit-appearance: none;
        &:focus,
        &:focus-visible,
        &:focus-within,
        &:active {
            @apply outline-none ring-[1px] ring-wb-black;
        }
        &:disabled,
        &--error {
            @apply ring-2 ring-wb-red-light;
            &:focus,
            &:active {
                @apply outline-none ring-2 ring-wb-red-light;
            }
        }
        &.icon {
            @apply pl-4;
        }
    }

    .select.darkMode {
        @apply bg-wb-black text-white ring-wb-gray-light;
        &:active,
        &:focus,
        &:focus-visible,
        &:focus-within {
            @apply ring-white;
        }
    }

    .select-container.error {
        .select {
            @apply text-wb-black ring-wb-red;
            &:active,
            &:focus,
            &:focus-visible,
            &:focus-within {
                @apply ring-wb-red;
            }
        }
    }
</style> -->
