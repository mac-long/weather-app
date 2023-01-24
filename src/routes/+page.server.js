import { userStore } from 'store';
import { getCurrentWeatherByLatLon, searchWeatherLocations } from 'utilities/weather';

export async function load({ url }) {
	let homeTown;
	userStore.subscribe((user) => (homeTown = user?.profile.homeTown));
	const locationsList = await searchWeatherLocations(url.searchParams.get('location') || homeTown);
	const currentLocation = await getCurrentWeatherByLatLon(
		url.searchParams.get('lat'),
		url.searchParams.get('lon')
	);

	return { locationsList, currentLocation };
}
