import zh from "@/locales/zh-cn"
import en from "@/locales/en"
import eZhCn from "element-plus/dist/locale/zh-cn.mjs"
import eEn from "element-plus/dist/locale/en.mjs"
import { createI18n, useI18n } from "vue-i18n"
const messages = {
	zh,
	en,
}
const i18n = createI18n({
	legacy: false,
	locale: "zh",
	fallbackLocale: "en",
	messages: messages,
	globalInjection: true,
})

const { locale } = useI18n()
export const getLanguage = () => {
	return computed(() => {
		locale === "en" ? eEn : eZhCn
	})
}
