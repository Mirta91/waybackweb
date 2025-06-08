<script>
	import LogoWayback from "$lib/logo/LogoWayback.svelte";

</script>
<div class="bg-wb-black flex flex-row items-center py-12 w-full">
	<div class="container px-4 mx-auto h-full text-left flex flex-col items-center">
		<div class="md:columns-2 gap-16">
            <div class="pb-8 md:pb-0">
                <p class="text-white text-lg pb-2">Contact</p>
                <p class="text-white inline"> 
                    <span>Phone: </span>  
                    <a href="tel:+385955983998" class="inline hover:underline">
                        +385&#8203;95&#8203;598&#8203;3998
                    </a>
                </p>
                <br>
                <p class="text-white flex">
                    <span>Email: </span>  
                    <a href="mailto:wayback&#46;business&#46;app&#64;gmail&#46;com" class="inline hover:underline">
                        wayback<span>&#46;</span>business<span>&#46;</span>app<span>&#64;</span>gmail<span>&#46;</span>com
                    </a>
                </p>
            </div>

            <div>
                <p class="text-white text-lg pb-2">Legal</p>
                <p class="text-white inline"> 
                    <a href="/privacy-policy" class="inline hover:underline">
                        Privacy Policy
                    </a>
                </p>
                <br>
                <p class="text-white inline"> 
                    <a href="/terms-and-conditions" class="inline hover:underline">
                        Terms and Conditions
                    </a>
                </p>
            </div>
			
		</div>
		<div class="flex flex-col items-center justify-center gap-4 h-full w-full pt-8">
			<LogoWayback width={120} fillColor="#ffffff" />
			<p class="text-white">Copyright © 2025 Wayback®. All rights reserved.</p>
		</div>
	</div>
</div>