<script>
	export let data, form;
	{
		form?.length > 0 ? (data.weather = form) : null;
	}
</script>

<div class="p-4 space-y-4">
	<h1 class="text-4xl font-bold">Welcome.</h1>
	<form method="POST">
		<input type="text" name="query" placeholder="Search for a location." />
		<input
			class="bg-blue-600 rounded-md px-4 py-2 text-white cursor-pointer hover:bg-blue-700 transition-colors duration-300"
			type="submit"
			value="Search"
		/>
	</form>

	{#if data.weather.length > 0}
		<ul>
			{#each data.weather as location}
				<li>{location.name}</li>
			{/each}
		</ul>
	{:else}
		<p>Please enter a location.</p>
	{/if}
</div>
