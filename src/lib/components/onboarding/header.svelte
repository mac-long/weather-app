<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import debounce from 'lodash.debounce';
	import { t } from 'translations';
	import Title from './title.svelte';
	export let currentStep;

	const updateSearch = debounce((e) => {
		goto(`?location=${e.target.value}`, { replaceState: true, keepfocus: true });
		searchOpen = true;
	}, 500);
</script>

<div class="w-full rounded-t-[41px] top-0">
	<div class="flex items-center justify-between px-10 py-5 mx-auto text-center">
		<div class="w-8" />
		<Title currentStep={$currentStep} />
		<button class="w-auto ghost">{$t('base.general.button.skip')}</button>
	</div>
	{#if $currentStep === 4}
		<div class="flex items-center justify-center px-4">
			<input
				class="mb-4"
				type="text"
				name="location"
				placeholder="Search for a location."
				value={$page.url.searchParams.get('location')}
				on:input={updateSearch}
			/>
		</div>
	{/if}
</div>
