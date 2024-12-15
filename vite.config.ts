import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import extractorSvelte from "@unocss/extractor-svelte";
import UnoCSS from "unocss/vite";

export default defineConfig({
	plugins: [
		UnoCSS({
			extractors: [extractorSvelte()],
		}),
		sveltekit(),
	],
});
