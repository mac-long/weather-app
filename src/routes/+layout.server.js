import { error } from '@sveltejs/kit';
import { getUser, getUserItems } from 'utilities/user';

export async function load() {
	const userData = { profile: await getUser(1), items: await getUserItems(1) };
	if (userData) return { userData };

	throw error('404', 'User not found');
}
