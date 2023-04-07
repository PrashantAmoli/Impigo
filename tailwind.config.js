/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				Montserrat: ['Montserrat', 'sans-serif'],
				SpaceX: ['SpaceX', 'Montserrat', 'sans-serif'],
			},
			screens: {
				xs: '400px',
				...defaultTheme.screens,
			},
		},
	},
	plugins: [require('daisyui')],
};
