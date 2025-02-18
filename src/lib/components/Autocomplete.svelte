<script lang="ts">
    import getPlaces from "$utility/getPlaces";
    import type { AddressFormData } from "$utility/interfaces";
    import AutoComplete from "simple-svelte-autocomplete";
    import { createEventDispatcher } from "svelte";
    export let placeholder: string = "";
    export let hasError: string[] | null;
    export let errorMsg: string = "Invalid selection";
    export let delay: number = 0;
    export let required: boolean = false;
    export let initialSelectedPlace: AddressFormData | string = "";
    // TODO: export let darkMode: boolean = false;

    let focused: boolean = false;
    let selectedPlace: AddressFormData | string = initialSelectedPlace;

    const dispatch = createEventDispatcher();

    function onFocus() {
        console.log("focus", focused);
        focused = true;
        dispatch("focus");
    }
    function onChange() {
        //  console.log("on change", selectedPlace);
        dispatch("change", selectedPlace);
    }

    // TODO: if autocomplete component needs to be used in another way (not only for places)
    // refactor this component to be more generic
    async function getItems(keyword: string) {
        await new Promise((r) => setTimeout(r, 300));
        let result = await getPlaces(keyword);
        return result;
    }
</script>

<div
    class="autocomplete-container relative inline-block w-full
        {hasError ? 'error' : ''}"
>
    <span
        class="absolute left-0 top-0 !z-10 px-2 pt-1 text-10 text-wb-gray-light transition-opacity duration-300 ease-in-out
            {focused ? 'opacity-100' : 'opacity-0'}"
    >
        {placeholder}
    </span>
    <AutoComplete
        {onFocus}
        {onChange}
        searchFunction={getItems}
        bind:selectedItem={selectedPlace}
        labelFieldName="address"
        valueFieldName="id"
        showLoadingIndicator={true}
        localFiltering={false}
        maxItemsToShowInList={10}
        {delay}
        {required}
        placeholder={focused ? "" : placeholder}
        noResultsText="No results"
        className="min-h-[40px] w-full text-14 !text-wb-red ring-wb-black {focused
            ? 'min-h-[48px]'
            : ''}"
        inputClassName="min-h-[40px] text-14 {focused
            ? 'min-h-[48px] !pt-4'
            : ''} w-full border-none ring-[1px] text-wb-black ring-wb-black transition-all focus:ring-2 focus:ring-wb-blue focus:border-none duration-300 ease-in-out"
        dropdownClassName=" !border !border-wb-gray-light !text-wb-gray-light "
    />
    {#if hasError}
        <span
            class="inline-block w-full pl-1 pt-1 text-left text-12 text-wb-red-light"
        >
            {errorMsg}
        </span>
    {/if}
</div>

<!-- <style lang="scss">
    .input-container {
        @apply w-full;
    }
    .autocomplete:not(.hide-arrow):not(.is-loading)::after {
        border-color: red !important;
        @apply border-wb-gray-light #{!important};
    }
</style> -->
