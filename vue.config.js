const path = require("path");
let webpack = require('webpack')
// 打包成压缩文件
// const FileManagerPlugin = require('filemanager-webpack-plugin')

const resolve = dir => {
  return path.join(__dirname, dir);
}

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/production-sub-path/" : "/",
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': {
          NODE_ENV: 'development'
        }
      })
    ],
    devtool: 'source-map'
  },
  chainWebpack: config => {
    config.resolve.alias
      .set("@@", resolve("src")) // key,value自行定义，比如.set('@@', resolve('src/components'))
      .set("_c", resolve("src/components"))
      .set("_conf", resolve("config"))
      .set("_systemOrder", resolve("src/view/systemOrder"));
  },
  // 打包时不生成.map文件
  productionSourceMap: false,
  outputDir: "publish_web", // 打包后的文件夹名称
  // 设置跨域代理
  devServer: {
    open: true, // 设置 server 启动后是否自动打开浏览器
    historyApiFallback: true,
    hot: true, // 设置代码保存时是否进行热更新（局部刷新，不刷新整个页面）
    port: 8888,
    host: "localhost",
    inline: true, // 设置代码保存时是否自动刷新页面
    stats: {
      colors: true
    },
    proxy: {
      // 匹配代理的url
      "/api": {
        // 目标服务器地址
        target: "http://localhost:6677", // 测试环境
        // 路径重写
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true,
        secure: false
      }
    }
  },
  lintOnSave: true, // eslint是否有效
  // css配置
  css: {
    loaderOptions: {
      // 给 sass-loader 传递选项
      // 默认情况下 `sass` 选项会同时对 `sass` 和 `scss` 语法同时生效
      // 因为 `scss` 语法在内部也是由 sass-loader 处理的
      // 但是在配置 `prependData` 选项的时候
      // `scss` 语法会要求语句结尾必须有分号，`sass` 则要求必须没有分号
      // 在这种情况下，我们可以使用 `scss` 选项，对 `scss` 语法进行单独配置
      sass: {
        prependData: `@import "@/styles/index.scss";`
      }
    }
  }
}
