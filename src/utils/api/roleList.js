import http from "../httpRequest"
/**权限 */
/**获取权限角色数据 */
const getRolesList = () => {
  return http.send("/roles").then((res) => res.data)
}
/**角色授权 */
const setRolesList = (data) => {
  return http.send("/roles", data, "post").then((res) => {
    return res
  })
}
/**删除角色 */
const DeleteRoles = (data) => {
  return http.send("/roles", data, "delete").then((res) => {
    return res
  })
}
export { getRolesList, setRolesList, DeleteRoles }
