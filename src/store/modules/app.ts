import { Commit } from 'vuex'
import { IState, ITodo } from '@/typings'
import { SET_TODO } from '../mutation-types'

interface ICtx {
  commit: Commit,
  state: IState
}

const app = {
  state: {
    list: []
  },
  mutations: {
    [SET_TODO](state: IState, todo: ITodo): void {
      state.list.unshift(todo)
    }
  },
  actions: {
    [SET_TODO]({ commit }: ICtx, todo: ITodo): void {
      commit('SET_TODO', todo)
    }
  }
}

export default app
