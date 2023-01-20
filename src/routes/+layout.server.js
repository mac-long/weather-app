import { error } from '@sveltejs/kit';
import { getUser } from 'utilities/user';

export async function load() {
	const user = await getUser(1);
	if (user) return user;
	throw error(404, 'User not found');
}
