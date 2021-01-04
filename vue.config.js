module.exports = {
  lintOnSave: false, // eslint-loader 是否在保存的时候检查
  publicPath: "./"
  // 服务项配置
  /*  devServer: {
    proxy: {
      "/xyf": {
        target: "http://121.4.30.105/host/",
        changeOrigin: true, //是否跨域
        ws: true, //是否代理 websockets
        secure: true, //是否https接口
        pathRewrite: {
          //路径重置
          "^/xyf": ""
        }
      }
    }
  } */
};
