import { defineConfig, presetAttributify, presetUno } from "unocss";
import { presetWebFonts } from "unocss/preset-web-fonts";
import extractorSvelte from "@unocss/extractor-svelte";

export default defineConfig({
	extractors: [extractorSvelte()],

	presets: [
		presetAttributify({
			/* preset options */
		}),

		presetUno({
			dark: "class",
		}), // Base preset with dark mode configuration

		presetWebFonts({
			provider: "none",

			fonts: {
				sans: "sans-serif",
			},
		}),
	],

	// Content sources
	content: {
		filesystem: ["./src/**/*.{html,js,svelte,ts}"],
	},

	// Safelist
	safelist: ["dark"],

	// Theme configuration
	theme: {
		colors: {
			border: "hsl(var(--border) / <alpha-value>)",
			input: "hsl(var(--input) / <alpha-value>)",
			ring: "hsl(var(--ring) / <alpha-value>)",
			background: "hsl(var(--background) / <alpha-value>)",
			foreground: "hsl(var(--foreground) / <alpha-value>)",
			primary: {
				DEFAULT: "hsl(var(--primary) / <alpha-value>)",
				foreground: "hsl(var(--primary-foreground) / <alpha-value>)",
			},
			secondary: {
				DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
				foreground: "hsl(var(--secondary-foreground) / <alpha-value>)",
			},
			destructive: {
				DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
				foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
			},
			muted: {
				DEFAULT: "hsl(var(--muted) / <alpha-value>)",
				foreground: "hsl(var(--muted-foreground) / <alpha-value>)",
			},
			accent: {
				DEFAULT: "hsl(var(--accent) / <alpha-value>)",
				foreground: "hsl(var(--accent-foreground) / <alpha-value>)",
			},
			popover: {
				DEFAULT: "hsl(var(--popover) / <alpha-value>)",
				foreground: "hsl(var(--popover-foreground) / <alpha-value>)",
			},
			card: {
				DEFAULT: "hsl(var(--card) / <alpha-value>)",
				foreground: "hsl(var(--card-foreground) / <alpha-value>)",
			},
			sidebar: {
				DEFAULT: "hsl(var(--sidebar-background))",
				foreground: "hsl(var(--sidebar-foreground))",
				primary: "hsl(var(--sidebar-primary))",
				"primary-foreground": "hsl(var(--sidebar-primary-foreground))",
				accent: "hsl(var(--sidebar-accent))",
				"accent-foreground": "hsl(var(--sidebar-accent-foreground))",
				border: "hsl(var(--sidebar-border))",
				ring: "hsl(var(--sidebar-ring))",
			},
		},
		borderRadius: {
			xl: "calc(var(--radius) + 4px)",
			lg: "var(--radius)",
			md: "calc(var(--radius) - 2px)",
			sm: "calc(var(--radius) - 4px)",
		},
		keyframes: {
			"accordion-down": "{from{height:0}to{height:var(--bits-accordion-content-height)}}",
			"accordion-up": "{from{height:var(--bits-accordion-content-height)}to{height:0}}",
			"caret-blink": "{0%,70%,100%{opacity:1}20%,50%{opacity:0}}",
		},
		animation: {
			"accordion-down": "accordion-down 0.2s ease-out",
			"accordion-up": "accordion-up 0.2s ease-out",
			"caret-blink": "caret-blink 1.25s ease-out infinite",
		},
	},

	// Shortcuts for common utility combinations
	shortcuts: [
		["container", "mx-auto px-8 w-full max-w-full 2xl:max-w-[1400px]"],
		["shadow-mini", "shadow-[0_1px_2px_0_rgb(0_0_0_/_0.05)]"],
		["shadow-mini-inset", "shadow-[inset_0_1px_2px_0_rgb(0_0_0_/_0.05)]"],
	],
});
