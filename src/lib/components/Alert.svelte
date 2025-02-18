<script lang="ts">
    import { Alert } from "flowbite-svelte";
    import Icon from "@iconify/svelte";
    export let text: string = "";
    export let colorClass: string = "bg-wb-red-light";

    const closeAlert = () => {
        console.log("Clicked closeAlert.");
    };
</script>

{#if text}
    <Alert
        dismissable
        on:click={closeAlert}
        class="{colorClass} relative left-0 right-0 top-2 z-10 mx-auto w-full max-w-content-sm text-white opacity-95"
    >
        <div class="flex items-center gap-3">
            <Icon
                icon="material-symbols-light:info-outline"
                color="white"
                width="32"
            ></Icon>
            <span class="text-16 text-white">
                {text}
            </span>
        </div>
    </Alert>
{/if}
