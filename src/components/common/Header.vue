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
        </nav>
        <div class="login-box" v-if="true">
          <div class="login-text">
            <span class="login">登录</span> / <span class="register">注册</span>
          </div>
          <i class="iconfont icon-denglu login-icon"></i>
        </div>
        <div class="info" v-else>
          欢迎您：<span>admin</span>
          <span class="logout">退出</span>
        </div>
      </div>
    </header>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  data() {
    return {}
  },
  components: {},
  methods: {}
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
  }
}
.login-box{
  color: #7e8c8d;
  .login, .register{
    cursor: pointer;
  }
}
.info {
  .logout{
    margin-left: 10px;
    cursor: pointer;
  }
}
</style>
