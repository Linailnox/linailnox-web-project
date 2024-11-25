import path from "path"
import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import VueDevTools from "vite-plugin-vue-devtools"
import VueRouter from "unplugin-vue-router/vite"
import { VueRouterAutoImports } from "unplugin-vue-router"
import AutoImport from "unplugin-auto-import/vite"
import Components from "unplugin-vue-components/vite"
import { ElementPlusResolver } from "unplugin-vue-components/resolvers"
import Icons from "unplugin-icons/vite"
import IconsResolver from "unplugin-icons/resolver"
import TurboConsole from "unplugin-turbo-console/vite"
import UnoCSS from "unocss/vite"
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
		TurboConsole(),
		UnoCSS(),
		AutoImport({
			imports: ["vue", "@vueuse/core", VueRouterAutoImports],
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
		VueRouter({
			dts: "./src/auto-router.d.ts",
		}),
	],
	css: {
		preprocessorOptions: {
			scss: {
				silenceDeprecations: ["legacy-js-api"],
			},
		},
	},
})
