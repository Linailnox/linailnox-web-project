import { createRouter, createWebHistory } from "vue-router"
import { routes, handleHotUpdate } from "vue-router/auto-routes"

const router = createRouter({
	history: createWebHistory(),
	routes,
})

if (import.meta.hot) {
	handleHotUpdate(router)
}

router.afterEach((to, from) => {
	const toDepth = to.path.split("/").length
	const fromDepth = from.path.split("/").length
	to.meta.transition = toDepth < fromDepth ? "slide-right" : "slide-left"
})

// 导出对象
export default router
