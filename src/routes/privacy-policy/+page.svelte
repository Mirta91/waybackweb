<svelte:head>
	<title>Wayback Privacy Policy</title>
	<meta name="description" content="Wayback Privacy Policy" />
</svelte:head>

<script lang="ts">
	import LogoWayback from '$lib/logo/LogoWayback.svelte';
	import Footer from '$lib/modules/Footer.svelte';
</script>



<div class="bg-wb-white w-full">
  <div class="container px-8 md:px-4 py-8 mx-auto h-full flex flex-col items-center justify-center gap-8">
    <h1 class="text-6xl lg:text-4xl text-black text-left">Privacy Policy</h1>

    <p class="text-black  text-left w-full max-w-4xl">Effective Date: April 26, 2025</p>
    <p class="block text-black  text-justify md:columns-1 gap-12 max-w-4xl">
      WayBack ("we", "our", or "us") respects your privacy. This Privacy Policy explains how we collect, use, and share information about users of the WayBack mobile application ("the App").
    </p>

    <div class="text-black  text-justify max-w-4xl flex flex-col gap-6">

      <div>
        <h2 class="font-semibold text-2xl mb-2">1. Information We Collect</h2>
        <ul class="list-disc list-inside">
          <li><strong>Identity Information:</strong> Full name, company name, and contact details.</li>
          <li><strong>Account Information:</strong> Email address, phone number, login credentials.</li>
          <li><strong>Device and Usage Data:</strong> Device ID, IP address, operating system, browser type, crash reports, and log data.</li>
          <li><strong>Location Data:</strong> Real-time GPS data, if you use location-based features.</li>
          <li><strong>Vehicle and Transfer Details:</strong> Data you input about vehicles and transfers.</li>
          <li><strong>Payment Information:</strong> For invoicing purposes only (no payment processing in v1.0).</li>
          <li><strong>Third-party Data:</strong> Flight info via Flightradar API; notifications via Firebase; authentication via Google APIs.</li>
        </ul>
      </div>

      <div>
        <h2 class="font-semibold text-2xl mb-2">2. How We Use Your Data</h2>
        <ul class="list-disc list-inside">
          <li>Provide, improve, and maintain the App</li>
          <li>Communicate with you</li>
          <li>Respond to support requests</li>
          <li>Match you with relevant transfer or operational information</li>
          <li>Comply with legal obligations</li>
        </ul>
      </div>

      <div>
        <h2 class="font-semibold text-2xl mb-2">3. Data Sharing</h2>
        <ul class="list-disc list-inside">
          <li>Other carriers or users (in future marketplace features)</li>
          <li>Third-party service providers (Google APIs, Firebase, Flightradar)</li>
          <li>Authorities, if required by law</li>
        </ul>
        <p class="mt-2">We do not sell your personal data.</p>
      </div>

      <div>
        <h2 class="font-semibold text-2xl mb-2">4. Data Retention</h2>
        <p>We retain your data as long as necessary for the purposes outlined above, or as required by law.</p>
      </div>

      <div>
        <h2 class="font-semibold text-2xl mb-2">5. Your Rights</h2>
        <p>Under GDPR (if applicable), you have the right to:</p>
        <ul class="list-disc list-inside">
          <li>Access your data</li>
          <li>Correct inaccuracies</li>
          <li>Request deletion</li>
          <li>Withdraw consent</li>
        </ul>
        <p class="mt-2">
          To exercise any of these rights, contact us at:
          <a href="mailto:wayback&#46;business&#46;app&#64;gmail&#46;com" class="text-blue-600 hover:underline">
					wayback<span>&#46;</span>business<span>&#46;</span>app<span>&#64;</span>gmail<span>&#46;</span>com
				</a>
        </p>
      </div>

      <div>
        <h2 class="font-semibold text-2xl mb-2">6. Security</h2>
        <p>We use industry-standard security measures to protect your data. However, no system is completely secure.</p>
      </div>

      <div>
        <h2 class="font-semibold text-2xl mb-2">7. Changes</h2>
        <p>We may update this Privacy Policy. We’ll notify you of significant changes via the app or email.</p>
      </div>

      <div>
        <h2 class="font-semibold text-2xl mb-2">8. Contact Us</h2>
        <p>WayBack</p>
        <p>
          Email:
          <a href="mailto:wayback&#46;business&#46;app&#64;gmail&#46;com" class="text-blue-600 hover:underline">
					wayback<span>&#46;</span>business<span>&#46;</span>app<span>&#64;</span>gmail<span>&#46;</span>com
				</a>
        </p>
      </div>

    </div>
  </div>
</div>



<Footer />

