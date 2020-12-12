<template>
  <router-view/>
</template>

<script lang="ts">
import jwtDecode from "jwt-decode"
import { useStore } from 'vuex'
import { SET_IS_AUTHENTICATED, SET_USER, CLEAR_USER } from '@/store/mutation-types'
export default {
  setup() {
    const store = useStore()

    // 判断是不是空的
    const isEmpty = (value: any) => {
      return (
        value === undefined ||
        value === null ||
        (typeof value === 'object' && Object.keys(value).length === 0) ||
        (typeof value === 'string' && value.trim().length === 0)
      )
    }
    // 判断localStorage有没有token
    const token = localStorage.getItem('token')
    if (token) {
      const decode:any = jwtDecode(token)
      console.log(decode)
      // 判断有木有过了有效期
      if (decode.serverTime > decode.iat) {
        localStorage.removeItem('token')
        store.dispatch(CLEAR_USER)
        return 
      }
      store.dispatch(SET_IS_AUTHENTICATED, !isEmpty(decode))
      store.dispatch(SET_USER, decode)
    }
  }
}
</script>

<style lang="scss">
#app {
  height: 100%;
  background-image: url(assets/images/footside.jpg);
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}
</style>
