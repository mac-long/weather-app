<script>
	import Icon from './icon.svelte';
	export let currentTime, time;
</script>

<div
	class="flex flex-col items-center flex-shrink-0 py-2 space-y-2 text-white rounded-lg w-28 h-36 bg-gradient-to-tr from-black to-gray-800 "
	class:active={currentTime === time}
	class:day={time.includes('AM') && currentTime !== time}
>
	<span class="text-lg font-bold uppercase">{currentTime === time ? 'Now' : time}</span>
	<Icon />
	<span class="text-lg font-bold">21°</span>
</div>

<style lang="postcss">
	.active {
		@apply from-primary-600 to-primary-500;
	}

	.day {
		@apply from-gray-200 to-gray-400 text-black;
	}
</style>
