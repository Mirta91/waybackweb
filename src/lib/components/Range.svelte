<script lang="ts">
    import { Range, Label } from "flowbite-svelte";
    export let minmaxValue = 5;
    export let labelText = "Min-max range";
</script>

<Label>{labelText}</Label>
<Range id="range-minmax" min="0" max="10" bind:value={minmaxValue} />
<p>Value: {minmaxValue}</p>
