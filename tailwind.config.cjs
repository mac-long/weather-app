/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte}'],
	theme: {
		extend: {
			colors: {
				primary: {
					light: '#F40256',
					dark: '#FE00C6'
				},
				secondary: '#7f7f7f'
			},
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
				anonymous: ['Anonymous Pro', 'monospace']
			},
			boxShadow: {
				nav: '0px 0px 2px rgba(0, 0, 0, 0.5);'
			}
		}
	},
	plugins: [require('@tailwindcss/forms')]
};
