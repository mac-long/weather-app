<script>
	import CircleImage from 'components/general/circle-image.svelte';
	import Hero from 'components/general/hero.svelte';
	import Subheading from 'components/general/subheading.svelte';
	import Location from 'components/weather/current/location.svelte';
	import CurrentWeather from 'components/weather/current/weather.svelte';
	import { currentLocationStore } from 'store';
</script>

<Hero>
	<Location name={$currentLocationStore?.location.name} />
	<Subheading date />
	<CircleImage src="weather-placeholder.webp" presentation />
	<CurrentWeather
		temp={$currentLocationStore?.current.temp_c}
		condition={$currentLocationStore?.current.condition}
	/>
	<!-- TODO: Add slide counter and slides per saved location -->
</Hero>