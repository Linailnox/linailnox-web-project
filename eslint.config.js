import globals from "globals"
import pluginJs from "@eslint/js"
import tseslint from "typescript-eslint"
import pluginVue from "eslint-plugin-vue"
import pluginPrettierRecommendedConfigs from "eslint-plugin-prettier/recommended"

/** @type {import('eslint').Linter.Config[]} */
export default [
	{
		files: ["**/*.{js,mjs,cjs,ts,vue}"],
	},
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
				// esnext?
				...globals.es2025,
			},
		},
	},
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	...pluginVue.configs["flat/essential"],
	pluginPrettierRecommendedConfigs,
	{
		files: ["**/*.vue"],
		languageOptions: {
			parserOptions: {
				parser: tseslint.parser,
			},
		},
	},
]
