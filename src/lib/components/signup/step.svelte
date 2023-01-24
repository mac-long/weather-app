<script>
	import { t } from 'translations';
	export let handleClick, title, description;
</script>

<div class="flex flex-col h-[100%] justify-between items-center py-16">
	<h1 class="max-w-sm mx-auto text-center text-black">{title}</h1>
	<div class="h-[200px]">
		<slot />
	</div>
	<p class="mt-16">{description}</p>
	<button on:click={handleClick}>
		{$t('base.general.button.next')}
	</button>
</div>
