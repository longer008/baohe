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

### 版本 多 push 几次然后再生成 tag

### 服务端接口转发

koa

### nginx 接口代理

location /api/ {                                   
  rewrite ^/api/(.\*) /$1 break;           
  proxy_pass http://127.0.0.1:7002;
}


### 按需加载插件
vite-plugin-imp比vite-plugin-style-import最终打包小一点


## 转后台管理
全屏
> yarn add screenfull 


### 未解决的坑
- 第一次进入页面使用useRoute()获取不到name属性


### other
- vscode 打开多个vscode窗口 ：ctrl + shift + n
