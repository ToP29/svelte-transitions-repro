import { vitePreprocess } from '@sveltejs/kit/vite';
import path from 'path';
import adapter from '@sveltejs/adapter-node';
import sveltePreprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),
		alias: {
			$lib: path.resolve('./src/lib'),
			$api: path.resolve('./src/api'),
			$components: path.resolve('./src/components'),
			$modules: path.resolve('./src/modules'),
			$routes: path.resolve('./src/routes'),
			$stores: path.resolve('./src/stores'),
			$types: path.resolve('./src/types'),
			$animations: path.resolve('./src/animations')
		}
	}
};

export default config;
