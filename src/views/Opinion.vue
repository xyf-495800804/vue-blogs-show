<template>
  <div id="content">
    <div class="post-block">
      <div class="post-blovk-image">
        <img src="../assets/image/星球.jpg" alt="仙女" />
      </div>
      <!-- 介绍 -->
      <div class="post-block-introduce">
        <h2>意见反馈</h2>
      </div>
      <!-- 反馈具体 -->
      <div class="post-block-specific">
        <div class="post-block-specific-submit"><h2>提交您的建议</h2></div>
        <div class="post-block-specific-content">
          <p>联系方式(称呼)</p>
          <el-input
            type="text"
            placeholder="请输入联系方式(称呼)"
            v-model="phoneName"
            maxlength="50"
            show-word-limit
            clearable
          >
          </el-input>
        </div>
        <div class="post-block-specific-item-content">
          <p>内容</p>
          <el-input
            type="textarea"
            placeholder="请输入提交的内容(可拉伸)"
            v-model="opinions"
            maxlength="1000"
            show-word-limit
            clearable
            rows="8"
          >
          </el-input>
        </div>
        <div class="post-block-specific-btn">
          <el-button type="primary" @click="saveOpinion"
            >上传<i class="el-icon-upload el-icon--right"></i
          ></el-button>
        </div>
      </div>
    </div>
    <footer-inner></footer-inner>
  </div>
</template>

<script>
import FooterInner from "../components/FooterInner.vue";

export default {
  name: "Opinion",
  data() {
    return {
      phoneName: "", //联系方式（称呼）
      opinions: "", //提交的内容
    };
  },
  components: {
    FooterInner,
  },
  mounted() {
    console.log(this.getDate());
  },
  methods: {
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
    // 上传保存的意见的事件
    saveOpinion() {
      const opinionObj = {
        phoneName: this.phoneName,
        opinions: this.opinions,
        data: this.getDate(),
      };
      this.$confirm("此操作将保存该留言, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$axios
            .post("/api/saveOpinions", {
              opinionObj: opinionObj,
            })
            .then((res) => {
              console.log(res);
              this.$message({
                message: "亲！留言保存成功奥！感谢您提出的宝贵建议!",
                type: "success",
              });
              // 置空联系方式
              this.phoneName = "";
              // 置空留言
              this.opinions = "";
            })
            .catch(() => {
              this.$message.error("出现错误，请稍后再试");
            });
        })
        .catch(() => {
          this.$message.error("亲!您已取消保存！");
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

.post-block-introduce {
  text-align: center;
  animation: fadeInDown;
  animation-duration: 2s;
}

.post-block-specific {
  background: #F7F8FA;
  border: 1px solid #ccc;
  box-shadow: 0 0 20px #ccc;
  padding: 30px;
  animation: fadeIn;
  animation-duration: 2s;
}

.post-block-specific-submit {
  text-align: center;
  animation: fadeInDown;
  animation-duration: 2s;
}

.post-block-specific-submit h2 {
  margin: 0;
}

.post-block-specific p {
  margin: 0;
  text-align: right;
  vertical-align: middle;
  float: left;
  font-size: 14px;
  color: #606266;
  line-height: 40px;
  padding: 0 12px 0 0;
  box-sizing: border-box;
}

.post-block-specific-item-content >>> .el-textarea__inner {
  color: #5F9EA0;
  animation: fadeIn;
  animation-duration: 2s;
}

.post-block-specific-content >>> .el-input__inner {
  color: #5F9EA0;
  animation: fadeInDown;
  animation-duration: 2s;
}

.post-block-specific-item-content p {
  animation: fadeInDown;
  animation-duration: 2s;
}

.post-block-specific-btn {
  margin-top: 12px;
  text-align: center;
}

.post-block-specific-btn >>> .el-button--primary {
  background: #5F9EA0;
  border-color: #5F9EA0;
  animation: fadeInDown;
  animation-duration: 2s;
}
</style>
