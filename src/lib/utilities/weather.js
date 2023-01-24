import { WEATHER_API_KEY, WEATHER_BASE_URL } from '$env/static/private';

export async function searchWeatherLocations(text) {
	return await fetch(`${WEATHER_BASE_URL}/search.json?key=${WEATHER_API_KEY}&q=${text}`).then(
		(res) => res.json()
	);
}

export async function getCurrentWeatherByLatLon(lat, lon) {
	return await fetch(
		`${WEATHER_BASE_URL}/forecast.json?key=${WEATHER_API_KEY}&q=${lat},${lon}&days=7&aqi=yes&alerts=yes`
	).then((res) => res.json());
}
