import request from './axios'
const mzpUrl = 'https://www.mxnzp.com/api'

export const weather = (
  location = '兰州',
  params = {
    app_id: 'ttrzivoppomwgkhl',
    app_secret: 'Wk1Tc0dOS1VMcmFmR0hrVTJ1VVdPUT09',
  },
) => {
  return request({
    url: mzpUrl + '/weather/current/' + location,
    method: 'get',
    params,
  })
}

export const weatherForecast = (
  location = '兰州',
  params = {
    app_id: 'ttrzivoppomwgkhl',
    app_secret: 'Wk1Tc0dOS1VMcmFmR0hrVTJ1VVdPUT09',
  },
) => {
  return request({
    url: mzpUrl + '/weather/forecast/' + location,
    method: 'get',
    params,
  })
}
