<template>
	<el-config-provider :locale="locale">
		<el-container>
			<el-header class="header"><Menu /></el-header>
			<el-main>
				<router-view v-slot="{ Component }">
					<transition name="route.meta.transition">
						<component :is="Component" />
					</transition>
				</router-view>
			</el-main>
			<el-footer
				><router-link to="/data">e跳转到home</router-link></el-footer
			>
		</el-container>
	</el-config-provider>
</template>

<script setup lang="ts">
import { useCounterStore } from "@/stores/uiStore";
const uiStores = useCounterStore();
const locale = uiStores.doubleLang;
</script>

<style scoped type="scss">
:global(html) {
	background-color: var(--el-bg-color);
	transition: background-color var(--el-transition-duration);
}
:global(html.dark) {
	--el-fill-color-blank: black !important;
}

:global(body) {
	margin: 0px;
}

:global(html),
:global(body),
:global(#app),
.el-container {
	height: 100%;
}

.el-header {
	position: sticky;
	padding: 0 0px;
	top: 0;
	left: 0;
	right: 0;
	z-index: 999;
}

.el-main {
	overflow: unset;
}
</style>
