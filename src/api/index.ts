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

export const weather = (params = { location: '兰州' }) => {
  return request({
    url: 'https://api.66mz8.com/api/weather.php',
    method: 'get',
    params,
  })
}
