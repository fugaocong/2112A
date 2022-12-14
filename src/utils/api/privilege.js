import http from "../httpRequest"

/**添加权限角色数据 */
const addRolesList = (params) => {
  return http.send("/roles/", params).then((res) => res.data)
}
/**权限列表数据 */
const authorityList = () => {
  return http.send("/rights/list").then((res) => res.data)
}

/**分配权限数据 */
const rightsList = (params) => {
  return http.send("/rights", params).then((res) => res.data)
}
export { addRolesList, rightsList, authorityList }
