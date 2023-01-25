<script>
	import Card from './card.svelte';

	let times = [
		'12AM',
		'1AM',
		'2AM',
		'3AM',
		'4AM',
		'5AM',
		'6AM',
		'7AM',
		'8AM',
		'9AM',
		'10AM',
		'11AM',
		'12PM',
		'1PM',
		'2PM',
		'3PM',
		'4PM',
		'5PM',
		'6PM',
		'7PM',
		'8PM',
		'9PM',
		'10PM',
		'11PM'
	];

	let currentTime = new Date()
		.toLocaleTimeString('en-US', {
			hour: 'numeric',
			hour12: true
		})
		.replace(/\s/g, '');

	times = times
		.slice(times.indexOf(currentTime))
		.concat(times.slice(0, times.indexOf(currentTime)));
</script>

<div class="flex items-center w-screen h-64 pl-16 pr-8 space-x-2 overflow-x-scroll bg-black">
	{#each times as time}
		<Card {currentTime} {time} />
	{/each}
</div>
