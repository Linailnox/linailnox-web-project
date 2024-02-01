import { defineStore } from "pinia";
import zh from "element-plus/dist/locale/zh-cn.mjs";
import en from "element-plus/dist/locale/en.mjs";
import { i18n } from "@/locales/index";
export const useCounterStore = defineStore("counter", () => {
	// 变量
	const count = ref(zh);
	// 计算属性
	const doubleLang = computed(() => {
		if (localStorage.getItem("language")) {
			if (localStorage.getItem("language") === "en") {
				i18n.global.locale.value = "en";
				return en;
			} else {
				i18n.global.locale.value = "zh";
				return zh;
			}
		} else {
			return zh;
		}
	});

	// 方法action
	function increment(data: string) {
		console.log(data, i18n);
		if (data === "zh") {
			lang.value = zh;
			i18n.global.locale.value = data;
			localStorage.setItem("language", data);
		} else if (data === "en") {
			lang.value = en;
			i18n.global.locale.value = data;
			localStorage.setItem("language", data);
		}
	}

	return { count, increment, doubleLang };
});
export default useCounterStore;
