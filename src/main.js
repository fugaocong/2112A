import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"

// 全局引入element-ui
import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css"
Vue.use(ElementUI)
// element-ui按需引入
// import { Button } from "element-ui"
// Vue.use(Button)

// 引入封装的axios
import http from "./utils/httpRequest"
Vue.prototype.$http = http

Vue.config.productionTip = false

new Vue({
  router,
  store,

  render: (h) => h(App)
}).$mount("#app")
