import { langList, defaultLang } from "@/locales/langList"
import zhCn from "element-plus/es/locale/lang/zh-cn"
import en from "element-plus/es/locale/lang/en"
import { i18n } from "@/locales/index"
const { locale } = i18n.global
// el_lang映射到Element Plus语言导入
const elLocaleMap: Record<string, object> = {
	"zh-CN": zhCn,
	en: en,
}

export const useElementPlusLocale = () => {
	// 默认语言
	const elementLocale = ref(elLocaleMap[defaultLang.el_lang])

	const setElementLocale = () => {
		console.log(locale)
		const langObj = langList.find((lang) => lang.category === locale)

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
