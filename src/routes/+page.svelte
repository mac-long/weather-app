<script>
	import { goto } from '$app/navigation';
	import Header from 'components/layout/header.svelte';
	import Main from 'components/weather/main.svelte';
	import { currentLocationStore, locationsSearchStore, userStore } from 'store';
	import { t } from 'translations';
	export let data;
	let times = [
		'12AM',
		'1AM',
		'2AM',
		'3AM',
		'4AM',
		'5AM',
		'6AM',
		'7AM',
		'8AM',
		'9AM',
		'10AM',
		'11AM',
		'12PM',
		'1PM',
		'2PM',
		'3PM',
		'4PM',
		'5PM',
		'6PM',
		'7PM',
		'8PM',
		'9PM',
		'10PM',
		'11PM'
	];
	let currentTime = new Date()
		.toLocaleTimeString('en-US', {
			hour: 'numeric',
			hour12: true
		})
		.replace(/\s/g, '');

	// sort the times array so that the current time is at the begining followed by the rest of the times e.g. if the time is 8pm the array will be [8pm, 9pm, 10pm, 11pm, 12am, 1am, 2am, 3am, 4am, 5am, 6am, 7am]
	times = times
		.slice(times.indexOf(currentTime))
		.concat(times.slice(0, times.indexOf(currentTime)));

	$: $userStore = data.user;
	$: $locationsSearchStore = data.locationsList;
	$: $currentLocationStore = data.currentLocation;

	if (userStore.isLoggedIn) goto('');
</script>

{#if $userStore.isLoggedIn}
	<Header />
	<Main />
	<div class="flex items-center w-screen h-64 pl-16 pr-8 space-x-2 overflow-x-scroll bg-black">
		{#each times as time}
			<div
				class="flex flex-col items-center flex-shrink-0 py-2 space-y-2 text-white rounded-lg w-28 h-36 bg-gradient-to-tr from-black to-gray-800"
				class:from-primary-600={currentTime === time}
				class:to-primary-500={currentTime === time}
			>
				<span class="text-lg font-bold uppercase">{currentTime === time ? 'Now' : time}</span>
				<svg
					class="w-16 h-16"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="#FFF200"
					aria-hidden="true"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
					/>
				</svg>
				<span class="text-lg font-bold">21°</span>
			</div>
		{/each}
	</div>
{:else}
	<div
		class="flex flex-col items-center justify-center w-screen h-screen px-16 space-y-4 bg-primary-500"
	>
		<img src="cloudy.webp" alt="" role="presentation" />
		<h1 class="pb-16 text-4xl font-extrabold text-white">{$t('base.general.title')}</h1>
		<button class="secondary" on:click={() => goto('/signup')}>
			{$t('base.general.button.get_started')}
		</button>
		<button class="grey" on:click={() => goto('/login')}>
			{$t('base.general.button.login')}
		</button>
	</div>
{/if}
