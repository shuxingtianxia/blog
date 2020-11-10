import axios from '@/unit/api.request'

// 用户列表
export const getAbout = () => {
  return axios.request({
    url: `/about/about_list`,
    method: 'get'
  })
}

// 用户列表
export const addAbout = (data: any) => {
  return axios.request({
    url: `/about/about_me`,
    method: 'post',
    data
  })
}

// 关于我的详情
export const aboutDetail = (params: any) => {
  return axios.request({
    url: `/about/about_one`,
    method: 'get',
    params
  })
}

// 编辑关于我
export const editAbout = (data: any) => {
  return axios.request({
    url: `/about/about_edit`,
    method: 'post',
    data
  })
}

// 编辑关于我
export const delAbout = (params: any) => {
  return axios.request({
    url: `/about/about_del`,
    method: 'get',
    params
  })
}
