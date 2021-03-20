const Koa = require('koa')
const app = new Koa()
const router = require('koa-router')()
const koaRequest = require('koa2-request') //koa封装的请求第三方接口的方法

app.use(router.routes())

const urlObj={
  'zhihu':'https://www.zhihu.com/api/v3/feed/topstory/hot-lists/total',
  'weibo':'https://m.weibo.cn/api/container/getIndex?containerid=106003type%3D25%26t%3D3%26disable_hot%3D1%26filter_type%3Drealtimehot',
  'joke':'https://api.vvhan.com/api/xh?type=json',
}
let request = async function (ctx,url) {
  //koa封装的请求第三方接口的方法(koa2-request)
  let res = await koaRequest({
    url:url,
    method: 'get',
    params:ctx.query,
  })
  let resJson = JSON.parse(res.body)
  ctx.response.body = resJson
}
router
  .get('/', async ctx => {
    ctx.body = 'hello'
  })
  .get('/api/zhihu', async function (ctx) {
    await request(ctx,urlObj.zhihu)
  })
  .get('/api/weibo', async function(ctx){
    await request(ctx,urlObj.weibo)
  })
  .get('/api/joke', async function(ctx){
    await request(ctx,urlObj.joke)
  })

app.listen(7002)
console.log('app started at port 7002...')


