<script lang="ts">
	import { page } from '$app/state';
	import LogoWayback from '$logo/LogoWayback.svelte';
	import googlePlaystore from '$lib/images/google-playstore.svg';

</script>

<header class="h-[70px]">
	<div  class="fixed z-10 h-[70px] w-full flex justify-between px-3 py-3 bg-wb-black">
		<div class="flex items-center">
			<a href="/">
				<LogoWayback width={180} fillColor="#ffffff" />
			</a>
		</div>
	
		<!-- <nav class="flex justify-center">
			<ul class="flex justify-center items-center list-none relative p-0 m-0 h-12">
				<li aria-current={page.url.pathname === '/' ? 'page' : undefined}>
					<a href="/">Home</a>
				</li>
			</ul>
		</nav> -->
	
		<div class="corner">
			<a href="https://github.com/sveltejs/kit" >
				<img src={googlePlaystore} alt="Welcome" class="max-h-[40px]" />
			</a>
		</div>
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
		padding: 0.5rem 1rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}
</style>
