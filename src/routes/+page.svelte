<script>
	import { goto } from '$app/navigation';
	import Content from 'components/general/content/content.svelte';
	import Current from 'components/weather/container.svelte';
	import TimeForecast from 'components/weather/time/forecast.svelte';
	import WeekForecast from 'components/weather/week/forecast.svelte';
	import { currentLocationStore, locationsSearchStore, userStore } from 'store';
	import { t } from 'translations';
	export let data;
	const date = new Date();
	console.log(data);
	$: $userStore = data.user;
	$: $locationsSearchStore = data.locationsList;
	$: $currentLocationStore = data.currentLocation;
</script>

{#if $userStore.isLoggedIn}
	<Current />
	<TimeForecast {date} />
	<Content title="Forecast">
		<WeekForecast today={date.getDay()} />
	</Content>
{:else}
	<div
		class="flex flex-col items-center justify-center w-screen h-screen px-16 space-y-4 bg-primary-500"
	>
		<img src="cloudy.webp" alt="" role="presentation" />
		<h1 class="pb-16 text-4xl font-extrabold text-white">{$t('base.general.title')}</h1>
		<button class="secondary" on:click={() => goto('/signup')}>
			{$t('base.general.button.get_started')}
		</button>
		<button class="grey" on:click={() => goto('/login')}>
			{$t('base.general.button.login')}
		</button>
	</div>
{/if}
