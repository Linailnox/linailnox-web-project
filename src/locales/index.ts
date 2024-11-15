import { defaultLang } from "@/locales/langList"
import zh from "@/locales/langs/zh-cn"
import en from "@/locales/langs/en"
import { createI18n } from "vue-i18n"
const messages = {
	zh,
	en,
}
export const i18n = createI18n({
	legacy: false,
	locale: defaultLang.category,
	fallbackLocale: "en",
	messages: messages,
	globalInjection: true,
})
