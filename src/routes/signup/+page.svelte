<script>
	import Header from 'components/onboarding/header.svelte';
	import Progress from 'components/onboarding/progress.svelte';
	import List from 'components/search/list.svelte';
	import Form from 'components/signup/form.svelte';
	import Step from 'components/signup/step.svelte';
	import { currentLocationStore, locationsSearchStore, userStore } from 'store';
	import { writable } from 'svelte/store';
	import { t } from 'translations';

	export let data;
	$: $userStore = data.user;
	$: $locationsSearchStore = data.locationsList;
	$: $currentLocationStore = data.currentLocation;

	let currentStep = writable(1),
		searchOpen = false;

	const handleClick = () => {
		currentStep.update((n) => n + 1);
	};
</script>

<div class="w-screen h-screen bg-[#333] flex flex-col justify-end overflow-y-hidden">
	<div
		class="flex flex-col items-start w-screen h-[95%] rounded-t-[41px] relative bg-gradient-to-b from-primary-500 to-primaryDark"
	>
		<Header {currentStep} {searchOpen} />
		<Progress {currentStep} />
		<div class="w-full h-full px-8 overflow-y-auto bg-white">
			{#if $currentStep === 1}
				<Step
					{handleClick}
					title={$t('base.onboarding.step1.heading')}
					description={$t('base.onboarding.step1.paragraph')}
				>
					display
				</Step>
			{:else if $currentStep === 2}
				<Step
					{handleClick}
					title={$t('base.onboarding.step2.heading')}
					description={$t('base.onboarding.step2.paragraph')}
				>
					display
				</Step>
			{:else if $currentStep === 3}
				<Step
					{handleClick}
					title={$t('base.onboarding.step3.heading')}
					description={$t('base.onboarding.step3.paragraph')}
				>
					<Form />
				</Step>
			{:else if $currentStep === 4}
				<List {searchOpen} />
			{/if}
		</div>
	</div>
</div>
