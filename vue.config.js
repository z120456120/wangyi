module.exports = {
  devServer: {
    proxy: {
      // '/ajax': {
      //   target: 'https://m.maoyan.com',
      //   changeOrigin: true
      // },
      // '/pizza': {
      //   target: 'https://h5.ele.me',
      //   changeOrigin: true
      // }
      '/xiaozhao': {
        target: 'https://m.maoyan.com',
        changeOrigin: true,
        pathRewrite: {
          '^/xiaozhao': '' // 路径重写
        }
      }
    }
  },
  lintOnSave: true
}
