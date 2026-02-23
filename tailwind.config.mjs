/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				stone: {
					925: '#1a1614',
				},
			},
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
			animation: {
				'fade-in': 'fadeIn 0.5s ease-out',
				'fade-up': 'fadeUp 0.6s ease-out',
				'slide-in': 'slideIn 0.4s ease-out',
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				fadeUp: {
					'0%': { opacity: '0', transform: 'translateY(16px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				slideIn: {
					'0%': { opacity: '0', transform: 'translateX(-8px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' },
				},
			},
		},
	},
	plugins: [],
}
