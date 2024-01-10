<script setup>
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <el-menu
                    :default-active="activeIndex"
                    class="el-menu-demo"
                    mode="horizontal"
                    :ellipsis="false"
                    @select="handleSelect"
                >
                    <el-menu-item index="0">
                        <el-icon :size="20"><i-ep-House /></el-icon>
                        <el-text class="mx-1" size="large">Linailnox</el-text>
                    </el-menu-item>
                    <div class="flex-grow" />
                    <el-menu-item index="1">Processing Center</el-menu-item>
                    <el-sub-menu index="2">
                        <template #title>Workspace</template>
                        <el-menu-item index="2-1">item one</el-menu-item>
                        <el-menu-item index="2-2">item two</el-menu-item>
                        <el-menu-item index="2-3">item three</el-menu-item>
                    </el-sub-menu>
                </el-menu>
            </el-header>
            <el-main> 东西 </el-main>
            <el-footer>nb</el-footer>
        </el-container>
    </div>
</template>

<style scoped>
.logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
}
.logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}
</style>
