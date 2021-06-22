# baohe

![](https://img.shields.io/apm/l/vim-mode) ![](https://img.shields.io/badge/download-1K-brightgreen.svg)

😀[表情包地址](https://emojipedia.org/people/)

- [x] 知乎热榜
- [x] 微博热搜
- [x] 笑话
- [ ] 土味情话
- [ ] 加油吧，打工人
- [ ] 毒鸡汤
- [ ] 疫情
- [ ] 基金
- [x] 移动端适配
- [ ] jenkins 持续集成

### 添加完`husky` 需要

husky 版本 5.\*,git 版本 2.9+ , 解决方案：https://typicode.github.io/husky/#/?id=yarn-on-windows

> yarn husky install

> npx husky init

package.json 中删除

```
"husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },

```


### 用koa进行接口转发
后端地址：https://github.com/longer008/baohe-service

### nginx 接口代理

location /api/ {                                   
  rewrite ^/api/(.\*) /$1 break;           
  proxy_pass http://127.0.0.1:7002;
}


### 按需加载插件
`vite-plugin-imp`虽然比`vite-plugin-style-import`最终打包体积小一点，
但element-plus官方支持`vite-plugin-style-import`，所以现在用`vite-plugin-style-import`.

### 转后台管理
全屏
> yarn add screenfull 


### 页面缓存
```js
 <router-view v-slot="{Component}">
      <!-- 缓存页面 -->
    <keep-alive v-if="$route.meta.keepAlive">
      <component :is="Component" />
    </keep-alive>
    <component :is="Component" v-else />
  </router-view>
```
这种方式缓存不生效的话用下面这种
```js
    <router-view v-slot="{Component}">
      <!-- 缓存页面 -->
      <keep-alive :include="$store.state.keepLiveRoute">
        <component :is="Component" />
      </keep-alive>
    </router-view>
```
store文件
```js
export default createStore({
  state:{
  keepLiveRoute:[
    'Zhihu',
    'Hello',
    'About',
  ]
  }
})

```
### 技巧
页面中如果需要用到 `useStore,useRoute,useRouter`,不必在每个页面引入
模板中直接`$store/$route/$router`即可，
js中先获取实例
> import { getCurrentInstance } from 'vue'

然后赋值
> const app:any=getCurrentInstance()?.proxy

最后使用,例route
> app.$route

### 部署
提交代码
> yarn cz

自动代码检测->`.husky/pre-commit`

发布版本、生成changelog
> yarn release


### other
- vscode 打开多个vscode窗口 ：ctrl + shift + n
- 知乎页面加载大量网络图片，所以比较慢
- 因为最终调用的还是别人的接口，出于人道主义精神，微博页面就不每分钟刷新了，利用`localStorage`进行缓存;知乎页面使用`keep-alive`缓存

