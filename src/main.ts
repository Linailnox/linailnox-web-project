import router from "@/routers/index"
import { ElConfigProvider } from "element-plus"
import "element-plus/theme-chalk/dark/css-vars.css"
import "element-plus/theme-chalk/base.css"
import App from "@/App.vue"
import ElementPlus from "element-plus"
import { createPinia } from "pinia"
import { i18n } from "@/locales/index"
// main.ts
import "~console/theme-detect"
const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(i18n)
app.use(ElementPlus)
app.use(router)

router.isReady().then(() => {
	app.mount("#app")
})

export default defineComponent({
	components: {
		ElConfigProvider,
	},
	setup() {
		return {
			zIndex: 3000,
			size: "small",
		}
	},
})
