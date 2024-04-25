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
			container: {
				padding: '1rem'
			},
			colors: {
				'gold': '#c6932e',
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
			},
			zIndex: {
        '100': '100',
      },
			boxShadow: {
				'3xl': 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'
			}
		},
	},
	plugins: [],
}
