import { error } from '@sveltejs/kit';
import { getUser, getUserItems } from 'utilities/user';
import { searchWeatherLocations } from '../lib/utilities/weather';

export async function load() {
	const user = { profile: await getUser(1), items: await getUserItems(1) };
	const weather = searchWeatherLocations(user.profile?.homeTown || 'Bournemouth');
	if (user && weather) return { user, weather };
	throw error(404, 'Error, something not found');
}
