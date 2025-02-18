<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import { classMap } from "$utility/utility.js";

    export let enabled: boolean = false;
    export let enableChange: boolean = true;
    export { className as class };
    let className = "";

    const dispatch = createEventDispatcher();

    function onChange(e: Event) {
        e.preventDefault();
        e.stopPropagation();

        dispatch("change", !enabled);
        if (enableChange) {
            enabled = !enabled;
        }
    }
</script>

<div
    class={classMap({
        [className]: true,
    })}
>
    <slot />
    <!-- TODO: ako se jos negdje koristi komponenta ubuduce, srediti da width bude automatski prema tekstu i napraviti props za tekst -->
    <button on:click={(e) => onChange(e)} on:keypress={(e) => onChange(e)}>
        <div class="toggle-container-with-label bg-wb-gray-extra-light">
            <div class="relative flex h-full items-center">
                <span
                    class="absolute left-0 z-1 ml-3 text-14 {enabled
                        ? 'text-wb-gray'
                        : 'text-white'}"
                >
                    Week
                </span>
                <span
                    class="toggle"
                    class:toggle-on={enabled}
                    class:toggle-off={!enabled}
                />
                <span class="absolute right-0 z-1 mr-3 text-14 {enabled
                        ? 'text-white'
                        : 'text-wb-gray'}">
                    Day
                </span>
            </div>
        </div>
    </button>
</div>

<!-- <style lang="scss">
    .toggle-container-with-label {
        @apply h-[40px] w-[100px] cursor-pointer rounded-[30px];
    }

    .toggle {
        @apply inline-block h-[32px] w-[42px] rounded-full bg-wb-black transition-all duration-300 ease-in-out;
    }

    .toggle-on {
        @apply translate-x-[54px];
    }

    .toggle-off {
        @apply w-[50px] translate-x-[4px];
    }
    .disabled-switch {
        .switch-container {
            @apply cursor-not-allowed;
        }
    }
</style> -->
