<template>
  <div id="content">
    <div class="post-block">
      <!-- 图片 -->
      <div class="post-image">
        <img src="../assets/image/大象.jpg" alt="大象" />
      </div>
      <!-- about -->
      <div class="post-about">
        <div class="post-about-target">
          <h4>目标：两年内成为一位独立的前端开发工程师</h4>
        </div>
        <!-- 博客说明 -->
        <div class="post-about-explain">
          <h4>
            博客说明：本博客会不定期的发布前端相关的一些文章，也会分享我的一些经验和学习资源，发布一些前端所使用的前沿技术，喜欢的小伙伴们把博客收藏起来吧~
          </h4>
        </div>
        <div class="post-about-skills">
          <h4>博主技能:</h4>
          <div class="post-about-skills-list">
            <ul>
              <li>Javascript基础扎实,熟悉前后端交互,了解交互机制</li>
              <li>熟悉W3C规范</li>
              <li>
                熟悉HTML5+CSS3,熟悉响应式布局,bootstrap库,移动端的自适应布局
              </li>
              <li>理解面向对象编程思想，熟悉使用Vue.js开源框架</li>
              <li>熟悉JQuery等类库,Ajax交互</li>
              <li>熟练使用Git项目管理工具和熟悉Webpack/Gulp项目构建框架</li>
              <li>了解Element、mint-ui、vant、cube-ui等开源的前端组件库</li>
              <li>熟悉Echarts等插件</li>
            </ul>
          </div>
        </div>
        <!-- webUrl -->
        <div class="post-block-url">
          <h4>本站网址:localhost:8080</h4>
        </div>
      </div>
      <!-- 联系方式 -->
      <div class="post-block-contact">
        <h5 class="post-block-contact-one">微信：AgogyFFF</h5>
        <h5 class="post-block-contact-second">邮箱：xyf0722@qq.com</h5>
        <div class="post-block-contact-img">
          <img src="../assets/image/二维码.jpg" alt="" />
        </div>
        <div class="post-block-contacy-h">
          <h4>扫一扫,加我微信</h4>
        </div>
      </div>
    </div>
    <footer-inner></footer-inner>
  </div>
</template>

<script>
import FooterInner from "../components/FooterInner.vue";
export default {
  name: "AboutBlogs",
  data() {
    return {};
  },
  components: {
    FooterInner,
  },
};
</script>

<style lang="stylus" scoped>
#content {
  width: 908px;
  height: 100%;
  float: left;
  background: #EEEEEE;

  @media screen and (max-width: 1000px) {
    width: 716px;
    margin-right: 20px;
  }
}

.post-block {
  text-align: left;
  padding: 40px;
  background: white;
  animation: fadeIn;
  animation-duration: 2s;
}

.post-image {
  width: 100%;
  height: 100%;
}

.post-image img {
  width: 100%;
  height: 100%;
  animation: fadeInDown;
  animation-duration: 2s;
}

.post-about {
  margin-top: 12px;
}

.post-about-target {
  animation: fadeInDown;
  animation-duration: 2s;
}

.post-about-explain {
  animation: fadeInDown;
  animation-duration: 2s;
}

.post-about-skills h4 {
  animation: fadeInDown;
  animation-duration: 2s;
}

.post-about-skills-list {
  margin-left: 40px;
}

.post-about-skills-list ul {
  width: 100%;
  height: 100%;
}

.post-about-skills-list li {
  width: 100%;
  height: 32px;
  list-style-type: square;
  animation: fadeInDown;
  animation-duration: 2s;
}

.post-about-skills-list li:hover {
  cursor: pointer;
  border-radius: 10px;
  color: #009ACD;
}

.post-block-url {
  animation: fadeInDown;
  animation-duration: 2s;
}

.post-block-contact-one {
  color: #8B658B;
  animation: fadeInDown;
  animation-duration: 2s;
}

.post-block-contact-second {
  color: #009ACD;
  animation: fadeInDown;
  animation-duration: 2s;
}

.post-block-contact-img {
  width: 250px;
  height: 250px;
  margin-left: 50%;
  transform: translateX(-50%);
}

.post-block-contact-img img {
  width: 100%;
  height: 100%;
  animation: fadeInDown;
  animation-duration: 2s;
}

.post-block-contacy-h {
  margin-left: 50%;
  transform: translateX(-50%);
  text-align: center;
  color: #8B2252;
  animation: fadeInDown;
  animation-duration: 2s;
}
</style>
