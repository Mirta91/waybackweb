<script>
    //import { classMap } from '$utility/utility.js';
    //import AppLabel from "../AppLabel/AppLabel.svelte";
    //let labelProps = prefixFilter($$restProps, 'label$');
    let className = "";
    export { className as class };
    //export let label$class = '';
    export let items = [
        { value: "us", label: "United States" },
        { value: "ca", label: "Canada" },
        { value: "fr", label: "France" },
    ];
    export let selectedItem;
    export let disabledItem;

    const uniqueID = Math.floor(Math.random() * 100);

    const slugify = (str = "") =>
        str.toLowerCase().replace(/ /g, "-").replace(/\./g, "");
</script>

{#if items}
    <span class="radio-container" id={`group-${uniqueID}`}>
        {#each items as item}
            <label class="radio">
                <input
                    type="radio"
                    bind:group={selectedItem}
                    value={item.value}
                    disabled={item.value === disabledItem}
                    id={slugify(item.label)}
                />
                <span class="checkmark" />
                <span class="text-18">{item.label}</span>
                <!-- <AppLabel {...labelProps} as="span" class={label$class} text={item.label} /> -->
            </label>
        {/each}
    </span>
{/if}

<!-- <style lang="scss">
    .radio-container {
        @apply my-5 flex flex-col gap-2;
        .radio {
            // Centriranje i inline
            @apply flex cursor-pointer flex-row items-center gap-x-3;

            // Sakrivanje default radio buttona
            input {
                @apply absolute cursor-pointer opacity-0;
            }

            // Hover sivi background
            input:hover ~ .checkmark {
                @apply bg-wb-gray-light;
            }

            // Checked plavi background
            input:checked ~ .checkmark {
                @apply border-wb-blue bg-wb-blue;
            }

            // Prikazivanje kružića
            input:checked ~ .checkmark:after,
            input:disabled ~ .checkmark:after {
                @apply block;
            }

            // Stil disabled buttona
            input:disabled ~ .checkmark {
                @apply cursor-default border-wb-gray bg-wb-gray;
            }

            // Custom radio button
            .checkmark {
                @apply relative h-6 w-6 cursor-pointer self-start rounded-full border-2 border-wb-gray-dark;

                // Kružić - hidden po defaultu
                &:after {
                    @apply absolute hidden content-[""];
                    @apply inset-0 m-auto h-2 w-2 rounded-full bg-white;
                }
            }
        }
    }
</style>
 -->