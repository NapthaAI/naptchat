import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import extractorSvelte from "@unocss/extractor-svelte";
import UnoCSS from "unocss/vite";
import { darkRunes } from "dark-runes";
import mkcert from "vite-plugin-mkcert";

export default defineConfig({
	plugins: [
		// TODO: Uncomment once TLS is available on the API endpoint
		// mkcert(),

		UnoCSS({
			extractors: [extractorSvelte()],
		}),

		sveltekit(),
		darkRunes(),
	],
});
