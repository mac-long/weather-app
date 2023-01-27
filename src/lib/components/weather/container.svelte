<script>
	import CircleImage from 'components/general/circle-image.svelte';
	import Main from 'components/general/main.svelte';
	import Subheading from 'components/general/subheading.svelte';
	import Location from 'components/weather/current/location.svelte';
	import CurrentWeather from 'components/weather/current/weather.svelte';
	export let locations;
</script>

<Main>
	<Location name={locations?.[0].name || 'Bournemouth'} />
	<Subheading date />
	<CircleImage src="weather-placeholder.webp" presentation />
	<CurrentWeather
		temp={locations?.[0].current.temp_c || 21}
		condition={locations?.[0].current.condition.text || 'Sunshine'}
	/>
	<!-- TODO: Add slide counter and slides per saved location -->
</Main>
