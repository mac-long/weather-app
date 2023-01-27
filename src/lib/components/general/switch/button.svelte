<script>
	export let text, onClick, active, iteration;
</script>

<button
	class="w-full py-1 text-center bg-transparent rounded-lg"
	class:active={active === iteration}
	on:click={onClick}
>
	{text}
</button>

<style lang="postcss">
	.active {
		@apply bg-white text-black;
	}
</style>
