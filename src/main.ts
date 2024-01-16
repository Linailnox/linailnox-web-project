/*
 * @Author: Linailnox
 * @Date: 2024-01-01 10:09:44
 * Copyright (c) 2020 - 2024 by Linailnox, All Rights Reserved.
 */
import router from './roters/index';
import { ElConfigProvider } from "element-plus";
import 'element-plus/theme-chalk/dark/css-vars.css';
import App from "./App.vue";

//import { createApp, defineComponent } from "vue";
//import ElementPlus from "element-plus";
// import zhCn from "element-plus/dist/locale/zh-cn.mjs";


const app = createApp(App).use(router);
router.isReady().then(() => {
    app.mount("#app")
  })
// app.use(ElementPlus,{locale:zhCn,});

export default defineComponent({
    components: {
        ElConfigProvider
    },
    setup() {
        return {
            zIndex: 3000,
            size: "small"
        };
    }
});
