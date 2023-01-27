<script>
	import Switch from 'components/general/switch/switch.svelte';
	import Bar from 'components/search/bar.svelte';
	import Title from 'components/signup/title.svelte';
	import { t } from 'translations';
	export let currentStep, searchOpen;
</script>

<div class="w-full rounded-t-[41px] top-0">
	<div class="flex items-center justify-between px-10 py-5 mx-auto text-center">
		<div class="w-8" />
		<Title currentStep={$currentStep} />
		<button class="w-auto ghost">{$t('base.general.button.skip')}</button>
	</div>
	{#if $currentStep === 4}
		<div class="flex flex-col items-center justify-center px-12 py-2">
			<Bar {searchOpen} />
			<Switch
				options={[
					{ text: 'List', onClick: () => null },
					{ text: 'Map', onClick: () => null }
				]}
			/>
		</div>
	{/if}
</div>
