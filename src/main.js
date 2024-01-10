import { createApp, defineComponent } from "vue";
import "./style.css";
import App from "./App.vue";
import { ElConfigProvider } from "element-plus";
import ElementPlus from "element-plus";
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
const app = createApp(App);
app.mount("#app");
app.use(ElementPlus,{locale:zhCn,});
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
