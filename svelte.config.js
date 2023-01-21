import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		alias: {
			store: './src/lib/store',
			styles: './src/app.css',
			'components/*': './src/lib/components/*',
			'utilities/*': './src/lib/utilities/*'
		},
		adapter: adapter()
	}
};

export default config;
