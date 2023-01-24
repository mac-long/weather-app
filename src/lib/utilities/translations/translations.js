import i18n from 'sveltekit-i18n';

const config = {
	fallbackLocale: 'en',
	loaders: [
		{
			locale: 'en',
			key: 'base',
			loader: async () => (await import('./en/base.json')).default
		}
	]
};

export const { t, locale, locales, loading, loadTranslations } = new i18n(config);
