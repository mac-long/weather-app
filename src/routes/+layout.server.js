export async function load() {
	// const userData = { profile: await getUser(), items: await getUserItems() };
	// if (userData) return { user: { isLoggedIn: true, ...userData } };
	// throw error('404', 'User not found');
	return {
		user: { isLoggedIn: true, profile: {}, items: [], locations: [] },
		currentLocation: { name: 'New York', lat: 40.7128, lng: -74.0060 }
	}
}
