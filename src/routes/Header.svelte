<script lang="ts">
	import { page } from '$app/state';
	import LogoWayback from '$logo/LogoWayback.svelte';
</script>

<header class="flex justify-between px-3 bg-wb-black">
	<div class="flex items-center">
		<a href="/">
			<LogoWayback width={120} fillColor="#ffffff" />
		</a>
	</div>

	<nav class="flex justify-center">
		<ul class="flex justify-center items-center list-none relative p-0 m-0 h-12">
			<li aria-current={page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>
		</ul>
	</nav>

	<div class="corner">
		<!-- <a href="https://github.com/sveltejs/kit">
		</a> -->
	</div>
</header>

<style>

	li {
		position: relative;
		height: 100%;
	}
	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}
</style>
