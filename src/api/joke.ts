import request from './axios'

export const getJokeText = () => {
  return request({
    url: '/joke',
    method: 'get',
  })
}
