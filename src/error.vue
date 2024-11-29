<script setup lang="ts">
import QrcodeVue from "qrcode.vue"
import type { NuxtError } from "#app"
const props = defineProps({
	error: {
		type: Object as () => NuxtError,
		default: () => ({ statusCode: 500 }), // 默认错误对象
	},
})
const value = ref("https://player.bilibili.com/player.html?bvid=BV1GJ411x7h7")
const size = ref(200)
const margin = ref(5)
</script>
<template>
	<div class="background">
		<div class="content">
			<span class="error-icon">:(</span>
			<br />
			<span class="error-message">
				这个应用遇到问题，需要重启。我们只是在收集一些错误信息，然后我们并不会为您重启应用。
			</span>
			<br /><br /><br />
			<qrcode-vue
				class="qrcode"
				:value="value"
				level="L"
				:size="size"
				:margin="margin"
				render-as="svg"
				background="#ffffff"
				foreground="#106faa"
			/>
			<span class="error-info">
				<br />
				有关此问题和可能的修复的更多信息，请访问:<br />
				https://github.com/Linailnox/linailnox-web-project/issues<br />
				<br />
				如果您致电支持人员，请提供给他们此信息:
				<br />停止代码: {{ props.error.statusCode }}
			</span>
		</div>
	</div>
</template>
<style>
.content {
	font-family: "Segoe UI", sans-serif;
	font-weight: lighter;
	width: 700px;
	margin: auto;
	user-select: none;
	color: #ffffff;
	font-size: medium;
}

.error-icon {
	font-size: 100pt;
	margin: 0;
	padding-bottom: 20pt;
}

.error-message {
	font-size: 20pt;
	margin: 0;
	padding: 0;
}

.error-info {
	position: relative;
	top: -30px;
	left: 30px;
	width: 65%;
	font-size: 14pt;
	color: #fff;
	line-height: 32px;
}

.qrcode {
	float: left;
	margin-bottom: 30px;
}

.background {
	background-color: #106faa;
	margin: 0;
	width: 100%;
	height: 100%;
	position: relative;
	top: 0;
	left: 0;
	z-index: -1;
}
</style>
