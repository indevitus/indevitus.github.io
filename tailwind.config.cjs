/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'sans': ['Work Sans', 'Arial', 'sans-serif'],
				'display': ['Poppins', 'Arial', 'sans-serif'],
			},			
			container: {
				center: true,
			},
			colors: {
				'gold': '#c6932a',
				'gray': {
					'default': '#808080',
					'light': '#bdbdbd'
				}
			},
			screens: {
				'2xl': '1280px',
				'3xl': '1280px',
			}				
		},
	},
	plugins: [],
}
