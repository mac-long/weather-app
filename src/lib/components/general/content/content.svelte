<script>
	import Title from './title.svelte';
	export let title;
</script>

<div class="flex flex-col w-screen p-6 pt-10 space-y-6 bg-white pb-36">
	<Title text={title} />
	<slot />
</div>
