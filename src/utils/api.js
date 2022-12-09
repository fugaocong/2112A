import http from "./httpRequest"
/**
 * 封装跨域接口关键字
 */
let addKeyword = process.env.VUE_APP_BASE_API
/**
 * 封装post 或 get 数据请求
 * @param {*} data 数据对象
 * @param {*} openDefaultData 是否开启默认数据？
 * @param {*} contentType 数据格式
 *  json：'application/json; charset=utf-8'
 *  form：'application/x-www-form-urlencoded; charset=utf-8'
 */
// http.send = (url, data = {}, contentType = "json", method) => {
//   http({
//     method,
//     url: http.addKeyword(url),
//     data,
//     headers: {
//       "Content-type":
//         contentType === "json" ? "application/json;charset=utf-8" : "multipart/form-data;boundary=something"
//     }
//   })
// }

/**登陆页面  */
async function loginList(params) {
  let { data } = await http.post(`${addKeyword}/login`, params)
  return data
}

/**侧边栏数据 */
async function sidebarList() {
  let { data } = await http.get(`${addKeyword}/sidebar`)
  return data
}
/**获取权限角色数据 */
async function getRolesList() {
  let { data } = await http.get(`${addKeyword}/roles`)
  return data
}
/**添加权限角色数据 */
async function addRolesList(params) {
  let { data } = await http.post(`${addKeyword}/roles/${params}`)
  return data
}
/**编辑权限角色数据 */
async function authorityList(params) {
  let { data } = await http.get(`${addKeyword}/authority/+${params}`)
  return data
}
/**获取用户数据 */
async function usersList(params) {
  let { data } = await http.get(`${addKeyword}/users/+${params}`)
  return data
}
/**获取商品数据 */
async function goodsList(params) {
  let { data } = await http.get(`${addKeyword}/goods/+${params}`)
  return data
}
/**获取商品数据 */
async function ordersList(params) {
  let { data } = await http.get(`${addKeyword}/orders/+${params}`)
  return data
}
/**获取商品分类数据 */
async function categoriesList(params) {
  let { data } = await http.get(`${addKeyword}/categories/+${params}`)
  return data
}

export {
  loginList,
  sidebarList,
  getRolesList,
  addRolesList,
  authorityList,
  usersList,
  goodsList,
  ordersList,
  categoriesList
}
