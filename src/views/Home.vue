<template>
  <div class="home">
    <!-- 左边 -->
    <div class="l_box">
      <!-- 关于我 -->
      <div class="about_me">
        <h2>关于我</h2>
        <ul>
          <i>
            <img src="../assets/images/4.jpg" alt />
          </i>
          <p>
            <b>书行天下</b>
            一个80后草根女站长！09年入行。一直潜心研究web前端技术，一边工作一边积累经验，分享一些个人博客模板，以及SEO优化等心得。
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
        <li>
          <i>
            <a href="/"><img src="../assets/images/1.jpg" alt=""/></a>
          </i>
          <h3>
            <b>【顶】</b>
            <a href="/">个人博客从简不繁</a>
          </h3>
          <p>
            十一月中旬开始，排名突然下降了，网站“个人博客”关键词排名从第一页第二名滑落到100页以后了，个人博客这个关键词百度已经搜不到了，仅有google、搜狗、360排
          </p>
        </li>
        <li>
          <i>
            <a href="/"><img src="../assets/images/1.jpg" alt=""/></a>
          </i>
          <h3>
            <b>【顶】</b>
            <a href="/">个人博客从简不繁</a>
          </h3>
          <p>
            十一月中旬开始，排名突然下降了，网站“个人博客”关键词排名从第一页第二名滑落到100页以后了，个人博客这个关键词百度已经搜不到了，仅有google、搜狗、360排
          </p>
        </li>
        <li>
          <i>
            <a href="/"><img src="../assets/images/1.jpg" alt=""/></a>
          </i>
          <h3>
            <b>【顶】</b>
            <a href="/">个人博客从简不繁</a>
          </h3>
          <p>
            十一月中旬开始，排名突然下降了，网站“个人博客”关键词排名从第一页第二名滑落到100页以后了，个人博客这个关键词百度已经搜不到了，仅有google、搜狗、360排
          </p>
        </li>
        <li>
          <i>
            <a href="/"><img src="../assets/images/1.jpg" alt=""/></a>
          </i>
          <h3>
            <b>【顶】</b>
            <a href="/">个人博客从简不繁</a>
          </h3>
          <p>
            十一月中旬开始，排名突然下降了，网站“个人博客”关键词排名从第一页第二名滑落到100页以后了，个人博客这个关键词百度已经搜不到了，仅有google、搜狗、360排
          </p>
        </li>
        <li>
          <i>
            <a href="/"><img src="../assets/images/1.jpg" alt=""/></a>
          </i>
          <h3>
            <b>【顶】</b>
            <a href="/">个人博客从简不繁</a>
          </h3>
          <p>
            十一月中旬开始，排名突然下降了，网站“个人博客”关键词排名从第一页第二名滑落到100页以后了，个人博客这个关键词百度已经搜不到了，仅有google、搜狗、360排
          </p>
        </li>
        <li>
          <i>
            <a href="/"><img src="../assets/images/1.jpg" alt=""/></a>
          </i>
          <h3>
            <b>【顶】</b>
            <a href="/">个人博客从简不繁</a>
          </h3>
          <p>
            十一月中旬开始，排名突然下降了，网站“个人博客”关键词排名从第一页第二名滑落到100页以后了，个人博客这个关键词百度已经搜不到了，仅有google、搜狗、360排
          </p>
        </li>
        <li>
          <i>
            <a href="/"><img src="../assets/images/1.jpg" alt=""/></a>
          </i>
          <h3>
            <b>【顶】</b>
            <a href="/">个人博客从简不繁</a>
          </h3>
          <p>
            十一月中旬开始，排名突然下降了，网站“个人博客”关键词排名从第一页第二名滑落到100页以后了，个人博客这个关键词百度已经搜不到了，仅有google、搜狗、360排
          </p>
        </li>
        <li>
          <i>
            <a href="/"><img src="../assets/images/1.jpg" alt=""/></a>
          </i>
          <h3>
            <b>【顶】</b>
            <a href="/">个人博客从简不繁</a>
          </h3>
          <p>
            十一月中旬开始，排名突然下降了，网站“个人博客”关键词排名从第一页第二名滑落到100页以后了，个人博客这个关键词百度已经搜不到了，仅有google、搜狗、360排
          </p>
        </li>
        <li>
          <i>
            <a href="/"><img src="../assets/images/1.jpg" alt=""/></a>
          </i>
          <h3>
            <b>【顶】</b>
            <a href="/">个人博客从简不繁</a>
          </h3>
          <p>
            十一月中旬开始，排名突然下降了，网站“个人博客”关键词排名从第一页第二名滑落到100页以后了，个人博客这个关键词百度已经搜不到了，仅有google、搜狗、360排
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {}
};
</script>
<style lang="scss" scoped>
.about_me img {
  width: 100%;
}
.about_me p {
  line-height: 24px;
  font-size: 14px;
}
.about_me i {
  width: 120px;
  float: left;
  clear: left;
  margin-right: 10px;
  height: 90px;
  overflow: hidden;
}
.search {
  border: 1px solid #000;
  background: #000;
  border-radius: 0 5px 5px 0;
  position: relative;
}
.search input.input_submit {
  border: 0;
  background: 0;
  color: #fff;
  outline: none;
  position: absolute;
  top: 10px;
  right: 8%;
}
.search input.input_text {
  border: 0;
  line-height: 36px;
  height: 36px;
  width: 72%;
  padding-left: 10px;
  outline: none;
}
</style>
