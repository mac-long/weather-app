<script>
	import { currentStep } from 'store';
	import { t } from 'translations';
	export let title, description;

	const handleClick = () => {
		currentStep.update((n) => n + 1);
	};
</script>

<div class="flex flex-col h-[100%] justify-between items-center py-10">
	<h1 class="max-w-sm pb-10 mx-auto text-3xl text-center text-black">{title}</h1>
	<div class="h-[200px]">
		<slot />
	</div>
	<p class="mt-16">{description}</p>
	<button class="mt-10" on:click={handleClick}>
		{$t('base.general.button.next')}
	</button>
</div>
