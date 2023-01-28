<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import debounce from 'lodash.debounce';
	import { searchOpen } from 'store';
	import { t } from 'translations';

	const updateSearch = debounce((e) => {
		goto(`?location=${e.target.value}`, { replaceState: true, keepfocus: true });
		searchOpen.set(true);
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
