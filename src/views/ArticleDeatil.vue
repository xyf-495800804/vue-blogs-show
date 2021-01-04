<template>
  <div id="content">
    <div class="post-block">
      <!-- 返回按钮 -->
      <div class="return">
        <el-button
          type="primary"
          size="mini"
          plain
          @click="this, $router.push('/index/article')"
          >返回</el-button
        >
      </div>
      <div class="article_title article_detail_title">
        {{ articleDetailList.title }}
      </div>
      <div class="article_info">
        <span class="article_info_date"
          >发表于：{{ articleDetailList.data }}</span
        >
        <span
          class="article_info_label"
          v-if="
            articleDetailList.labels != undefined &&
            articleDetailList.labels.length != 0
          "
        >
          标签：
          <el-tag
            class="tag_margin"
            type="primary"
            v-for="(item, index) in articleDetailList.labels"
            :key="index"
            >{{ item }}</el-tag
          >
        </span>
      </div>
      <div class="article_detail_content">{{ articleDetailList.content }}</div>
      <!-- 评论区域 -->
      <div class="article_detail_comment">
        <!-- 评论输入区域 -->
        <div class="article_detail_comment-input">
          <el-col :span="19">
            <el-input
              ref="focusRefs"
              placeholder="想对作者说点什么"
              v-model="content"
              clearable
              @focus="focusInput"
            >
              <i class="el-icon-edit el-input__icon" slot="suffix"> </i>
            </el-input>
          </el-col>
          <el-col :span="5">
            <el-button
              type="primary"
              plain
              :disabled="content.length == 0 ? true : false"
              @click="contentBtn"
              >评论</el-button
            >
          </el-col>
        </div>
      </div>
      <!-- 评论内容区域 -->
      <div class="article_detail_comment-content">
        <ul>
          <li v-for="(item, index) in contentsList" :key="item._id">
            <span class="left">{{ item.content }}</span>
            <span class="right">{{ item.data }}</span>
          </li>
        </ul>
      </div>
    </div>
    <footer-inner></footer-inner>
  </div>
</template>

<script>
import FooterInner from "../components/FooterInner.vue";
export default {
  name: "ArticleDetail",
  data() {
    return {
      articleDetailList: {}, //获取博客文章详情数据
      content: "", //即将评论的内容
      contentsList: [],
    };
  },
  components: {
    FooterInner,
  },
  mounted() {
    // 获取博客文章详情数据
    this.getArticleDetailList();
    // 获取评论数据
    this.getContents();
  },
  methods: {
    async getArticleDetailList() {
      await this.$axios
        .post("/api/articledetail", {
          _id: this.$route.params._id,
        })
        .then((res) => {
          if (res.data.err_code == 200) {
            // 成功后的提示信息
            this.$message({
              message: "详情博客文章获取成功",
              type: "success",
            });
            this.articleDetailList = res.data.docs;
            // console.log(this.articleDetailList);
          } else {
            this.$message.error("服务器开小差啦奥");
          }
        });
    },
    // 评论框获取焦点触发事件
    focusInput() {
      this.$message({
        message: "亲！请认真填写评论奥！",
        type: "warning",
      });
    },
    // 获取评论发表时间
    getDate: function () {
      let mydate, y, m, d, hh, mm, ss;
      mydate = new Date();
      y = mydate.getFullYear();
      m = mydate.getMonth() + 1;
      d = mydate.getDate();
      hh = mydate.getHours();
      mm = mydate.getMinutes();
      ss = mydate.getSeconds();
      if (m < 10) m = "0" + m;
      if (d < 10) d = "0" + d;
      if (hh < 10) hh = "0" + hh;
      if (mm < 10) mm = "0" + mm;
      if (ss < 10) ss = "0" + ss;
      return (this.date =
        y + "-" + m + "-" + d + " " + hh + ":" + mm + ":" + ss);
    },
    // 评论按钮触发事件
    contentBtn() {
      let contentsObj = {
        contentsId: this.$route.params._id,
        content: this.content,
        data: this.getDate(),
      };
      // console.log(contentsObj);
      this.$confirm("此操作将保存该评论, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$axios
            .post("/api/saveContents", {
              contentsObj: contentsObj,
            })
            .then((res) => {
              this.$message({
                message: "亲！评论保存成功奥！",
                type: "success",
              });
              // 清空输入框信息
              this.content = "";
              // 更新评论数据
              this.getContents();
            })
            .catch(() => {
              this.$message.error("出现错误，请稍后再试");
            });
        })
        .catch(() => {
          this.$message.error("亲!您已取消保存！");
        });
    },
    // 获取评论数据的函数
    getContents() {
      this.$axios
        .post("/api/getContents", {
          contentsId: this.$route.params._id,
        })
        .then((res) => {
          this.contentsList = res.data.docs.reverse();
          // console.log(this.contentsList);
        })
        .catch(() => {
          this.$message.error("亲!评论获取失败！");
        });
    },
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

.post-block:nth-child(n+2) {
  margin-top: 12px;
  border-radius: initial;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.06), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 -1px 0.5px 0 rgba(0, 0, 0, 0.09);
}

.post-block {
  text-align: center;
  padding: 40px;
  background: white;
}

.article_detail_title {
  cursor: default;
  margin: 40px 0 0;
}

.article_detail_content {
  text-align: left;
  padding: 60px 0;
  font-size: 18px;
}

.article_info_date {
  margin-right: 3px;
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
}

.tag_margin {
  margin: 3px;
}

.article_gist {
  text-align: left;
  padding-top: 40px;
  padding-bottom: 40px;
  font-size: 16px;
}

.article_button {
  display: inline-block;
  padding: 3px 12px;
  border: 2px solid #222;
  color: #222;
  font-size: 14px;
  cursor: pointer;
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
}

.article_detail_comment {
  height: auto;
  margin-bottom: 10px;
}

.article_detail_comment-content {
  border-radius: 20px;
  background: #fff;
  margin-top: 70px;
  box-shadow: 0 0px 10px 0 #ccc;
  font-family: 'Microsoft Yahei', sans-serif;
  color: black;
  // background-image: linear-gradient(to right, #B4BEC3, #334253);
  background-color: #fff;
}

.article_detail_comment-content li {
  padding: 10px;
  text-align: left;
  letter-spacing: 2px;
}

.article_detail_comment-content li .right {
  margin-left: 5px;
}

.return {
  position: absolute;
  top: 20px;
  right: 200px;
}
</style>
