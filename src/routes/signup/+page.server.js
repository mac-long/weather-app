import { searchWeatherLocations } from 'utilities/weather';

export async function load({ url }) {
	const locationsList = await searchWeatherLocations(url.searchParams.get('location'));

	return { locationsList };
}
