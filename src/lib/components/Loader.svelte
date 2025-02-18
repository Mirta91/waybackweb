<script lang="ts">
    import { onDestroy } from "svelte";
    import { classMap } from "$utility/utility.js";
    export let darkMode: boolean = false;
    let show: boolean = false;
    let className: string = "";

    const timeoutId = setTimeout(() => (show = true), 400);
    onDestroy(() => clearTimeout(timeoutId));
</script>

{#if show}
    <div
        class={classMap({
            [className]: true,
            loader: true,
            darkMode: darkMode === true ? true : false,
        })}
    />
{/if}

<!-- <style lang="scss">
    .loader {
        width: 48px;
        height: 48px;
        border: 5px solid #25282b;
        border-radius: 50%;
        display: inline-block;
        box-sizing: border-box;
        position: relative;
        animation: pulse 1s linear infinite;
    }
    .loader:after {
        content: "";
        position: absolute;
        width: 48px;
        height: 48px;
        border: 5px solid #25282b;
        border-radius: 50%;
        display: inline-block;
        box-sizing: border-box;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        animation: scaleUp 1.5s linear infinite;
    }

    @keyframes scaleUp {
        0% {
            transform: translate(-50%, -50%) scale(0);
        }
        60%,
        100% {
            transform: translate(-50%, -50%) scale(1);
        }
    }
    @keyframes pulse {
        0%,
        60%,
        100% {
            transform: scale(1);
        }
        80% {
            transform: scale(1.2);
        }
    }

    .loader.darkMode {
        border: 5px solid #ffffff;
        &:after {
            border: 5px solid #ffffff;
        }
    }
</style>
 -->