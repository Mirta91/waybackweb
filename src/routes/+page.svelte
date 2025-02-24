<script lang="ts">

	/* import welcome from '$lib/images/svelte-welcome.webp'; */
	import waybackPhone from '$lib/images/wayback-phone.png';
	import calendar from '$lib/images/calendar.png';
	import waybackPhoneMarketplace from '$lib/images/wayback-phone-marketplace.png';
	import expenses from '$lib/images/expenses.png';
	import transfersVideo from '$lib/images/AndroidEmulator.mp4';
	import Icon from "@iconify/svelte";

	import { onMount } from 'svelte';
	import Globe from '$lib/logo/Globe.svelte';
	import LogoWayback from '$lib/logo/LogoWayback.svelte';

	let videoElement: HTMLVideoElement;

	onMount(() => {
		if (videoElement) {
			videoElement.playbackRate = 2; // Set the playback speed to 1.5x
		}
	});
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>



<div class="bg-wb-black flex flex-row items-center min-h-[calc(80vh-70px)] h-[80vh-70px] w-full">
	<div class="container px-4 mx-auto h-full flex flex-col md:flex-row gap-8 justify-around items-center">
		<div class="flex flex-col items-left justify-center h-full">
			<h1 class="text-7xl lg:text-8xl text-white">Wayback.</h1>
			<p class="text-white text-2xl pl-1">Find your way back.</p>
		</div>
		<div class="flex flex-row items-center justify-start 3xl:justify-center h-full relative min-w-auto lg:min-w-[500px] md:-mt-16">
			<img src={waybackPhone} alt="Welcome" class="max-w-[200px] lg:max-w-[250px] 3xl:max-w-[300px]" />
			<img src={waybackPhoneMarketplace} alt="Welcome" class="max-w-[120px] lg:max-w-[180px] 3xl:max-w-[200px] absolute left-auto right-32 3xl:right-0 bottom-auto mt-[250px] md:mt-[300px]" />
		</div>
	</div>
</div>


<div class="bg-wb-orange min-h-[20vh] h-[20vh] w-full">
	<div class="container px-8 md:px-4 mx-auto h-full flex flex-col justify-center items-center">
		<h2 class="text-3xl md:text-4xl text-white ">Ultimate mobile app for managing <span class="text-wb-black font-black">passenger transfers.</span> Never again return with empty seats.</h2>
	</div>
</div>

<div class="bg-wb-white w-full">
	<div class="container px-8 md:px-4 py-8 mx-auto h-full flex items-center justify-center gap-8">
		<p class="block text-black text-2xl md:columns-2 gap-12 text-justify max-w-4xl ">WayBack is a B2B application designed to optimize the operations of companies in the passenger transportation sector. The goal of the WayBack application is to minimize "idle runs" of vehicles. In other words, WayBack acts as an intermediary between carriers and, by gaining insight into their calendars, aims to ensure that a specific vehicle, in addition to its existing transfer, also gets a return transfer. It also addresses overbooking situations through transfer auctions that regularly achieve much more favorable sales prices for transfers than standard sales.</p>
		
	</div>
</div>

<div class="bg-wb-blue min-h-[100vh] h-[100vh] w-full">
	<div class="container px-8 lg:px-4 mx-auto h-full flex gap-12 flex-col justify-center items-center">
		
		<div class="flex items-center gap-6">
			<Icon icon="ph:calendar-blank-light" color="white" width="64" class="min-w-12 w-12 md:min-w-16 md:w-16"></Icon> 
			<h2 class="text-4xl md:text-5xl lg:text-6xl text-white uppercase "> Calendar tailored to your needs</h2>
		</div>
		<p class="text-xl md:text-2xl text-white max-w-3xl text-justify">
			Our calendar view is specifically tailored to needs of passanger transfer. You can easily see all your transfers and manage them in one place.
			Switch between daily, weekly and monthly view to manage your time and transfers.
		</p>

		<img src={calendar} alt="Welcome" class="max-w-[200px] 3xl:max-w-[300px]" />

	</div>
</div>

<div class="bg-wb-black min-h-[100vh] h-[100vh] w-full">
	<div class="container px-8 lg:px-4 mx-auto h-full flex gap-12 flex-col justify-center items-center">
		
		<div class="flex items-center gap-6">
			<Icon icon="cil:transfer" color="white" width="64" class="min-w-10 w-10 md:min-w-16 md:w-16"></Icon>

			<h2 class="text-4xl md:text-5xl lg:text-6xl text-white uppercase ">List of all Transfers</h2>
		</div>
		<p class="text-xl md:text-2xl text-white max-w-3xl text-justify">
			List of all your transfers in one place. 
			Forget about the paper notes around your car, losing the name or phone number of a customer.
			In Wayback app you can store all of the info in one place, easily add new transfers, edit/delete existing ones. 
			
		</p>

		<video class="max-w-[200px] 3xl:max-w-[300px]" autoplay loop muted bind:this={videoElement}>
			<source src={transfersVideo} type="video/mp4">
			
			Your browser does not support the video tag.
		</video>
	</div>
</div>

<div class="bg-wb-pink min-h-[100vh] h-[100vh] w-full">
	<div class="container px-8 lg:px-4 mx-auto h-full flex gap-12 flex-col justify-center items-center">
		
		<div class="flex items-center gap-6">
			<Globe />
			<!-- <Icon icon="ph:calendar-blank-light" color="white" width="64"></Icon>  -->
			<h2 class="text-4xl md:text-5xl lg:text-6xl text-white uppercase ">Transfers Marketplace</h2>
		</div>
		<p class="text-xl md:text-2xl text-white max-w-3xl text-justify">
			Use Wayback marketplace to SELL  the transfers you don't want to drive, or buy transfers if you don't want to return home with empty seats.
			You decide.<br> <span class="text-white text-3xl">Your price, your rules.</span> 
	
		</p>

		<img src={waybackPhoneMarketplace} alt="Welcome" class="max-w-[200px] 3xl:max-w-[300px]" />

	</div>
</div>

<div class="bg-wb-orange min-h-[100vh] h-[100vh] w-full">
	<div class="container px-8 lg:px-4 mx-auto h-full flex gap-12 flex-col justify-center items-center">
		
		<div class="flex items-center gap-6">
		
			<Icon icon="fluent:gas-pump-20-regular" color="white" width="64"></Icon> 
			<h2 class="text-4xl md:text-5xl lg:text-6xl text-white uppercase ">Control your earnings</h2>
		</div>
		<p class="text-xl md:text-2xl text-white max-w-3xl text-justify">
			Take control over your earnings and expenses. 
			Look at all of your past transfers and calculate your profit in the past periods.
			Use the app to upload the expenses for the gas, polls, and other expenses you had during the transfer.

	
		</p>

		<img src={expenses} alt="Welcome" class="max-w-[200px] 3xl:max-w-[300px]" />

	</div>
</div>

<div class="bg-wb-white w-full">
	<div class="container px-4 py-8 mx-auto h-full ">	
		<h2 class="text-4xl xl:text-5xl text-black uppercase pb-8">Other features</h2>		
		<ul class="text-3xl xl:text-4xl text-wb-black w-auto flex flex-col items-baseline gap-8">
			<li class="flex items-start gap-6">
				<Icon icon="ph:users-thin" color="black" width="50" class="min-w-10 w-10"></Icon>
				<span>
					<span>Manage drivers and vehicles</span>
					<p class="text-lg md:text-xl">If you own a transfer business with employees, in Wayback app you can easily add the drivers, assign them transfers, assign cars to drivers and to transfers etc.</p>
				</span>
			</li>
			<li class="flex items-start gap-6">
				<Icon icon="cil:transfer" color="black" width="34"  class="min-w-10 w-10"></Icon>
				<span>
					<span>Past transfers</span>
					<p class="text-lg md:text-xl">You have the option to filter through all of the transfers in the past</p>
				</span>
			</li>
			<li class="flex items-start gap-6">
				<Icon icon="carbon:notification-new" color="black" width="36"  class="min-w-10 w-10"></Icon>
				<span>
					<span>Notifications</span>
					<p class="text-lg md:text-xl"> Wayback will notify you if there is a transfer available to be bought based on your current location and future transfers. </p>
				</span>
			</li>
			<li class="flex items-start gap-6">
				<Icon icon="ph:user-thin" color="black" width="36"  class="min-w-10 w-10"></Icon>
				<span>
					<span>Referral program</span>
					<p class="text-lg md:text-xl"> If another user joins via your referral code, you will receive a permanent decrease in WayBack commission</p>
				</span>
			</li>
		</ul>
	</div>
</div>

<div class="bg-wb-black flex flex-row items-center py-12 w-full">
	<div class="container px-4 mx-auto h-full text-center flex flex-col items-center">
		<div class="text-center gap-1 h-full w-[200px] pb-12">
			<p class="text-white text-lg pb-2">Contact</p>
			<p class="text-white">Phone:  <a href="tel:+385995242452">+385 99 524 2452</a></p>
			<p class="text-white">Email:  <a href="mailto:info@transfers.hr">info@transfers.hr</a></p>
		</div>
		<div class="flex flex-col items-center justify-center gap-4 h-full w-full">
			<LogoWayback width={120} fillColor="#ffffff" />
			<p class="text-white">Copyright © 2025 Wayback®. All rights reserved.</p>
		</div>
	</div>
</div>
