let express = require("express")
let Mock = require("mockjs")
const loginData = require("./common/login.json")
let app = express()
app.use("/login", function (req, res) {
  res.json(
    Mock.mock({
      ...loginData
    })
  )
})

app.listen("8090", () => {
  console.log("监听端口 8090")
})
