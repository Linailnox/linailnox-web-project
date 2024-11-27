import { langList, defaultLang } from "@/locales/langList"
import zhCn from "element-plus/es/locale/lang/zh-cn"
import en from "element-plus/es/locale/lang/en"
const { locale } = useNuxtApp().$i18n;
// el_lang映射到Element Plus语言导入
const elLocaleMap: Record<string, import("element-plus/es/locale").Language> = {
	"zh-CN": zhCn,
	en: en,
}

export const useElementPlusLocale = () => {
	// 默认语言
	const elementLocale = ref(elLocaleMap[defaultLang.el_lang])

	const setElementLocale = () => {
		console.log(locale)
		const langObj = langList.find((lang) => lang.category === locale.value)

		if (langObj && elLocaleMap[langObj.el_lang]) {
			elementLocale.value = elLocaleMap[langObj.el_lang]
		} else {
			elementLocale.value = elLocaleMap["en"] // Fallback 默认英文
		}
	}

	watchEffect(() => {
		setElementLocale()
	})

	return {
		elementLocale,
	}
}
