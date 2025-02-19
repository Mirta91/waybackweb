<script lang="ts">

	/* import welcome from '$lib/images/svelte-welcome.webp'; */
	import waybackPhone from '$lib/images/wayback-phone.png';
	import waybackPhoneMarketplace from '$lib/images/wayback-phone-marketplace.png';
	import Icon from "@iconify/svelte";
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>



<div class="bg-wb-black flex flex-row items-center min-h-[calc(80vh-70px)] h-[80vh-70px] w-full">
	<div class="container px-4 mx-auto h-full flex justify-around items-center">
		<div class="flex flex-col items-left justify-center h-full">
			<h1 class="text-7xl text-white">Wayback.</h1>
			<p class="text-white text-2xl pl-1">Find your way back.</p>
		</div>
		<div class="flex flex-row items-center justify-center h-full relative min-w-[500px]">
			<img src={waybackPhone} alt="Welcome" class="max-w-[300px]" />
			<img src={waybackPhoneMarketplace} alt="Welcome" class="max-w-[200px] absolute left-auto right-0 bottom-auto mt-[300px]" />
		</div>
	</div>
</div>


<div class="bg-wb-orange min-h-[20vh] h-[20vh] w-full">
	<div class="container px-4 mx-auto h-full flex flex-col justify-center items-center">
		<h2 class="text-4xl text-white ">Ultimate passanger transfer mobile app. Never again return with empty seats.</h2>
	</div>
</div>

<div class="bg-wb-white w-full">
	<div class="container px-4 py-8 mx-auto h-full flex items-center justify-center gap-8">
		<p class="block text-black text-2xl columns-2 gap-12 text-justify max-w-4xl ">WayBack is a B2B application designed to optimize the operations of companies in the passenger transportation sector. The goal of the WayBack application is to minimize "idle runs" of vehicles. In other words, WayBack acts as an intermediary between carriers and, by gaining insight into their calendars, aims to ensure that a specific vehicle, in addition to its existing transfer, also gets a return transfer. It also addresses overbooking situations through transfer auctions that regularly achieve much more favorable sales prices for transfers than standard sales.</p>
		
	</div>
</div>

<div class="bg-wb-white w-full">
	<div class="container px-4 py-8 mx-auto h-full flex justify-center items-center">			
		<ul class="text-3xl text-wb-black w-auto">
			<li class="flex items-center gap-2">
				<Icon icon="ph:calendar-blank-light" color="black" width="18"></Icon>
				<span>Calendar view tailored to your needs</span>
			</li>
			<li class="flex items-center">
				<Icon icon="cil:transfer" color="black" width="18"></Icon>
				<span>Marketplace to buy and sell transfers</span>
			</li>
			<li class="flex items-center">
				<Icon icon="ph:users-thin" color="black" width="18"></Icon>
				<span>Manage other drivers</span>
			</li>
			<li class="flex items-center">
				<Icon icon="carbon:edit" color="black" width="18"></Icon>
				<span>View of all your expenses</span>
			</li>
			<li class="flex items-center">
				<Icon icon="carbon:edit" color="black" width="18"></Icon>
				<span>Marketplace to buy and sell transfers</span>
			</li>
		</ul>
	</div>
</div>