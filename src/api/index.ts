import request from './axios'

/**
 * 知乎热榜列表
 * @param params
 * @returns
 */
export const getZhiHuList = params => {
  return request({
    url: '/zhihu',
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
    url: '/weibo',
    method: 'get',
    params,
  })
}



