import { createApp } from 'vue'
import App from './App.vue'
// 全局引入
// import ElementPlus from "element-plus";
// import "element-plus/lib/theme-chalk/index.css";

// 按需引入
import {
  ElAlert,
  ElBacktop,
  ElBadge,
  ElButton,
  ElLoading,
  ElMessage,
  ElMessageBox,
  ElNotification,
} from 'element-plus'

import 'dayjs/locale/zh-cn'
// import locale from 'element-plus/lib/locale/lang/zh-cn'

import '@util/rem.ts'

import router from './router'
import store from './store'

const app = createApp(App)
// app.use(ElementPlus, { size: "small",locale });


// element-plus
const components=[
  ElAlert,
  ElBacktop,
  ElBadge,
  ElButton,
]
const plugins:Array<any> = [
  ElLoading,
  ElMessage,
  ElMessageBox,
  ElNotification,
]

components.forEach(component => {
  app.component(component.name, component)
})

plugins.forEach(plugin => {
  app.use(plugin)
})
app.config.globalProperties.$notify=ElNotification
app.config.globalProperties.$alert=ElAlert
app.config.globalProperties.$msgbox=ElMessageBox
app.config.globalProperties.$message=ElMessage

app.use(router).use(store).mount('#app')
// app对象上的方法：config、use、mixin、component、directive、mount、unmount、provide/inject

console.log(import.meta.env.BASE_URL)
console.log(import.meta.env.DEV)


const env=import.meta.env
console.log(env)

app.config.performance=true
// env==="development"?app.config.devtools=true
console.log(app.config.performance)


app.config.errorHandler=(err,vm,info)=>{
  console.log('全局错误信息：'+info)
  console.log(err)
}
