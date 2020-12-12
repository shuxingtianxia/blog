import axios from '@/unit/api.request'

// 登录
export const login = (data: any) => {
  return axios.request({
    url: `/login`,
    method: 'post',
    data
  })
}

// 退出
export const logout = () => {
  return axios.request({
    url: `/logout`,
    method: 'get'
  })
}

// 注册
export const register = (data: any) => {
  return axios.request({
    url: `/register`,
    method: 'post',
    data
  })
}
