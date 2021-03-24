import request from './axios'
/**
 * 知乎热榜列表
 * @param params
 * @returns
 */
export const getZhiHuList = params => {
  return request({
    url: '/api/zhihu',
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
    url: '/api/weibo',
    method: 'get',
    params,
  })
}

export const getIP=(params={})=>{
  return request({
    url:'https://2021.ipchaxun.com/',
    method:'get',
    params,
  })
}


