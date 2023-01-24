import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess({
		postcss: {
			plugins: [tailwindcss, autoprefixer]
		}
	}),
	kit: {
		alias: {
			store: './src/lib/store',
			styles: './src/app.css',
			translations: './src/lib/utilities/translations/translations.js',
			'components/*': './src/lib/components/*',
			'utilities/*': './src/lib/utilities/*'
		},
		adapter: adapter()
	}
};

export default config;
