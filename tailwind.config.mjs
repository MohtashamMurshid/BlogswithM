/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
				serif: ['"Source Serif 4"', 'Georgia', 'Cambria', 'serif'],
				mono: ['"JetBrains Mono"', '"Fira Code"', 'Consolas', 'monospace'],
			},
			typography: {
				DEFAULT: {
					css: {
						maxWidth: 'none',
					},
				},
			},
		},
	},
	plugins: [],
}
