import { createApp } from 'vue'
import App from './App.vue'
// 全局引入
// import ElementPlus from "element-plus";
// 按需加载
import 'element-plus/lib/theme-chalk/base.css'  //17.4kb
import './assets/style/reset.css'
// import 'element-plus/lib/theme-chalk/index.css'   //255kb

// 按需引入
import {
  ElButton,
  ElMessage,
  ElMessageBox,
  ElNotification,
  ElLoading,
} from 'element-plus'

import 'dayjs/locale/zh-cn'
// import locale from 'element-plus/lib/locale/lang/zh-cn'

import '@utils/rem.ts'

import router from './router'
import store from './store'

const app = createApp(App)
// app.use(ElementPlus, { size: "small",locale });

// element-plus
const components = [ElButton]
const plugins: Array<any> = [ElMessage, ElMessageBox, ElNotification]

components.forEach(component => {
  app.component(component.name, component)
})

plugins.forEach(plugin => {
  app.use(plugin)
})
app.config.globalProperties.$notify = ElNotification
app.config.globalProperties.$msgbox = ElMessageBox //alert,confirm,prompt,close
app.config.globalProperties.$message = ElMessage
app.config.globalProperties.$loading = ElLoading.service
app.config.globalProperties.$this = app

app.use(router).use(store).mount('#app')
// app对象上的方法：config、use、mixin、component、directive、mount、unmount、provide/inject

const env = import.meta.env

app.config.performance = true

app.config.errorHandler = (err, vm, info) => {
  console.log('全局错误信息：' + info)
  console.log(err)
}
