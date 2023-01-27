<script>
	import CircleImage from 'components/general/circle-image.svelte';
	import Content from 'components/general/content/content.svelte';
	import Hero from 'components/general/hero.svelte';
	import Subheading from 'components/general/subheading.svelte';
	import PrepareList from 'components/prepare-list.svelte';
	import Location from 'components/weather/current/location.svelte';
	import { writable } from 'svelte/store';
	import { t } from 'translations';
	import Switch from '../../lib/components/general/switch/switch.svelte';
	export let locations;
	let temp = writable('Hot');
</script>

<Hero>
	<Location name={locations?.[0].name || 'Bournemouth'} />
	<Subheading text={$t('base.prepare.forecast.temporary')} />
	<CircleImage src="split-weather-placeholder.webp" presentation />
	<Switch
		options={[
			{ text: $t('base.prepare.hot'), onClick: () => temp.set('Hot') },
			{ text: $t('base.prepare.cold'), onClick: () => temp.set('Cold') }
		]}
	/>
</Hero>
<Content title={`${$temp} Day Checklist`}>
	<PrepareList items={[]} />
</Content>
