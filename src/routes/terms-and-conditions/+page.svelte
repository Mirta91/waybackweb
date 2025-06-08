<svelte:head>
	<title>Wayback Terms & Conditions</title>
	<meta name="description" content="Wayback Terms & Conditions" />
</svelte:head>

<script lang="ts">
	import LogoWayback from '$lib/logo/LogoWayback.svelte';
	import Footer from '$lib/modules/Footer.svelte';
</script>

<div class="bg-wb-white w-full">
	<div class="container px-6 md:px-8 py-12 mx-auto flex flex-col gap-8 max-w-5xl text-black">
		<h1 class="text-6xl lg:text-4xl text-black text-center">Terms and Conditions</h1>

		<section>
			<h3 class="text-2xl font-semibold mb-2">1. Introduction</h3>
			<p>
				These Terms and Conditions ("Terms") govern the relationship between [Your Company Name], a company registered in [Country], with its registered office at [Address] ("Intermediary"), and the carrier companies ("Carrier") providing airport transfer and taxi services through the Intermediary's platform. By entering into an agreement with the Intermediary, the Carrier agrees to comply with these Terms.
			</p>
		</section>

		<section>
			<h3 class="text-2xl font-semibold mb-2">2. Definitions</h3>
			<ul class="list-disc pl-6 space-y-2">
				<li><strong>Services:</strong> All transportation services provided by the Carrier to customers via the Intermediary's platform.</li>
				<li><strong>Customers:</strong> Individuals or entities that book transportation services through the Intermediary.</li>
				<li><strong>Booking:</strong> A confirmed reservation made by a Customer for transportation services provided by the Carrier.</li>
			</ul>
		</section>

		<section>
			<h3 class="text-2xl font-semibold mb-2">3. Acceptance of Terms</h3>
			<p>
				By engaging with the Intermediary, the Carrier acknowledges that they have read, understood, and agree to be bound by these Terms. These Terms may be amended by the Intermediary at any time, with updated versions posted on the Intermediary's website. Continued use of the Intermediary's services constitutes acceptance of the revised Terms.
			</p>
		</section>

		<section>
			<h3 class="text-2xl font-semibold mb-2">4. Obligations of the Carrier</h3>
			<h4 class="text-xl font-semibold mt-4 mb-1">4.1 Licensing and Compliance</h4>
			<ul class="list-disc pl-6 space-y-1">
				<li>The Carrier must possess all necessary licenses, permits, and certifications required to operate legally in the jurisdictions where they provide services.</li>
				<li>The Carrier agrees to comply with all applicable local, national, and EU laws and regulations, including but not limited to safety, insurance, and labor laws.</li>
			</ul>

			<h4 class="text-xl font-semibold mt-4 mb-1">4.2 Service Standards</h4>
			<ul class="list-disc pl-6 space-y-1">
				<li>The Carrier shall provide high-quality transportation services, ensuring vehicles are safe, clean, and well-maintained.</li>
				<li>The Carrier is responsible for ensuring that all drivers are professionally trained, properly licensed, and meet the standards set by the Intermediary.</li>
			</ul>

			<h4 class="text-xl font-semibold mt-4 mb-1">4.3 Data Protection</h4>
			<ul class="list-disc pl-6 space-y-1">
				<li>The Carrier agrees to comply with the General Data Protection Regulation (GDPR) and any other applicable data protection laws when handling Customer data.</li>
				<li>The Carrier will implement appropriate technical and organizational measures to protect Customer data from unauthorized access, loss, or theft.</li>
			</ul>

			<h4 class="text-xl font-semibold mt-4 mb-1">4.4 Reporting and Communication</h4>
			<ul class="list-disc pl-6 space-y-1">
				<li>The Carrier must promptly inform the Intermediary of any issues that may affect the delivery of services, including vehicle breakdowns, delays, or customer complaints.</li>
				<li>The Carrier agrees to maintain clear and timely communication with the Intermediary regarding service availability, pricing, and any changes to operations.</li>
			</ul>
		</section>

		<section>
			<h3 class="text-2xl font-semibold mb-2">5. Bookings and Payments</h3>
			<h4 class="text-xl font-semibold mt-4 mb-1">5.1 Booking Process</h4>
			<ul class="list-disc pl-6 space-y-1">
				<li>The Carrier will receive bookings via the Intermediary's platform and is responsible for confirming the acceptance of each booking.</li>
				<li>The Carrier must ensure that all confirmed bookings are honored, and services are delivered as promised.</li>
			</ul>

			<h4 class="text-xl font-semibold mt-4 mb-1">5.2 Payment Terms</h4>
			<ul class="list-disc pl-6 space-y-1">
				<li>The Intermediary will charge a commission on the total fare for each booking, as agreed upon between the parties.</li>
				<li>Payments for services rendered will be processed in accordance with the payment schedule set forth by the Intermediary.</li>
			</ul>

			<h4 class="text-xl font-semibold mt-4 mb-1">5.3 Cancellation and Refunds</h4>
			<p>
				The Carrier agrees to abide by the Intermediary's cancellation and refund policies, which must be communicated to Customers in a clear and accessible manner.
			</p>
		</section>

		<section>
			<h3 class="text-2xl font-semibold mb-2">6. Liability and Indemnification</h3>
			<h4 class="text-xl font-semibold mt-4 mb-1">6.1 Liability</h4>
			<ul class="list-disc pl-6 space-y-1">
				<li>The Carrier is fully responsible for any damages, injuries, or losses incurred during the provision of services, including those caused by its employees, agents, or subcontractors.</li>
				<li>The Intermediary shall not be liable for any claims, damages, or losses arising from the Carrier's provision of services.</li>
			</ul>

			<h4 class="text-xl font-semibold mt-4 mb-1">6.2 Indemnification</h4>
			<p>
				The Carrier agrees to indemnify, defend, and hold harmless the Intermediary from any claims, liabilities, losses, damages, costs, or expenses (including legal fees) arising out of the Carrier's breach of these Terms, negligent acts, or failure to comply with applicable laws.
			</p>
		</section>

		<section>
			<h3 class="text-2xl font-semibold mb-2">7. Termination</h3>
			<h4 class="text-xl font-semibold mt-4 mb-1">7.1 Termination for Convenience</h4>
			<p>
				Either party may terminate this agreement at any time, for any reason, by providing [number] days' written notice to the other party.
			</p>

			<h4 class="text-xl font-semibold mt-4 mb-1">7.2 Termination for Cause</h4>
			<p>
				The Intermediary may terminate this agreement immediately if the Carrier fails to comply with these Terms, engages in fraudulent or unethical conduct, or poses a risk to customer safety or service quality.
			</p>
		</section>

		<section>
			<h3 class="text-2xl font-semibold mb-2">8. Governing Law</h3>
			<p>
				These Terms shall be governed by and construed in accordance with the laws of [Country]. Any disputes arising from or related to these Terms shall be resolved in the competent courts of [City/Country].
			</p>
		</section>

		<section>
			<h3 class="text-2xl font-semibold mb-2">9. Miscellaneous</h3>
			<ul class="list-disc pl-6 space-y-1">
				<li><strong>9.1 Entire Agreement:</strong> These Terms constitute the entire agreement between the parties and supersede any prior agreements or understandings.</li>
				<li><strong>9.2 Amendments:</strong> Any amendments to these Terms must be made in writing and signed by both parties.</li>
				<li><strong>9.3 Severability:</strong> If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.</li>
			</ul>
		</section>

		<section>
			<h3 class="text-2xl font-semibold mb-2">10. Contact Information</h3>
			<p><b>Wayback</b></p>
			<!-- <p>Marko Štefanac</p> -->
			<p>
				<a href="mailto:wayback&#46;business&#46;app&#64;gmail&#46;com" class="text-blue-600 hover:underline">
					wayback<span>&#46;</span>business<span>&#46;</span>app<span>&#64;</span>gmail<span>&#46;</span>com
				</a>
			</p>
			<p>
				<a href="tel:+385955983998" class="text-blue-600 hover:underline">
					+385&#8203;95&#8203;598&#8203;3998
				</a>
			</p>
			<!-- <p>[Company Address]</p> -->
		</section>

		<section class="mt-6 border-t border-gray-300 pt-4">
			<h3 class="text-xl font-semibold">Acknowledgment</h3>
			<p>
				By engaging with the Intermediary, the Carrier acknowledges that they have read, understood, and agree to comply with these Terms and Conditions.
			</p>
		</section>
	</div>
</div>
<Footer />

