<script>
	import { goto } from '$app/navigation';
	import Content from 'components/general/content/content.svelte';
	import Current from 'components/weather/container.svelte';
	import TimeForecast from 'components/weather/time/forecast.svelte';
	import WeekForecast from 'components/weather/week/forecast.svelte';
	import { currentLocationStore, locationsSearchStore, userStore } from 'store';
	import { onMount } from 'svelte';
	import { t } from 'translations';
	import { getCurrentWeatherByLatLon } from 'utilities/weather';
	export let data;
	const date = new Date();
	$: $userStore = data.user;
	$: $locationsSearchStore = data.locationsList;

	onMount(async () => {
		if ('geolocation' in navigator) {
			navigator.geolocation.getCurrentPosition(async (position) => {
				const { latitude, longitude } = position.coords;
				const currentLocation = await getCurrentWeatherByLatLon(latitude, longitude);

				currentLocationStore.set(currentLocation);
			});
		}
	});
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
