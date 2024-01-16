/*
 * @Author: Linailnox
 * @Date: 2024-01-13 16:24:54
 * Copyright (c) 2020 - 2024 by Linailnox, All Rights Reserved.
 */
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import App from "./components/tt.vue";
// 定义路由组件路径

// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes = [
	{
		path: "/",
		name: "Main",
		component: () => import("../components/login.vue"),
	},
	{
		path: "/data",
		name: "data",
		component: () => import("../components/tt.vue"),
	},
	{
		path: "/f",
		name: "f",
		component: () => import("../components/tt.vue"),
	},
	{
		path: "/e",
		name: "e",
		component: () => import("../components/tt.vue"),
	},
	{
		path: "/fe",
		name: "fe",
		component: () => import("../components/tt.vue"),
	},
	{
		path: "/g",
		name: "g",
		component: () => import("../components/tt.vue"),
	},
	{
		path: "/j",
		name: "j",
		component: () => import("../components/tt.vue"),
	},
	{
		path: "/c",
		name: "c",
		component: () => import("../components/tt.vue"),
	},
	{
		path: "/v",
		name: "v",
		component: () => import("../components/tt.vue"),
	},
	{
		path: "/bj",
		name: "b",
		component: () => import("../components/tt.vue"),
	},
	{
		path: "/n",
		name: "n",
		component: () => import("../components/tt.vue"),
	},
];

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
	// 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
	history: createWebHistory(),
	routes, // `routes: routes` 的缩写
});

router.afterEach((to, from) => {
	const toDepth = to.path.split('/').length
	const fromDepth = from.path.split('/').length
	to.meta.transition = toDepth < fromDepth ? 'slide-right' : 'slide-left'
  })

// 导出对象
export default router;
