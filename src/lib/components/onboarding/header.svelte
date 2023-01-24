<script>
	import { t } from 'translations';
	import Bar from '../search/bar.svelte';
	import Title from './title.svelte';
	export let currentStep, searchOpen;
</script>

<div class="w-full rounded-t-[41px] top-0">
	<div class="flex items-center justify-between px-10 py-5 mx-auto text-center">
		<div class="w-8" />
		<Title currentStep={$currentStep} />
		<button class="w-auto ghost">{$t('base.general.button.skip')}</button>
	</div>
	{#if $currentStep === 4}
		<div class="flex items-center justify-center px-12">
			<Bar {searchOpen} />
		</div>
	{/if}
</div>
