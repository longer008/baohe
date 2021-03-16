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

### 添加完`husky` 需要
husky版本5.*,git版本2.9+ , 解决方案：https://typicode.github.io/husky/#/?id=yarn-on-windows

> yarn husky install

> npx husky init

package.json中删除
```
"husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },

  ```

### 版本  多push几次然后再生成tag
