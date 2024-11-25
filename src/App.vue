<template>
	<el-config-provider :locale="elementLocale">
		<el-container font-lxgw>
			<el-header p-0><Menu /></el-header>
			<el-main overf-hidden="">
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

<style>
html {
	background-color: var(--el-bg-color);
	transition: background-color var(--el-transition-duration);
}
html.dark {
	--el-fill-color-blank: black !important;
}

body {
	margin: 0;
}

html,
body,
#app,
.el-container {
	height: 100%;
}

@font-face {
	font-family: "LXGW WenKai Screen";
	src: url("@/assets/fonts/LXGWWenKaiScreen.ttf");
}
</style>
