import { defineConfig, presetAttributify, presetUno, presetWebFonts } from "unocss"
export default defineConfig({
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
})
