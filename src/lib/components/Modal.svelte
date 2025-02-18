<script lang="ts">
    import { Modal } from "flowbite-svelte";
    import { createEventDispatcher } from "svelte";

    export let popupOpened = false;
    let scrollingModal = false;
    // TODO outsideclose
    const dispatch = createEventDispatcher();

    function handleClose() {
        dispatch("close", { popupOpened: false });
    }
</script>

<Modal bind:open={popupOpened} size="xs" autoclose>
    <!-- TODO: modal (popup) i prebaciti sve postojece popupe na ovaj nacin -->
</Modal>
