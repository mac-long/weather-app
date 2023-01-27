<script>
	let items = [
		{ name: 'Sunscreen', checked: true },
		{ name: 'Hat', checked: false },
		{ name: 'Sunglasses', checked: false },
		{ name: 'Water', checked: false }
	];
	console.log(items);
</script>

<ul class="text-left">
	{#each items as item}
		<li class="flex items-center justify-between w-full px-6 py-5 border-b border-[#f1f1f1]">
			<span class="ml-2 font-bold">{item.name}</span>
			<input type="checkbox" bind:checked={item.checked} />
		</li>{/each}
</ul>

<style lang="postcss">
	input[type='checkbox'] {
		@apply w-6 h-6 rounded-full appearance-none border-[#f1f1f1];
	}

	input[type='checkbox']:checked {
		@apply w-6 h-6 rounded-full bg-primary-500 text-white border-none;
	}
</style>
