<template>
  <div id="content">
    <div class="post-block">
      <!-- 图片 -->
      <div class="post-image">
        <img src="../assets/image/大象.jpg" alt="大象" />
      </div>
      <!-- 搜索框 -->
      <el-input
        placeholder="请输入标题进行搜索"
        prefix-icon="el-icon-edit"
        v-model="title"
        clearable
      >
        <template slot="append"
          ><i class="el-icon-search" @click="selectBlogs"></i
        ></template>
      </el-input>

      <!-- 搜索到的卡片 -->
      <el-card
        v-if="selectList !== undefined && selectList.length != 0"
        v-for="(item, index) in selectList"
        key="index"
      >
        <!-- 标题 -->
        <div class="article_title article_detail_title">
          {{ item.title }}
        </div>
        <!-- 简介 -->
        <div class="article_gist">
          {{ item.gist }}
        </div>
        <!-- 时间和标签 -->
        <div class="article_info">
          <span class="article_info_date">发表于：{{ item.data }}</span>
          <span
            class="article_info_label"
            v-if="item.labels != undefined && item.labels.length != 0"
          >
            标签：
            <el-tag
              class="tag_margin"
              type="primary"
              v-for="(items, index) in item.labels"
              :key="index"
              >{{ items }}</el-tag
            >
          </span>
        </div>
        <!-- 内容 -->
        <div class="article_detail_content">
          {{ item.content }}
        </div>
      </el-card>
    </div>
    <footer-inner></footer-inner>
  </div>
</template>

<script>
import FooterInner from "../components/FooterInner.vue";

export default {
  name: "Search",
  components: {
    FooterInner,
  },
  data() {
    return {
      title: "", //搜索标题
      selectList: [],
    };
  },
  methods: {
    // 模糊查询搜索博客
    selectBlogs() {
      if (this.title !== undefined && this.title.length != 0) {
        this.$axios
          .post("/api/seleteblog", {
            params: {
              title: this.title,
            },
          })
          .then((res) => {
            if (res.data.err_code == 1) {
              this.$message({
                showClose: true,
                message: "亲！未查询到相关数据",
                type: "warning",
              });
            } else if (res.data.err_code == 200) {
              this.$message({
                showClose: true,
                message: "数据查询成功",
                type: "success",
              });
              this.selectList = res.data.docs;
              console.log(this.selectList);
              this.title = "";
            }
          });
      } else {
        this.$message({
          showClose: true,
          message: "请输入数据查询",
          type: "warning",
        });
      }
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

.post-block {
  text-align: left;
  padding: 40px;
  background: white;
  animation: fadeInDown;
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

.el-card {
  margin-top: 20px;
  animation: fadeInDown;
  animation-duration: 2s;
}

.article_title {
  text-align: center;
  font-size: 20px;
}

.article_gist {
  text-align: center;
}

.article_info {
  text-align: center;
}

.tag_margin {
  margin-left: 5px;
}

.article_detail_content {
  text-align: left;
}
</style>
