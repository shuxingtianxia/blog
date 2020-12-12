import axios from '@/unit/api.request'

// 文章列表
export const getArticle = (params: any) => {
  return axios.request({
    url: `/article/index_article`,
    method: 'get',
    params
  })
}
