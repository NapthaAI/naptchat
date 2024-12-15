import { defineConfig } from "@kubb/core";

export default defineConfig(() => {
	return {
		root: ".",

		input: {
			path: "http://node1.naptha.ai:7001/openapi.json",
		},

		output: {
			path: "./src/lib/common/api/naptha-node/client.generated.ts",
		},

		plugins: [],
	};
});
