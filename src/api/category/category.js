import axios from '@/unit/api.request'

// 查询分类列表
export const getCategory = () => {
  return axios.request({
    url: `/article/admin_category`,
    method: 'get'
  })
}

// 添加分类
export const addCategory = (data) => {
  return axios.request({
    url: `/article/admin_add`,
    method: 'post',
    data
  })
}

// 编辑分类
export const editCategory = (data) => {
  return axios.request({
    url: `/article/admin_edit`,
    method: 'post',
    data
  })
}

// 编辑分类
export const delCategory = (id) => {
  return axios.request({
    url: `/article/admin_del/${id}`,
    method: 'get'
  })
}
