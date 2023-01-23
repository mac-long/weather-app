<script>
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import debounce from 'lodash.debounce';
	import { currentLocationStore, locationsSearchStore } from 'store';
	export let data, searchOpen;
	$: $locationsSearchStore = data.locationsList;

	const updateSearch = debounce((e) => {
		goto(`?location=${e.target.value}`, { replaceState: true, keepfocus: true });
		searchOpen = true;
	}, 500);

	const setSearch = (name, lat, lon) => {
		currentLocationStore.set(`${lat},${lon}`);
		searchOpen = false;
		goto(`?location=${name}`);
	};
</script>

<div class="p-4 space-y-4">
	<h1 class="text-4xl font-bold">Welcome.</h1>
	<form method="POST" on:submit|preventDefault use:enhance>
		<input
			class="rounded-md shadow-md p-4 bg-white w-full"
			type="text"
			name="location"
			placeholder="Search for a location."
			value={$page.url.searchParams.get('location')}
			on:input={updateSearch}
		/>
		{#if $locationsSearchStore.length > 0 && searchOpen}
			<ul class="rounded-b-md shadow-md py-4 bg-white w-full">
				{#each $locationsSearchStore as location}
					<li
						class="hover:bg-gray-100 cursor-pointer p-2"
						on:click={() => setSearch(location.name, location.lat, location.lon)}
						on:keydown={() => setSearch(location.name, location.lat, location.lon)}
					>
						{location.name}, {location.region}
					</li>
				{/each}
			</ul>
		{/if}
	</form>
	{$currentLocationStore}
</div>
