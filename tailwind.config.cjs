/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte}'],
	theme: {
		extend: {
			colors: {
				primary: '#F50169',
				secondary: '#7f7f7f',
				tertiary: '#f1f1f1'
			},
			fontFamily: {
				heading: ['Poppins', 'sans-serif'],
				body: ['Anonymous Pro', 'monospace']
			},
			boxShadow: {
				nav: '0px 0px 2px rgba(0, 0, 0, 0.5);'
			}
		}
	}
};
