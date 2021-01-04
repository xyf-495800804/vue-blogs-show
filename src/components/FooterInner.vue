<template>
  <div class="footer-inner">
    <div class="copyright">
      ©2014 –2020
      <span class="with-love">
        <i class="fa fa-heart"></i>
      </span>
      <span class="author">下一个</span>
    </div>
    <div class="footer-custom">
      <p>主题的源代码</p>
      <p>主题的源代码</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterInner",
};
</script>

<style lang="stylus" scoped>
.footer-inner {
  padding: 20px 0;
  box-sizing: border-box;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  color: #999;
  font-size: 0.875em;
}

.with-love {
  color: #808080;
  display: inline-block;
  margin: 0 5px;
  animation: icon-animate 1.33s ease-in-out infinite;
}

.footer-custom p {
  margin-bottom: 0;
}
</style>
