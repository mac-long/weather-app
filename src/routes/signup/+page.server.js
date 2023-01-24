import { getCurrentWeatherByLatLon, searchWeatherLocations } from 'utilities/weather';

export async function load({ url }) {
	const locationsList = await searchWeatherLocations(url.searchParams.get('location'));
	const currentLocation = await getCurrentWeatherByLatLon(
		url.searchParams.get('lat'),
		url.searchParams.get('lon')
	);

	return { locationsList, currentLocation };
}
