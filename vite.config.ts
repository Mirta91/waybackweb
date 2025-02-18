import tailwindcss from '@tailwindcss/vite';
import { svelteTesting } from '@testing-library/svelte/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import path from "path";

export default defineConfig({
	plugins: [sveltekit(), tailwindcss(), ],

	test: {
		workspace: [
			{
				extends: './vite.config.ts',
				plugins: [tailwindcss(), svelteTesting()],

				test: {
					name: 'client',
					environment: 'jsdom',
					clearMocks: true,
					include: ['src/**/*.svelte.{test,spec}.{js,ts}'],
					exclude: ['src/lib/server/**'],
					setupFiles: ['./vitest-setup-client.ts']
				}
			},
			{
				extends: './vite.config.ts',

				test: {
					name: 'server',
					environment: 'node',
					include: ['src/**/*.{test,spec}.{js,ts}'],
					exclude: ['src/**/*.svelte.{test,spec}.{js,ts}']
				}
			}
		]
	},
	resolve: {
        alias: {
            $ui: path.resolve("./src/ui"),
            $pages: path.resolve("./src/pages"),
            $assets: path.resolve("./src/assets"),
            $modules: path.resolve("./src/lib/modules"),
            $components: path.resolve("./src/lib/components"),
            $utility: path.resolve("./src/lib/utility"),
            $logo: path.resolve("./src/lib/logo"),
            $mockapi: path.resolve("./src/mockapi"),
            $nswag_client: path.resolve("./src/nswag_client"),
            $store: path.resolve("./src/store"),
            $types: path.resolve("./src/types"),
        },
    },
	server: {
        watch: {
            usePolling: true,
        },
    },
});
