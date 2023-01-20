import { error } from '@sveltejs/kit';
import { getUser } from 'utilities/user';
import { getUserItems } from '../lib/utilities/user';

export async function load() {
	const user = { user: await getUser(1), items: await getUserItems(1) };
	if (user) return user;
	throw error(404, 'User not found');
}
