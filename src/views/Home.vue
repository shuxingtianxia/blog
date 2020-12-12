<template>
  <div class="home clear">
    <!-- 左边 -->
    <div class="l_box">
      <!-- 关于我 -->
      <div class="about_me">
        <h2>关于我</h2>
        <ul>
          <i>
            <img :src="aboutMe.avatar" alt />
          </i>
          <p>
            <b>书行天下</b>
            {{aboutMe.intro}}
          </p>
        </ul>
      </div>
      <!-- 我的相册 -->
      <div class="wdxc">
        <h2>我的相册</h2>
        <ul>
          <li>
            <a href="#">
              <img src="../assets/images/6.jpg" alt />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="../assets/images/7.jpg" alt />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="../assets/images/8.jpg" alt />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="../assets/images/9.jpg" alt />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="../assets/images/10.jpg" alt />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="../assets/images/11.jpg" alt />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="../assets/images/12.jpg" alt />
            </a>
          </li>
        </ul>
      </div>
      <!-- 搜索 -->
      <div class="search">
        <form action>
          <input
            name="keyboard"
            id="keyboard"
            class="input_text"
            value="请输入关键字词"
            style="color: rgb(153, 153, 153);"
            onfocus="if(value=='请输入关键字词'){this.style.color='#000';value=''}"
            onblur="if(value==''){this.style.color='#999';value='请输入关键字词'}"
            type="text"
          />
          <input name="show" value="title" type="hidden" />
          <input name="tempid" value="1" type="hidden" />
          <input name="tbname" value="news" type="hidden" />
          <input
            name="Submit"
            class="input_submit"
            value="搜索"
            type="submit"
          />
        </form>
      </div>
      <!-- 文章分类 -->
      <div class="fenlei">
        <h2>文章分类</h2>
        <ul>
          <li>
            <a href="#">文章 （7）</a>
          </li>
          <li>
            <a href="#">相册 （2）</a>
          </li>
        </ul>
      </div>
      <div class="tuijian">
        <h2>点击排行</h2>
        <ul>
          <li><a href="/">个人博客从简不凡</a></li>
          <li><a href="/">个人博客，属于我的小世界</a></li>
          <li><a href="/">个人博客，我为什么要用帝国cms</a></li>
          <li><a href="/">个人博客模板《早安》</a></li>
          <li><a href="/">简单手工纸玫瑰</a></li>
          <li><a href="/">【匆匆那些年】总结个人博客经历的这四年</a></li>
          <li><a href="/">安静地做一个爱设计的女子</a></li>
          <li>
            <a href="/">作为一个设计师,如果遭到质疑你是否能恪守自己的原则?</a>
          </li>
        </ul>
      </div>
      <div class="links">
        <h2>友情链接</h2>
        <ul>
          <li><a href="http://www.yangqq.com">书行天下</a></li>
          <li><a href="http://www.yangqq.com">纵横江湖</a></li>
        </ul>
      </div>
      <div class="guanzhu">
        <h2>关注我 我很帅的哦</h2>
        <ul>
          <img src="../assets/images/wx.jpg" alt="" />
        </ul>
      </div>
    </div>
    <!-- 右边 -->
    <div class="r_box">
      <ul>
        <li v-for="item in articleList" :key="item._id">
          <a href="/" class="articleImg"><img :src="item.articleImgUrl" alt=""/></a>
          <h3>
            <b>【顶】</b>
            <a href="/">{{item.articleName}}</a>
          </h3>
          <div class="articleInfo">
            <span>
              <i class="iconfont icon-leimupinleifenleileibie"></i>
              <i>{{item.articleCategory && item.articleCategory.title}}</i>
            </span>
            <span>
              <i class="iconfont icon-zuozhe"></i>
              <i>{{item.author}}</i>
            </span>
            <span>
              <i class="iconfont icon-liulan"></i>
              <i>{{item.views}}</i>
            </span>
            <span>
              <i class="iconfont icon-pinglun8"></i>
              <i>{{item.comment && item.comment.length}}</i>
            </span>
            <span>
              <i class="iconfont icon-shijian"></i>
              <i>{{item.time}}</i>
            </span>
          </div>
          <p>{{item.articleIntro}}</p>
        </li>
      </ul>
      <!-- 分页 -->
      <div class="pages" v-if="page.pages > 1">
        <span class="next" @click="prev">&lt;上一页</span>
        <span class="active" v-for="item in page.pages" :key="item">{{item}}</span>
        <span class="next" @click="next">下一页&gt;</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { onMounted, reactive, toRefs } from 'vue'
import * as about from '@/api/about/about'
import * as article from '@/api/article/article'
export default {
  name: 'Home',
  setup() {
    const data = reactive({
      aboutMe: {},
      articleList: [],
      form: {
        page: 1,
        limit: 10
      },
      page: {
        pages: 0, // 总数
        page: 1, // 单前页
        limit: 10
      }
    })
    // 获取关于我的简介
    const getAbout = () => {
      about.getAbout().then(res => {
        if (res.code === 0) {
          data.aboutMe = res.data[0]
        }
      })
    }
    // 获取文章列表
    const getArticle = () => {
      article.getArticle(data.form).then(res => {
        if (res.code === 0) {
          data.articleList = res.data
          data.page.pages = res.pages
        }
      })
    }
    // 上一页
    const prev = () => {
      data.form.page = data.form.page - 1
      getArticle()
    }
    // 下一页
    const next = () => {
      data.form.page = data.form.page + 1
      getArticle()
    }
    onMounted(() => {
      getAbout()
      getArticle()
    })
    const refData = toRefs(data)
    return {
      ...refData,
      prev,
      next
    }
  }
}
</script>
<style lang="scss" scoped>
.about_me {
  i{
    display: flex;
    align-items: center;
    width: 120px;
    float: left;
    clear: left;
    margin-right: 10px;
    height: 120px;
    overflow: hidden;
    img{
      width: 100%;
    }
  }
  p{
    line-height: 24px;
    font-size: 14px;
  }
}
.search {
  border: 1px solid #000;
  background: #000;
  border-radius: 0 5px 5px 0;
  position: relative;
  input.input_submit {
    border: 0;
    background: 0;
    color: #fff;
    outline: none;
    position: absolute;
    top: 10px;
    right: 8%;
  }
  input.input_text {
     border: 0;
    line-height: 36px;
    height: 36px;
    width: 72%;
    padding-left: 10px;
    outline: none;
  }
}
.r_box {
  .articleInfo {
    display: flex;
    margin-top: 10px;
    font-size: 12px;
    color: #999;
    &>span {
      margin-right: 10px;
      &>i:first-child {
        margin-right: 4px;
        font-size: 12px;
      }
    }
  }
}
.pages {
  padding: 0 25x 25px;
  text-align: right;
  font-size: 12px;
  text-align: center;
  span {
    background: #fff;
    color: #454545;
    padding: 5px 8px;
    border: none;
    margin: 0 0 0 5px;
    cursor: pointer;
    &.active {
      background: #f16e50;
      color: #fff;
    }
    &:hover {
      background: #f16e50;
      color: #fff;
    }
  }
  a {
    background: #fff;
    color: #454545;
    padding: 5px 8px;
    border: none;
    margin: 0 0 0 5px;
  }
}
</style>
