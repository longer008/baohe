import request from './axios'

export const getJokeText = () => {
  return request({
    url: '/api/joke',
    method: 'get',
  })
}
