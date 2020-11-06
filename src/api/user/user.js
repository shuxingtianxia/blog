import axios from '@/unit/api.request'

// 用户列表
export const getUsers = () => {
  return axios.request({
    url: `/article/admin_users`,
    method: 'get'
  })
}

// 用户列表
export const delUsers = (data) => {
  return axios.request({
    url: `/article/admin_users_del`,
    method: 'post',
    data
  })
}
