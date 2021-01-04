<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { L2Dwidget } from "live2d-widget";
export default {
  name: "App",
  created() {
    setTimeout(function () {
      L2Dwidget.init({
        model: {
          jsonPath:
            "https://cdn.jsdelivr.net/gh/wangsrGit119/wangsr-image-bucket/L2Dwidget/live2d-widget-model-haruto/assets/haruto.model.json",
          scale: 1,
        },
        display: {
          position: "left",
          width: 150,
          height: 300,
          hOffset: 0,
          vOffset: -20,
          zIndex: -1,
        },
        mobile: {
          show: true,
          scale: 0.5,
        },
        react: {
          opacityDefault: 0.2,
          opacityOnHover: 0.2,
        },
      });
    }, 100);
  },
};
</script>

<style lang="stylus" scoped>
html, body #app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}
</style>
