import { writable } from 'svelte/store';

// global store
export const userStore = writable(),
	locationsSearchStore = writable(),
	currentLocationStore = writable(),
	signUpStore = writable();

// onboarding store
export const currentStep = writable(1),
	searchOpen = writable(false);
