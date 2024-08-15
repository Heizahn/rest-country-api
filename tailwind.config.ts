import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				'dark-blue': 'hsl(209, 23%, 22%)',
				'bg-dark': 'hsl(207, 26%, 17%)',
				'text-light': 'hsl(200, 15%, 8%)',
				'dark-gray': 'hsl(0, 0%, 52%)',
				'bg-light': 'hsl(0, 0%, 98%)',
				't-white': 'hsl(0, 0%, 100%)',
			},
		},
	},
	darkMode: 'selector',
	plugins: [],
};
export default config;
