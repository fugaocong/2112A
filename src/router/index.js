import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const routes = [
  /**重定向 */
  {
    path: "/",
    redirect: "WelcomePage"
  },
  /**主页 */
  {
    path: "/home",
    name: "home",
    component: () => import("../views/HomeView.vue"),
    children: [
      {
        path: "/WelcomePage",
        name: "WelcomePage",
        component: () => import("../views/common/WelcomePage.vue")
      },
      {
        path: "/users",
        name: "users",
        meta: ["用户管理", "用户列表"],
        component: () => import("../views/UserManagement/UserList.vue")
      },
      {
        path: "/roles",
        name: "roles",
        meta: ["权限管理", "角色列表"],
        component: () => import("../views/PermissionManagement/RoleList.vue")
      },
      {
        path: "/rights",
        name: "rights",
        meta: ["权限管理", "权限列表"],
        component: () => import("../views/PermissionManagement/AuthorizationList.vue")
      },
      {
        path: "/goods",
        name: "goods",
        meta: ["商品管理", "商品列表"],
        component: () => import("../views/CommodityManagement/ProductList.vue")
      },
      {
        path: "/AddGoods",
        name: "AddGoods",
        meta: ["商品管理", "添加商品"],
        component: () => import("../views/CommodityManagement/AddGoods.vue")
      },
      {
        path: "/params",
        name: "params",
        meta: ["商品管理", "分类参数"],
        component: () => import("../views/CommodityManagement/ClassificationParameters.vue")
      },
      {
        path: "/categories",
        name: "categories",
        meta: ["商品管理", "商品分类"],
        component: () => import("../views/CommodityManagement/CommodityClassification.vue")
      },
      {
        path: "/orders",
        name: "orders",
        meta: ["订单管理", "订单列表"],
        component: () => import("../views/OrderManagement/OrderList.vue")
      },
      {
        path: "/reports",
        name: "reports",
        meta: ["订单管理", "订单列表"],
        component: () => import("../views/DataStatistics/DataReport.vue")
      }
    ]
  },
  /**登录页面 */
  {
    path: "/login",
    name: "login",
    component: () => import("../views/common/LoginPage.vue")
  }
]

const router = new VueRouter({
  routes
})

export default router
