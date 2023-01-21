import { searchWeatherLocations } from '../lib/utilities/weather';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const query = data.get('query');
		const weather = searchWeatherLocations(query);

		return weather;
	}
};
