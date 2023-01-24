<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import debounce from 'lodash.debounce';

	const updateSearch = debounce((e) => {
		goto(`?location=${e.target.value}`, { replaceState: true, keepfocus: true });
		searchOpen = true;
	}, 500);
</script>

<input
	class="mb-4 search"
	type="text"
	name="location"
	placeholder="Search for a location."
	value={$page.url.searchParams.get('location')}
	on:input={updateSearch}
/>
