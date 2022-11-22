import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: "index"
    },
    {
        path: '/index',
        name: 'index',
        component: () => import('../views/Index.vue'),
        children: [
            {
                path: '/home',
                name: 'home',
                component: () => import('../views/Home.vue'),
                meta: "首页"
            },
            // {
            //     path: '/dataAdministration',
            //     name: 'dataAdministration',
            //     component: () => import('../views/dataAdministration'),
            //     meta: "首页"
            // },
            {
                path: '/userList',
                name: 'userList',
                component: () => import('../views/dataAdministration/userList.vue'),
                meta:"用户列表"
            },
            {
                path: '/businessListings',
                name: 'businessListings',
                component: () => import('../views/dataAdministration/businessListings.vue'),
                meta:"商家列表"
            },
            {
                path: '/foodstuffList',
                name: 'foodstuffList',
                component: () => import('../views/dataAdministration/foodstuffList.vue'),
                meta:"食品列表"
            },
            {
                path: '/orderManagement',
                name: 'orderManagement',
                component: () => import('../views/dataAdministration/orderManagement.vue'),
                meta:"订单列表"
            },
            {
                path: '/administratorList',
                name: 'administratorList',
                component: () => import('../views/dataAdministration/administratorList.vue'),
                meta:"管理员列表"
            },

            {
                path: '/addShops',
                name: 'addShops',
                component: () => import('../views/addData/addShops.vue'),
                meta:"添加商铺"
            },
            {
                path: '/addGoods',
                name: 'addGoods',
                component: () => import('../views/addData/addGoods.vue'),
                meta:"添加商品"
            },
            {
                path: '/userProfile',
                name: 'userProfile',
                component: () => import('../views/chart/userProfile.vue'),
                meta:"用户分布"
            },
            {
                path: '/textRedact',
                name: 'textRedact',
                component: () => import('../views/redact/textRedact.vue'),
                meta:"文本编辑"
            },
            {
                path: '/AdministratorSettings',
                name: 'AdministratorSettings',
                component: () => import('../views/settingUp/AdministratorSettings.vue'),
                meta:"管理员设置"
            },
            {
                path: '/Explain',
                name: 'Explain',
                component: () => import('../views/explain/Explain.vue'),
                meta:"说明"
            },



        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
