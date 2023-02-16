import { writable } from 'svelte/store';

export const userStore = writable();
export const locationsSearchStore = writable();
export const currentLocationStore = writable({
  location: {
    name: null
  },
  current: {
    temp_c: null,
    condition: {
      text: null
    }
  }
});
export const signUpStore = writable();
