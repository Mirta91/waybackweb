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
    <button on:click={(e) => onChange(e)} on:keypress={(e) => onChange(e)}>
        <div class="toggle-container {enabled ? 'bg-wb-blue' : 'bg-wb-gray'}">
            <div class="flex h-full items-center">
                <span
                    class="toggle"
                    class:toggle-on={enabled}
                    class:toggle-off={!enabled}
                />
            </div>
        </div>
    </button>
</div>

<!-- <style lang="scss">
    .toggle-container {
        @apply h-[30px] w-[50px] cursor-pointer rounded-[30px];
    }

    .toggle {
        @apply inline-block h-[18px] w-[18px] rounded-full bg-white transition-all duration-300 ease-in-out;
    }

    .toggle-on {
        @apply translate-x-[26px];
    }

    .toggle-off {
        @apply translate-x-[6px];
    }
    .disabled-switch {
        .switch-container {
            @apply cursor-not-allowed;
        }
    }
</style> -->
