<script>
	import { writable } from 'svelte/store';
	import { t } from 'translations';
	import Header from '../../lib/components/onboarding/header.svelte';
	import Progress from '../../lib/components/onboarding/progress.svelte';
	import List from '../../lib/components/search/list.svelte';
	import Form from '../../lib/components/signup/form.svelte';
	import Step from '../../lib/components/signup/step.svelte';
	let currentStep = writable(1);

	const handleClick = () => {
		currentStep.update((n) => n + 1);
	};
</script>

<div class="w-screen h-screen bg-[#333] flex flex-col justify-end">
	<div
		class="flex flex-col items-start w-screen h-[95%] rounded-t-[41px] relative bg-gradient-to-b from-primary to-primaryDark"
	>
		<Header {currentStep} {handleClick} />
		<Progress {currentStep} />
		<div class="w-full h-full px-8 bg-white">
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
				<List />
			{/if}
		</div>
	</div>
</div>
