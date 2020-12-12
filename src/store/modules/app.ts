import { Commit } from 'vuex'
import { IState } from '@/typings'
import { SET_IS_AUTHENTICATED, SET_USER, CLEAR_USER } from '../mutation-types'

interface ICtx {
  commit: Commit,
  state: IState
}

const app = {
  state: {
    isAuthenticated: false,
    userInfo: {}
  },
  mutations: {
    [SET_IS_AUTHENTICATED](state: IState, isAuthenticated: boolean): void {
      if (isAuthenticated) {
        state.isAuthenticated = isAuthenticated
      } else {
        state.isAuthenticated = false
      }
    },
    [SET_USER](state: IState, userInfo: any): void {
      state.userInfo = userInfo
    },
    [CLEAR_USER](state: IState): void {
      state.userInfo = ''
    }
  },
  actions: {
    [SET_IS_AUTHENTICATED]({ commit }: ICtx, isAuthenticated: boolean) {
      return new Promise(resolve => {
        commit('SET_IS_AUTHENTICATED', isAuthenticated)
        resolve(isAuthenticated)
      })
    },
    // 保存用户信息
    [SET_USER]({ commit }: ICtx, userInfo: any) {
      return new Promise(resolve => {
        commit('SET_USER', userInfo)
        resolve(userInfo)
      })
    },
    // 清空用户信息
    [CLEAR_USER]({ commit }: ICtx) {
      return new Promise(resolve => {
        commit('CLEAR_USER')
        resolve()
      })
    }
  }
}

export default app
