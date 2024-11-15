/// <reference types="vite/client" />

declare module "*.vue" {
	import { DefineComponent } from "vue"
	const component: DefineComponent<object, object, never>
	export default component
}

declare module "element-plus/dist/locale/zh-cn.mjs"
declare module "element-plus/dist/locale/en.mjs"
