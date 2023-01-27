<script>
	export let options;
</script>

<!-- TODO: https://cssanimation.dev/radio-switch/ cleaner method -->
<div class="flex items-center w-full p-[3px] justify-center bg-pink-800 rounded-md space-x-3">
	<button class="w-full p-2 text-center text-black bg-white">
		{options[0]}
	</button>
	<span class="w-1 h-5 mx-4 rounded-md bg-slate-700" />
	<button class="w-full p-2 text-center text-white bg-transparent">
		{options[1]}
	</button>
</div>
