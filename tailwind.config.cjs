/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx}'],
	theme: {
		screens: {
			'xs': '420px',
			...defaultTheme.screens
		},
		extend: {
			fontFamily: {
				sans: ['Poppins', ...defaultTheme.fontFamily.sans],
				archivoBlack: ['Archivo Black', 'Poppins', 'sans-serif']
			},
			container: {
				padding: '1rem'
			},
			colors: {
				'transparent': 'transparent',
				'primary': '#c6932e',
				'secondary': '#080808',
				'black': '#000000',
				'white': '#ffffff',
				'maximum-red': '#dc2626',
				'gray': {
					'default': '#9ca3af',
					'darker': '#6b7280'
				},
				'light-blue': '#dbeafe',
				'light-green': '#dcfce7',
				'light-stone': '#f5f5f4',
				'light-pink': '#fce7f3'
			},
			transitionProperty: {
				'height': 'height',
			},
			transitionDuration: {
        '250': '250ms',
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
			},
			scale: {
				'112': '1.12'
			},
		},
	},
	plugins: [],
}
