<script>
	import Card from './card.svelte';
	export let today;

	let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	daysOfWeek = daysOfWeek.slice(today).concat(daysOfWeek.slice(0, today));
</script>

<div class="space-y-4">
	{#each daysOfWeek as day}
		<Card {day} temperature={21} weather="Possible Storms" />
	{/each}
</div>
