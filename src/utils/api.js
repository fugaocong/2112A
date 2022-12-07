import http from "./httpRequest"
/**登陆页面  */
async function loginList(params) {
  let { data } = await http.post("/api/login", params)
  return data
}
export { loginList }
