<template>
	<el-row type="flex" justify="space-evenly" align="middle" h-full>
		<el-col :md="8" :lg="12" :xl="12">
			<el-space direction="vertical">
				<el-text id="multipleStrings" text-4xl></el-text>
				<el-button circle transition>
					<Icon icon="ph:github-logo-bold" size="large" width="24" />
				</el-button>
			</el-space>
		</el-col>
		<el-col :span="5.5">
			<el-avatar :size="300" fit="cover" src="@/assets/avatar" />
		</el-col>
	</el-row>
</template>
<script setup lang="ts">
import { Icon } from "@iconify/vue"
import TypeIt from "typeit"
onMounted(() => {
	new TypeIt("#multipleStrings", {
		strings: [
			"Hi, I'm <strong> Linailnox </strong>👋。",
			"A Full Stack <strong style='font-size: 1.875rem;'>< Developer /></strong>",
			"<span style='opacity: .8;font-size: 14px'>May all the beauty be blessed.</span>",
		],
		speed: 25,
		cursor: false,
		waitUntilVisible: true,
	}).go()
})
</script>
