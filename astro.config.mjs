// @ts-check

import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://cecaleksej3-jpg.github.io',
	base: '/',
	output: 'static',
	integrations: [],
	vite: {
		ssr: {
			external: ['leaflet']
		}
	}
});
