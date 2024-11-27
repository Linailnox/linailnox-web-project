// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
 devtools: { enabled: true },

 modules: [
					"@nuxt/ui",
					"@pinia/nuxt",
					"@nuxt/eslint",
					"pinia-plugin-persistedstate/nuxt",
					"@element-plus/nuxt",
					"@unocss/nuxt",
					"@nuxtjs/i18n",
					'@vueuse/nuxt',
					'unplugin-icons/nuxt',
					'unplugin-turbo-console/nuxt'
	],

 srcDir: 'src/',

 typescript: {
					typeCheck: true,
	},

 unocss: {
					nuxtLayers: true,
	},

 i18n: {
					vueI18n: './i18n.config.ts'
	},

 vite: {
					vue: {
									customElement: true
					},
					vueJsx: {
									mergeProps: true
					}
	},

 compatibilityDate: "2024-11-27"
})