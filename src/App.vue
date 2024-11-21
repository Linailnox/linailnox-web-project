<template>
	<el-config-provider :locale="elementLocale">
		<el-container>
			<el-header class="header"><Menu /></el-header>
			<el-main>
				<router-view v-slot="{ Component }">
					<transition name="el-fade-in">
						<component :is="Component" />
					</transition>
				</router-view>
			</el-main>
			<el-footer><router-link to="/data">e跳转到home</router-link></el-footer>
		</el-container>
	</el-config-provider>
</template>

<script setup lang="ts">
import { useElementPlusLocale } from "@/locales/useElementPlusLocale"
const { elementLocale } = useElementPlusLocale()
</script>

<style scoped type="scss">
:global(html) {
	font-family: "LXGW WenKai Screen", sans-serif;
	background-color: var(--el-bg-color);
	transition: background-color var(--el-transition-duration);
}
:global(html.dark) {
	--el-fill-color-blank: black !important;
}

:global(body) {
	margin: 0;
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

@font-face {
	font-family: "LXGW WenKai Screen";
	src: url("@/assets/fonts/LXGWWenKaiScreen.ttf");
}
</style>
