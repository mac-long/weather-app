export function getCurrentWeather(location, key) {
	return fetch(`https://api.weatherapi.com/v1/current.json?key=${key}&q=${location}&aqi=no`).then(
		(res) => res.json()
	);
}
