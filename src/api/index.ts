import axios from '@/unit/api.request.js'

// 登录
export const login = (data: any) => {
  return axios.request({
    url: `/login`,
    method: 'post',
    data
  })
}

// 登录
export const logout = () => {
  return axios.request({
    url: `/logout`,
    method: 'get'
  })
}

// 登录
export const register = (data: any) => {
  return axios.request({
    url: `/register`,
    method: 'post',
    data
  })
}
