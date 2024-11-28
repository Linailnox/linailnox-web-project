import { messages } from "@/locales/langs"
import { defaultLang } from "@/locales/langList"
export default defineI18nConfig(() => ({
	strategy: "no_prefix",
	legacy: false,
	locale: defaultLang.category,
	messages: messages,
}))
