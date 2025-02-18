<script lang="ts">
    import {
        classMap,
        formatDateTimeLocal,
        prefixFilter,
    } from "$utility/utility.js";
    import Icon from "@iconify/svelte";
    import { createEventDispatcher, onMount } from "svelte";

    let className = "";

    export { className as class };
    export let placeholder: string = "";
    export let initValue: string = "";
    export let readonly: boolean = false;
    export let disabled: boolean = false;
    export let reset: boolean = false;
    export let canBeEmpty: boolean = false;
    export let darkMode: boolean = false;
    export let hasError: string[] | null;
    export let errorMsg: string = "Invalid input";
    export let isPasswordInput: boolean = false;

    // export let inputValue;
    let inputProps = prefixFilter($$restProps, "input$");

    let show_password = false;
    let focused = false;
    let inputElement: HTMLInputElement;

    function toggleShowHidePassword() {
        show_password = !show_password;
        inputProps.type = show_password ? "text" : "password";
    }
    function resetValue() {
        clickReset();
    }

    const dispatch = createEventDispatcher();

    function clickReset() {
        dispatch("clickReset");
    }
    function handleInput(e: Event) {
        setTimeout(() => {
            dispatch("input", initValue);
        }, 0);
    }
    function onFocusOut() {
        focused = false;
        dispatch("focusout");
    }
    function onFocus() {
        focused = true;
        dispatch("focus");
    }

    onMount(() => {
        if (
            inputProps?.type === "datetime-local" &&
            inputElement
        ) {
            const formattedValue = formatDateTimeLocal(initValue);
            inputElement.value = formattedValue;
        }
    });
</script>

<label
    class="input-container relative inline-block w-full
        {hasError ? 'error' : ''}"
>
    <span
        class="absolute left-0 top-0 px-3 pt-1 text-10 text-wb-gray-light transition-opacity duration-300 ease-in-out
            {focused || initValue.length > 0 ? 'opacity-100' : 'opacity-0'}"
    >
        {placeholder}
    </span>
    <input
        bind:this={inputElement}
        on:input={handleInput}
        on:focusout={onFocusOut}
        on:focus={onFocus}
        placeholder={focused ? "" : placeholder}
        bind:value={initValue}
        class={classMap({
            [className]: true,
            input: true,
            "input-reset": reset === true ? true : false,
            darkMode: darkMode === true ? true : false,
            "pt-5": focused || initValue.length > 0,
        })}
        {readonly}
        {disabled}
        {...inputProps}
    />
    <slot />
    {#if hasError}
        <span
            class="inline-block w-full pl-1 pt-1.5 text-left text-12 text-wb-red-light"
        >
            {errorMsg}
        </span>
    {/if}
    {#if reset && (initValue?.length > 0 || canBeEmpty)}
        <button class="reset-button-container" on:click={resetValue}>
            Reset
        </button>
    {/if}
    {#if isPasswordInput}
        <button
            type="button"
            class="absolute bottom-auto left-auto right-3 top-2"
            on:click={() => toggleShowHidePassword()}
        >
            {#if !show_password}
                <Icon icon="mdi:hide" color="white" width="24"></Icon>
            {:else}
                <Icon icon="mdi:show" color="white" width="24"></Icon>
            {/if}
        </button>
    {/if}
    <slot name="addButton" />
</label>

<style lang="scss">
/*  */
</style>
