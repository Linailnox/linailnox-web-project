<template>
	<el-row class="row-bg" type="flex" justify="space-evenly" align="middle">
		<el-col :md="8" :lg="12" :xl="12">
			<el-space direction="vertical">
				<profile>
					<el-text class="wenkai-font" id="multipleStrings" size="large"></el-text>
				</profile>
				<socialButton class="socialButton">
					<el-button circle
						><Icon icon="ph:github-logo-bold" size="large" width="24"
					/></el-button>
				</socialButton>
			</el-space>
		</el-col>
		<el-col :span="5.5">
			<el-avatar :size="300" fit="cover" :src="avatar" />
		</el-col>
	</el-row>
</template>
<script setup lang="ts">
import avatar from "@/assets/avatar.jpg"
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
<style scoped lang="scss">
.el-space {
	display: flex;
}

#multipleStrings {
	font-size: 2.25rem;
}
.row-bg {
	height: 100%;
}
.socialButton {
	transition: bottom 1s ease;
}
</style>
