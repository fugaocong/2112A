let express = require("express")
let Mock = require("mockjs")
/**登陆的数据 */
const loginData = require("./common/login.json")
/**侧边栏的数据 */
const sidebarData = require("./common/sidebar.json")
/**权限角色数据 */
const rolesData = require("./common/roles.json")
/**权限数据 */
const authorityData = require("./common/authority.json")
/**权限数据 */
const usersData = require("./common/users.json")
/**商品数据 */
const goodsData = require("./common/goods.json")
/**订单数据 */
const ordersData = require("./common/orders.json")
/**商品分类数据 */
const categoriesData = require("./common/categories.json")

let app = express()
/**登陆页面的数据 */
app.use("/login", function (req, res) {
  res.json(
    Mock.mock({
      ...loginData
    })
  )
})
/**侧边栏的数据 */
app.use("/sidebar", function (req, res) {
  res.json(
    Mock.mock({
      ...sidebarData
    })
  )
})
/**权限角色数据 */
app.use("/roles", function (req, res) {
  res.json(
    Mock.mock({
      ...rolesData
    })
  )
})
/**权限数据 */
app.use("/authority", function (req, res) {
  res.json(
    Mock.mock({
      ...authorityData
    })
  )
})
/**获取用户数据 */
app.use("/users", function (req, res) {
  res.json(
    Mock.mock({
      ...usersData
    })
  )
})
/**获取商品数据 */
app.use("/goods", function (req, res) {
  res.json(
    Mock.mock({
      ...goodsData
    })
  )
})
/**获取订单数据 */
app.use("/orders", function (req, res) {
  res.json(
    Mock.mock({
      ...ordersData
    })
  )
})
/**获取商品分类数据 */
app.use("/categories", function (req, res) {
  res.json(
    Mock.mock({
      ...categoriesData
    })
  )
})

app.listen("8090", () => {
  console.log("监听端口 8090")
})
