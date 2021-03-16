import request from './axios'
/**
 * 获取随机头像
 * @param {Number} type 性别
 */
export const getAvatar = (type = 2) => {
  const types = ['男', '女', '动漫']
  return request({
    url: 'https://api.66mz8.com/api/rand.portrait.php',
    method: 'get',
    params: {
      type: types[type],
      format: 'json',
    },
  })
}

/**
 * 获取随机背景图片
 */
export const getBackgroundImg = () => {
  return request.get('https://api.66mz8.com/api/bg.img.php?format=json')
}
