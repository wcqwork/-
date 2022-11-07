const { defineConfig } = require("@vue/cli-service");
const AutoImport = require("unplugin-auto-import/webpack");
const Components = require("unplugin-vue-components/webpack");
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers");
const path = require("path");

function resolve(dir) {
  return path.join(__dirname, ".", dir);
}
module.exports = defineConfig({
  publicPath:'/operateManage/cp',
  outputDir: 'D:/lea_project/独立项目/服务看板/phoenix-operate/phoenix-operate-api/src/main/resources/static/assert/cp',
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@api', resolve('src/api'))
      .set('@assets', resolve('src/assets'))
      .set('@comp', resolve('src/components'))
      .set('@views', resolve('src/views'));
    config.module.rules.delete("svg"); //重点:删除默认配置中处理svg,
    config.module
      .rule("svg-sprite-loader")
      .test(/\.svg$/)
      .include.add(resolve("src/icons")) //处理svg目录
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]",
      });
  },
  productionSourceMap:false,
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
  },
  lintOnSave: true, // 是否在保存的时候检查
  devServer: {
    // 环境配置
    port: 8080,
    proxy: {
      "/cp/": {
        target: "http://10.10.14.117:8087",
        changeOrigin: true,
      },
    },
  },
  css: {
    extract: false, // 是否使用css分离插件 ExtractTextPlugin
    sourceMap: false, // 开启 CSS source maps
    loaderOptions: {
      scss: {
        additionalData: `@import "./src/styles/main.scss";`,
      },
    },
  },
});
