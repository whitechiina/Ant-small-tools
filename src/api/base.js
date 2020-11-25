import axios from 'axios'
export const fetch = axios.create({
  baseURL: '/users/whitechiina',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  timeout: 60000 // 请求超时时间
})
fetch.interceptors.response.use(function (response) {
  if (response.data) {
    return response.data
  }
  return response
  // throw new Error('异常')
}, function (error) {
  return Promise.reject(error)
})
