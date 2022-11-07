import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import store from "./store";
import ElementPlus from "element-plus";
import 'element-plus/dist/index.css'
import SvgIcon from "@/components/SvgIcon/index.vue"; // svg component
import "@/permission.js"; // permission control
import "@/icons"; // 导入图标资源
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.component("svg-icon", SvgIcon);
app.use(ElementPlus).use(router).use(store).mount('#app')
