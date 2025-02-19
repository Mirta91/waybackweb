<script lang="ts">
	import Header from './Header.svelte';
	import Button from "$components/Button.svelte";
	import '../app.css';

	let { children } = $props();
</script>

<div class="app font-wayback text-wb-pink">
	<Header />

	<main>
		{@render children()}
	</main>

	<footer>
		
			<!-- <Button
				hasSlot={true}
				class="flex h-16 w-16 items-center justify-center !rounded-full border border-wb-orange bg-wb-orange text-36 text-white shadow-md hover:opacity-80"
			>
				<a
					href="/add-transfer"
					class="-mt-1 text-white no-underline hover:text-white hover:no-underline"
				>
					+
				</a>
			</Button> -->
		
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		margin: 0 auto;
		background-color: #f5f5f5;
	}

	
</style>
