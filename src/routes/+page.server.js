import { searchWeatherLocations } from 'utilities/weather';

export async function load({ url }) {
	const locationsList = await searchWeatherLocations(
		url.searchParams.get('location') || 'Bournemouth'
	);
	console.log(locationsList);

	return { locationsList };
}
