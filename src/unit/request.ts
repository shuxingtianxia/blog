import Axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import store from '../store'
import Router from '../router'
// import { Message } from 'element-ui'

const BASE_NODE_BUILD = process.env.NODE_BUILD_ENV

interface axiosInfo {
  method: 'post' | 'get' | 'POST' | 'GET',
  url: string,
  header?: string,
  data?: {},
  params?: {}
}

class httpRequest {
  /* 
    public 公有的，所有地方都可以访问，属性和方法默认是public
    private 私有的，只能在该对象（类）的内部才可以访问
    protected  受保护的，在类的内部或者他的子类中才能访问
  */
  // private options: { method: string; url: string }
  options: { method: string; url: string }
  queue:any
  constructor() {
    this.options = {
      method: '',
      url: ''
    }
    // 存储请求队列
    this.queue = {url: ''}
  }
  // 销毁请求实例
  // eslint-disable-next-line
  destroy(url: string | number) {
    // delete this.queue[url]
    const queue = Object.keys(this.queue)
    return queue.length
  }

  // 请求拦截
  interceptors(instance: any) {
    // 添加请求拦截器
    instance.interceptors.request.use((config: { headers: { Authorization: string } }) => {
      console.log(store.getters.token)
      if (store.getters.token) {
        config.headers.Authorization = store.getters.token // 携带token
      }
      return config
    }, (error: any) => {
      return Promise.reject(error)
    })
    // 添加响应拦截器
    instance.interceptors.response.use((res: { data: any; status: number }) => {
      const { data, status } = res
      console.log(res)
      if (status === 200) {
        if (data.code === 0) {
          return Promise.resolve(data)
        } else {
          return alert(data.msg)
        }
      } if (status === 401) {
        // Message.error('token已过期，请重新登录')
        localStorage.removeItem('token')
        return Router.replace({name: 'Login'})
      } else {
        return Promise.reject(data)
      }
    }, (error: any) => {
      return Promise.reject(error)
    })
  }

  // 创建实例
  create() {
    const conf = {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'X-URL-PATH': location.pathname
      },
      validateStatus: (status: number) => {
        return status >= 200
      }
    }
    return Axios.create(conf)
  }
  // 请求实例
  request(options = <axiosInfo>{}) {
    let instance = this.create()
    if (BASE_NODE_BUILD === 'dev') {
      options.url = '/api' + options.url
    } else {
      options.url = '/api' + options.url
    }
    this.interceptors(instance)
    options = Object.assign({}, options)
    this.queue[options.url] = instance
    return instance(options)
  }
}

export default httpRequest
