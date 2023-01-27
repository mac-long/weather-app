<script context="module">
	import { loadTranslations, locale } from 'translations';

	export const load = async ({ url }) => {
		const { pathname } = url;
		const defaultLocale = ' en ';
		const initLocale = locale.get() || defaultLocale;
		await loadTranslations(initLocale, pathname);
		return {};
	};
</script>

<script>
	import { page } from '$app/stores';
	import '@fontsource/anonymous-pro';
	import '@fontsource/poppins/400.css';
	import '@fontsource/poppins/700.css';
	import Navigation from 'components/layout/navigation.svelte';
	import 'styles';
</script>

{#if $page.url.pathname.includes('signup')}
	<slot />
{:else}
	<slot />
	<Navigation />
{/if}
