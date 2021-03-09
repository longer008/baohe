import { createApp } from 'vue'
import App from './App.vue'
// import ElementPlus from "element-plus";
// import "element-plus/lib/theme-chalk/index.css";
import "@/assets/style/normalize.css"
import "@/assets/style/reset.scss"

import "@util/rem.ts"

import router from "./router";
import store from "./store";

const app = createApp(App);
// app.use(ElementPlus, { size: "small" });
app.use(router).use(store).mount("#app");

