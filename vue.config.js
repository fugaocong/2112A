const { defineConfig } = require("@vue/cli-service")
module.exports = defineConfig({
	// transpileDependencies: true,
	// lintOnSave: false
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
		port: 8080,
		/**开发运行时域名，设置成"0.0.0.0",在同一个局域网下，如果你的项目在运行，同时可以通过你的 */
		host: "0.0.0.0",
		/**是否启用 https */
		https: false,
		/**npm run serve 时是否直接打开浏览器 */
		open: false,
		/**本地端口号的配置 */
		// proxy: {
		// 	"/api": {
		// 		/**默认开启代理模式 */
		// 		changeOrigin: true,
		// 		/**如果是http接口，需要配置该参数 */
		// 		secure: false,
		// 		/**代理的地址 */
		// 		target: "url",
		// 		/**路径的重命名 */
		// 		pathRewrite: {
		// 			"^/api/v1": ""
		// 		}
		// 	}
		// }
	}
})
