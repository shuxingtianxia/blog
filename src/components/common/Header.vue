<template>
  <div class="header">
    <header>
      <!-- <div class="headtop"></div> -->
      <div class="top">
        <div class="logo">
          <a href="/">
            <img src="../../assets/logo.png" />
          </a>
        </div>
        <nav id="nav">
          <ul class="clear">
            <li>
              <router-link :class="{active: active === 'Home'}" to="/">网站首页</router-link>
            </li>
            <li>
              <router-link :class="{active: active === 'MyPhoto'}" to="MyPhoto">我的相册</router-link>
            </li>
            <li>
              <router-link :class="{active: active === 'MyDiary'}" to="MyDiary">我的日记</router-link>
            </li>
            <li>
              <router-link :class="{active: active === 'AboutMe'}" to="AboutMe">关于我</router-link>
            </li>
            <li>
              <router-link :class="{active: active === 'Messages'}" to="Messages">留言</router-link>
            </li>
            <li>
              <router-link :class="{active: active === 'ContentArea'}" to="ContentArea">内容区</router-link>
            </li>
          </ul>
        </nav>
        <div>
           <div class="login-box" v-if="!userInfo.username" @click="$router.push({name: 'Login'})">
            <div class="login-text">
              <span class="login">登录</span> / <span class="register">注册</span>
            </div>
          </div>
          <div class="userInfo" v-else>
            欢迎您：<span>{{userInfo.username}}</span>
            <span class="logout" @click="handleLogout">退出</span>
          </div>
        </div>
        <i class="iconfont icon-denglu login-icon"></i>
      </div>
    </header>
    <div class="container">
      <router-view></router-view>
    </div>
    <div class="mNav">
      <ul class="clear">
        <li>
          <router-link to="/">网站首页</router-link>
        </li>
        <li>
          <router-link to="MyPhoto">我的相册</router-link>
        </li>
        <li>
          <router-link to="MyDiary">我的日记</router-link>
        </li>
        <li>
          <router-link to="AboutMe">关于我</router-link>
        </li>
        <li>
          <router-link to="Messages">留言</router-link>
        </li>
        <li>
          <router-link to="ContentArea">内容区</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/javascript">
import { computed, getCurrentInstance } from 'vue'
import { useStore } from 'vuex'
import { logout } from '@/api/index'
import { CLEAR_USER } from '@/store/mutation-types'
export default {
  data() {
    return {}
  },
  setup() {
    const store = useStore()
    console.log(store.state.app.userInfo)
    const { ctx } = getCurrentInstance()
    const active = computed(() => {
      const name = ctx.$router.currentRoute.value.name
      return name
    })
    // 退出
    const handleLogout = () => {
      logout().then(res => {
        if (res.code === 0) {
          localStorage.removeItem('token')
          store.dispatch(CLEAR_USER)
        }
      })
    }
    return {
      active,
      userInfo: computed(() => store.state.app.userInfo),
      handleLogout
    }
  }
}
</script>

<style lang="scss" scoped>
// .headtop {
//   background: url(../../assets/images/menu_bg.png) repeat-x;
//   width: 100%;
//   height: 28px;
// }
header {
  width: 100%;
  margin-bottom: 10px;
  background: #fff;
}
.top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  width: 96%;
  // padding: 0 15px 0 10px;
  box-sizing: border-box;
  max-width: 1000px;
  margin: auto;
  overflow: hidden;
}
.container{
  width: 96%;
  max-width: 1000px;
  margin: auto;
}
.logo {
  font-size: 26px;
  text-shadow: 1px 1px 1px rgba(255, 255, 255, 0.2);
}

#nav {
  li {
    display: inline-block;
    float: left;
    padding-right: 30px;
    text-align: center;
    overflow: hidden;
    line-height: 30px;
    .active {
      font-weight: bold;
      color: rgba(109,123,202,.7);
    }
  }
}
.login-box{
  color: #7e8c8d;
  .login, .register{
    cursor: pointer;
  }
}
.userInfo {
  .logout{
    margin-left: 10px;
    cursor: pointer;
  }
}
</style>
