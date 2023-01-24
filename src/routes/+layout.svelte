<script context="module">
	import { loadTranslations, locale } from 'translations';

	export const load = async ({ url }) => {
		const { pathname } = url;
		const defaultLocale = ' en '; //  get from cookie, user session, ...
		const initLocale = locale.get() || defaultLocale; //  set default if no locale already set
		await loadTranslations(initLocale, pathname); //  keep this just before the `return`
		return {};
	};
</script>

<script>
	import '@fontsource/anonymous-pro';
	import '@fontsource/poppins/400.css';
	import '@fontsource/poppins/700.css';
	import 'styles';
</script>

<slot />
