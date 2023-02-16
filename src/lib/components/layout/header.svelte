<script>
	import { page } from '$app/stores';
	import { t } from 'translations';
</script>

<header
	class="flex items-center justify-between w-screen h-32 px-4 pt-16 pb-2 bg-gradient-to-tr from-primary-500 to-primaryDark"
>
	<div class="flex items-center w-auto space-x-4">
		<img class="w-14 h-10 md:w-16 md:h-12" src="cloudy.webp" alt="" role="presentation" />
		<h1 class="uppercase">
			{$t(
				`base.general.title.${
					$page.url.pathname === '/' ? 'forecast' : $page.url.pathname.slice(1)
				}`
			)}
		</h1>
	</div>
	{#if $page.url.pathname === '/'}
		<button class="w-auto ghost" on:click{openSearch}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="feather feather-search"
				><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg
			>
			<circle xmlns="http://www.w3.org/2000/svg" cx="11" cy="11" r="8" />
			<line xmlns="http://www.w3.org/2000/svg" x1="21" y1="21" x2="16.65" y2="16.65" />
		</button>
	{/if}
</header>
