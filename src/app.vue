<template>
	<el-config-provider :locale="elementLocale">
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</el-config-provider>
</template>

<script setup lang="ts">
import "~console"
import "~console/theme-detect"
import { useElementPlusLocale } from "@/locales/useElementPlusLocale"
const { elementLocale } = useElementPlusLocale()
</script>
