<script lang="ts">
    import { classMap, prefixFilter } from "$utility/utility";
    import { createEventDispatcher } from "svelte";

    let className = "";

    export { className as class };
    export let placeholder: string = "";
    export let initValue: string = "";
    export let darkMode: boolean = false;
    export let hasError: string[] | null;
    export let errorMsg: string = "Invalid textarea input";

    let textareaProps = prefixFilter($$restProps, "textarea$");

    let focused = false;

    const dispatch = createEventDispatcher();

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
</script>

<label
    class="textarea-container relative inline-block w-full {hasError
        ? 'error'
        : ''}"
>
    <span
        class="absolute left-0 top-0 px-2 pt-1 text-10 text-wb-gray-light transition-opacity duration-300 ease-in-out
        {focused || initValue.length > 0 ? 'opacity-100' : 'opacity-0'}"
    >
        {placeholder}
    </span>
    <textarea
        on:input={handleInput}
        on:focusout={onFocusOut}
        on:focus={onFocus}
        placeholder={focused ? "" : placeholder}
        bind:value={initValue}
        class={classMap({
            [className]: true,
            textarea: true,
            darkMode: darkMode === true ? true : false,
            "pt-4": focused || initValue.length > 0,
        })}
        {...textareaProps}
    ></textarea>
    {#if hasError}
        <span
            class="inline-block w-full pl-1 pt-1 text-left text-12 text-wb-red-light"
        >
            {errorMsg}
        </span>
    {/if}
</label>

<!-- <style lang="scss">
    .textarea {
        @apply flex w-full rounded border-none text-14 text-wb-black ring-[1px] ring-wb-black transition-all duration-300 ease-in-out;
        -webkit-appearance: none;
        &:focus,
        &:focus-visible,
        &:focus-within,
        &:active {
            @apply outline-none focus:ring-2 focus:ring-wb-blue;
        }
        &:disabled,
        &--error {
            @apply ring-2 ring-wb-red-light;
            &:focus,
            &:active {
                @apply outline-none ring-2 ring-wb-red-light;
            }
        }
        &::placeholder {
            /* Chrome, Firefox, Opera, Safari 10.1+ */
            @apply font-normal text-wb-gray-light opacity-100;
        }
    }
    textarea::-webkit-calendar-picker-indicator {
        display: none;
        -webkit-appearance: none;
    }

    .textarea.darkMode {
        @apply bg-wb-black text-white ring-wb-gray-light;
        &:active,
        &:focus,
        &:focus-visible,
        &:focus-within {
            @apply ring-white;
        }
    }

    .textarea-container.error {
        .textarea {
            @apply text-white ring-wb-red;
            &:active,
            &:focus,
            &:focus-visible,
            &:focus-within {
                @apply ring-wb-red;
            }
        }
    }
</style> -->
