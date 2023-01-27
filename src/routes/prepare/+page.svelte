<script>
	import CircleImage from 'components/general/circle-image.svelte';
	import Hero from 'components/general/Hero.svelte';
	import Subheading from 'components/general/subheading.svelte';
	import Location from 'components/weather/current/location.svelte';
	import { t } from 'translations';
	import Switch from '../../lib/components/general/switch/switch.svelte';
	import Checklist from '../../lib/components/prepare/checklist.svelte';
	export let locations;
</script>

<Hero>
	<Location name={locations?.[0].name || 'Bournemouth'} />
	<Subheading text={$t('base.prepare.forecast.temporary')} />
	<CircleImage src="split-weather-placeholder.webp" presentation />
	<Switch
		options={[
			{ text: $t('base.prepare.hot'), onClick: () => {} },
			{ text: $t('base.prepare.cold'), onClick: () => {} }
		]}
	/>
</Hero>
<Checklist />
