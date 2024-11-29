import { messages } from "@/locales/langs"
import { defaultLang } from "@/locales/langList"
import { defineI18nConfig } from "#i18n";
export default defineI18nConfig(() => ({
	strategy: "no_prefix",
	legacy: false,
	locale: defaultLang.category,
	messages: messages,
}))
