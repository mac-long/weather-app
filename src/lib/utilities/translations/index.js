import i18n from 'sveltekit-i18n';

const config = {
	loaders: [
		{
			locale: 'en',
			key: 'en',
			loader: async () => (await import('./en.json')).default
		},
		{
			locale: 'de',
			key: 'de',
			loader: async () => (await import('./de.json')).default
		}
	]
};

export const { t, locale, locales, loading, loadTranslations } = new i18n(config);
