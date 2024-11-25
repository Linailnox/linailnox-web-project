<template>
	<div class="common-layout">
		<el-row :gutter="10">
			<el-col :span="21">
				<el-menu
					router
					mode="horizontal"
					ref="menu"
					:ellipsis="true"
					:default-openeds="['0', '1']"
				>
					<template v-for="item in $router.options.routes">
						<el-menu-item
							:index="item.path"
							:class="$route.path === item.path ? 'is-active' : ''"
							>{{ $t("router." + item.name) }}</el-menu-item
						>
						<div v-if="item.name === '/'" class="flex-grow" />
					</template>
				</el-menu>
			</el-col>

			<el-col :span="3">
				<el-switch
					class="darkMode"
					v-model="isDark"
					:active-action-icon="dark"
					:inactive-action-icon="light"
					@change="toggleDark()"
				/>
			</el-col>
		</el-row>
	</div>
</template>

<script setup type="ts">
import dark from "@/assets/icons/dark.vue";
import light from "@/assets/icons/light.vue";
const darkMode = useDark({ disableTransition: false });  // the default value is true
const isDark = computed(() => darkMode.value);
const toggleDark = useToggle(darkMode);
</script>

<style scoped>
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
	background-image: radial-gradient(transparent 1px, var(--el-menu-bg-color) 1px);
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
