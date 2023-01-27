<script>
	import { t } from 'translations';
	export let currentStep;
</script>

<h2 class="w-auto">
	{#if currentStep === 1}
		{$t('base.onboarding.title.welcome')}
	{:else if currentStep === 2}
		{$t('base.onboarding.title.add')}
	{:else if currentStep === 3}
		{$t('base.onboarding.title.signup')}
	{:else if currentStep === 4}
		{$t('base.onboarding.title.search')}
	{/if}
</h2>
