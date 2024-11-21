/*
 * @Author: Linailnox
 * @Date: 2024-01-01 15:28:30
 * Copyright (c) 2020 - 2024 by Linailnox, All Rights Reserved.
 */
import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import AutoImport from "unplugin-auto-import/vite"
import Components from "unplugin-vue-components/vite"
import { ElementPlusResolver } from "unplugin-vue-components/resolvers"
import path from "path"
import Icons from "unplugin-icons/vite"
import IconsResolver from "unplugin-icons/resolver"
import VueDevTools from "vite-plugin-vue-devtools"
import TurboConsole from "unplugin-turbo-console/vite"

const pathSrc = path.resolve(__dirname, "src")

export default defineConfig({
	resolve: {
		alias: {
			"@": pathSrc,
		},
	},
	plugins: [
		vue(),
		VueDevTools(),
		AutoImport({
			imports: ["vue", "@vueuse/core"],
			resolvers: [
				// 自动导入图标组件
				IconsResolver({
					prefix: "Icon",
				}),
				ElementPlusResolver(),
			],
			eslintrc: {
				enabled: true, // Default `false`
			},
			dts: path.resolve(pathSrc, "auto-imports.d.ts"),
		}),
		Components({
			resolvers: [
				// 自动注册图标组件
				IconsResolver({
					enabledCollections: ["ep"],
				}),
				ElementPlusResolver(),
			],
			dts: path.resolve(pathSrc, "components.d.ts"),
		}),
		Icons({
			autoInstall: true,
		}),
		TurboConsole({}),
	],
})
