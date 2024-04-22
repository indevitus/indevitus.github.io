/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
			'xs': '420px',
			...defaultTheme.screens
		},
		extend: {
			fontFamily: {
				sans: ['Work Sans', 'Arial', 'sans-serif'],
				display: ['Poppins', 'sans-serif'],
				archivoBlack: ['Archivo Black', 'Poppins', 'sans-serif']
			},
			animation: {
				'slide-down': 'slideDown 0.5s linear',
				'slide-up': 'slideUp 0.5s linear forwards',
			},
			container: {
				padding: '1rem'
			},
			colors: {
				'gold': '#c6932a',
				black: '#080808',
				white: '#ffffff',
				'gray': {
					'default': '#808080',
					'light': '#bdbdbd'
				}
			},
			transitionProperty: {
				'height': 'height',
			},
			screens: {
				'2xl': '1280px',
				'3xl': '1280px',
			}
		},
	},
	plugins: [],
}
