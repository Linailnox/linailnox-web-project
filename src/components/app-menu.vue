<template>
	<div class="common-layout">
		<el-row :gutter="10" type="flex" align="middle">
			<el-col :span="21" min-h-60px>
				<el-menu
					router
					mode="horizontal"
					ref="menu"
					:ellipsis="true"
					:default-openeds="['0', '1']"
					border-none
					bg-transparent
				>
					<template v-for="item in $router.options.routes" :key="item.path">
						<el-menu-item
							:index="item.path"
							:class="$router.path === item.path ? 'is-active' : ''"
							>{{ $t("router." + item.name) }}</el-menu-item
						>
						<div v-if="item.name === 'index'" grow />
					</template>
				</el-menu>
			</el-col>

			<el-col :span="3" min-h-60px>
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

.darkMode {
	border-radius: 8px;
	--el-switch-on-color: #2c2c2c;
	--el-switch-off-color: #dcdfe6;
	--el-switch-border-color: var(--el-color-primary);
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
