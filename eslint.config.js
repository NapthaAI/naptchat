import prettier from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";
import js from "@eslint/js";
import { includeIgnoreFile } from "@eslint/compat";
import svelte from "eslint-plugin-svelte";
import globals from "globals";
import { fileURLToPath } from "node:url";
import stylistic from "@stylistic/eslint-plugin";
import ts from "typescript-eslint";
const gitignorePath = fileURLToPath(new URL("./.gitignore", import.meta.url));

export default ts.config(
	includeIgnoreFile(gitignorePath),
	js.configs.recommended,
	...ts.configs.recommended,
	...svelte.configs["flat/recommended"],
	prettier,
	...svelte.configs["flat/prettier"],

	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
			},
		},
	},

	{
		plugins: {
			"@stylistic": stylistic,
			prettier: prettierPlugin,
		},

		rules: {
			"prettier/prettier": "error",
			"no-unused-vars": "off",

			"@typescript-eslint/no-unused-vars": [
				"warn",
				{
					argsIgnorePattern: "^_",
					varsIgnorePattern: "^_",
				},
			],

			"@stylistic/padding-line-between-statements": [
				"error",
				{ blankLine: "always", prev: "*", next: "multiline-const" },
				{ blankLine: "always", prev: "multiline-const", next: "*" },
				{ blankLine: "always", prev: "*", next: "multiline-let" },
				{ blankLine: "always", prev: "multiline-let", next: "*" },
				{ blankLine: "always", prev: "*", next: "multiline-export" },
				{ blankLine: "always", prev: "multiline-export", next: "*" },
				{ blankLine: "always", prev: "*", next: "multiline-block-like" },
				{ blankLine: "always", prev: "multiline-block-like", next: "*" },
				{ blankLine: "always", prev: "*", next: "multiline-expression" },
				{ blankLine: "always", prev: "multiline-expression", next: "*" },
			],
		},
	},

	{
		files: ["**/*.svelte"],

		languageOptions: {
			parserOptions: {
				parser: ts.parser,
			},
		},
	},
);
