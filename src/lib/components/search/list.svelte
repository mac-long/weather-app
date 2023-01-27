<script>
	import { goto } from '$app/navigation';
	import { locationsSearchStore } from 'store';
	export let searchOpen;

	const setSearch = (name, lat, lon) => {
		goto(`?location=${name}&lat=${lat}&lon=${lon}`, { replaceState: true, keepfocus: true });
		searchOpen = true;
	};
</script>

<ul class="w-full py-4 mx-auto space-y-4 overflow-y-auto text-center">
	{#each $locationsSearchStore as location}
		<li
			class="flex items-center justify-between w-full p-4 mx-auto text-left rounded-md cursor-pointer border-[1px] border-secondary group"
			on:click={() => setSearch(location?.name, location.lat, location.lon)}
			on:keydown={() => setSearch(location?.name, location.lat, location.lon)}
		>
			<div class="flex flex-col w-5/6">
				<span class="font-bold uppercase font-heading">{location?.name}</span>
				<span class="font-bold">{location?.region}, {location.country}</span>
			</div>
			<button
				class="grid w-12 h-12 p-0 duration-100 bg-black rounded-md place-items-center group-hover:bg-primary-500"
			>
				<svg
					width="49"
					height="48"
					viewBox="0 0 49 48"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<rect
						x="27.6499"
						y="21.636"
						width="4"
						height="14"
						rx="2"
						transform="rotate(45 27.6499 21.636)"
						fill="white"
					/>
					<rect
						width="4"
						height="14"
						rx="2"
						transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 27.6499 27.364)"
						fill="white"
					/>
				</svg>
			</button>
		</li>
	{/each}
</ul>
