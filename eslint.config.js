import unocss from "@unocss/eslint-config/flat"
import withNuxt from "./.nuxt/eslint.config.mjs"

export default withNuxt(
	{
		files: ["**/*.{js,mjs,cjs,ts,vue}"],
	},
	{
		rules: {
			semi: 0,
		},
	},
	unocss
)
