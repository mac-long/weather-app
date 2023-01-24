<script>
	import { goto } from '$app/navigation';
	import { currentLocationStore, locationsSearchStore, userStore } from 'store';
	import { t } from 'translations';
	export let data;

	$: $userStore = data.user;
	$: $locationsSearchStore = data.locationsList;
	$: $currentLocationStore = data.currentLocation;

	if (userStore.isLoggedIn) goto('');
</script>

{#if $userStore.isLoggedIn}
	<header
		class="flex items-center justify-between w-screen h-32 px-4 bg-gradient-to-b from-primary to-primaryDark"
	>
		<div class="flex items-center w-auto space-x-4">
			<img class="h-12 w-14" src="/cloudy.webp" alt="" role="presentation" />
			<h1 class="uppercase">Weather App</h1>
		</div>
		<button class="w-auto ghost">
			<svg
				width="26"
				height="24"
				viewBox="0 0 26 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g id="Add">
					<g id="np_add_1776296_FFFFFF">
						<path
							id="Path"
							d="M9.92139 0V9.75H0.171387V14.25H9.92139V24H14.4214V14.25H24.1714V9.75H14.4214V0H9.92139Z"
							fill="white"
						/>
					</g>
				</g>
			</svg>
		</button>
	</header>
{:else}
	<div
		class="flex flex-col items-center justify-center w-screen h-screen px-16 space-y-4 bg-primary"
	>
		<img src="/cloudy.webp" alt="" role="presentation" />
		<h1 class="pb-16 text-4xl font-extrabold text-white">{$t('base.general.title')}</h1>
		<button class="secondary" on:click={() => goto('/signup')}>
			{$t('base.general.button.get_started')}
		</button>
		<button class="grey" on:click={() => goto('/login')}>
			{$t('base.general.button.login')}
		</button>
	</div>
{/if}
