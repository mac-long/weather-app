<script>
	import { locationsSearchStore } from 'store';

	const setSearch = (name, lat, lon) => {
		goto(`?location=${name}&lat=${lat}&lon=${lon}`, { replaceState: true, keepfocus: true });
		searchOpen = false;
	};
</script>

{#if $locationsSearchStore?.length > 0}
	<ul class="w-full py-4 bg-white shadow-md rounded-b-md">
		{#each $locationsSearchStore as location}
			<li
				class="p-2 cursor-pointer hover:bg-gray-100"
				on:click={() => setSearch(location.name, location.lat, location.lon)}
				on:keydown={() => setSearch(location.name, location.lat, location.lon)}
			>
				{location.name}, {location.region}
			</li>
		{/each}
	</ul>
{:else}
	<span class="block p-4 text-center text-black">No results found.</span>
{/if}
