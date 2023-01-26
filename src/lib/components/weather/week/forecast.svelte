<!-- TODO: Move the `today` variable to `+page.svelte` and see if you can use one instance of date in time and week components -->
<script>
	import Card from './card.svelte';

	const today = new Date().getDay();
	let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	daysOfWeek = daysOfWeek.slice(today).concat(daysOfWeek.slice(0, today));
</script>

<div class="flex flex-col w-screen p-6 pt-10 space-y-6 bg-white pb-36">
	<div class="space-y-2">
		<h4>Forecast</h4>
		<hr />
	</div>
	<div class="space-y-4">
		{#each daysOfWeek as day}
			<Card {day} temperature={21} weather="Possible Storms" />
		{/each}
	</div>
</div>
