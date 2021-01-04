import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 引入公共样式
import "./assets/css/index.css";
// 引入font图标
import "font-awesome/css/font-awesome.min.css";
// 全局引入Element
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);
// 引入animate动画库
import animated from "animate.css"; // npm install animate.css --save安装，在引入
Vue.use(animated);
// 引入axios
import axios from "axios";
// 配置默认请求路径
axios.defaults.baseURL = "http://121.4.30.105:10001/cmd/";
// 全局挂载，使每一个路由都能被访问到
Vue.prototype.$axios = axios;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
