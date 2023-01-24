import { userStore } from 'store';
import { getCurrentWeatherByLatLon, searchWeatherLocations } from 'utilities/weather';

export async function load({ url }) {
	let homeTown, query;
	userStore.subscribe((user) => (homeTown = user?.profile.homeTown));
	if (url.searchParams.has('location')) {
		query = url.searchParams.get('location');
	} else {
		query = homeTown;
	}
	const locationsList = await searchWeatherLocations(query);
	const currentLocation = await getCurrentWeatherByLatLon(
		url.searchParams.get('lat'),
		url.searchParams.get('lon')
	);

	return { locationsList, currentLocation };
}
