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

app.listen("8090", () => {
  console.log("监听端口 8090")
})
