import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			screens: {
				mob: "440px",
				sm: "640px",
				md: "768px",
				xmd: "880px",
				lg: "1024px",
				xl: "1280px",
				"2xl": "1536px",
			},
			fontFamily: {
				mona: ["var(--font-mona)"],
				branch: ["var(--font-branch)"],
			},
			boxShadow: {
				whiteGlow: "0 0px 60px rgba(255,255,255,0.9)",
				whiteGlowBig: "0 0px 80px rgba(255,255,255,0.8)",
			},
			colors: {
				white: "#FEFFFE",
				black: "#010001",
				chart: {
					"1": "hsl(var(--chart-1))",
					"2": "hsl(var(--chart-2))",
					"3": "hsl(var(--chart-3))",
					"4": "hsl(var(--chart-4))",
					"5": "hsl(var(--chart-5))",
				},
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			keyframes: {
				"caret-blink": {
					"0%,70%,100%": { opacity: "1" },
					"20%,50%": { opacity: "0" },
				},
			},
			animation: { "caret-blink": "caret-blink 1.25s ease-out infinite" },
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
