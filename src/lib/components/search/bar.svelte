<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import debounce from 'lodash.debounce';
	import { t } from 'translations';
	export let searchOpen;

	const updateSearch = debounce((e) => {
		goto(`?location=${e.target.value}`, { replaceState: true, keepfocus: true });
		searchOpen = true;
	}, 500);
</script>

<input
	class="mb-4 search"
	type="text"
	name="location"
	placeholder={$t('base.search.placeholder')}
	value={$page.url.searchParams.get('location')}
	on:input={updateSearch}
/>
