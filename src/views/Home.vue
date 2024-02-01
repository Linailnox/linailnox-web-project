<template>
	<el-space direction="vertical">
		<el-text class="welcome" tag="b" size="large">欢迎！</el-text>
		<el-text class="youarehere" tag="b" size="large"
			>这里是Linailnox的个人网页，时不时整点活</el-text
		>
		<router-link to="/data">
			<el-button type="primary" plain>查看整活</el-button></router-link
		>
	</el-space>
</template>

<style scoped lang="scss">
.el-space {
	display: flex;
}

.welcome {
	font-size: 70px;
}
.youarehere {
	font-size: 22px;
}
</style>
