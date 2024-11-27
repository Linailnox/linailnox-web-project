import { mergeConfigs, presetAttributify, presetUno, presetWebFonts } from "unocss"
import config from "./.nuxt/uno.config.mjs"

export default mergeConfigs([
	config,
	{
		presets: [
			presetUno(),
			presetAttributify(),
			presetWebFonts({
				provider: "none",
				fonts: {
					lxgw: [
						{
							name: "LXGW WenKai Screen",
						},
						{
							name: "sans-serif",
							provider: "none",
						},
					],
				},
			}),
		],
	},
])
