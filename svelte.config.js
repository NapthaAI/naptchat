import { preprocessMeltUI, sequence } from "@melt-ui/pp";
import adapterAuto from "@sveltejs/adapter-auto";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { processDarkRunes } from "dark-runes";

/** @type {import('@sveltejs/kit').Config}*/
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: sequence([vitePreprocess(), preprocessMeltUI(), processDarkRunes()]),

	kit: {
		adapter: adapterAuto(),

		env: {
			publicPrefix: "NAPTHA_",
		},

		alias: {
			"$common/*": "./src/lib/common/*",
			"$entities/*": "./src/lib/entities/*",
			$lib: "./src/lib",
			"$lib/*": "./src/lib/*",
		},
	},

	vitePlugin: {
		inspector: {
			showToggleButton: "active",
		},
	},
};

export default config;
