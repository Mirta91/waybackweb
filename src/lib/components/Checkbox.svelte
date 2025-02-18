<script lang="ts">
    import Icon from "@iconify/svelte";

    import { classMap } from "$utility/utility.js";
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
    function onClick() {
        dispatch("click");
        clickedOnce = true;
    }
    let className = "";
    export { className as class };
    export let text = "";
    export let id: number | string = 0;
    export let svgClass = "";
    export let textClass = "";
    export let description = "";
    export let descriptionClass = "";
    export let error = "";
    export let errorClass = "";
    export let checked = false;
    export let showError = false;
    export let clickedOnce = false;
    export let darkMode = false;

    let iconColor = darkMode === true ? "#25282B" : "#ffffff";
</script>

<div
    class={classMap({
        [className]: true,
        checkbox: true,
        darkMode: darkMode === true ? true : false,
    })}
>
    <input type="checkbox" id="check-{id}" bind:checked />
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <label
        for="check-{id}"
        class="checkmark"
        class:input--error={showError && clickedOnce}
        on:click={onClick}
        on:keydown={onClick}
    >
        <Icon
            icon="material-symbols:check"
            width="32"
            style="color: {iconColor}"
        ></Icon>
    </label>
    <div class={textClass}>
        {#if text}
            {@html text}
        {/if}
        {#if description}
            {description}
        {/if}
        <slot />
        {#if showError && clickedOnce}
            <span class={errorClass}>error</span>
        {/if}
    </div>
</div>

<!-- <style lang="scss">
    .checkbox {
        @apply flex gap-x-3;
        input[type="checkbox"] {
            @apply hidden appearance-none;
            & + label {
                @apply flex items-center;
                &:hover {
                    @apply border-black;
                }
            }
        }
        input[type="checkbox"]:checked + label {
            @apply border-0 bg-wb-blue;
            &:hover {
                @apply bg-wb-blue;
            }
        }
        .checkmark {
            @apply relative h-6 min-h-[24px] w-6 min-w-[24px] cursor-pointer self-start border border-wb-gray transition-all duration-100 ease-in-out;
            &.input--error {
                @apply border-wb-red-light;
                &:hover {
                    @apply border-black;
                }
            }
        }
    }

    .checkbox.darkMode {
        @apply text-white;
        .checkmark {
            @apply border-wb-gray-light;
        }
        input[type="checkbox"] {
            & + label {
                @apply flex items-center;
                &:hover {
                    @apply border-white;
                }
            }
        }
        input[type="checkbox"]:checked + label {
            @apply bg-white;
            &:hover {
                @apply bg-white;
            }
        }
    }
</style>
 -->