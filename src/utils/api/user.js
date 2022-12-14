import http from "../httpRequest"

/**获取用户数据 另加搜索功能 */
const usersList = (params) => {
  return http.send("/users", params).then((res) => res.data)
}
/**添加用户 */
const addUserList = (params) => {
  return http.send("/users", params, "post").then((res) => res.data)
}
/** 修改用户状态*/
const updateUserStatusList = (params) => {
  console.log(`/users/${params.uid}/state/${params.type}`)
  return http.send(`/users/${params.uid}/state/${params.type}`, "put").then((res) => res.data)
}
/**编辑用户提交 */
const updateUserList = (params) => {
  return http.send("/users", params, "put").then((res) => res.data)
}
/**删除用户 */
const deleteUserList = (params) => {
  return http.send("/users/" + params, "delete").then((res) => res.data)
}
export { usersList, addUserList, updateUserStatusList, updateUserList, deleteUserList }
