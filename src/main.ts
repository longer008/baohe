import { createApp } from 'vue'
import App from './App.vue'
// 全局引入
// import ElementPlus from "element-plus";
// 按需加载
import 'element-plus/packages/theme-chalk/src/base.scss'
import 'element-plus/lib/theme-chalk/base.css'

// 全局绑定
import {
  ElButton,
  ElMessage,
  ElMessageBox,
  ElNotification,
  ElLoading,
} from 'element-plus'

import 'dayjs/locale/zh-cn'

// 移动端
import '@utils/rem.ts'

import router,{ route } from './router'
import store from './store'

const app = createApp(App)

// import locale from 'element-plus/lib/locale/lang/zh-cn'
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

app.config.globalProperties.$router=router
app.config.globalProperties.$route=route
app.config.globalProperties.$store=store
app.config.globalProperties.$notify = ElNotification
app.config.globalProperties.$msgbox = ElMessageBox //alert,confirm,prompt,close
app.config.globalProperties.$message = ElMessage
app.config.globalProperties.$loading = ElLoading.service
app.config.globalProperties.$this = app

app.use(router).use(store).mount('#app')

// env
const env = import.meta.env

// 性能跟踪
app.config.performance = true

// 全局异常捕获
app.config.errorHandler = (err, vm, info) => {
  console.log('全局错误信息：' + info)
  console.log(err)
}
