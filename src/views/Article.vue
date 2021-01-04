<template>
  <div id="content">
    <div
      class="post-block"
      v-for="(item, index) in articleList"
      :key="item._id"
    >
      <div class="article_title">{{ item.title }}</div>
      <div class="article_info">
        <span class="article_info_date">发表于：{{ item.data }}</span>
        <span v-if="item.labels.length != 0" class="article_info_label"
          >标签：
          <el-tag
            class="tag_margin"
            type="primary"
            v-for="(items, index) in item.labels"
            :key="index"
            >{{ items }}</el-tag
          >
        </span>
      </div>
      <div class="article_gist">{{ item.gist }}</div>
      <div class="article_button article_all" @click="readArticle(item._id)">
        阅读全文 >
      </div>
      <div class="article_underline"></div>
    </div>
    <!-- 分页开始 -->
    <el-card shadow="always"
      ><el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="queryInfo.pagenum"
        :page-sizes="[1, 2, 5, 10]"
        :page-size="queryInfo.pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination
    ></el-card>
    <!-- 分页结束 -->
    <footer-inner></footer-inner>
    <!-- 返回顶部开始 -->
    <el-backtop> </el-backtop>
    <!-- 返回顶部结束 -->
  </div>
</template>

<script>
import FooterInner from "../components/FooterInner.vue";

export default {
  name: "Article",
  data() {
    return {
      articleList: [], //博客大致数据
      // 数据总条数
      total: 0,
      // 获取博客列表的参数对象
      queryInfo: {
        query: "",
        pagenum: 1, //前往的页数
        pagesize: 5, //设置页面为多少条一页
      },
    };
  },
  components: {
    FooterInner,
  },
  mounted() {
    // 获取博客大致数据;
    this.getArtcleList();
  },
  methods: {
    // 阅读全文函数
    readArticle(_id) {
      this.$router.push({ name: "ArticleDetail", params: { _id: _id } });
    },
    //获取博客大致数据
    getArtcleList() {
      // this.$axios.get("/api/getListArticle", {}).then((res) => {
      //   if (res.data.err_code == 200) {
      //     // 成功后的提示信息
      //     this.$message({
      //       message: "博客文章获取成功",
      //       type: "success",
      //     });
      //     // 将后台返回的博客数据赋值给博客数据存储里面
      //     this.articleList = res.data.docs;
      //     // console.log(this.articleList.length);
      //     // this.$store.commit("setNumber", this.articleList.length);
      //   } else {
      //     this.$message.error("服务器开小差啦奥");
      //   }
      // });
      this.$axios
        .post("/api/getListArticle", {
          pagesize: this.queryInfo.pagesize,
          pagenum: this.queryInfo.pagenum,
        })
        .then((res) => {
          console.log(res);
          this.articleList = res.data.docs;
          // 为总数据条数赋值
          this.total = res.data.total;
        });
    },
    // 监听pagesize改变的事件
    handleSizeChange(newsize) {
      this.queryInfo.pagesize = newsize;
      this.getArtcleList();
    },
    // 监听页码值改变的事件
    handleCurrentChange(newsize) {
      this.queryInfo.pagenum = newsize;
      this.getArtcleList();
    },
  },
};
</script>

<style lang="stylus" scoped>
.el-card {
  margin-top: 15px;
}

#content {
  width: 908px;
  height: 100%;
  float: left;
  background: #EEEEEE;

  @media screen and (max-width: 1000px) {
    width: 716px;
    padding-right: 20px;
  }
}

.post-block:nth-child(n+2) {
  margin-top: 12px;
  border-radius: initial;
}

.post-block {
  text-align: center;
  padding: 40px;
  background: white;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.06), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 -1px 0.5px 0 rgba(0, 0, 0, 0.09);
  animation: fadeIn;
  animation-duration: 2s;
  animation-fill-mode: none;
}

.article_title {
  display: inline-block;
  color: #222;
  font-size: 34px;
  font-weight: 600;
  border-bottom: 1px solid white;
  cursor: pointer;
}

.article_title:hover {
  border-bottom: 1px solid #222;
}

.article_info {
  color: #999;
  font-size: 14px;
  padding-top: 8px;
  animation: fadeInDown;
  animation-duration: 2s;
  animation-fill-mode: none;
}

.tag_margin {
  margin: 3px;
}

.article_gist {
  text-align: left;
  padding-top: 40px;
  padding-bottom: 40px;
  font-size: 16px;
  animation: fadeInDown;
  animation-duration: 2s;
  animation-fill-mode: none;
}

.article_button {
  display: inline-block;
  padding: 3px 12px;
  border: 2px solid #222;
  color: #222;
  font-size: 14px;
  cursor: pointer;
  animation: fadeInDown;
  animation-duration: 2s;
  animation-fill-mode: none;
}

.article_all:hover {
  color: white;
  background: #000;
  font-weight: 600;
}

.article_underline {
  height: 1px;
  width: 40px;
  background: #545455;
  margin: 80px auto 0;
  animation: fadeInDown;
  animation-duration: 2s;
  animation-fill-mode: none;
}

.article_info_date {
  margin-right: 3px;
}

.el-backtop {
  background-color: #5f9ea0;
  color: #DCDCDC;
}
</style>
