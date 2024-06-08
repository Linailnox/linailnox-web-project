import { createRouter, createWebHistory } from "vue-router";

const routes = [
	{
		path: "/",
		name: "home",
		component: () => import("@/views/HomePage.vue"),
	},
	{
		path: "/prank",
		name: "prank",
		component: () => import("@/views/HomePage.vue"),
	},
	{
		path: "/about",
		name: "about",
		component: () => import("@/views/AboutPage.vue"),
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

router.afterEach((to, from) => {
	const toDepth = to.path.split("/").length;
	const fromDepth = from.path.split("/").length;
	to.meta.transition = toDepth < fromDepth ? "slide-right" : "slide-left";
});

// 导出对象
export default router;
