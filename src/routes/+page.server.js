import { error } from '@sveltejs/kit';
import { getCurrentWeather } from '../lib/utilities/weather';

export async function load() {
	const { current, location } = await getCurrentWeather('London', process.env.WEATHER_KEY);

	if (current && location) return { currentWeather: { current, location } };

	throw error(404, 'Error loading current weather');
}
