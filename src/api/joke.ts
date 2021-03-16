import request from './axios'

export const getJokeText = () => {
  return request({
    url: '/jokeApi/xh?type=json',
    // url: "https://api.vvhan.com/api/xh?type=json",
    method: 'get',
  })
}
