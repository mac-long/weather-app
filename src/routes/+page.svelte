<script>
	import Content from 'components/general/content/content.svelte';
	import Welcome from 'components/signup/welcome.svelte';
	import Current from 'components/weather/container.svelte';
	import TimeForecast from 'components/weather/time/forecast.svelte';
	import WeekForecast from 'components/weather/week/forecast.svelte';
	import { currentLocationStore, locationsSearchStore, userStore } from 'store';
	export let data;
	const date = new Date();
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
	<Welcome />
{/if}
