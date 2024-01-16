<!--
 * @Author: Linailnox
 * @Date: 2024-01-10 19:07:52
 * Copyright (c) 2020 - 2024 by Linailnox, All Rights Reserved.
-->
<template>
	<div class="common-layout">
		<el-row :gutter="10">
			<el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
				<!-- TODO: 修复点击主页后仍然显示menu item-->
				<router-link
					:to="{ path: '/' }"
					class="el-link el-link--default logo">
					<el-link :underline="false" class="logo">
						<el-icon class="grid-content icon" :size="20"
							><i-ep-House
						/></el-icon>
						<el-text class="grid-content name" size="large"
							>Linailnox</el-text
						>
					</el-link>
				</router-link>
			</el-col>
			<el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"></el-col>
			<el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
				<el-menu
					router
					mode="horizontal"
					ref="menu"
					:ellipsis="true"
					:default-openeds="['0', '1']"
					@open="handleOpen">
					<div class="flex-grow" />
					<div v-for="(item, index) in $router.options.routes">
						<div v-if="item.name != 'Main'">
							<el-menu-item
								:index="item.path"
								:class="
									$route.path == item.path ? 'is-active' : ''
								"
								>{{ item.name }}</el-menu-item
							>
						</div>
					</div>
				</el-menu>
			</el-col>
			<el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
				<el-switch
					class="darkMode"
					v-model="darkMode"
					:active-action-icon="dark"
					:inactive-action-icon="light"
					@change="toggleDark()" />
			</el-col>
		</el-row>
	</div>
</template>

<script setup type="ts">
	import dark from './icons/dark.vue'
	import light from './icons/light.vue'
	const isDark = useDark({ disableTransition: false })  // the default value is true
	const toggleDark = useToggle(isDark)
	const darkMode = ref(true)
</script>

<style scoped lang="scss">
	.el-col {
		border-radius: 4px;
		min-height: 60px;
	}

	.grid-content {
		border-radius: 4px;
		min-height: 60px;
	}
	.flex-grow {
		flex-grow: 1;
	}

	.common-layout {
		position: relative;
		transition: background-color 0.5s;
		overflow-y: auto;
		padding: 0 32px;
		background-image: radial-gradient(
			transparent 1px,
			var(--el-menu-bg-color) 1px
		);
		background-size: 4px 4px;
		backdrop-filter: saturate(50%) blur(4px);
		border-bottom: solid 1px var(--el-menu-border-color);
	}

	.logo,
	.name,
	.darkMode {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.name {
		position: relative;
		left: 5%;
	}

	.el-link {
		transform: color 0.3s;
	}

	.el-menu {
		border-bottom: none;
		background-color: transparent;
	}

	.darkMode {
		justify-content: space-between;
		margin-top: 10%;
		border-radius: 8px;
		align-items: center;
		--el-switch-on-color: #2c2c2c;
		--el-switch-off-color: #dcdfe6;
		--el-switch-border-color: var(--el-color-primary);
		.el-switch__action {
			width: 14px;
			height: 14px;
		}
	}

	:deep(.dark-icon) {
		border-radius: 50%;
		color: #cfd3dc;
		background-color: #141414;
	}

	:deep(.light-icon) {
		color: #606266;
	}
</style>
