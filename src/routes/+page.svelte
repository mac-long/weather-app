<script>
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import debounce from 'lodash.debounce';
	import { currentLocationStore, locationsSearchStore, userStore } from 'store';
	export let data;
	let searchOpen;
	$: $userStore = data.user;
	$: $locationsSearchStore = data.locationsList;
	$: $currentLocationStore = data.currentLocation;

	const updateSearch = debounce((e) => {
		goto(`?location=${e.target.value}`, { replaceState: true, keepfocus: true });
		searchOpen = true;
	}, 500);

	const setSearch = (name, lat, lon) => {
		goto(`?location=${name}&lat=${lat}&lon=${lon}`, { replaceState: true, keepfocus: true });
		searchOpen = false;
	};
</script>

<div class="p-4 space-y-4">
	<h1 class="text-4xl font-bold">Welcome.</h1>
	<form method="POST" on:submit|preventDefault use:enhance>
		<input
			class="mb-4"
			type="text"
			name="location"
			placeholder="Search for a location."
			value={$page.url.searchParams.get('location')}
			on:input={updateSearch}
		/>
		{#if $locationsSearchStore.length > 0 && searchOpen}
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
		{/if}
	</form>
</div>
