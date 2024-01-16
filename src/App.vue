<!--
 * @Author: Linailnox
 * @Date: 2024-01-01 10:09:44
 * Copyright (c) 2020 - 2024 by Linailnox, All Rights Reserved.
-->
<template>
	<el-container>
		<el-header class="header"><Menu /></el-header>
		<el-main>
			<router-view v-slot="{ Component }">
				<transition name="route.meta.transition">
				  <component :is="Component" />
				</transition>
			  </router-view>
		</el-main>
		<el-footer><router-link to="/data">跳转到home</router-link></el-footer>
	</el-container>
</template>

<script setup lang="ts">
	const loading = ElLoading.service({
		lock: true,
		text: "加载中",
		background: "rgba(0, 0, 0, 0.7)",
	});
	setTimeout(() => {
		loading.close();
	}, 2000);
</script>

<style scoped type="scss">
	:global(html) {
		background-color: var(--el-bg-color);
		transition: background-color var(--el-transition-duration);
	}

	:global(html.dark) {
		--el-fill-color-blank: black !important;
	}

	.header {
		position: sticky;
		padding: 0 0px;
		top: 0;
		left: 0;
		right: 0;
		z-index: 999;
	}
</style>
