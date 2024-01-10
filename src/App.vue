<!--
 * @Author: Linailnox
 * @Date: 2024-01-01 10:09:44
 * Copyright (c) 2020 - 2024 by Linailnox, All Rights Reserved. 
-->
<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                
            </el-header>
            <el-main> 东西 </el-main>
            <el-footer>nb</el-footer>
        </el-container>
    </div>
</template>

<script setup>

import { ElLoading } from 'element-plus'

  const loading = ElLoading.service({
    lock: true,
    text: 'Loading',
    background: 'rgba(0, 0, 0, 0.7)',
  })
  setTimeout(() => {
    loading.close()
  }, 2000)

</script>
