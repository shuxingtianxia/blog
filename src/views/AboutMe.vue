<template>
  <div class="about_me">
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
      <div class="guanzhu">
        <h2>关注我 我很帅的哦</h2>
        <ul>
          <img src="../assets/images/wx.jpg" alt />
        </ul>
      </div>
    </div>
    <!-- 右边 -->
    <div class="r_box">
      <ul class="about">
        <p>
          杨青，女，一个80后草根女站长！09年入行。一直潜心研究web前端技术，一边工作一边积累经验，
          分享一些个人博客模板，以及SEO优化等心得。我入行早，大家也亲切的叫我“青姐”。
          <br />
          <br />SEO奋斗了将近两年时间，个人博客网站百度排名也从之前的30页后，排到了第一页。期间有很多的不容易，但是都没有放弃过。入了这一行，就深深的喜欢上它。我喜欢一句话“冥冥中该来则来，无处可逃”。
          <br />
          <br />
          <img src="../assets/images/1.jpg" alt />
          现在很多人向我请教如何做好SEO，我想说的是，一是“代码”，一定要简单，布局要合理。二是“内容”，一定要有原创，伪原创也是可以的。三是“持续”，这是一个持续性过程，一定要有耐心，SEO不是马上生效的。
          <br />
          <br />自从入了这一行，也交到了不少朋友，QQ群也不断的壮大起来，280998807(交流群
          已满员)
          280998843（技术群），群里的小伙伴们也很积极的帮助新朋友解决问题，如果你想加入我们，这个大家庭的门，永远给你敞开！另外微信群已于2018.4.13日开通（已满100，只接受群主邀请，可加我个人微信进群
          。我的个人微信号 yangqq_1987）
          <br />
          <br />About my blog <br />域 名：www.yangqq.com
          <br />创建于2011年01月12日 <br />服务器：阿里云服务器
          前往阿里云官网购买 <br />备案号：蜀ICP备11002373号-1 <br />程 序：前端
        </p>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {}
}
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

.about {
  padding: 20px;
  background: rgba(255, 255, 255, 0.8);
}
</style>
