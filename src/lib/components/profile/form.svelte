<script>
	import { writable } from 'svelte/store';
	let edited = writable(false);
</script>

<form class="text-left">
	<label class="flex font-bold items-center w-full px-6 py-5 border-b border-[#f1f1f1]">
		<span>Name</span>
		<input
			type="text"
			class="flex py-5 profile border-none text-right border-b border-[#f1f1f1] focus:outline-none"
			value="Mac Long"
		/>
	</label>
	<label class="flex font-bold items-center w-full px-6 py-5 border-b border-[#f1f1f1]">
		<span>Age</span>
		<input
			type="number"
			class="flex py-5 profile border-none appearance-none  text-right border-b border-[#f1f1f1] focus:outline-none"
			value={27}
		/>
	</label>
	<label
		class="flex font-bold items-center justify-between w-full px-6 py-5 border-b border-[#f1f1f1]"
	>
		<span>Home Town</span>
		<input
			type="text"
			class="min-w-0 w-1/3 flex py-5 border-none profile text-right border-b  border-[#f1f1f1] "
			value="Bracknell"
		/>
	</label>
	<label
		class="flex font-bold items-center justify-between w-full px-6 py-5 border-b border-[#f1f1f1]"
	>
		<span>Favourite Weather</span>
		<input
			type="text"
			class="min-w-0 w-1/3 flex py-5 border-none profile text-right border-b  border-[#f1f1f1] "
			value="Sunshine"
		/>
	</label>
	{#if $edited}
		<div class="px-6">
			<button>Edit Details</button>
		</div>
	{/if}
</form>
