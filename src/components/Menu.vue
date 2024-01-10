<template>
    <div class="common-layout">
                <el-menu
                    :default-active="activeIndex"
                    class="el-menu-demo"
                    mode="horizontal"
                    :popper-offset="16"
                    :ellipsis="true"
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
        </el-container>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { ElLoading } from 'element-plus'

const fullscreenLoading = ref(false)

  const loading = ElLoading.service({
    lock: true,
    text: 'Loading',
    background: 'rgba(0, 0, 0, 0.7)',
  })
  setTimeout(() => {
    loading.close()
  }, 2000)

</script>

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
.flex-grow {
  flex-grow: 1;
}
</style>
