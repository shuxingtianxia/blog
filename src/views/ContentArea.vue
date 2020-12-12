<template>
  <div class="my_diary">
    <!-- 左边 -->
    <div class="l_box">
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
          <li>
            <a href="#">慢生活（520）</a>
          </li>
          <li>
            <a href="#">美文欣赏（40）</a>
          </li>
        </ul>
      </div>
      <!-- 站长推荐 -->
      <div class="tuijian">
        <h2>站长推荐</h2>
        <ul>
          <li>
            <a href="/">你是什么人便会遇上什么人</a>
          </li>
          <li>
            <a href="/">第二届 优秀个人博客模板比赛参选活动</a>
          </li>
          <li>
            <a href="/">个人博客模板《绅士》后台管理</a>
          </li>
          <li>
            <a href="/">你是什么人便会遇上什么人</a>
          </li>
          <li>
            <a href="/">第二届 优秀个人博客模板比赛参选活动</a>
          </li>
          <li>
            <a href="/">个人博客模板《绅士》后台管理</a>
          </li>
          <li>
            <a href="/">安静地做一个爱设计的女子</a>
          </li>
          <li>
            <a href="/">作为一个设计师,如果遭到质疑你是否能恪守自己的原则?</a>
          </li>
        </ul>
      </div>
      <!-- 点击排行 -->
      <div class="tuijian">
        <h2>点击排行</h2>
        <ul>
          <li>
            <a href="/">个人博客从简不凡</a>
          </li>
          <li>
            <a href="/">个人博客，属于我的小世界</a>
          </li>
          <li>
            <a href="/">个人博客，我为什么要用帝国cms</a>
          </li>
          <li>
            <a href="/">个人博客模板《早安》</a>
          </li>
          <li>
            <a href="/">简单手工纸玫瑰</a>
          </li>
          <li>
            <a href="/">【匆匆那些年】总结个人博客经历的这四年</a>
          </li>
          <li>
            <a href="/">安静地做一个爱设计的女子</a>
          </li>
          <li>
            <a href="/">作为一个设计师,如果遭到质疑你是否能恪守自己的原则?</a>
          </li>
        </ul>
      </div>
      <!-- 标签云 -->
      <div class="cloud">
        <h2>标签云</h2>
        <ul>
          <a href="/">陌上开花</a>
          <a href="/">Javascript</a>
          <a href="/">Html5</a>
          <a href="/">CSS3</a>
          <a href="/">PHP</a>
          <a href="/">JAVA</a>
          <a href="/">陌上开花</a>
          <a href="/">陌上开花</a>
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
      <ul class="content">
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
  // name: 'Home',
  components: {}
}
</script>
<style lang="scss" scoped>
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
.cloud ul a {
  line-height: 24px;
  height: 24px;
  display: block;
  background: #999;
  float: left;
  padding: 3px 11px;
  margin: 10px 10px 0 0;
  border-radius: 8px;
  -moz-transition: all 0.5s;
  -webkit-transition: all 0.5s;
  -o-transition: all 0.5s;
  transition: all 0.5s;
  color: #fff;
}

.cloud ul a:nth-child(8n-7) {
  background: #8a9b0f;
}

.cloud ul a:nth-child(8n-6) {
  background: #eb6841;
}

.cloud ul a:nth-child(8n-5) {
  background: #3fb8af;
}

.cloud ul a:nth-child(8n-4) {
  background: #fe4365;
}

.cloud ul a:nth-child(8n-3) {
  background: #fc9d9a;
}

.cloud ul a:nth-child(8n-2) {
  background: #edc951;
}

.cloud ul a:nth-child(8n-1) {
  background: #c8c8a9;
}

.cloud ul a:nth-child(8n) {
  background: #83af9b;
}

.cloud ul a:first-child {
  background: #036564;
}

.cloud ul a:last-child {
  background: #3299bb;
}

.cloud ul a:hover {
  border-radius: 0;
  text-shadow: #000 1px 1px 1px;
}
.content {
  padding: 20px;
  background: rgba(255, 255, 255, 0.8);
}
</style>
