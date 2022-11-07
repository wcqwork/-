// const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  publicPath: '/assets/vue/shoppay/',
  assetsDir: '',
  lintOnSave: true,
  productionSourceMap: false,
  runtimeCompiler: true,
  devServer: {
    open: true, // 是否自动弹出浏览器页面
    host: 'design.ldwebsitebuilder.com',
    port: '8081',
    https: false, // 是否使用https协议
    proxy: {
      ['/rest/']: {
        target: process.env.BASE_API, // zuul API服务器的地址
        changeOrigin: true,
        // pathRewrite: {
        //   ['^' + apiSets.zuulApiUrl]: '/'
        // }
      },
    },
  },
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            'primary-color': '#398fd7', // 全局主色
            'link-color': '#1890ff', // 链接色
            'success-color': '#52c41a', // 成功色
            'warning-color': '#faad14', // 警告色
            'error-color': '#f5222d', // 错误色
            'font-size-base': '14px', // 主字号
            'heading-color': 'rgba(0, 0, 0, 0.85)', // 标题色
            'text-color': '#333333', // 主文本色
            'text-color-secondary': '#787878', // 次文本色
            'disabled-color': 'rgba(0, 0, 0, 0.25)', // 失效色
            'border-radius-base': '6px', // 组件/浮层圆角
            'border-color-base': '#dedede', // 边框色
            'box-shadow-base': '0 2px 8px rgba(0, 0, 0, 0.15)', // 浮层阴影
          },
          javascriptEnabled: true,
        },
      },
    },
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@api', resolve('src/api'))
      .set('@assets', resolve('src/assets'))
      .set('@comp', resolve('src/components'))
      .set('@views', resolve('src/views'));

    //生产环境，开启js\css压缩
    // if (process.env.NODE_ENV === 'production') {
    //   config.plugin('compressionPlugin').use(
    //     new CompressionPlugin({
    //       test: /\.js$|.\css|.\less/, // 匹配文件名
    //       threshold: 10240, // 对超过10k的数据压缩
    //       deleteOriginalAssets: false // 不删除源文件
    //     })
    //   );
    // }

    // 配置 webpack 识别 markdown 为普通的文件
    config.module
      .rule('markdown')
      .test(/\.md$/)
      .use()
      .loader('file-loader')
      .end();
    config.plugin('html').tap(args => {
      args[0].title = '支付页面';
      return args;
    });
  },
  // 警告 webpack 的性能提示
  configureWebpack: {
    devtool: 'source-map',
    performance: {
      hints: 'warning',
      // 入口起点的最大体积 整数类型（以字节为单位）
      maxEntrypointSize: 50000000,
      // 生成文件的最大体积 整数类型（以字节为单位 300k）
      maxAssetSize: 30000000,
      // 只给出 js 文件的性能提示
      assetFilter: function (assetFilename) {
        return assetFilename.endsWith('.js');
      },
    },
    // plugins: [
    //   // 这个要放在所有 plugins 最后
    //   new HardSourceWebpackPlugin()
    // ]
  },
};
