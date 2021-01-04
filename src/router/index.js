import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/Index.vue";
import Article from "../views/Article.vue";
import ArticleDetail from "../views/ArticleDeatil.vue";
import AboutBlogs from "../views/AboutBlogs.vue";
import Opinion from "../views/Opinion.vue";
import BlogNotice from "../views/BlogNotice.vue";
import Search from "../views/Search.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/index"
  },
  {
    path: "/index",
    name: "Index",
    component: Index,
    redirect: "/index/article",
    children: [
      {
        path: "/index/article",
        name: "Article",
        component: Article
      },
      {
        path: "/index/articledetail",
        name: "ArticleDetail",
        component: ArticleDetail
      },
      {
        path: "/index/aboutblogs",
        name: "AboutBlogs",
        component: AboutBlogs
      },
      {
        path: "/index/opinion",
        name: "Opinion",
        component: Opinion
      },
      {
        path: "/index/blognotice",
        name: "BlogNotice",
        component: BlogNotice
      },
      {
        path: "/index/search",
        name: "Search",
        component: Search
      }
    ]
  }
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
});

export default router;
