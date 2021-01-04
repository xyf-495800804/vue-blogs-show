<template>
  <!-- 博客公告页面 -->
  <div id="content">
    <div class="post-block">
      <div class="post-blovk-image">
        <img src="../assets/image/星球.jpg" alt="仙女" />
      </div>
      <!-- 公告 -->
      <div class="post-block-notice">
        <p>暂未想起,以后做补充</p>
      </div>
    </div>
    <footer-inner></footer-inner>
  </div>
</template>

<script>
import FooterInner from "../components/FooterInner.vue";

export default {
  name: "BlogNotice",
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
  animation: fadeInDown;
  animation-duration: 2s;
}

.post-blovk-image {
  width: 100%;
  height: 100%;
}

.post-blovk-image img {
  width: 100%;
  height: 100%;
  animation: fadeInDown;
  animation-duration: 2s;
}

.post-block-notice {
  margin-top: 15px;
}

.post-block-notice p {
  margin: 0px;
  padding: 25px;
  background-color: #F0FFFF;
  border-radius: 25px;
  font-family: 'Microsoft Yahei', sans-serif;
  text-align: center;
  color: #F0FFFF;
  font-size: 26px;
  background-image: linear-gradient(to right, #B4BEC3, #334253);
}
</style>
