/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	safelist: [
		{
		  pattern: /bg-(red|green|blue|yellow|orange|purple|teal)-(200|300|400|500|600|700|800|900)/,
		  variants: ['hover', 'focus', 'active'],
		},
	  ],
	theme: {
		extend: {},
	},
	plugins: [],
}
