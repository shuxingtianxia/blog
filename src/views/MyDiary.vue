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
      <ul>
        <li>
          <i>
            <a href="/">
              <img src="../assets/images/1.jpg" alt />
            </a>
          </i>
          <h3>
            <a href="/">你是什么人便会遇上什么人</a>
          </h3>
          <p>
            有时就为了一句狠话，像心头一口毒钉，永远麻痺着亲密感情交流。恶言，真要慎出，平日多誠心爱语，乃最简易之佈施。
          </p>
        </li>
        <li>
          <i>
            <a href="/">
              <img src="../assets/images/1.jpg" alt />
            </a>
          </i>
          <h3>
            <a href="/">爱情没有永远，地老天荒也走不完</a>
          </h3>
          <p>
            也许，爱情没有永远，地老天荒也走不完，生命终结的末端，苦短情长。站在岁月的边端，那些美丽的定格，心伤的绝恋，都被四季的掩埋，心伤的绝恋，都被四季的掩埋，
          </p>
        </li>
        <li>
          <i>
            <a href="/">
              <img src="../assets/images/1.jpg" alt />
            </a>
          </i>
          <h3>
            <a href="/">女孩都有浪漫的小情怀——浪漫的求婚词</a>
          </h3>
          <p>
            还在为浪漫的求婚词而烦恼不知道该怎么说吗？女孩子都有着浪漫的小情怀，对于求婚更是抱着满满的浪漫期待，也希望在求婚那一天对方可以给自己一个最浪漫的求婚词。也希望在求婚那一天对方可以给自己一个最浪漫的求婚词。
          </p>
        </li>
        <li>
          <i>
            <a href="/">
              <img src="../assets/images/1.jpg" alt />
            </a>
          </i>
          <h3>
            <a href="/">擦肩而过</a>
          </h3>
          <p>
            《擦肩而过》文/清河鱼
            编绘/天朝羽打开一扇窗，我不曾把你想得平常。看季节一一过往。你停留的那个地方，是否依然花儿开放？在夜里守靠着梦中的，想那仿佛前世铭刻进心肠的
          </p>
        </li>
        <li>
          <i>
            <a href="/">
              <img src="../assets/images/1.jpg" alt />
            </a>
          </i>
          <h3>
            <a href="/">个人博客从简不繁</a>
          </h3>
          <p>
            十一月中旬开始，排名突然下降了，网站“个人博客”关键词排名从第一页第二名滑落到100页以后了，个人博客这个关键词百度已经搜不到了，仅有google、搜狗、360排
          </p>
        </li>
        <li>
          <i>
            <a href="/">
              <img src="../assets/images/1.jpg" alt />
            </a>
          </i>
          <h3>
            <a href="/">个人博客从简不繁</a>
          </h3>
          <p>
            十一月中旬开始，排名突然下降了，网站“个人博客”关键词排名从第一页第二名滑落到100页以后了，个人博客这个关键词百度已经搜不到了，仅有google、搜狗、360排
          </p>
        </li>
        <li>
          <i>
            <a href="/">
              <img src="../assets/images/1.jpg" alt />
            </a>
          </i>
          <h3>
            <a href="/">个人博客从简不繁</a>
          </h3>
          <p>
            十一月中旬开始，排名突然下降了，网站“个人博客”关键词排名从第一页第二名滑落到100页以后了，个人博客这个关键词百度已经搜不到了，仅有google、搜狗、360排
          </p>
        </li>
        <li>
          <i>
            <a href="/">
              <img src="../assets/images/1.jpg" alt />
            </a>
          </i>
          <h3>
            <a href="/">个人博客从简不繁</a>
          </h3>
          <p>
            十一月中旬开始，排名突然下降了，网站“个人博客”关键词排名从第一页第二名滑落到100页以后了，个人博客这个关键词百度已经搜不到了，仅有google、搜狗、360排
          </p>
        </li>
        <li>
          <i>
            <a href="/">
              <img src="../assets/images/1.jpg" alt />
            </a>
          </i>
          <h3>
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
</style>
