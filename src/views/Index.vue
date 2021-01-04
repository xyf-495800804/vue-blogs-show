<template>
  <div class="index">
    <header-band></header-band>
    <!-- 主体部分 -->
    <div id="main">
      <svg width="80" height="80" viewBox="0 0 250 250" aria-hidden="true">
        <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
        <path
          d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
          fill="currentColor"
          style="transform-origin: 130px 106px"
          class="octo-arm"
        ></path>
        <path
          d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
          fill="currentColor"
          class="octo-body"
        ></path>
      </svg>
      <!-- 主体左边栏 -->
      <div class="left_box">
        <div class="site-brand-container">
          <div class="site-meta">
            <h1 href="javascript:;" class="brand">下一个</h1>
            <p class="site-subtitle">Hexo的主题</p>
          </div>
        </div>
        <div class="site-nav">
          <ul class="main-menu">
            <li class="menu-item">
              <router-link to="/index/blognotice">
                <i></i>
                <font>博客公告</font>
              </router-link>
            </li>
            <li class="menu-item one">
              <router-link to="/index/article">
                <i></i>
                <font>博客主页</font>
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/index/aboutblogs">
                <i></i>
                <font>关于博主</font>
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/index/opinion">
                <i></i>
                <font>留言栏</font>
              </router-link>
            </li>
            <li class="menu-item">
              <router-link to="/index/search">
                <i></i>
                <font>搜索</font>
              </router-link>
            </li>
          </ul>
        </div>
        <div class="sidebar">
          <div class="sidebar-inner">
            <div class="sidebar-panel-container">
              <div class="site-author">
                <img
                  class="site-author-image"
                  src="../assets/svg/logo.svg"
                  alt="主题"
                />
                <p class="site-author-name">主题NexT</p>
                <div class="site-description">保持简单。保持快乐。</div>
                <div class="site-state-wrap">
                  <div class="site-state">
                    <div class="site-state-item">
                      <a href="javascript:;">
                        <span class="site-state-item-count">{{ number }}</span>
                        <span class="site-state-item-name">帖子</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="links-of-author">
                  <span class="links-of-author-item">
                    <a href="javascript:;" class="exturl">
                      <i class="fab fa fa-github fa-fw" aria-hidden="true"></i>
                    </a>
                  </span>
                  <span class="links-of-author-item">
                    <a href="javascript:;" class="exturl">
                      <i
                        class="fab fa fa-envelope fa-fw"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </span>
                  <span class="links-of-author-item">
                    <a href="javascript:;" class="exturl">
                      <i class="fab fa fa-rss fa-fw" aria-hidden="true"></i>
                    </a>
                  </span>
                  <span class="links-of-author-item">
                    <a href="javascript:;" class="exturl">
                      <i
                        class="fab fa fa-snowflake-o fa-fw"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </span>
                </div>
                <div class="cc-license cc-license-one site-overview-item">
                  <a href="" class="cc-opacity">
                    <img src="../assets/svg/cc-by-nc-sa.svg" alt="创作共用" />
                  </a>
                </div>
                <div class="cc-license cc-license-second">
                  <a href="" class="cc-opacity">
                    <img src="../assets/svg/netlify-dark.svg" alt="Netlify" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 主体右边栏 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import HeaderBand from "../components/HeaderBand.vue";
export default {
  name: "Index",
  data() {
    return {
      number: 0,
    };
  },
  components: {
    HeaderBand,
  },
  mounted() {
    this.getArtcleList();
  },
  methods: {
    //获取博客大致数据
    getArtcleList() {
      this.$axios.get("/api/getListArticle", {}).then((res) => {
        this.number = res.data.docs.length;
      });
    },
  },
};
</script>

<style lang="stylus" scoped>
.index {
  width: 100%;
  height: 100%;
  background: #EEEEEE;
}

#main {
  align-items: stretch;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 1160px;

  @media screen and (max-width: 1000px) {
    width: 990px;
    background: #EEEEEE;
  }
}

#main svg {
  position: absolute;
  top: 0;
  right: 0;
  color: #fff;
  fill: #222;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1000;
}

.left_box {
  float: left;
  width: 240px;
}

.site-brand-container {
  height: 110px;
  // background: red;
  padding: 0 10px;
  background: #222222;
}

.site-meta {
  display: flex;
  flex-direction: column;
  height: 70px;
  padding: 20px 0;
  text-align: center;
  margin: 0 auto;
  // background: black;
}

.brand {
  flex: 1;
  color: #FFFFFF;
  font-size: 1.375em;
  font-weight: normal;
  font-family: Lato, 'PingFang SC', 'Microsoft YaHei', sans-serif;
  animation: bounce; /* referring directly to the animation's @keyframe declaration */
  animation-duration: 2s; /* don't forget to set a duration! */
}

.site-subtitle {
  flex: 1;
  margin: 10px 10px 0;
  color: #DDDDDD;
  font-size: 0.812em;
  line-height: 27.2px;
  animation: fadeInDown;
  animation-duration: 2s;
}

.site-nav {
  background: #FFFFFF;
}

.main-menu {
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 1em 0;
  text-align: center;
}

.main-menu .one {
  background: #F5F5F5;
  /* animation: fadeInDown;
  animation-duration: 1s; */
}

.menu-item {
  flex: 1;
  display: block;
  margin: 0;
  animation: fadeInDown;
  animation-duration: 2s;
  animation-fill-mode: none;
}

.menu-item a {
  padding: 5px 20px;
  position: relative;
  text-align: left;
  transition-property: background-color;
  border-bottom: 0;
  display: block;
  font-size: 0.8125em;
  transition: border-color 0.2s ease-in-out;
  line-height: 25.6px;
}

.menu-item a:hover {
  background: #F5F5F5;
}

.menu-item a font {
  color: #555555;
  font-size: 13px;
}

.sidebar {
  position: sticky;
  top: 12px;
  width: 240px;
  margin-top: 12px;
  animation: fadeInUp;
  animation-duration: 2s;
}

.sidebar-inner {
  background: #FFFFFF;
  border-radius: initial;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.06), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 -1px 0.5px 0 rgba(0, 0, 0, 0.09);
  box-sizing: border-box;
  color: #555555;
  padding: 18px 10px;
  text-align: center;
}

.sidebar-panel-container {
  overflow-x: hidden;
  overflow-y: auto;
  max-height: 662px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.site-author-image {
  background: #fff;
  background-clip: content-box;
  border: 1px solid #eee;
  max-width: 120px;
  padding: 2px;
  border-radius: 50%;
}

img {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.site-author-name {
  height: 32px;
  color: #555;
  font-weight: 600;
  margin: 0;
  line-height: 32px;
  animation: fadeInDown;
  animation-duration: 2.5s;
  animation-fill-mode: none;
}

p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}

.site-description {
  height: 25.6px;
  color: #999;
  font-size: 0.8125em;
  margin-top: 0;
  line-height: 25.6px;
  animation: fadeInDown;
  animation-duration: 2.5s;
  animation-fill-mode: none;
}

.site-state-wrap {
  margin-top: 10px;
}

.site-state {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  line-height: 1.4;
}

.site-state-item {
  padding: 0 10px;
}

.site-state-item a {
  border-bottom: none;
  display: block;
  color: #555555;
  outline: 0;
  text-decoration: none;
  overflow-wrap: break-word;
  cursor: pointer;
}

.site-state-item-count {
  display: block;
  font-size: 1em;
  font-weight: 600;
  animation: fadeInDown;
  animation-duration: 2.5s;
  animation-fill-mode: none;
}

.site-state-item-name {
  color: #999;
  font-size: 0.8125em;
  animation: fadeInDown;
  animation-duration: 2.5s;
  animation-fill-mode: none;
}

.links-of-author {
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.links-of-author-item {
  margin: 5px 0 0;
}

.links-of-author-item a {
  border-bottom: none;
  border-radius: 4px;
  display: block;
  box-sizing: border-box;
  display: inline-block;
  max-width: 100%;
  overflow: hidden;
  padding: 0 5px;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 0.8125em;
}

a {
  border-bottom: 1px solid #999;
  color: #555555;
  outline: 0;
  text-decoration: none;
  overflow-wrap: break-word;
  cursor: pointer;
}

.fab {
  font-weight: 400;
}

.site-overview-item {
  margin-top: 10px;
}

.cc-license-one {
  height: 32px;
}

.cc-license img {
  display: inline-block;
}

.cc-license .cc-opacity {
  border-bottom: none;
  opacity: 0.7;
}

.cc-license-second img {
  width: 80px;
  height: 35.79px;
}
</style>
