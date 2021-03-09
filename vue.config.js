// 测试.env.xxx 模式
console.log(process.env.foo, process.env.VUE_APP_BAR)
const resolve = dir => require('path').join(__dirname, dir)
// vue inspect  导出webpack配置
// vue inspect --rules //查看所有rules的配置项
// vue inspect --rule svg  查看svg的配置项
module.exports = {
  publicPath: '/best-pra', // 定义资源的基础url
  devServer: {
    port: 7070
  },
  // 配置webpack的方式一
  //   configureWebpack: {
  //     resolve: {
  //       alias: {
  //         comps: require('path').join(__dirname, 'src/components')
  //       }
  //     }
  //   },
  // 更推荐函数形式的 ,,  configureWebpack适合一些简单的配置
  configureWebpack(config) {
    config.resolve.alias.comps = require('path').join(__dirname, 'src/components')
    // 根据环境变量做动态的设置
    if (process.env.NODE_ENV === 'development') {
      config.name = 'vue组件实践' // 定义全局变量，可在index.html中使用
    } else {
      // 生产环境
      config.name = 'best-pra'
    }
  },
  // 上述对于层级过深的情况，处理起来比较复杂
  // 更推荐这种情况的
  chainWebpack(config) {
    // 加载图标: svg-sprite-loader
    // 处理svg图片，将图片打包成元件库， 只需要指定id就可以引入图标了，维护起来相比较以前用的font图标简单太多了。
    // 1. svg默认有处理   svg-loader
    // 2. svg-loader排除我们自己下载的图片
    config.module.rule('svg').exclude.add(resolve('src/assets/icons'))
    // 3. 使用svg-sprite-loader加载我们自己下载的图片
    config.module
      .rule('icons') // 自定义icons目录
      .test(/\.svg$/)
      .include.add(resolve('src/assets/icons'))
      .end() // 回退上下文，因为include破坏了当前的上下文
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({ symbolId: 'icon-[name]' })
  }
}
