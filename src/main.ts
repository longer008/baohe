import { createApp } from 'vue'
import App from './App.vue'
// 全局引入
import ElementPlus from "element-plus";
import "element-plus/lib/theme-chalk/index.css";
import 'dayjs/locale/zh-cn'
import locale from 'element-plus/lib/locale/lang/zh-cn'

import "@/assets/style/normalize.css"
import "@/assets/style/reset.scss"

import "@util/rem.ts"

import router from "./router";
import store from "./store";

const app = createApp(App);
app.use(ElementPlus, { size: "small",locale });


// element-plus
// const components=[
//   ElAlert,
//   ElBacktop,
//   ElBadge,
//   ElButton,
// ]
// const plugins:Array<any> = [
//   ElLoading,
//   ElMessage,
//   ElMessageBox,
//   ElNotification,
// ]

// components.forEach(component => {
//   app.component(component.name, component)
// })

// plugins.forEach(plugin => {
//   app.use(plugin)
// })
// app.config.globalProperties.$notify=ElNotification
// app.config.globalProperties.$alert=ElAlert
// app.config.globalProperties.$msgbox=ElMessageBox
// app.config.globalProperties.$message=ElMessage

app.use(router).use(store).mount("#app");
