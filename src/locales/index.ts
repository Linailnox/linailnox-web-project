import zh from "@/locales/zh-cn"
import en from "@/locales/en"
import { createI18n } from "vue-i18n"
const messages = {
	zh,
	en,
}
export const i18n = createI18n({
	legacy: false,
	locale: "zh",
	fallbackLocale: "en",
	messages: messages,
	globalInjection: true,
})
