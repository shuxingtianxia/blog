import axios from '@/unit/api.request'

// 文章列表
export const getArticle = () => {
  return axios.request({
    url: `/article/admin_article`,
    method: 'get'
  })
}

// 添加文章
export const addArticle = (data) => {
  return axios.request({
    url: `/article/admin_article_add`,
    method: 'post',
    data
  })
}

// 文章详情
export const articleDetail = (params) => {
  return axios.request({
    url: `/article/admin_article_update`,
    method: 'get',
    params
  })
}

// 文章详情
export const updateArticle = (data) => {
  return axios.request({
    url: `/article/admin_article_update`,
    method: 'post',
    data
  })
}

// 删除单个文章
export const delArticle = (id) => {
  return axios.request({
    url: `/article/admin_article_del/${id}`,
    method: 'get'
  })
}

// 删除多条文章
export const delManyArticle = (data) => {
  return axios.request({
    url: `/article/admin_article_del_many`,
    method: 'post',
    data
  })
}
