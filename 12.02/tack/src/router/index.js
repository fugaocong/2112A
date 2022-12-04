import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        children:[
            {
                path: 'message',
                name: 'message',
                component: () => import('../views/Message.vue'),
                children:[
                    {
                        name:'xiangqing',
                        path:'detail/:id/:title',
                        component: () => import('../views/Detail.vue'),
                        //props的第一种写法，值为对象，该对象中的所有key-value都会以props的形式传给Detail组件。
                        // props:{a:1,b:'hello'}

                        //props的第二种写法，值为布尔值，若布尔值为真，就会把该路由组件收到的所有params参数，以props的形式传给Detail组件。
                        // props:true

                        //props的第三种写法，值为函数
                        props($route){
                            return {
                                id:$route.params.id,
                                title:$route.params.title,
                            }
                        }
                    }
                ]
            },
            {
                path: 'news',
                name: 'news',
                component: () => import('../views/News.vue')
            },

        ]
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../views/AboutView.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
