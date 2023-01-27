<script>
	import Title from './title.svelte';
	export let title;
</script>

<div class="flex flex-col pt-10 space-y-6 bg-white pb-36">
	<Title text={title} />
	<slot />
</div>
