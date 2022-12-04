import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../views/AboutView.vue'),
        children: [
            {
                path: '/details',
                name: 'details',
                component: () => import('../views/Details.vue'),
                props ($route) {
                    return {
                        id: $route.query.id,
                        title:$route.query.title
                    }
                }
            }
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
