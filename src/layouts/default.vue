<template>
	<el-container font-lxgw>
		<el-header p-0><app-menu /></el-header>
		<el-main overf-hidden="">
			<slot />
		</el-main>
		<el-footer><NuxtLink to="/data">e跳转到home</NuxtLink></el-footer>
	</el-container>
</template>
