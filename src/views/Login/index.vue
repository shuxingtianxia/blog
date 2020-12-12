<template>
  <div class="login-container">
    <div class="login">
      <ul class="tab">
        <li :class="type === 'login' ? 'active' : ''" @click="tab('login')">登陆</li>
        <li :class="type === 'register' ? 'active' : ''" @click="tab('register')">注册</li>
      </ul>
      <form class="login-form" @submit="handleLogin">
        <div class="info">
          <label for="">用户名:</label>
          <input type="text" @change="handleChange('username')" v-model="form.username" placeholder="请输入用户名">
          <p class="error" v-if="username.isError">{{username.text}}</p>
        </div>
        <div class="info">
          <label for="">密码:</label>
          <input type="password" @change="handleChange('password')" v-model="form.password" placeholder="请输入密码">
          <p class="error" v-if="password.isError">{{password.text}}</p>
        </div>
        <div class="info" v-if="type === 'register'">
          <label for="">确认密码:</label>
          <input type="password" @change="handleChange('password2')" v-model="form.password2" placeholder="请输入密码">
          <p class="error" v-if="password2.isError">{{password2.text}}</p>
        </div>
        <button class="submit" @click="handleLogin">提交</button>
      </form>
      <router-link :to="{ name: 'Home' }">
        <p class="back-home">返回首页</p>
      </router-link>
    </div>
  </div>
</template>
<script lang="ts">
import { login, register } from '@/api/index'
import { reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { SET_IS_AUTHENTICATED, SET_USER } from '@/store/mutation-types'
import jwtDecode from 'jwt-decode'
export default {
  setup() {
    const data = reactive({
      type: 'login',
      form: {
        username: '',
        password: '',
        password2: ''
      },
      valid: false,
      username: {
        isError: true,
        text: ''
      },
      password: {
        isError: true,
        text: ''
      },
      password2: {
        isError: true,
        text: ''
      }
    })
    // 路由
    const router = useRouter()
    const store = useStore()
    // 切换
    const tab = (type: string): void => {
      data.type = type
    }

    // 校验表单信息
    const handleChange = (type: string): void => {
      const { username, password, password2 } = data.form
      if (type === 'username') {
        // 用户名正则，4到16位（字母，数字，下划线，减号）
        const uPattern = /^[a-zA-Z0-9_-]{4,16}$/
        if (!uPattern.test(username)) {
          data.username.isError = true
          data.username.text = '用户名只能为字母，数字，下划线，减号，4到16位'
        } else {
          console.log('3212')
          data.username.isError = false
        }
      }
      if (type === 'password') {
        // 密码正则，最少6位，包括至少1字母，1个数字
        const pPattern = /^.*(?=.{6,})(?=.*\d)(?=.*[a-z | A-Z]).*$/
        if (!pPattern.test(password)) {
          data.password.isError = true
          data.password.text = '最少6位，包括至少1字母，1个数字'
        } else {
          data.password.isError = false
        }
      }
      if (type === 'password2') {
        if (password !== password2) {
          data.password2.isError = true
          data.password2.text = '两次密码不一致'
        } else {
          data.password2.isError = false
        }
      }
      if ((data.type === 'login' && !data.username.isError && !data.password.isError) || (data.type === 'register' && !data.username.isError && !data.password.isError && !data.password2.isError)) data.valid = true
    }

    // 判断是不是空的
    const isEmpty = (value: any) => {
      return (
        value === undefined ||
        value === null ||
        (typeof value === 'object' && Object.keys(value).length === 0) ||
        (typeof value === 'string' && value.trim().length === 0)
      )
    }

    // 登陆注册
    const handleLogin = (e: { preventDefault: () => void }) => {
      // 判断是否输入用户名和密码
      if (!data.valid) {
        const { username, password, password2 } = data.form
        if (!username) {
          data.username.isError = true
          data.username.text = '请输入用户名'
        }
        if (!password) {
          data.password.isError = true
          data.password.text = '请输入密码'
        }
        if (data.type === 'register' && !password2) {
          data.password2.isError = true
          data.password2.text = '请再次输入密码'
        }
      }
      // 阻止页面刷新
      e.preventDefault()
      // console.log(data.valid)
      console.log(store)
      if (data.valid) {
        const method = data.type === 'login' ? login : register
        method(data.form).then(res => {
          if (res.code === 0) {
            if (data.type === 'register') {
              alert('注册成功请登录')
              data.type = 'login'
            } else {
              alert('登录成功')
              router.push({ name: 'Home' })
              // 解析token
              const decode = jwtDecode(res.token)
              localStorage.setItem('token', res.token)
              console.log('!isEmpty(decode)', res.token)
              store.dispatch(SET_IS_AUTHENTICATED, !isEmpty(decode))
              store.dispatch(SET_USER, decode)
            }
          }
        }).catch(err => {
          console.log(err)
        })
      }
      return false
    }
    const refData = toRefs(data)
    return {
      ...refData,
      tab,
      handleChange,
      handleLogin
    }
  }
}
</script>
<style lang="scss" scoped>
.login-container{
  height: 100vh;
  padding-top: 100px;
  .login{
    width: 300px;
    margin: auto;
    background: #fff;
    padding: 30px;
    border-radius: 10px;
    .tab{
      text-align: center;
      li{
        display: inline-block;
        width: 100px;
        line-height: 36px;
        cursor: pointer;
        &.active {
          background: rgba(0, 0, 0, 0.1);
        }
      }
    }
    .login-form{
      margin-top: 30px;
      .info{
        line-height: 36px;
        margin-bottom: 10px;
        label{
          display: inline-block;
          width: 70px;
          margin-right: 10px;
          text-align: right;
        }
        input{
          width: 218px;
          height: 36px;
          border: 1px solid #dddddd;
          border-radius: 5px;
          text-indent: 5px;
        }
      }
    }
    button {
      width: 300px;
      height: 36px;
      margin-bottom: 10px;
      background: #d3cdcd;
      border: none;
      cursor: pointer;
      &.submit{
        // background: red;
      }
    }
  }
  .back-home{
    text-align: right;
    font-size: 14px;
  }
}
.error{
    color: #F56C6C;
    font-size: 12px;
    line-height: 1;
    padding-top: 3px;
    margin-left: 80px;
}
</style>
