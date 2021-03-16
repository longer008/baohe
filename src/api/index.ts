import request from './axios'

/**
 * 知乎热榜列表
 * @param params
 * @returns
 */
export const getZhiHuList = params => {
  return request({
    url: '/zhihuApi/feed/topstory/hot-lists/total',
    // url: "https://www.zhihu.com/api/v3/feed/topstory/hot-lists/total",
    method: 'get',
    params,
  })
}

/**
 * 微博热搜列表
 * @param params
 * @returns
 */
export const getWeiBoList = params => {
  return request({
    url: '/weiboApi/container/getIndex?containerid=106003type%3D25%26t%3D3%26disable_hot%3D1%26filter_type%3Drealtimehot',
    // url: "https://m.weibo.cn/api/container/getIndex?containerid=106003type%3D25%26t%3D3%26disable_hot%3D1%26filter_type%3Drealtimehot",
    method: 'get',
    params,
  })
}



