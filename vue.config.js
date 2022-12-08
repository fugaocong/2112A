const { defineConfig } = require("@vue/cli-service")
console.log(process.env.VUE_APP_MOCK_ENABLE)
let target = process.env.VUE_APP_MOCK_ENABLE === "true" ? "http://localhost:8090" : process.env.VUE_APP_CONSOLE_URL
module.exports = defineConfig({
  /**生产环境的构造 **/
  productionSourceMap: false,
  /** 根目录 **/
  publicPath: "./",
  /**打包输出文件地址 */
  outputDir: "dist",
  /**放置生成的静态资源（js、css、img、） */
  assetsDir: "assets",
  /**本地的环境代理配置 */
  devServer: {
    /**开发运行时的端口 */
    port: "8080",
    /**开发运行时域名，设置成"0.0.0.0",在同一个局域网下，如果你的项目在运行，同时可以通过你的 */
    host: "0.0.0.0",
    /**是否启用 https */
    https: false,
    /**npm run serve 时是否直接打开浏览器 */
    open: false,
    /**本地端口号的配置 */
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        changeOrigin: true,
        secure: false,
        target: target,
        pathRewrite: {
          ["^" + process.env.VUE_APP_BASE_API]: ""
        }
      }
    }
  }
})
