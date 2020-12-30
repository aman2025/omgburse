module.exports = {
  devServer: {
    hot: true,
    port: 8003,
    proxy: {
      '/api': {
        //代理地址
        target: 'http://tst.0598qq.com/', //需要代理的地址
        changeOrigin: true, //是否跨域
        secure: false,
        pathRewrite: {
          '^/api': '/' //本身的接口地址没有 '/api' 这种通用前缀，所以要rewrite，如果本身有则去掉
        }
      }
    },
    open: true,
    noInfo: false,
    overlay: {
      warnings: true,
      errors: true
    }
  }
  //
};
