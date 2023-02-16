// export async function searchWeatherLocations(text) {
// 	return await fetch(`${WEATHER_BASE_URL}/search.json?key=${WEATHER_API_KEY}&q=${text}`).then(
// 		(res) => res.json()
// 	);
// }

export async function getCurrentWeatherByLatLon(lat, lon) {
	return await fetch(
		`http://api.weatherapi.com/v1/forecast.json?key=f5fc1fb02b6c4c409ad222400232001&q=${lat},${lon}&days=7&aqi=yes&alerts=yes`
	).then((res) => res.json());
}
