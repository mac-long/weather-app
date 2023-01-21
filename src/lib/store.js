import { writable } from 'svelte/store';

export const currentLocations = writable([]);
export const userHometown = writable(null);
