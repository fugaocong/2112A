import http from "../httpRequest"

/**获取商品列表数据 */
const goodsList = (params) => {
  return http.send("/goods", params).then((res) => res.data)
}
/**获取订单列表数据 */
const ordersList = (params) => {
  return http.send("/orders", params).then((res) => res.data)
}
/**获取商品分类数据 */
const categoriesList = (params) => {
  return http.send("/categories", params).then((res) => res.data)
}

export { goodsList, ordersList, categoriesList }
