import http from "./httpRequest"

/**登陆页面  */
const loginList = (params) => {
  return http.send("/login", params, "post").then((res) => res.data)
}

/**侧边栏数据 */
const sidebarList = () => {
  return http.send("/menus").then((res) => res.data)
}

export { loginList, sidebarList }
